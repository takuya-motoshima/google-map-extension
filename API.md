# Google Map element

## Attributes
- __zoom__  
    The initial Map zoom level.  
    The minimum is 1, the maximum is 21, and the default is 13.

    <table>
        <thead>
            <tr><th>ZoomLevel</th><th>Preview</th></tr>
        </thead>
        <tbody>
            <tr><td>1</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom1.png" height="150"></td></tr>
            <tr><td>2</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom2.png" height="150"></td></tr>
            <tr><td>3</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom3.png" height="150"></td></tr>
            <tr><td>4</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom4.png" height="150"></td></tr>
            <tr><td>5</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom5.png" height="150"></td></tr>
            <tr><td>6</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom6.png" height="150"></td></tr>
            <tr><td>7</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom7.png" height="150"></td></tr>
            <tr><td>8</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom8.png" height="150"></td></tr>
            <tr><td>9</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom9.png" height="150"></td></tr>
            <tr><td>10</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom10.png" height="150"></td></tr>
            <tr><td>11</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom11.png" height="150"></td></tr>
            <tr><td>12</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom12.png" height="150"></td></tr>
            <tr><td>13</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom13.png" height="150"></td></tr>
            <tr><td>14</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom14.png" height="150"></td></tr>
            <tr><td>15</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom15.png" height="150"></td></tr>
            <tr><td>16</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom16.png" height="150"></td></tr>
            <tr><td>17</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom17.png" height="150"></td></tr>
            <tr><td>18</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom18.png" height="150"></td></tr>
            <tr><td>19</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom19.png" height="150"></td></tr>
            <tr><td>20</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom20.png" height="150"></td></tr>
            <tr><td>21</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/zoom21.png" height="150"></td></tr>
        </tbody>
    </table>

    Example.  

    ```js
    <google-map zoom="12"></google-map>
    ```

- __center__  
    Specify the latitude and longitude of the initial position separated by commas.  
    The default is 0,0.

    Example.  

    ```js
    <google-map center="35.658584,139.7454316"></google-map>
    ```

- __type__  
    The initial Map mapTypeId. Defaults to 'roadmap'.  

    <table>
        <thead>
            <tr><th>ZoomLevel</th><th>Description</th><th>Preview</th></tr>
        </thead>
        <tbody>
            <tr><td>roadmap</td><td>Displays the default road map view.</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/type-roadmap.png" height="150"></td></tr>
            <tr><td>satellite</td><td>Displays Google Earth satellite images.</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/type-satellite.png" height="150"></td></tr>
            <tr><td>hybrid</td><td>Displays a mixture of normal and satellite views.</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/type-hybrid.png" height="150"></td></tr>
            <tr><td>terrain</td><td>Displays a physical map based on terrain information.</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/type-terrain.png" height="150"></td></tr>
        </tbody>
    </table>

    Example.  

    ```js
    <google-map type="satellite"></google-map>
    ```

- __theme__  

    The initial Map theme. Defaults to 'standard'.  

    <table>
        <thead>
            <tr><th>Theme</th><th>Preview</th></tr>
        </thead>
        <tbody>
            <tr><td>standard</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/theme-standard.png" height="150"></td></tr>
            <tr><td>silver</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/theme-silver.png" height="150"></td></tr>
            <tr><td>retro</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/theme-retro.png" height="150"></td></tr>
            <tr><td>dark</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/theme-dark.png" height="150"></td></tr>
            <tr><td>night</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/theme-night.png" height="150"></td></tr>
            <tr><td>aubergine</td><td><img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/theme-aubergine.png" height="150"></td></tr>
        </tbody>
    </table>

    Example.  

    ```js
    <google-map theme="dark"></google-map>
    ```

- __zoom-control__  
    Adding this attribute will display Zoom control on the map.

    Example.  

    ```js
    // Enable zoom control
    <google-map zoom-control></google-map>
    ```

- __streetview-control__  
    Adding this attribute will display Street View control on the map.

    Example.  

    ```js
    // Enable streetview control
    <google-map streetview-control></google-map>
    ```

- __fullscreen-control__  
    Adding this attribute will display Fullscreen control on the map.

    Example.  

    ```js
    // Enable fullscreen control
    <google-map fullscreen-control></google-map>
    ```

- __theme-control__  
    Adding this attribute will display Theme control on the map.

    <img src="https://raw.githubusercontent.com/takuya-motoshima/google-map-extension/master/screencap/control-theme.png" height="150">

    Example.  

    ```js
    // Enable theme control
    <google-map theme-control></google-map>
    ```

## Events

### click.map
Fires when the map is clicked.  
You can get the latitude and longitude of the clicked position..

```js
<google-map id="map" zoom="12" center="35.658584,139.7454316" theme="dark"></google-map>

// Map element.
const map = document.querySelector('#map');

// Add a marker.
const marker = await map.addMarker();

// Get position when map is clicked.
map.on('click.map', event => {
    // longitude latitude.
    const position = event.detail;
    // Move the marker to the clicked position.
    marker.moveToPosition(position);
});
```

## Properties
- __map__: google.maps.Map  
    A google.maps.Map object.  
    See [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/reference/map) for details.

## Methods

### addMarker()
Open the camera.

###### Syntax
```js
map.addMarker(option?: {
  position?: {
    lat: number,
    lng: number
  },
  size?: number,
  visible?: boolean,
  image?: string,
  color?: string,
  info?: string
}): Promise<GoogleMapCircleMarker>
```

###### Parameters
- __position__: { lat: number lng: number }  
    Initial display position of marker.  
    The default is the center of the currently displayed map.

- __size__: number  
    The display size of the marker.  
    The unit is pixels.  
    The default is 50px.

