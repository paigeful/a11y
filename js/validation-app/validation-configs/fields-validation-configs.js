YUI.add('fields-validation-configs', function (Y) {

  var fieldsValidationConfigs,
    fields = Y.Validator.Fields;

  fieldsValidationConfigs = [
    {
      field : fields.FIRST_NAME,
      event : 'blur',
      validations : fields.FIRST_NAME.CommonValidations
    },
    {
      field : fields.FIRST_NAME,
      event : 'valuechange',
      validations : fields.FIRST_NAME.RealTimeValidations
    },
    {
      field : fields.LAST_NAME,
      event : 'blur',
      validations : fields.LAST_NAME.CommonValidations
    },
    {
      field : fields.LAST_NAME,
      event : 'valuechange',
      validations : fields.LAST_NAME.RealTimeValidations
    },
  ];

  Y.namespace('Validator');

  Y.Validator.FieldsValidationConfigs = fieldsValidationConfigs;

}, {requires: ['fields', 'event-valuechange', 'first-name-configs', 'last-name-configs']});
