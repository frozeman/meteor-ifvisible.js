Package.describe({
	name: "mrt:ifvisible",
    summary: "Meteor wrapper package for https://github.com/serkanyersen/ifvisible.js/",
 	version: "1.0.1",
 	git: "https://github.com/frozeman/meteor-ifvisible.js.git"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.0');

    // EXPORT
    api.export('ifvisible');

    // FILES
    api.addFiles('lib/ifvisible.js/src/ifvisible.js', 'client');
    api.addFiles('export-ifvisible.js', 'client');
});
