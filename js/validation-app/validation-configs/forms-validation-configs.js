YUI.add('forms-validation-configs', function (Y) {

  var FormsValidationConfigs,
    forms = Y.Validator.Forms;

  FormsValidationConfigs = function() {
    if (typeof FormsValidationConfigs.instance === "object") {
      return FormsValidationConfigs.instance;
    }
    FormsValidationConfigs.instance = this;
  };

  Y.mix(FormsValidationConfigs.prototype, {

  }, true);

  Y.namespace('Validator');

  Y.Validator.FormsValidationConfigs = FormsValidationConfigs;

}, {requires: ['forms']});
