# Changelog

## [1.0.14] - 2020-11-07

- Added a method to measure the distance between two positions in the utility class(GoogleMapUtils#computeDistanceBetween()).

## [1.0.13] - 2020-10-14

- Changed maximum width of marker tooltip from 200px to 400px.

## [1.0.12] - 2020-10-13

- Fixed a bug where the map click event did not fire (click.map).

## [1.0.11] - 2020-10-13

- Corrected CSS typos in maps.

## [1.0.10] - 2020-10-11

- Added marker callout.

    ![marker-balloon.png](https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/marker-balloon.png)

    Example.  

    ```js
    <google-map id="map" zoom="12" center="35.658584,139.7454316" theme="dark"></google-map>

    import { GoogleMapUtils } from 'google-map-extension';

    // Map element.
    const map = document.querySelector('#map');

    // Current position.
    const position = { lat: 35.658584, lng: 139.7454316 };

    // Current address.
    const address = await GoogleMapUtils.getAddressFromLatLng(position);

    // Add a marker.
    const marker = await map.addMarker({
      image: 'image/face6.png',
      color: 'rgb(255,45,85)',
      position,
      info: address});
    ```

## [1.0.9] - 2020-10-11

- Added a method to switch the display state of the marker(GoogleMapCircleMarker.setVisible()).

## [1.0.8] - 2020-10-11

- Added a method to return the latitude and longitude of the current position in the utility class.(GoogleMapUtils.getCurrentPosition())

## [1.0.7] - 2020-10-11

- Added an option to zoom after moving to the marker position movement method(GoogleMapCircleMarker.moveToPosition()).
- Added a method to change the current position in the map class(GoogleMap.moveToPosition()).

## [1.0.6] - 2020-10-10

- Added a method to zoom to all longitude / latitude or markers on the map(GoogleMap.zoomToFitAllPositions()).
- Added a method to the marker that returns the current latitude and longitude(GoogleMapCircleMarker.getPosition()).

## [1.0.5] - 2020-10-09

- Added map utility class(GoogleMapUtils).

## [1.0.4] - 2020-10-07

- Added marker addition method to map class.

## [1.0.3] - 2020-09-28

- Once again fixed the incorrect wording in the API docs.

## [1.0.2] - 2020-09-28

- Fixed incorrect wording in API documentation.

## [1.0.1] - 2020-09-28

- Publish basic feature.

## [1.0.0] - 2020-09-27

- It is under development, but it was temporarily released to reserve the package name.