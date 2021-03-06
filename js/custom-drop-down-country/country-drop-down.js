YUI.add('country-drop-down', function(Y) {

  if (Y.one('html').hasClass('modern')) {
    var countryDropDownCss;

    if(Y.one('body').getStyle('direction') === 'ltr') {
      countryDropDownCss = 'country-drop-down-ltr-css';
    } else {
      countryDropDownCss = 'country-drop-down-rtl-css';
    }
    Y.use('custom-drop-down-controller', 'country-drop-down-markup', countryDropDownCss, function(Y){

      Y.all('[custom-drop-down-type=country]').each(function(target) {
        var CustomDropDownMarkup = Y.CustomDropDownMenu.CountryDropDownMarkup,
          customDropDownController = new Y.CustomDropDownMenu.CustomDropDownController({
                                        target : target,
                                        ie9WidthOffset : 17,
                                        CustomDropDownMarkup : CustomDropDownMarkup
                                      });
        customDropDownController.init();
      });

    });
  }
});
