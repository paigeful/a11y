YUI.add('fields-validation-configs', function (Y) {

  var fieldsValidationConfigs,
    fields = Y.Validator.Fields;

  fieldsValidationConfigs = [
    {
      field : fields.FIRST_NAME,
      event : 'blur',
      validations : fields.FIRST_NAME.CommonValidations
    },
    // {
    //   field : fields.FIRST_NAME,
    //   event : 'valuechange',
    //   validations : fields.FIRST_NAME.RealTimeValidations
    // },
    {
      field : fields.LAST_NAME,
      event : 'blur',
      validations : fields.LAST_NAME.CommonValidations
    },
    // {
    //   field : fields.LAST_NAME,
    //   event : 'valuechange',
    //   validations : fields.LAST_NAME.RealTimeValidations
    // },
    {
      field : fields.PASSWORD,
      event : 'blur',
      validations : fields.PASSWORD.CommonValidations
    },
    {
      field : fields.PASSWORD,
      event : 'valuechange',
      validations : fields.PASSWORD.RealTimeValidations
    },
    {
      field : fields.USER_NAME,
      event : 'blur',
      validations : fields.USER_NAME.CommonValidations
    },
    {
      field : fields.MOBILE_NUMBER,
      event : 'blur',
      validations : fields.MOBILE_NUMBER.CommonValidations
    }
  ];

  Y.namespace('Validator');

  Y.Validator.FieldsValidationConfigs = fieldsValidationConfigs;

}, {requires: ['fields', 'event-valuechange', 'first-name-configs', 'last-name-configs', 'password-configs', 'user-name-configs', 'mobile-number-configs']});
