YUI.add('user-name-suggestions', function(Y) {

  Y.use('user-name-suggestions-view', 'user-name-suggestions-controller', function(Y){
    var extraQueryParams = [],
      userNameSuggestionsController;

    extraQueryParams.push('ApiName=ValidateFields');
    extraQueryParams.push('RequestVersion=1');

    extraQueryParams.push('PartnerName=' + Y.one('#partner').get('value'));
    extraQueryParams.push('intl=' + Y.one('#intl').get('value'));
    extraQueryParams.push('u=' + Y.one('#u').get('value'));
    extraQueryParams.push('t=' + Y.one('#t').get('value'));

    userNameSuggestionsController = new Y.UserNameSuggestions.UserNameSuggestionsController({

      UserNameSuggestionsView : Y.UserNameSuggestions.UserNameSuggestionsView,
      // message should come from message object
      suggestionsAvailableMessage : 'Suggestions available, press Shift + Down or Up arrow to navigate between suggestions and press enter to select or type the desired username.',
      endOfsuggestionsMessage : ' end of suggestions',
      selectedSuggestionsMessage : 'Selected suggestion ',
      // message should come from app constant object
      suggestionUrl : '../../suggest-username?',
      availableUrl : '../../is-username-available?',

      firstName : Y.one('#first-name'),
      lastName : Y.one('#last-name'),
      userName : Y.one('#user-name'),
      domain : Y.one('#domain'),

      extraQueryParams : extraQueryParams.join('&')

    });

    userNameSuggestionsController.init();

  });

}, {requires: ['node']});
