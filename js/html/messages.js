YUI.add('messages', function(Y){

  var messages = {

    // NAME
    FIRST_NAME_EMPTY                        : 'First name is required',
    LAST_NAME_EMPTY                         : 'Last name is required',
    NAME_INVALID_CHAR                       : 'Numbers and special characters are not allowed',

    // USER_NAME
    USER_NAME_EMPTY                         : 'Username is required',
    USER_NAME_NOT_LONG_ENOUGH               : 'Username must be at least 4 characters long',
    USER_NAME_INVALID_CHAR                  : 'Username can include letters, numbers, underscores and one period',
    USER_NAME_CONSECUTIVE_SPECIAL_CHAR      : 'Username cannot contain consecutive underscores and periods',
    USER_NAME_MORE_THAN_ONE_DOT             : 'Username can only include one period',
    USER_NAME_INVALID_LAST_CHAR             : 'Username cannot end in an underscore or a period',
    USER_NAME_INVALID_FIRST_CHAR            : 'Username must start with a letter',
    USER_NAME_UNAVAILABLE                   : 'Username is not available',

    // PASSWORD
    PASSWORD_EMPTY                          : 'Password must be 8 to 32 characters',
    PASSWORD_LESS_THAN_MIN_LENGTH           : 'Password must be 8 to 32 characters',
    PASSWORD_CONTAINS_SPACES                : 'Password cannot contain spaces',
    PASSWORD_MUST_CONTAIN_NUMBER            : 'Password must contain a number',
    PASSWORD_MUST_CONTAIN_UPPERCASE         : 'Password must contain an uppercase letter',
    PASSWORD_MUST_CONTAIN_LOWERCASE         : 'Password must contain an lowercase letter',
    PASSWORD_CONTAINS_WORD_PASSWORD         : 'Password cannot be the word "password"',
    PASSWORD_CONTAINS_NAME                  : 'Password cannot contain your name',
    PASSWORD_CONTAINS_USER_NAME             : 'Password cannot contain your Yahoo! ID',

    PASSWORD_STRENGTH                       : {
                                                WEAKEST : 'Password must contain 8 characters.',
                                                WEAKER : 'Weak password, easy to crack.',
                                                WEAK : 'Still weak password.',
                                                STRONG : 'Not bad, but you can make it better.',
                                                STRONGER : 'Super!! you are a password ninja.',
                                              },

    // MOBILE
    MOBILE_NUMBER_EMPTY                      : 'Mobile number required',
    MOBILE_NUMBER_INVALID                    : 'Mobile number entered is not correct',

    // PHONE
    PHONE_NUMBER_EMPTY                       : 'Phone number required',
    PHONE_NUMBER_INVALID                     : 'Phone number entered is not correct',

    // GENDER
    GENDER_NOT_SPECIFIED                    : 'Gender required'
  };

  Y.namespace('Messages');
  Y.Messages.Messages = messages;

}, '0.0.1');