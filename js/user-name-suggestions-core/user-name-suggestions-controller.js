YUI.add('user-name-suggestions-controller', function(Y) {

  var UserNameSuggestionsController;

  UserNameSuggestionsController = function(config) {

    this.UserNameSuggestionsMarkup = config.UserNameSuggestionsMarkup;

    this.suggestionUrl = config.suggestionUrl;
    this.availableUrl = config.availableUrl;

    this.firstName = config.firstName;
    this.lastName = config.lastName;
    this.userName = config.userName;
    this.domain = config.domain;

    this.partner = config.partner;
    this.intl = config.intl;
    this.u = config.u;
    this.t = config.t;

    this.UserNameSuggestionsModel = Y.UserNameSuggestions.UserNameSuggestionsModel;
    this.UserNameSuggestionsEventHandler = Y.UserNameSuggestions.UserNameSuggestionsEventHandler;

  };

  Y.mix(UserNameSuggestionsController.prototype, {

    init : function() {

      var _this = this;

      this.userNameSuggestionsMarkup = new this.UserNameSuggestionsMarkup({
                                        userName : this.userName
                                      });

      this.suggestionsContainer = this.userNameSuggestionsMarkup.renderSuggestionsContainer();

      this.userNameSuggestionsModel = new this.UserNameSuggestionsModel({
                                        userNameSuggestionsMarkup : this.userNameSuggestionsMarkup,
                                        suggestionsContainer : this.suggestionsContainer,
                                        suggestionUrl : this.suggestionUrl,
                                        availableUrl : this.availableUrl,

                                        firstName : this.firstName,
                                        lastName : this.lastName,
                                        userName : this.userName,
                                        domain : this.domain,

                                        partner : this.partner,
                                        intl : this.intl,
                                        u : this.u,
                                        t : this.t
                                      });

      this.userNameSuggestionsEventHandler = new Y.UserNameSuggestions.UserNameSuggestionsEventHandler({
                                        userName : this.userName,
                                        suggestionsContainer : this.suggestionsContainer,
                                        userNameSuggestionsModel : this.userNameSuggestionsModel,
                                        userNameSuggestionsMarkup : this.userNameSuggestionsMarkup
                                      });

      this.userNameSuggestionsEventHandler.init();

    }
  }, true);

  Y.namespace('UserNameSuggestions');

  Y.UserNameSuggestions.UserNameSuggestionsController = UserNameSuggestionsController;

}, {requires: ['node', 'user-name-suggestions-model', 'user-name-suggestions-event-handler']});
