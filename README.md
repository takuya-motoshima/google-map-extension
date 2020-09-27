# google-map-extension

Google Map extension.

## Installation

```sh
npm install google-map-extension;
```

## API

[API Documentation](./API.md)

## Changelog

[Changelog](./CHANGELOG.md)

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
  theme-control>
</google-map>

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

## License

[MIT licensed](./LICENSE.txt)