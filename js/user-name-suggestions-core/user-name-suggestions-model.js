YUI.add('user-name-suggestions-model', function(Y) {

  var UserNameSuggestionsModel;

  UserNameSuggestionsModel = function(config) {
    this.userNameSuggestionsMarkup = config.userNameSuggestionsMarkup;
    this.suggestionsContainer = config.suggestionsContainer;
    this.suggestionUrl = config.suggestionUrl;
    this.availableUrl = config.availableUrl;

    this.firstName = config.firstName;
    this.lastName = config.lastName;
    this.userName = config.userName;
    this.domain = config.domain;

    // crap
    this.partnerValue = config.partner.get('value');
    this.intlValue = config.intl.get('value');
    this.uValue = config.u.get('value');
    this.tValue = config.t.get('value');

    this.suggestions = suggestions = {available: false, list: [] };

  };

  Y.mix(UserNameSuggestionsModel.prototype, {

    createUrl : function(url) {
      var queryParams = [], firstNameValue, lastNameValue, yidValue, domainValue;

      firstNameValue = Y.Lang.trim(this.firstName.get('value'));
      lastNameValue = Y.Lang.trim(this.lastName.get('value'));
      yidValue = Y.Lang.trim(this.userName.get('value'));
      domainValue = this.domain.getAttribute('value');

      queryParams.push('GivenName='+firstNameValue);
      queryParams.push('FamilyName='+lastNameValue);
      queryParams.push('AccountID='+yidValue+'@'+domainValue);
      queryParams.push('ApiName=ValidateFields');
      queryParams.push('RequestVersion=1');

      queryParams.push('PartnerName='+this.partnerValue);
      queryParams.push('intl='+this.intlValue);
      queryParams.push('u='+this.uValue);
      queryParams.push('t='+this.tValue);
      queryParams.push(new Date().getTime());

      if(firstNameValue || lastNameValue || yidValue) {
        return url + queryParams.join('&');
      } else {
        return false;
      }
    },

    beautifySuggestions : function(uglySuggestions) {
      if (uglySuggestions.ResultCode === 'SUCCESS') {
        this.suggestions.available = true;
      } else {
        // add watch list code
        this.suggestions.available = false;
        this.suggestions.list = [];
        for (var i = 0, l = uglySuggestions.SuggestedIDList.length; i < l; i+=1) {
          this.suggestions.list.push(uglySuggestions.SuggestedIDList[i].replace(/\@yahoo.*/, ''));
        }
      }
    },

    suggestionComplete : function(id, response, args) {
      var _this = args.context,
        callback = args.callback,
        callbackContext = args.callbackContext;
      if(response.status === 200) {
        try {
          _this.beautifySuggestions(Y.JSON.parse(response.responseText));
        } catch (error) {}
        if(suggestions && suggestions.list && suggestions.list.length > 0) {
          callback.call(callbackContext, _this.suggestions.list);
        }
      }
    },

    getSuggestions : function(e, _this, callback, callbackContext) {
      var url;
      if(_this.suggestions.list.length < 1) {
        url = _this.createUrl(_this.suggestionUrl);
        if(url) {
          _this.request && _this.request.abort();
          _this.request = Y.io(url, {on: {complete: _this.suggestionComplete}, arguments: {context: _this, callback: callback, callbackContext: callbackContext }});
        }
      } else {
        callback.call(callbackContext, _this.suggestions.list);
      }

    },


    init : function() {

      var _this = this;

    }
  }, true);

  Y.namespace('UserNameSuggestions');

  Y.UserNameSuggestions.UserNameSuggestionsModel = UserNameSuggestionsModel;

}, {requires: ['node', 'io', 'json-parse']});
