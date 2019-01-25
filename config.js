require.config({
    paths: {
        jquery: 'empty:',
        underscore: 'empty:',
        backbone: 'empty:',
        modernizr: 'empty:',
        handlebars: 'empty:',
        velocity: 'empty:',
        imageReady: 'empty:',
        inview: 'empty:',
        a11y: 'empty:',
        scrollTo: 'empty:',
        libraries: 'empty:',
        bowser: 'empty:',
        'core/js/libraries/bowser': 'empty:',
        'coreJS/libraries/bowser': 'empty:'
    },
    map: {
        '*': {
            coreJS: 'core/js',
            coreViews: 'core/js/views',
            coreModels: 'core/js/models',
            coreCollections: 'core/js/collections',
            coreHelpers: 'core/js/helpers'
        }
    },
    _languagePicker: {
        "_isEnabled": true,
        "title": "Language selection",
        "displayTitle": "Please select a language",
        "body": "This course is available in the following languages:",
        "_showOnCourseLoad": true,
        "_comment": "default class names are: icon-globe, icon-language-1, icon-language-2",
        "_languagePickerIconClass": "icon-language-2",
        "_restoreStateOnLanguageChange": false,
        "_languages": [
            {
                "_language": "en",
                "_direction": "ltr",
                "displayName": "English",
                "warningTitle": "Change language?",
                "warningMessage": "Changing the language will reset course progress.<br><br>Would you like to proceed?",
                "_buttons": {
                    "yes": "Yes",
                    "no": "No"
                }
            },
            {
                "_language": "de",
                "_direction": "ltr",
                "displayName": "Deutsch",
                "warningTitle": "Sprache ändern?",
                "warningMessage": "Ändern der Sprache wird den Fortschritt des Kurses zurücksetzen.<br><br>Möchte Sie fortfahren?",
                "_buttons": {
                    "yes": "Ja",
                    "no": "Nein"
                }
            }
        ]
    }
});
