var YUI_config = {
  combine: false,
  groups: {
    html: {
      'modules': {
        'messages' : {
          fullpath: '../js/html/messages.js'
        }
      }
    },
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
    },
    validation_core_configs : {
      'modules': {
        'first-name-configs' : {
          fullpath: '../js/validation-core/validation-configs/fields/first-name-configs.js',
          requires: ['fields', 'messages', 'validation-patterns']
        },
        'last-name-configs' : {
          fullpath: '../js/validation-core/validation-configs/fields/last-name-configs.js',
          requires: ['fields', 'messages', 'validation-patterns']
        },
        'user-name-configs' : {
          fullpath: '../js/validation-core/validation-configs/fields/user-name-configs.js',
          requires: ['fields', 'messages', 'validation-patterns']
        },
        'mobile-number-configs' : {
          fullpath: '../js/validation-core/validation-configs/fields/mobile-number-configs.js',
          requires: ['fields', 'messages', 'validation-patterns']
        }
      }
    },
    validation_core : {
      'modules': {
        'validation-patterns' : {
          fullpath: '../js/validation-core/validation-constants/validation-patterns.js',
          requires: ['node']
        },
        'validation-result-statuses' : {
          fullpath: '../js/validation-core/validation-constants/validation-result-statuses.js',
          requires: ['node']
        },
        'validation-functions' : {
          fullpath: '../js/validation-core/validation-functions/validation-functions.js',
          requires: ['node', 'validation-result-statuses']
        },
        'validation-controller' : {
          fullpath: '../js/validation-core/validation-controller.js',
          requires: ['node', 'fields-validation-configs', 'forms-validation-configs', 'validation-functions', 'validation-result-statuses', 'validation-effects']
        }
      }
    },
    validation_app : {
      'modules': {
        'fields-validation-configs' : {
          fullpath: '../js/validation-app/validation-configs/fields-validation-configs.js',
          requires: ['fields', 'event-valuechange', 'first-name-configs', 'last-name-configs', 'user-name-configs', 'mobile-number-configs']
        },
        'accessible-form-configs' : {
          fullpath: '../js/validation-app/validation-configs/forms/accessible-form-configs.js',
          requires: ['forms', 'fields']
        },
        'forms-validation-configs' : {
          fullpath: '../js/validation-app/validation-configs/forms-validation-configs.js',
          requires: ['forms', 'accessible-form-configs']
        },
        'fields' : {
          fullpath: '../js/validation-app/validation-targets/fields.js'
        },
        'forms' : {
          fullpath: '../js/validation-app/validation-targets/forms.js'
        },
        'validation-effects' : {
          fullpath: '../js/validation-app/validation-effects/validation-effects.js',
          requires: ['node']
        },
        'validation-controller-use' : {
          fullpath: '../js/validation-app/validation-controller-use.js',
          requires: ['node']
        }
      }
    }
  }
};
