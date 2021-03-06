YUI.add('user-name-suggestions-view', function(Y) {

  var UserNameSuggestionsView;

  UserNameSuggestionsView = function(config) {
    this.userName = config.userName;
    this.suggestionsAvailableMessage = config.suggestionsAvailableMessage;
    this.endOfsuggestionsMessage = config.endOfsuggestionsMessage;
    this.selectedSuggestionsMessage = config.selectedSuggestionsMessage;

    this.selectedIndex = -1;
  };

  Y.mix(UserNameSuggestionsView.prototype, {

    renderSuggestionsContainer : function() {

      var suggestionsContainerHTML = [];

      suggestionsContainerHTML.push("<div class='row suggestion-row'>");
        suggestionsContainerHTML.push("<ul class='suggestions-container' id='suggestions-container' aria-hidden='true'></ul>");
        suggestionsContainerHTML.push("<p class='clipped' id='suggestions-read-out-container' aria-live='polite' aria-atomic='false' aria-relevant='all'></p>");
      suggestionsContainerHTML.push("</div>");

      suggestionsContainerHTML = suggestionsContainerHTML.join('');

      this.userName.get('parentNode').append(suggestionsContainerHTML);

      this.suggestionsContainer = Y.one('#suggestions-container');
      this.suggestionsReadOutContainer = Y.one('#suggestions-read-out-container');

      return this.suggestionsContainer;

    },

    unHighlightSuggestion : function(suggestion) {
      suggestion && suggestion.removeClass('suggestions-hovered');
    },

    highlightSuggestion : function(suggestion) {
      var readOutText = suggestion.get('innerHTML');
      suggestion && suggestion.addClass('suggestions-hovered');
      if(this.selectedIndex === this.list.length - 1) {
        readOutText += this.endOfsuggestionsMessage;
      }
      this.suggestionsReadOutContainer.set('innerHTML', readOutText);
    },

    keydownHandler : function(e, _this) {
      var length = _this.list.length - 1,
        previousSelectedIndex,
        listNodes = _this.suggestionsContainer.all('li'),
        selectedSuggestion;
      if(e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 13) {
        switch (e.keyCode) {
          case 38 :
            e.halt();
            previousSelectedIndex = _this.selectedIndex;
            _this.selectedIndex -=1;
            if(_this.selectedIndex < 0) {
              _this.selectedIndex = length;
            }
            _this.unHighlightSuggestion(_this.suggestionsContainer.one('.suggestions-hovered'));
            _this.highlightSuggestion(listNodes.item(_this.selectedIndex));
            break;
          case 40 :
            e.halt();
            previousSelectedIndex = _this.selectedIndex;
            _this.selectedIndex +=1;
            if(_this.selectedIndex > length) {
              _this.selectedIndex = 0;
            }
            _this.unHighlightSuggestion(_this.suggestionsContainer.one('.suggestions-hovered'));
            _this.highlightSuggestion(listNodes.item(_this.selectedIndex));
            break;
          case 13 :
            if(_this.selectedIndex !== -1) {
              e.halt();
              selectedSuggestion = listNodes.item(_this.selectedIndex).get('innerHTML');
              _this.userName.set('value',selectedSuggestion);
              _this.unHighlightSuggestion(listNodes.item(_this.selectedIndex));
            }
            _this.hideSuggestions(e, _this, selectedSuggestion);
            break;
        }
      }
    },

    mouseoverHandler : function(e, _this) {
      _this.unHighlightSuggestion(_this.suggestionsContainer.one('.suggestions-hovered'));
      _this.highlightSuggestion(e.target);
      _this.selectedIndex = _this.suggestionsContainer.all('li').indexOf(e.target);
    },

    mousedownHandler : function(e, _this) {
      var selectedSuggestion = e.target.get('innerHTML');
      e.halt();
      _this.userName.set('value',selectedSuggestion);
      _this.unHighlightSuggestion(e.target);
      _this.hideSuggestions(e, _this, selectedSuggestion);
    },

    renderSuggestions : function(list) {

      var _this = this,
        i,
        length = list.length,
        suggestionsHTML = [];

      if(this.list !== list) {
        this.list = list;

        for( i = 0; i < length; i++) {
          suggestionsHTML.push("<li>");
            suggestionsHTML.push(list[i]);
          suggestionsHTML.push("</li>");
        }

        suggestionsHTML = suggestionsHTML.join('');

        this.suggestionsContainer.set('innerHTML', suggestionsHTML);
      }

      this.suggestionsContainer.setStyle('display', 'block');
      //this.timeoutId = setTimeout(function() {
        _this.suggestionsReadOutContainer.set('innerHTML', _this.suggestionsAvailableMessage);
      //}, 2000);

      this.userName.on('keydown', this.keydownHandler, null, _this);

      this.suggestionsContainer.on('mouseover', this.mouseoverHandler, null, this);
      this.suggestionsContainer.on('mousedown', this.mousedownHandler, null, this);

    },

    hideSuggestions : function(e, _this, selectedSuggestion) {
      _this.suggestionsContainer.setStyle('display', 'none');
      if(selectedSuggestion) {
        _this.suggestionsReadOutContainer.set('innerHTML', _this.selectedSuggestionsMessage + selectedSuggestion);
      } else {
        //_this.suggestionsReadOutContainer.set('innerHTML', '');
      }
      //clearTimeout(_this.timeoutId);
      _this.selectedIndex = -1;

      _this.userName.detach('keydown', this.keydownHandler);
      _this.suggestionsContainer.detach('mouseover', _this.mouseoverHandler);
      _this.suggestionsContainer.detach('mousedown', _this.mousedownHandler);
    }

  }, true);

  Y.namespace('UserNameSuggestions');

  Y.UserNameSuggestions.UserNameSuggestionsView = UserNameSuggestionsView;

}, {requires: ['node']});
