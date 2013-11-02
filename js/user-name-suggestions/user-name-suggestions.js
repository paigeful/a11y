YUI.add('user-name-suggestions', function(Y) {

  Y.use('user-name-suggestions-controller', function(Y){
    var userNameSuggestionsController = new Y.UserNameSuggestions.UserNameSuggestionsController({
      UserNameSuggestionsMarkup : Y.UserNameSuggestions.UserNameSuggestionsMarkup,
      suggestionsAvailableMessage : 'Suggestions available, press Shift + Down or Up arrow to navigate between suggestions and press enter to select.',

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
