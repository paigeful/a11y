YUI.add('validation-result-statuses', function(Y){

  var validationResultStatuses = {
    FAILED_BUT_EFFECT_SKIPPED             : "failed-but-effect-skipped",
    PASSED_BUT_FURTHER_VALIDATION_SKIPPED : "passed-but-further-validation-skipped",
    SKIPPED                               : "skipped",
    PASSED                                : "passed",
    FAILED                                : "failed"
  };

  Y.namespace('Validator');
  Y.Validator.ValidationResultStatuses = validationResultStatuses;

});