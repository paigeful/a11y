YUI.add('password-configs', function (Y) {

  var fields = Y.Validator.Fields,
    patterns = Y.Validator.ValidationPatterns,
    messages = Y.Messages.Messages;

  fields.PASSWORD.CommonValidations = [{
    rule : 'validatePassword',
    effect : 'password'
  }];

  fields.PASSWORD.RealTimeValidations = [{
    rule : 'validatePassword',
    effect : 'password'
  }];

}, {requires: ['fields', 'messages', 'validation-patterns']});
