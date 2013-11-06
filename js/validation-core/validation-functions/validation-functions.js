YUI.add('validation-functions', function (Y) {

  var ValidationFunctions,
    validationResultStatuses = Y.Validator.ValidationResultStatuses;

  ValidationFunctions = function() {
    if (typeof ValidationFunctions.instance === "object") {
      return ValidationFunctions.instance;
    }
    ValidationFunctions.instance = this;
  };

  Y.mix(ValidationFunctions.prototype, {

    isEmpty : function(value) {
      if(Y.Lang.trim(value) === '') {
        return validationResultStatuses.FAILED;
      } else {
        return validationResultStatuses.PASSED;
      }
    },

    isInValidPattern : function(value, pattern) {
      if (value.match(pattern)) {
        return validationResultStatuses.FAILED;
      } else {
        return validationResultStatuses.PASSED;
      }
    },

  }, true);

  Y.namespace('Validator');

  Y.Validator.ValidationFunctions = ValidationFunctions;

}, {requires: ['node', 'validation-result-statuses']});
