YUI.add("include-polyfills",function(a){var b=function(){var a=document.createElement("input");return"placeholder"in a};a.one("html").hasClass("modern")&&!b()&&a.use("placeholder"),a.one("html").hasClass("lt-ie8")&&a.use("focus-highlighter"),a.one("html").hasClass("modern")&&!a.one("html").hasClass("lt-ie9")&&a.use("toggle-password-mask")},"0.0.1",{requires:["node"]});