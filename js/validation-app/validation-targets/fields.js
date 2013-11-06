YUI.add('fields', function(Y){

  var fields = {
    FIRST_NAME        : { id : "#first-name", status : true, message: '', messageTargetId : '#name-message', dependentFields : ['LAST_NAME']},
    LAST_NAME         : { id : "#last-name", status : true, message: '', messageTargetId : '#name-message', dependentFields : ['FIRST_NAME']},
    USER_NAME         : { id : "#user-name", status : true, message: '', messageTargetId : '#user-name-message'},
    MOBILE_NUMBER     : { id : "#mandatory-mobile", status : true, message: '', messageTargetId : '#mandatory-mobile-message'},
  };

  Y.namespace('Validator');
  Y.Validator.Fields = fields;

});