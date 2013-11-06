// Should be part of the validation
YUI.add('password-meter', function(Y) {

  var updatePasswordStrength,
    containsNumber, containsLowerCaseLetter, containsUpperCaseLetter, containsSpecialChar,
    calculatePasswordStrength,
    passwordMeter = Y.one('#password-meter'),
    previousPasswordStrength = '',
    passwordValidationMessage = Y.one('#password-message'),
    passwordStrengthMessages = {
      weakest : "Password must contain 8 characters.",
      weaker : "Weak password, easy to crack.",
      weak : "Still weak password.",
      strong : "Not bad, but you can make it better.",
      stronger : "Super!! you are a password ninja.",
    };

  containsNumber = function(value) {
    return value.match(/\d/)? true : false;
  };

  containsLowerCaseLetter = function(value) {
    return value.match(/[a-z]/)? true : false;
  };

  containsUpperCaseLetter = function(value) {
    return value.match(/[A-Z]/)? true : false;
  };

  containsSpecialChar = function(value) {
    return value.match(/[^0-9a-z]/gi)? true : false;
  };

  calculatePasswordStrength = function(passwordValue) {
    var passwordStrength,
    hasNumber, hasLowerCaseLetter, hasUpperCaseLetter, hasSpecialChar;

    if(passwordValue.length >= 8) {
      hasNumber = containsNumber(passwordValue);
      hasLowerCaseLetter = containsLowerCaseLetter(passwordValue);
      hasUpperCaseLetter = containsUpperCaseLetter(passwordValue);
      hasSpecialChar = containsSpecialChar(passwordValue);

      if(hasNumber &&
        hasLowerCaseLetter &&
        hasUpperCaseLetter && hasSpecialChar) {
        passwordStrength = "stronger";
      } else if( (hasNumber && hasLowerCaseLetter && hasUpperCaseLetter) ||
        (hasSpecialChar && hasLowerCaseLetter && hasUpperCaseLetter) ||
        (hasNumber && hasLowerCaseLetter && hasSpecialChar) ||
        (hasNumber && hasUpperCaseLetter && hasSpecialChar) ) {
        passwordStrength = "strong";
      } else if( (hasNumber && ( hasLowerCaseLetter || hasUpperCaseLetter ) ) ||
        (hasSpecialChar && ( hasLowerCaseLetter || hasUpperCaseLetter ) ) ||
        (hasSpecialChar && hasNumber ) ) {
        passwordStrength = "weak";
      } else {
        passwordStrength = "weaker";
      }
    } else {
      passwordStrength = 'weakest';
    }

    return passwordStrength;

  };

  updatePasswordStrength = function(passwordStrength) {
    var passwordValue = Y.Lang.trim(this.get('value'));

    passwordStrength = calculatePasswordStrength(passwordValue);

    passwordMeter.removeClass(previousPasswordStrength);
    passwordMeter.addClass(passwordStrength);
    previousPasswordStrength = passwordStrength;

    passwordValidationMessage.set('innerHTML', passwordStrengthMessages[passwordStrength]);
  };

  Y.on('keyup', updatePasswordStrength, '#password');

}, {requires: ['node']});
