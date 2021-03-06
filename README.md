# google-map-extension

Google Map extension.

![all.jpg](https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/all.jpg)

## Installation

```sh
npm install google-map-extension;
```

## API

[API Documentation](./API.md)

## Changelog

[Changelog](./CHANGELOG.md)

Below are the three latest updates.  

### [1.0.14] - 2020-11-07

- Added a method to measure the distance between two positions in the utility class(GoogleMapUtils#computeDistanceBetween()).

### [1.0.12] - 2020-10-13

- Fixed a bug where the map click event did not fire (click.map).

### [1.0.11] - 2020-10-13

- Corrected CSS typos in maps.

### [1.0.10] - 2020-10-11

- Added marker callout.

    ![marker-balloon.png](https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/marker-balloon.png)

## Examples

There are some examples in "./examples" in this package.Here is the first one to get you started.

## Usage

### Basic usage.

You can use the map immediately by adding the "google-map" tag.  
It's very convenient for non-programs because you can easily use the map without knowing JS.

Example.  
You can easily control the addition of controls, default position, zoom level, etc. with the attributes of the google-map element.

```HTML
<google-map
  zoom="12"
  center="35.658584,139.7454316"
  type="roadmap"
  theme="dark"
  zoom-control
  streetview-control
  fullscreen-control
  theme-control></google-map>

<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
<script type="module">
  import 'google-map-extension';// Initialize google-map element
</script>
```

Attribute list.  
See [API Documentation](./API.md) for details.

<table>
    <thead>
        <tr><th>Attribute</th><th>Description</th></tr>
    </thead>
    <tbody>
        <tr>
            <td>zoom</td>
            <td>The initial Map zoom level.<br></br><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom-all.jpg" height="300"></td>
        </tr>
        <tr>
            <td>center</td>
            <td>Specify the latitude and longitude of the initial position separated by commas.</td>
        </tr>
        <tr>
            <td>type</td>
            <td>The initial Map mapTypeId.<br><br><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/type-all.jpg" height="300"></td>
        </tr>
        <tr>
            <td>theme</td>
            <td>The initial Map theme.<br><br><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/theme-all.jpg" height="300"></td>
        </tr>
        <tr>
            <td>zoom-control</td>
            <td>Adding this attribute will display Zoom control on the map.</td>
        </tr>
        <tr>
            <td>streetview-control</td>
            <td>Adding this attribute will display Street View control on the map.</td>
        </tr>
        <tr>
            <td>fullscreen-control</td>
            <td>Adding this attribute will display Fullscreen control on the map.</td>
        </tr>
        <tr>
            <td>theme-control</td>
            <td>Adding this attribute will display Theme control on the map.<br><br><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/control-theme.png" height="150"></td>
        </tr>
    </tbody>
</table>

#### Current location on the map.  

Example.  

```js
<google-map id="map" zoom="12" center="35.658584,139.7454316" theme="dark"></google-map>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>

import 'google-map-extension';

// Map element.
const map = document.querySelector('#map');

// Get position when map is clicked.
map.on('click.map', event => {
  // longitude latitude.
  const position = event.detail;
  // Display the clicked position.
  map.moveToPosition(position);
});
```

### Map marker usage.

#### Display simple circle marker.  

![simple-circle-marker.png](https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/simple-circle-marker.png)

Example.  

```js
<google-map id="map" zoom="12" center="35.658584,139.7454316" theme="dark"></google-map>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>

import 'google-map-extension';

// Map element.
const map = document.querySelector('#map');

// Marker color.
const Color = {
  blue: 'rgb(0,122,255)',
  green: 'rgb(52,199,89)',
  indigo: 'rgb(88,86,214)',
  orange: 'rgb(255,149,0)',
  pink: 'rgb(255,45,85)',
  purple: 'rgb(175,82,222)',
  red: 'rgb(255,59,48)',
  teal: 'rgb(90,200,250)',
  yellow: 'rgb(255,204,0)'
};

// Add a marker.
const marker = await map.addMarker({
  color: Color.blue,
  size: 60,
  position: { lat: 35.650584, lng: 139.7454316 }
});
```

#### Display custom image marker.  

![simple-circle-marker.png](https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/custom-image-marker.png)

Example.  

```js
<google-map id="map" zoom="12" center="35.658584,139.7454316" theme="dark"></google-map>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>

import 'google-map-extension';

// Map element.
const map = document.querySelector('#map');

// Marker color.
const Color = {
  blue: 'rgb(0,122,255)',
  green: 'rgb(52,199,89)',
  indigo: 'rgb(88,86,214)',
  orange: 'rgb(255,149,0)',
  pink: 'rgb(255,45,85)',
  purple: 'rgb(175,82,222)',
  red: 'rgb(255,59,48)',
  teal: 'rgb(90,200,250)',
  yellow: 'rgb(255,204,0)'
};

// Add a marker.
const marker = await map.addMarker({
  image: 'sample.png',
  color: Color.blue,
  size: 60,
  position: { lat: 35.650584, lng: 139.7454316 }
});
```

#### Move the marker.

Example.  

```js
<google-map id="map" zoom="12" center="35.658584,139.7454316" theme="dark"></google-map>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>

import 'google-map-extension';

// Map element.
const map = document.querySelector('#map');

// Get position when map is clicked.
map.on('click.map', event => {
  // longitude latitude.
  const position = event.detail;
  // Move the marker to the clicked position.
  marker.moveToPosition(position);
});

// Add a marker.
const marker = await map.addMarker();
```

#### Remove marker.  

Example.  

```js
<google-map id="map" zoom="12" center="35.658584,139.7454316" theme="dark"></google-map>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>

import 'google-map-extension';

// Map element.
const map = document.querySelector('#map');

// Add a marker.
const marker = await map.addMarker();

// Remove marker.
map.removeMarker(marker);
```

### Google Maps General Utility Usage

![utils.png](https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/utils.png)

#### Get latitude / longitude from address.

Example.  

```js
import { GoogleMapUtils } from 'google-map-extension';

// Convert address to latitude / longitude.
const latlng = await GoogleMapUtils.getLatLngFromAddress('1-chōme-11-21 Mita, Minato City, Tōkyō-to 108-0073, Japan');
console.log(latlng); // { lat: 35.653172159299146, lng: 139.73969810581877 }
```

#### Get the address from latitude and longitude.

Example.  

```js
import { GoogleMapUtils } from 'google-map-extension';

// Convert address to latitude / longitude.
const address = await GoogleMapUtils.getAddressFromLatLng({ lat: 35.653172159299146, lng: 139.73969810581877 });
console.log(address)// '1-chōme-11-21 Mita, Minato City, Tōkyō-to 108-0073, Japan'
```

## License

[MIT licensed](./LICENSE.txt)