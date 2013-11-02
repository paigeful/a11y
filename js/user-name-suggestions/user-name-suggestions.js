YUI.add('user-name-suggestions', function(Y) {

  Y.use('user-name-suggestions-controller', function(Y){
    var userNameSuggestionsController = new Y.UserNameSuggestions.UserNameSuggestionsController({
      UserNameSuggestionsMarkup : Y.UserNameSuggestions.UserNameSuggestionsMarkup,

      suggestionUrl : '../../suggest-username?',
      availableUrl : '../../is-username-available?',

      firstName : Y.one('#first-name'),
      lastName : Y.one('#last-name'),
      userName : Y.one('#user-name'),
      domain : Y.one('#domain'),

      partner : Y.one('#partner'),
      intl : Y.one('#intl'),
      u : Y.one('#u'),
      t : Y.one('#t')

    });

    userNameSuggestionsController.init();

  });

}, {requires: ['node', 'user-name-suggestions-markup']});
