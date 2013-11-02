YUI.add("country-drop-down-markup",function(a){var b;b=function(a){this.selectNode=a.target,this.selectedOptionId="selected-option-for-"+this.selectNode.get("id"),this.availableOptionsContainerId="available-options-container-for-"+this.selectNode.get("id"),this.selectedOptionAriaLabeledById="option-for-"+this.selectNode.get("id"),this.optionNodes=this.selectNode.all("option"),this.selectedIndex=this.selectNode.get("selectedIndex"),this.correspondingNode=a.correspondingNode,this.ie9WidthOffset=a.ie9WidthOffset},a.mix(b.prototype,{createAndInjectSelectedOptionHTML:function(){var b=[],c=this.optionNodes,d=this.selectedIndex,e=a.one("#"+this.selectNode.getAttribute("aria-labelledby")).get("innerHTML"),f=c.item(d).get("innerHTML"),g=f+" "+e;return b.push('<div id="'+this.selectedOptionId+'" class="column selected-country selected-option">'),b.push('<a href="#'+this.availableOptionsContainerId+'" role="button" aria-haspopup="true" aria-label="'+g+'">'),b.push('<span class="flag-'),b.push(c.item(d).getAttribute("country-tld")),b.push('"></span>&nbsp;&nbsp;'),b.push(c.item(d).get("value")),b.push('<span class="country-arrow-container drop-down-arrow-container"><span class="country-arrow drop-down-arrow"></span></span>'),b.push("</a>"),b.push("</div>"),b=b.join(""),this.selectNode.get("parentNode").insertBefore(b,this.selectNode),this.selectedOptionNode=a.one("#"+this.selectedOptionId),this.selectNodeWidth=this.selectNode.get("offsetWidth"),this.selectNodeWidth=9===a.UA.ie?this.selectNodeWidth+this.ie9WidthOffset+"px":this.selectNodeWidth+"px",this.createAndInjectAvailableOptionsHTML()},createAndInjectAvailableOptionsHTML:function(){var b=[];return b.push('<div class="countries-container available-options-container" id="'+this.availableOptionsContainerId+'" style="width:'+this.selectNodeWidth+'">'),b.push('<ul role="menu">'),this.optionNodes.each(function(a){b.push('<li role="presentation">'),b.push('<a href="#" role="menuitem" data-code="'+a.get("value")+'">'),b.push('<span class="flag-'),b.push(a.getAttribute("country-tld")),b.push('"></span>&nbsp;&nbsp;'),b.push(a.get("innerHTML")),b.push("</a>"),b.push("</li>")}),b.push("</ul>"),b.push("</div>"),b=b.join(""),this.selectedOptionNode.append(b),this.selectNode.hide(),this.availableOptionsContainerNode=a.one("#"+this.availableOptionsContainerId),{selectNode:this.selectNode,optionNodes:this.optionNodes,selectedOptionNode:this.selectedOptionNode,correspondingNode:this.correspondingNode,availableOptionsContainerNode:this.availableOptionsContainerNode,selectedOptionAriaLabeledById:this.selectedOptionAriaLabeledById}},getSelectedOptionHTML:function(a){var b=a.getAttribute("data-code"),c=[];return c.push('<span class="'),c.push(a.one("span").get("className")),c.push('"></span>&nbsp;&nbsp;'),c.push('<span id="'+this.selectedOptionAriaLabeledById+'" class="clipped"></span>'),c.push(b),c.push('<span class="country-arrow-container drop-down-arrow-container"><span class="country-arrow drop-down-arrow"></span></span>'),c.join("")}},!0),a.namespace("CustomDropDownMenu"),a.CustomDropDownMenu.CountryDropDownMarkup=b});