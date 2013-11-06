YUI.add('validation-effects', function(Y) {

  var ValidationEffects;

  ValidationEffects = function() {
    if (typeof ValidationEffects.instance === "object") {
      return ValidationEffects.instance;
    }
    ValidationEffects.instance = this;

    this.fields = Y.Validator.Fields;
  };

  Y.mix(ValidationEffects.prototype, {
    common : function(field, fieldNode) {
      var message = field.message,
        messageTargetId =  field.messageTargetId,
        messageTargetNode = Y.one(messageTargetId);

      messageTargetNode.set('innerHTML', message);
      if(field.status) {
        fieldNode.removeClass('error');
      } else {
        fieldNode.addClass('error');
      }
    },

    dependent : function(field, fieldNode) {
      var message = field.message,
        messageTargetId =  field.messageTargetId,
        messageTargetNode = Y.one(messageTargetId),
        fields = this.fields,
        dependentFields = field.dependentFields;

      if(field.status){
        for (var i = 0, l = dependentFields.length; i < l; i +=1) {
          message = fields[dependentFields[i]].message;
          if (message !== '') {
            break;
          }
        }
      }
      messageTargetNode.set('innerHTML', message);
      if(field.status) {
        fieldNode.removeClass('error');
      } else {
        fieldNode.addClass('error');
      }
    },

    realTime : function(field, fieldNode) {
      var message = field.message,
        messageTargetId =  field.messageTargetId,
        messageTargetNode = Y.one(messageTargetId);

      messageTargetNode.set('innerHTML', message);
      if(field.status) {
        fieldNode.removeClass('error');
      } else {
        fieldNode.addClass('error');
      }
    },

    updateStrength : function(strengthMeterTargetNode, strength, field) {
      strengthMeterTargetNode.removeClass(field.strength);
      strengthMeterTargetNode.addClass(strength);
      field.strength = strength;
    },

    password : function(field, fieldNode, resultParam) {
      var message = resultParam.message,
        strength = resultParam.strength.toLowerCase(),
        messageTargetId =  field.messageTargetId,
        strengthMeterTargetId = field.strengthMeterTargetId,
        messageTargetNode = Y.one(messageTargetId),
        strengthMeterTargetNode = Y.one(strengthMeterTargetId);

      messageTargetNode.set('innerHTML', message);
      if(field.status) {
        fieldNode.removeClass('error');
      } else {
        fieldNode.addClass('error');
      }

      this.updateStrength(strengthMeterTargetNode, strength, field );
    }

  }, true);

  Y.namespace('Validator');
  Y.Validator.ValidationEffects = ValidationEffects;

});
