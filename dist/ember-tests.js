var JSHINTRC = {
    "predef": [
        "define",
        "console",
        "Ember",
        "DS",
        "Handlebars",
        "Metamorph",
        "RSVP",
        "require",
        "requireModule",
        "equal",
        "notEqual",
        "notStrictEqual",
        "test",
        "asyncTest",
        "testBoth",
        "testWithDefault",
        "raises",
        "throws",
        "deepEqual",
        "start",
        "stop",
        "ok",
        "strictEqual",
        "module",
        "expect",
        "minispade",
        "expectAssertion",
        "Window",
        "Document"
    ],

    "node" : false,
    "browser" : true,

    "boss" : true,
    "curly": false,
    "debug": false,
    "devel": false,
    "eqeqeq": true,
    "evil": true,
    "forin": false,
    "immed": false,
    "laxbreak": false,
    "newcap": true,
    "noarg": true,
    "noempty": false,
    "nonew": false,
    "nomen": false,
    "onevar": false,
    "plusplus": false,
    "regexp": false,
    "undef": true,
    "sub": true,
    "strict": false,
    "white": false,
    "eqnull": true
}
;

minispade.register('ember-autoresize/~tests/system/layout_of', "(function() {/*globals $ */\nmodule(\"Ember.Metrics.layoutOf\");\n\ntest('should provide correct dimensions for each of the box models', function () {\n  $('#qunit-fixture').append('<div id=\"box\" style=\"width: 10px; height: 10px; padding: 1px 2px 3px 4px; margin: 8px 4px 2px 1px; border-width: 2px 4px 6px 8px; border-style: solid; border-color: #333;\"></div>');\n\n  var layout = Ember.Metrics.layoutOf($('#box')[0]);\n  deepEqual(layout.content, {\n    width: 10,\n    height: 10\n  });\n\n  deepEqual(layout.padding, {\n    width: 16,\n    height: 14,\n    top: 1,\n    right: 2,\n    bottom: 3,\n    left: 4\n  });\n\n  deepEqual(layout.borders, {\n    width: 28,\n    height: 22,\n    top: 2,\n    right: 4,\n    bottom: 6,\n    left: 8\n  });\n\n  deepEqual(layout.margins, {\n    width: 33,\n    height: 32,\n    top: 8,\n    right: 4,\n    bottom: 2,\n    left: 1\n  });\n});\n\n})();\n//@ sourceURL=ember-autoresize/~tests/system/layout_of");