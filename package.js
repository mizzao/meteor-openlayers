Package.describe({
  name: "mizzao:openlayers",
  summary: "OpenLayers: Free Maps for the Web",
  version: "2.13.1_3",
  git: "https://github.com/mizzao/meteor-openlayers.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.3.5.1");

  api.use("mizzao:build-fetcher@0.3.2");

  /**
   * XXX Note that this grabs the current version specified in
   * openlayers.fetch.json from the OpenLayers dev site, NOT from the
   * submodule.
   *
   * Note also that the OpenLayers.js in the repo is already minified, so it's
   * added bare. It also means we avoid scoping problems from Meteor wrapping
   * it.
   */
  api.addFiles("openlayers.fetch.json", "client");
  api.addFiles("config.js", "client");

  api.export(['OpenLayers'], "client");

  const path = Npm.require('path');

  const files = [
    "blank.gif",
    "cloud-popup-relative.png",
    "drag-rectangle-off.png",
    "drag-rectangle-on.png",
    "east-mini.png",
    "layer-switcher-maximize.png",
    "layer-switcher-minimize.png",
    "marker-blue.png",
    "marker-gold.png",
    "marker-green.png",
    "marker.png",
    "measuring-stick-off.png",
    "measuring-stick-on.png",
    "north-mini.png",
    "panning-hand-off.png",
    "panning-hand-on.png",
    "slider.png",
    "south-mini.png",
    "west-mini.png",
    "zoombar.png",
    "zoom-minus-mini.png",
    "zoom-plus-mini.png",
    "zoom-world-mini.png"
  ];

  for (var i in files) {
    api.addAssets( path.join("openlayers", "img", files[i]), 'client');
  }

});
