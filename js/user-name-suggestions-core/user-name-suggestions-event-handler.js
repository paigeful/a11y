YUI.add('user-name-suggestions-event-handler', function(Y) {

  var UserNameSuggestionsEventHandler;

  UserNameSuggestionsEventHandler = function(config) {
    this.userName = config.userName;
    this.suggestionsContainer = config.suggestionsContainer;
    this.userNameSuggestionsModel = config.userNameSuggestionsModel;
    this.userNameSuggestionsMarkup = config.userNameSuggestionsMarkup;
  };

  Y.mix(UserNameSuggestionsEventHandler.prototype, {

    init : function() {
      var _this = this,
        userNameSuggestionsModel = this.userNameSuggestionsModel,
        userNameSuggestionsMarkup = this.userNameSuggestionsMarkup,
        suggestionsContainer = this.suggestionsContainer,
        getSuggestions = userNameSuggestionsModel.getSuggestions,
        renderSuggestions = userNameSuggestionsMarkup.renderSuggestions,
        hideSuggestions = userNameSuggestionsMarkup.hideSuggestions;

      this.userName.on('focus', getSuggestions, null, userNameSuggestionsModel, renderSuggestions, userNameSuggestionsMarkup);
      this.userName.on('blur', hideSuggestions, null, userNameSuggestionsMarkup);

    }
  }, true);

  Y.namespace('UserNameSuggestions');

  Y.UserNameSuggestions.UserNameSuggestionsEventHandler = UserNameSuggestionsEventHandler;

}, {requires: ['node']});
