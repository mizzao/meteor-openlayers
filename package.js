Package.describe({
  summary: "OpenLayers: Free Maps for the Web",
  // MANDATORY version number. New in 0.9.0.
  version: "2.13.1",
  // Optional github URL to your source repository. New in 0.9.0.
  git: "https://github.com/mizzao/meteor-openlayers.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");

  api.use("mizzao:build-fetcher@>=0.2.0");

  /**
   * XXX Note that this grabs the current version specified in
   * openlayers.fetch.json from the OpenLayers dev site, NOT from the
   * submodule.
   *
   * Note also that the OpenLayers.js in the repo is already minified, so it's
   * added bare. It also means we avoid scoping problems from Meteor wrapping
   * it.
   */
  api.add_files("openlayers.fetch.json", "client");
  api.add_files("config.js", "client");

  api.export(['OpenLayers'], "client");

  var path = Npm.require('path');

  api.add_files(path.join("openlayers", "img", "blank.gif"));
  api.add_files(path.join("openlayers", "img", "cloud-popup-relative.png"));
  api.add_files(path.join("openlayers", "img", "drag-rectangle-off.png"));
  api.add_files(path.join("openlayers", "img", "drag-rectangle-on.png"));
  api.add_files(path.join("openlayers", "img", "east-mini.png"));
  api.add_files(path.join("openlayers", "img", "layer-switcher-maximize.png"));
  api.add_files(path.join("openlayers", "img", "layer-switcher-minimize.png"));
  api.add_files(path.join("openlayers", "img", "marker-blue.png"));
  api.add_files(path.join("openlayers", "img", "marker-gold.png"));
  api.add_files(path.join("openlayers", "img", "marker-green.png"));
  api.add_files(path.join("openlayers", "img", "marker.png"));
  api.add_files(path.join("openlayers", "img", "measuring-stick-off.png"));
  api.add_files(path.join("openlayers", "img", "measuring-stick-on.png"));
  api.add_files(path.join("openlayers", "img", "north-mini.png"));
  api.add_files(path.join("openlayers", "img", "panning-hand-off.png"));
  api.add_files(path.join("openlayers", "img", "panning-hand-on.png"));
  api.add_files(path.join("openlayers", "img", "slider.png"));
  api.add_files(path.join("openlayers", "img", "south-mini.png"));
  api.add_files(path.join("openlayers", "img", "west-mini.png"));
  api.add_files(path.join("openlayers", "img", "zoombar.png"));
  api.add_files(path.join("openlayers", "img", "zoom-minus-mini.png"));
  api.add_files(path.join("openlayers", "img", "zoom-plus-mini.png"));
  api.add_files(path.join("openlayers", "img", "zoom-world-mini.png"));
});
