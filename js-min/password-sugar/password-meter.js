YUI.add("password-meter",function(a){var b,c,d,e,f,g,h=a.one("#password-meter"),i="",j=a.one("#password-validation-message"),k={weakest:"Password must contain 8 characters.",weaker:"Weak password, easy to crack.",weak:"Still weak password.",strong:"Not bad, but you can make it better.",stronger:"Super!! you are a password ninja."};c=function(a){return a.match(/\d/)?!0:!1},d=function(a){return a.match(/[a-z]/)?!0:!1},e=function(a){return a.match(/[A-Z]/)?!0:!1},f=function(a){return a.match(/[^0-9a-z]/gi)?!0:!1},g=function(a){var b,g,h,i,j;return a.length>=8?(g=c(a),h=d(a),i=e(a),j=f(a),b=g&&h&&i&&j?"stronger":g&&h&&i||j&&h&&i||g&&h&&j||g&&i&&j?"strong":g&&(h||i)||j&&(h||i)||j&&g?"weak":"weaker"):b="weakest",b},b=function(b){var c=a.Lang.trim(this.get("value"));b=g(c),h.removeClass(i),h.addClass(b),i=b,j.set("innerHTML",k[b])},a.on("keyup",b,"#password")},{requires:["node"]});