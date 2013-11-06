YUI.add('first-name-configs', function (Y) {

  var fields = Y.Validator.Fields,
    patterns = Y.Validator.ValidationPatterns,
    messages = Y.Messages.Messages;

  fields.FIRST_NAME.CommonValidations = [{
    rule : 'isEmpty',
    effect : 'dependent',
    message : messages.FIRST_NAME_EMPTY
  },
  {
    rule : 'isInValidPattern',
    param : patterns.NAME_INVALID_CHAR,
    effect : 'dependent',
    message : messages.NAME_INVALID_CHAR
  }];

  fields.FIRST_NAME.RealTimeValidations = [{
    rule : 'isEmpty',
    effect : 'dependent',
    message : messages.FIRST_NAME_EMPTY
  },
  {
    rule : 'isInValidPattern',
    param : patterns.NAME_INVALID_CHAR,
    effect : 'dependent',
    message : messages.NAME_INVALID_CHAR
  }];

}, {requires: ['fields', 'messages', 'validation-patterns']});
