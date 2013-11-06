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
    common : function(field) {
      var message = field.message,
        messageTargetId =  field.messageTargetId,
        messageTargetNode = Y.one(messageTargetId);

      messageTargetNode.set('innerHTML', message);
    },

    dependent : function(field) {
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
    },

    realTime : function(field) {
      var message = field.message,
        messageTargetId =  field.messageTargetId,
        messageTargetNode = Y.one(messageTargetId);

      messageTargetNode.set('innerHTML', message);
    }

  }, true);

  Y.namespace('Validator');
  Y.Validator.ValidationEffects = ValidationEffects;

});
