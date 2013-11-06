YUI.add('user-name-configs', function (Y) {

  var fields = Y.Validator.Fields,
    patterns = Y.Validator.ValidationPatterns,
    messages = Y.Messages.Messages;

  fields.USER_NAME.CommonValidations = [{
    rule : 'isEmpty',
    effect : 'common',
    message : messages.USER_NAME_EMPTY
  }];

  // fields.USER_NAME.RealTimeValidations = [{
  //   rule : 'isEmpty',
  //   effect : 'dependent',
  //   message : messages.USER_NAME_EMPTY
  // }];

}, {requires: ['fields', 'messages', 'validation-patterns']});
