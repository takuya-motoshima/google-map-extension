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
