YUI.add('validation-controller', function(Y) {

  var ValidationController;

  ValidationController = function(config) {
    this.fieldsValidationConfigs = Y.Validator.FieldsValidationConfigs;
    this.validationFunctions = new Y.Validator.ValidationFunctions();
    this.validationResultStatuses = Y.Validator.ValidationResultStatuses;
    this.validationEffects = new Y.Validator.ValidationEffects();

    this.fields = Y.Validator.Fields;
    this.validationResultStatuses = Y.Validator.ValidationResultStatuses;
  };

  Y.mix(ValidationController.prototype, {

    validateField : function(e, _this, validations, field){
      var i, l = validations.length,
        config,
        rule, param, effect, message,
        value,
        validationFunctions = _this.validationFunctions,
        validationResultStatuses = _this.validationResultStatuses,
        validationEffects = _this.validationEffects,
        result,
        fieldNode = e.target;

      for(i = 0; i < l; i += 1) {
        validation = validations[i];
        rule = validation.rule;
        param = validation.param;
        effect = validation.effect;
        message = validation.message;
        value = e.target.get('value');

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

      for(index in fields) {
        Y.on('focus', this.fieldFocusHandler, fields[index].id, null, fields[index]);
      }
    }

  }, true);

  Y.namespace('Validator');

  Y.Validator.ValidationController = ValidationController;

}, {requires: ['node', 'fields-validation-configs', 'validation-functions', 'validation-result-statuses', 'validation-effects']});
