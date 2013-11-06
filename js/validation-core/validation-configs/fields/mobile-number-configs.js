YUI.add('mobile-number-configs', function (Y) {

  var fields = Y.Validator.Fields,
    patterns = Y.Validator.Patterns,
    messages = Y.Messages.Messages;

  fields.MOBILE_NUMBER.CommonValidations = [{
    rule : 'isEmpty',
    effect : 'common',
    message : messages.MOBILE_NUMBER_EMPTY
  }];

  // fields.MOBILE_NUMBER.RealTimeValidations = [{
  //   rule : 'isEmpty',
  //   effect : 'realTime',
  //   message : messages.MOBILE_NUMBER_EMPTY
  // }];

}, {requires: ['fields', 'messages', 'patterns']});
