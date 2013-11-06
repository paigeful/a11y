YUI.add('validation-patterns', function(Y){

  var validationPatterns = {
    // NAME
    NAME_INVALID_CHAR                       : /[0123456789!@#$%\^&*()_=+\[\]{}\\|;:"\/<>`~\xaa\xa3\xa2\xb0\xa4\xa6\xa5\xbb\xbc\xc3\x90\xad\xb1\xb2\xb3\xb7\xa8\xb9\xab\xac\xb8\xb6\xa9\xbd\xba\xb5\xbe\x97]+/i,

    // USERNAME
    USER_NAME_INVALID_CHAR                  : /[^a-z0-9._]+/i,
    USER_NAME_CONSECUTIVE_SPECIAL_CHAR      : /[._]{2}/,
    USER_NAME_MORE_THAN_ONE_DOT             : /.*\..*\..*/,
    USER_NAME_INVALID_FIRST_CHAR            : /^[^a-z]/i,
    USER_NAME_INVALID_LAST_CHAR             : /[._]$/,

    // PASSWORD
    PASSWORD_VALID                          : /^[a-zA-Z0-9_!@#\$%\^&\*\(\)\-\+\=\[\]\{\}\\;:\'\",<\.>\?\/]*$/,

    // EMAIL - http://en.wikipedia.org/wiki/Email_address
    EMAIL_VALID                             : /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    // NUMERIC ONLY
    NUMERIC_ONLY                            : /^[0-9]+$/,

    // GENERIC
    NUMERIC                                 : /[0-9]+/i,
    UPPER_CASE                              : /[A-Z]+/,
    LOWER_CASE                              : /[a-z]+/,
    PASSWORD                                : "password"
  };

  Y.namespace('Validator');
  Y.Validator.ValidationPatterns = validationPatterns;

});