- __visible__: boolean  
    It is the initial visible state when it is added.  
    The default is true (visible).

- __image__: string  
    The URL of the image to be displayed on the marker.  
    The default is undefined (no image).

- __color__: string  
    The color of the marker.  
    The default is blue (rgb(0,122,255)).

- __info__: string  
    The text to display in the marker balloon.  
    The default is none (undefined).

###### Return
Returns a GoogleMapCircleMarker object.  
See [GoogleMapCircleMarker class.](#GoogleMapCircleMarker-class.) for details.

### removeMarker()
Remove marker.

###### Syntax
```js
map.removeMarker(marker : GoogleMapCircleMarker): GoogleMap
```

###### Parameters
- __marker__: GoogleMapCircleMarker  
    Marker object you want to delete.

###### Return
Returns a GoogleMap element.

### zoomToFitAllPositions()
Zoom to fit all longitude/latitude or marker.

###### Syntax
```js
map.zoomToFitAllPositions(positions: google.maps.LatLng[] |
                                     google.maps.LatLngLiteral[] |
                                     google.maps.Marker[] |
                                     GoogleMapCircleMarker[]): Map
```

###### Parameters
- __positions__: google.maps.LatLng[]|google.maps.LatLngLiteral[]|google.maps.Marker[]|GoogleMapCircleMarker[]  

###### Return
Returns a GoogleMap element.

### moveToPosition()
Move the marker to the specified position.

###### Syntax
```js
map.moveToPosition(latlang: google.maps.LatLng|google.maps.LatLngLiteral, zoomToCurrentPosition: boolean = true): GoogleMap
```

###### Parameters
- __latlang__: google.maps.LatLng|google.maps.LatLngLiteral  
    The latitude and longitude of the destination.

- __zoomToCurrentPosition__: boolean  
    If true, zooms to the destination position.  
    The default is true.

###### Return
Returns a GoogleMap object.

# GoogleMapCircleMarker class.

Marker object to display on the map.  

## Methods

### moveToPosition()
Move the marker to the specified position.

###### Syntax
```js
marker.moveToPosition(latlang: google.maps.LatLng|google.maps.LatLngLiteral, zoomToCurrentPosition: boolean = true): GoogleMapCircleMarker
```

###### Parameters
- __latlang__: google.maps.LatLng|google.maps.LatLngLiteral  
    The latitude and longitude of the display position of the marker.

- __zoomToCurrentPosition__: boolean  
    If true, zoom to the position of the marker after moving.  
    The default is true.

###### Return
Returns a GoogleMapCircleMarker object.

### getPosition()
Returns the latitude and longitude of the marker position..

###### Syntax
```js
marker.getPosition(): google.maps.LatLngLiteral
```

###### Return
Returns a google.maps.LatLngLiteral object with latitude and longitude set.

### setVisible()
Switch the visible state of the marker.

###### Syntax
```js
marker.setVisible(visible: boolean): GoogleMapCircleMarker
```

###### Parameters
- __visible__: boolean  
    Set true to show the marker, false to hide it.

###### Return
Returns a GoogleMapCircleMarker object.

### setInfo()
Set the marker balloon text.

###### Syntax
```js
marker.setInfo(content: string): GoogleMapCircleMarker
```

###### Parameters
- __content__: string  
    The text to display in the balloon.  
    You can also set the HTML code.

###### Return
Returns a GoogleMapCircleMarker object.

### clearInfo()
Clear the marker balloon message.

###### Syntax
```js
marker.clearInfo(): GoogleMapCircleMarker
```

###### Return
Returns a GoogleMapCircleMarker object.

# GoogleMapUtils class.

General purpose map utility.  

## Methods

### getCurrentPosition()
Returns the current latitude and longitude.

###### Syntax
```js
GoogleMapUtils.getCurrentPosition(option?: { timeout?: number, maximumAge?: number }): Promise<google.maps.LatLngLiteral>
```

###### Parameters
- __timeout__: number  
    integer (milliseconds) - amount of time before the error callback is invoked, if 0 it will never invoke.  
    The default is 5000.

- __maximumAge__: number  
    integer (milliseconds) | infinity - maximum cached position age.  
    The default is 0.

###### Return
Returns a google.maps.LatLngLiteral object with the current position set.

### getLatLngFromAddress()
Get latitude / longitude from address.

###### Syntax
```js
GoogleMapUtils.getLatLngFromAddress(address: string): Promise<google.maps.LatLngLiteral>
```

###### Parameters
- __address__: string  
    Address string.

###### Return
Returns a google.maps.LatLngLiteral object of latitude and longitude obtained based on the address.

### getAddressFromLatLng()
Get the address from latitude and longitude.

###### Syntax
```js
GoogleMapUtils.getAddressFromLatLng(latlng: google.maps.LatLng|google.maps.LatLngLiteral): Promise<string|undefined>
```

###### Parameters
- __latlng__: google.maps.LatLng|google.maps.LatLngLiteral  
    Latitude and longitude you want to find.

###### Return
Returns the address obtained based on latitude and longitude.

### computeDistanceBetween()
Returns the distance, in meters, between two LatLngs.

###### Syntax
```js
GoogleMapUtils.computeDistanceBetween(
  from: google.maps.LatLng|google.maps.LatLngLiteral,
  to: google.maps.LatLng|google.maps.LatLngLiteral
): number
```

###### Parameters
- __from__: google.maps.LatLng|google.maps.LatLngLiteral  
    From position.

- __to__: google.maps.LatLng|google.maps.LatLngLiteral  
    To position.

###### Return
Returns the distance, in meters, between two LatLngs.
