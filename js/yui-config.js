var YUI_config = {
  combine: false,
  groups: {
    password_sugar: {
      'modules': {
        // password sugar
        'password-meter' : {
          fullpath: '../js/password-sugar/password-meter.js'
        }
      }
    },
    formatter: {
      'modules': {
        // input data formatter
        'input-data-formatter' : {
          fullpath: '../js/input-data-modifier/input-data-formatter.js'
        },
        // mobile number formatter
        'mobile-number-formatter' : {
          fullpath: '../js/mobile-number-modifier/mobile-number-formatter.js'
        }
      }
    },
    custom_drop_down_core: {
      'modules': {
        // flags css
        'flags' : {
          fullpath: '../css/flags/flags.css',
          type : 'css'
        },
        // custom drop down core css
        'custom-drop-down-css' : {
          fullpath: '../css/custom-drop-down/custom-drop-down.css',
          type : 'css'
        },
        // custom drop down core
        'custom-drop-down-style-updater' : {
          fullpath: '../js/custom-drop-down-core/custom-drop-down-style-updater.js',
          requires: ['node']
        },
        'custom-drop-down-index' : {
          fullpath: '../js/custom-drop-down-core/custom-drop-down-index.js',
          requires: ['node']
        },
        'custom-drop-down-event-handler' : {
          fullpath: '../js/custom-drop-down-core/custom-drop-down-event-handler.js',
          requires: ['node', 'node-event-simulate']
        },
        'custom-drop-down-controller' : {
          fullpath: '../js/custom-drop-down-core/custom-drop-down-controller.js',
          requires: ['node', 'custom-drop-down-style-updater', 'custom-drop-down-event-handler', 'custom-drop-down-index']
        }
      }
    },
    custom_drop_down_country_code: {
      'modules': {
        // custom drop down country code css
        'country-code-drop-down-ltr-css' : {
          fullpath: '../css/country-code-drop-down/country-code-drop-down-ltr.css',
          type : 'css',
          requires : ['custom-drop-down-css', 'flags']
        },
        'country-code-drop-down-rtl-css' : {
          fullpath: '../css/country-code-drop-down/country-code-drop-down-rtl.css',
          type : 'css',
          requires : ['custom-drop-down-css', 'flags']
        },
        // custom drop down country code
        'country-code-drop-down-markup' : {
          fullpath: '../js/custom-drop-down-country-code/country-code-drop-down-markup.js'
        },
        'country-code-drop-down' : { // uses custom-drop-down-controller & custom-drop-down-markup
          fullpath: '../js/custom-drop-down-country-code/country-code-drop-down.js'
        }
      }
    },
    custom_drop_down_country: {
      'modules': {
        // custom drop down country css
        'country-drop-down-ltr-css' : {
          fullpath: '../css/country-drop-down/country-drop-down-ltr.css',
          type : 'css',
          requires : ['custom-drop-down-css', 'flags']
        },
        'country-drop-down-rtl-css' : {
          fullpath: '../css/country-drop-down/country-drop-down-rtl.css',
          type : 'css',
          requires : ['custom-drop-down-css', 'flags']
        },
        // custom drop down country
        'country-drop-down-markup' : {
          fullpath: '../js/custom-drop-down-country/country-drop-down-markup.js'
        },
        'country-drop-down' : { // uses custom-drop-down-controller & custom-drop-down-markup
          fullpath: '../js/custom-drop-down-country/country-drop-down.js'
        }
      }
    },
    polyfills : {
      'modules': {
        // polyfill
        'placeholder' : {
          fullpath: '../js/polyfill/placeholder.js',
          requires: ['node']
        },
        'focus-highlighter' : {
          fullpath: '../js/polyfill/focus-highlighter.js',
          requires: ['node']
        },
        'toggle-password-mask' : {
          fullpath: '../js/polyfill/toggle-password-mask.js',
          requires: ['node']
        },
        'include-polyfills' : {
          fullpath: '../js/polyfill/include-polyfills.js',
          requires: ['node']
        }
      }
    },
    user_name_suggestions_core : {
      'modules': {
        // user name suggestions core
        'user-name-suggestions-model' : {
          fullpath: '../js/user-name-suggestions-core/user-name-suggestions-model.js',
          requires: ['node', 'io', 'json-parse']
        },
        'user-name-suggestions-event-handler' : {
          fullpath: '../js/user-name-suggestions-core/user-name-suggestions-event-handler.js',
          requires: ['node']
        },
        'user-name-suggestions-controller' : {
          fullpath: '../js/user-name-suggestions-core/user-name-suggestions-controller.js',
          requires: ['node', 'user-name-suggestions-model']
        }
      }
    },
    user_name_suggestions : {
      'modules': {
        // user name suggestions
        'user-name-suggestions-view' : {
          fullpath: '../js/user-name-suggestions/user-name-suggestions-view.js',
          requires: ['node']
        },
        'user-name-suggestions' : {
          fullpath: '../js/user-name-suggestions/user-name-suggestions.js',
          requires: ['node']
        }
      }
    }
  }
};