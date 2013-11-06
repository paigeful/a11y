YUI.add('validation-controller', function(Y) {

  var ValidationController;

  ValidationController = function(config) {
    this.fieldsValidationConfigs = Y.Validator.FieldsValidationConfigs;
    this.formsValidationConfigs = Y.Validator.FormsValidationConfigs;
    this.validationFunctions = new Y.Validator.ValidationFunctions();
    this.validationResultStatuses = Y.Validator.ValidationResultStatuses;
    this.validationEffects = new Y.Validator.ValidationEffects();

    this.fields = Y.Validator.Fields;
    this.validationResultStatuses = Y.Validator.ValidationResultStatuses;
  };

  Y.mix(ValidationController.prototype, {

    getValidationStatus : function(fieldsValidationConfigs) {
      var validationStatus = true,
        i, l = fieldsValidationConfigs.length;
      for(i = 0; i < l; i +=1) {
        validationStatus = validationStatus && fieldsValidationConfigs[i].field.status;
        if(!validationStatus) {
          break;
        }
      }
      return validationStatus;
    },

    validateField : function(e, _this, validations, field){
      var i, l = validations.length,
        config,
        rule, param, effect, message,
        value,
        validationFunctions = _this.validationFunctions,
        validationResultStatuses = _this.validationResultStatuses,
        validationEffects = _this.validationEffects,
        result,
        fieldNode;

      fieldNode = e.target ? e.target : Y.one(field.id);

      for(i = 0; i < l; i += 1) {
        validation = validations[i];
        rule = validation.rule;
        param = validation.param;
        effect = validation.effect;
        message = validation.message;
        value = fieldNode.get('value');

        result = validationFunctions[rule](value, param);

        if(result === validationResultStatuses.PASSED) {
          field.status = true;
          field.message = '';
          fieldNode.setAttribute('aria-invalid', 'false');
          validationEffects[effect](field);
        } else if (result === validationResultStatuses.FAILED) {
          field.status = false;
          field.message = message;
          fieldNode.setAttribute('aria-invalid', 'true');
          validationEffects[effect](field);
          break;
        } else if (result === validationResultStatuses.FAILED_BUT_EFFECT_SKIPPED) {
          fieldNode.setAttribute('aria-invalid', 'true');
          field.status = false;
          field.message = '';
          break;
        } else if (result === validationResultStatuses.PASSED_BUT_FURTHER_VALIDATION_SKIPPED) {
          field.status = true;
          field.message = '';
          fieldNode.setAttribute('aria-invalid', 'false');
          validationEffects[effect](field);
          break;
        } else if (result === validationResultStatuses.SKIPPED) {
          break;
        }

      }
    },

    validateForm : function(e, _this, fieldsValidationConfigs, form){
      e.halt();
      var i, l = fieldsValidationConfigs.length,
        field,
        fieldsValidationConfig;

      for( i = 0; i < l; i += 1) {
        fieldsValidationConfig = fieldsValidationConfigs[i];
        _this.validateField({}, _this, fieldsValidationConfig.fieldValidations, fieldsValidationConfig.field);
      }

      if(_this.getValidationStatus(fieldsValidationConfigs)) {
        this.submit();
      } else {
        Y.one('[aria-invalid=true]').focus();
      }

    },

    fieldFocusHandler : function(e, field) {
      if (field.message !== '') {
        var messageTargetNode = Y.one(field.messageTargetId);
        if (messageTargetNode) {
          messageTargetNode.set('innerHTML', field.message);
          messageTargetNode.addClass('show');
        }
      }
    },

    init : function() {
      var i, l,
        fieldsValidationConfigs = this.fieldsValidationConfigs,
        formsValidationConfigs = this.formsValidationConfigs,
        configs, field, event, validations,
        index,
        fields = this.fields;

      for (i = 0, l = fieldsValidationConfigs.length; i < l; i += 1) {
        configs = fieldsValidationConfigs[i];
        if(configs) {
          field = configs.field;
          event = configs.event;
          validations = configs.validations;

          Y.on(event, this.validateField, field.id, null, this, validations, field);
        }
      }

      for (i = 0, l = formsValidationConfigs.length; i < l; i += 1) {
        configs = formsValidationConfigs[i];

        if(configs) {
          form = configs.form;
          event = configs.event;
          fieldsValidationConfigs = configs.fieldsValidationConfigs;

          Y.on(event, this.validateForm, form.id, null, this, fieldsValidationConfigs, form);
        }

      }

      for(index in fields) {
        Y.on('focus', this.fieldFocusHandler, fields[index].id, null, fields[index]);
      }
    }

  }, true);

  Y.namespace('Validator');

  Y.Validator.ValidationController = ValidationController;

}, {requires: ['node', 'fields-validation-configs', 'forms-validation-configs', 'validation-functions', 'validation-result-statuses', 'validation-effects']});
