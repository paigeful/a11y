YUI.add('mobile-number-configs', function (Y) {

  var fields = Y.Validator.Fields,
    patterns = Y.Validator.Patterns,
    messages = Y.Messages.Messages;

  fields.MOBILE_NUMBER.CommonValidation = [{
    rule : 'isEmpty',
    effect : 'common',
    message : messages.MOBILE_EMPTY
  },
  {
    rule : 'isValidPhoneNumberPattern',
    effect : 'common',
    message : messages.MOBILE_INVALID_CHAR
  },
  {
    rule : 'isPhoneNumberMinLength',
    effect : 'common',
    message : messages.MOBILE_INVALID
  }];

  fields.MOBILE_NUMBER.RealTimeValidation = [{
    rule : 'isEmpty',
    effect : 'realTime',
    message : messages.MOBILE_EMPTY
  },
  {
    rule : 'isValidPhoneNumberPattern',
    effect : 'realTime',
    message : messages.MOBILE_INVALID_CHAR
  },
  {
    rule : 'isPhoneNumberMinLength',
    effect : 'realTime',
    message : messages.MOBILE_INVALID
  }];

}, {requires: ['fields', 'messages', 'patterns']});
