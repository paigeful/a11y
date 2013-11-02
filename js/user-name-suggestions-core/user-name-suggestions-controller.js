YUI.add('user-name-suggestions-controller', function(Y) {

  var UserNameSuggestionsController;

  UserNameSuggestionsController = function(config) {

    this.UserNameSuggestionsView = config.UserNameSuggestionsView;
    this.suggestionsAvailableMessage = config.suggestionsAvailableMessage;

    this.suggestionUrl = config.suggestionUrl;
    this.availableUrl = config.availableUrl;

    this.firstName = config.firstName;
    this.lastName = config.lastName;
    this.userName = config.userName;
    this.domain = config.domain;

    this.extraQueryParams = config.extraQueryParams;

    this.UserNameSuggestionsModel = Y.UserNameSuggestions.UserNameSuggestionsModel;
    this.UserNameSuggestionsEventHandler = Y.UserNameSuggestions.UserNameSuggestionsEventHandler;

  };

  Y.mix(UserNameSuggestionsController.prototype, {

    init : function() {

      // instantiate view
      this.userNameSuggestionsView = new this.UserNameSuggestionsView({
        userName : this.userName,
        suggestionsAvailableMessage : this.suggestionsAvailableMessage
      });

      this.userNameSuggestionsView.renderSuggestionsContainer();

      // instantiate model
      this.userNameSuggestionsModel = new this.UserNameSuggestionsModel({
        suggestionUrl : this.suggestionUrl,
        availableUrl : this.availableUrl,

        firstName : this.firstName,
        lastName : this.lastName,
        userName : this.userName,
        domain : this.domain,

        extraQueryParams : this.extraQueryParams

      });

      var userNameSuggestionsModel = this.userNameSuggestionsModel,
        userNameSuggestionsView = this.userNameSuggestionsView,
        getSuggestions = userNameSuggestionsModel.getSuggestions,
        renderSuggestions = userNameSuggestionsView.renderSuggestions,
        hideSuggestions = userNameSuggestionsView.hideSuggestions,
        checkAvailability = userNameSuggestionsModel.checkAvailability;

      this.userName.on('focus', getSuggestions, null, userNameSuggestionsModel, renderSuggestions, userNameSuggestionsView);
      this.userName.on('blur', hideSuggestions, null, userNameSuggestionsView);

      //this.userName.on('blur', checkAvailability, null, userNameSuggestionsModel);

      Y.on('user-name:not-available', function(e){
        console.log('user-name:not-available');
      });

    }
  }, true);

  Y.namespace('UserNameSuggestions');

  Y.UserNameSuggestions.UserNameSuggestionsController = UserNameSuggestionsController;

}, {requires: ['node', 'user-name-suggestions-model']});
