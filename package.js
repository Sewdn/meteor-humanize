Package.describe({
  summary: "A simple utility library for making the web more humane."
});

Package.on_use(function (api) {
  api.add_files('lib/public/src/humanize.js', 'client');
  api.add_files('export.js', 'client');
  api.export('Humanize');
});