YUI.add("country-drop-down",function(a){if(a.one("html").hasClass("modern")){var b;b="ltr"===a.one("body").getStyle("direction")?"country-drop-down-ltr-css":"country-drop-down-rtl-css",a.use("custom-drop-down-controller","country-drop-down-markup",b,function(a){a.all("[custom-drop-down-type=country]").each(function(b){var c=a.CustomDropDownMenu.CountryDropDownMarkup,d=new a.CustomDropDownMenu.CustomDropDownController({target:b,ie9WidthOffset:17,CustomDropDownMarkup:c});d.init()})})}});