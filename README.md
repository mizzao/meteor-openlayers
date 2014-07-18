OpenLayers
==========

[OpenLayers](http://openlayers.org/): Free Maps for the Web

This package pulls OpenLayers with code, CSS, and images.

## Installation and Usage

Install with Meteorite:

```
mrt add openlayers
```

Check out the docs at http://openlayers.org/.

## Tips and Tricks

- This package automatically loads the OpenLayers CSS. Thus, when creating an `OpenLayers.Map` or any of its derivatives (like `OverviewMap`), make sure to set the `theme` field to `null` so that OpenLayers doesn't try to load CSS from its default path. For more information, see [Deploying OpenLayers](http://docs.openlayers.org/library/deploying.html#deploying-files) and https://github.com/openlayers/openlayers/issues/1067.
- For an example of integration with a Meteor app, see https://github.com/mizzao/CrowdMapper/blob/master/client/views/map.coffee.
