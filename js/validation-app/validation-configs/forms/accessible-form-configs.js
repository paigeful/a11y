YUI.add('accessible-form-configs', function (Y) {

  var forms = Y.Validator.Forms,
    fields = Y.Validator.Fields;

  forms.ACCESSIBLE_FORM.FieldsValidationConfigs = [
    {
      field : fields.FIRST_NAME,
      fieldValidations : fields.FIRST_NAME.CommonValidations
    },
    {
      field : fields.LAST_NAME,
      fieldValidations : fields.LAST_NAME.CommonValidations
    },
    {
      field : fields.USER_NAME,
      fieldValidations : fields.USER_NAME.CommonValidations
    },
    {
      field : fields.PASSWORD,
      fieldValidations : fields.PASSWORD.CommonValidations
    },
    {
      field : fields.MOBILE_NUMBER,
      fieldValidations : fields.MOBILE_NUMBER.CommonValidations
    }
  ];

}, {requires: ['forms', 'fields']});
