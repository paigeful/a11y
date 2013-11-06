YUI.add('validation-functions', function (Y) {

  var ValidationFunctions,
    validationResultStatuses = Y.Validator.ValidationResultStatuses,
    messages = Y.Messages.Messages;

  ValidationFunctions = function() {
    if (typeof ValidationFunctions.instance === "object") {
      return ValidationFunctions.instance;
    }
    ValidationFunctions.instance = this;
  };

  Y.mix(ValidationFunctions.prototype, {

    isEmpty : function(value) {
      if(Y.Lang.trim(value) === '') {
        return {status : validationResultStatuses.FAILED};
      } else {
        return {status : validationResultStatuses.PASSED};
      }
    },

    isInValidPattern : function(value, pattern) {
      if (value.match(pattern)) {
        return {status : validationResultStatuses.FAILED};
      } else {
        return {status : validationResultStatuses.PASSED};
      }
    },

    containsNumber : function(value) {
      return value.match(/\d/)? true : false;
    },

    containsLowerCaseLetter : function(value) {
      return value.match(/[a-z]/)? true : false;
    },

    containsUpperCaseLetter : function(value) {
      return value.match(/[A-Z]/)? true : false;
    },

    containsSpecialChar : function(value) {
      return value.match(/[^0-9a-z]/gi)? true : false;
    },

    calculatePasswordStrength : function(passwordValue) {
    var passwordStrength,
    hasNumber, hasLowerCaseLetter, hasUpperCaseLetter, hasSpecialChar;

    if(passwordValue.length >= 8) {
      hasNumber = this.containsNumber(passwordValue);
      hasLowerCaseLetter = this.containsLowerCaseLetter(passwordValue);
      hasUpperCaseLetter = this.containsUpperCaseLetter(passwordValue);
      hasSpecialChar = this.containsSpecialChar(passwordValue);

      if(hasNumber &&
        hasLowerCaseLetter &&
        hasUpperCaseLetter && hasSpecialChar) {
        passwordStrength = 'STRONGER';
      } else if( (hasNumber && hasLowerCaseLetter && hasUpperCaseLetter) ||
        (hasSpecialChar && hasLowerCaseLetter && hasUpperCaseLetter) ||
        (hasNumber && hasLowerCaseLetter && hasSpecialChar) ||
        (hasNumber && hasUpperCaseLetter && hasSpecialChar) ) {
        passwordStrength = 'STRONG';
      } else if( (hasNumber && ( hasLowerCaseLetter || hasUpperCaseLetter ) ) ||
        (hasSpecialChar && ( hasLowerCaseLetter || hasUpperCaseLetter ) ) ||
        (hasSpecialChar && hasNumber ) ) {
        passwordStrength = 'WEAK';
      } else {
        passwordStrength = 'WEAKER';
      }
    } else {
      passwordStrength = 'WEAKEST';
    }

    return passwordStrength;

  },

  validatePassword : function(value) {
    var passwordStrength = this.calculatePasswordStrength(value);
    if (passwordStrength === 'WEAKEST') {
      return {status : validationResultStatuses.FAILED, param : { strength : passwordStrength, message : messages.PASSWORD_STRENGTH[passwordStrength]} };
    } else {
      return {status : validationResultStatuses.PASSED, param : { strength : passwordStrength, message : messages.PASSWORD_STRENGTH[passwordStrength]} };
    }
  }

  }, true);

  Y.namespace('Validator');

  Y.Validator.ValidationFunctions = ValidationFunctions;

}, {requires: ['node', 'validation-result-statuses', 'messages']});
