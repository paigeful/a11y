YUI.add("user-name-suggestions-view",function(a){var b;b=function(a){this.userName=a.userName,this.suggestionsAvailableMessage=a.suggestionsAvailableMessage,this.endOfsuggestionsMessage=a.endOfsuggestionsMessage,this.selectedSuggestionsMessage=a.selectedSuggestionsMessage,this.selectedIndex=-1},a.mix(b.prototype,{renderSuggestionsContainer:function(){var b=[];return b.push("<div class='row suggestion-row'>"),b.push("<ul class='suggestions-container' id='suggestions-container' aria-hidden='true'></ul>"),b.push("<p class='clipped' id='suggestions-read-out-container' aria-live='polite' aria-atomic='false' aria-relevant='all'></p>"),b.push("</div>"),b=b.join(""),this.userName.get("parentNode").append(b),this.suggestionsContainer=a.one("#suggestions-container"),this.suggestionsReadOutContainer=a.one("#suggestions-read-out-container"),this.suggestionsContainer},unHighlightSuggestion:function(a){a&&a.removeClass("suggestions-hovered")},highlightSuggestion:function(a){var b=a.get("innerHTML");a&&a.addClass("suggestions-hovered"),this.selectedIndex===this.list.length-1&&(b+=this.endOfsuggestionsMessage),this.suggestionsReadOutContainer.set("innerHTML",b)},keydownHandler:function(a,b){var c,d,e=b.list.length-1,f=b.suggestionsContainer.all("li");if(38===a.keyCode||40===a.keyCode||13===a.keyCode)switch(a.halt(),a.keyCode){case 38:c=b.selectedIndex,b.selectedIndex-=1,b.selectedIndex<0&&(b.selectedIndex=e),b.unHighlightSuggestion(b.suggestionsContainer.one(".suggestions-hovered")),b.highlightSuggestion(f.item(b.selectedIndex));break;case 40:c=b.selectedIndex,b.selectedIndex+=1,b.selectedIndex>e&&(b.selectedIndex=0),b.unHighlightSuggestion(b.suggestionsContainer.one(".suggestions-hovered")),b.highlightSuggestion(f.item(b.selectedIndex));break;case 13:d=f.item(b.selectedIndex).get("innerHTML"),b.userName.set("value",d),b.unHighlightSuggestion(f.item(b.selectedIndex)),b.hideSuggestions(a,b,d)}},mouseoverHandler:function(a,b){b.unHighlightSuggestion(b.suggestionsContainer.one(".suggestions-hovered")),b.highlightSuggestion(a.target),b.selectedIndex=b.suggestionsContainer.all("li").indexOf(a.target)},mousedownHandler:function(a,b){var c=a.target.get("innerHTML");a.halt(),b.userName.set("value",c),b.unHighlightSuggestion(a.target),b.hideSuggestions(a,b,c)},renderSuggestions:function(a){var b,c=this,d=a.length,e=[];if(this.list!==a){for(this.list=a,b=0;d>b;b++)e.push("<li>"),e.push(a[b]),e.push("</li>");e=e.join(""),this.suggestionsContainer.set("innerHTML",e)}this.suggestionsContainer.setStyle("display","block"),c.suggestionsReadOutContainer.set("innerHTML",c.suggestionsAvailableMessage),this.userName.on("keydown",this.keydownHandler,null,c),this.suggestionsContainer.on("mouseover",this.mouseoverHandler,null,this),this.suggestionsContainer.on("mousedown",this.mousedownHandler,null,this)},hideSuggestions:function(a,b,c){b.suggestionsContainer.setStyle("display","none"),c&&b.suggestionsReadOutContainer.set("innerHTML",b.selectedSuggestionsMessage+c),b.selectedIndex=-1,b.userName.detach("keydown",this.keydownHandler),b.suggestionsContainer.detach("mouseover",b.mouseoverHandler),b.suggestionsContainer.detach("mousedown",b.mousedownHandler)}},!0),a.namespace("UserNameSuggestions"),a.UserNameSuggestions.UserNameSuggestionsView=b},{requires:["node"]});