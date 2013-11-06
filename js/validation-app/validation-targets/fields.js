YUI.add('fields', function(Y){

  var fields = {
    FIRST_NAME : { id : "#first-name", status : true, message: '', messageTargetId : '#name-message', dependentFields : ['LAST_NAME']},
    LAST_NAME : { id : "#last-name", status : true, message: '', messageTargetId : '#name-message', dependentFields : ['FIRST_NAME']},
    MOBILE     : { id : "#mobile-number", status : true, message: '', messageTargetId : '#mobile-number-message'},
  };

  Y.namespace('Validator');
  Y.Validator.Fields = fields;

});