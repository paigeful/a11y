YUI.add('forms-validation-configs', function (Y) {

  var formsValidationConfigs,
    forms = Y.Validator.Forms;

  formsValidationConfigs = [
    {
      form : forms.ACCESSIBLE_FORM,
      event : 'submit',
      fieldsValidationConfigs : forms.ACCESSIBLE_FORM.FieldsValidationConfigs
    }
  ];

  Y.namespace('Validator');

  Y.Validator.FormsValidationConfigs = formsValidationConfigs;

}, {requires: ['forms', 'accessible-form-configs']});
