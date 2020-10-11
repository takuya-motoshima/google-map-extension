/// <reference types="googlemaps" />
import './style/map.css';
import GoogleMapCircleMarker from '~/GoogleMapCircleMarker';
import GoogleMapCircleMarkerOption from '~/interface/GoogleMapCircleMarkerOption';
declare class GoogleMap extends HTMLElement {
    map: google.maps.Map;
    private theme;
    /**
     * constructor
     */
    constructor();
    /**
     * Called every time the element is inserted into the DOM.
     *
     * @return {void}
     */
    protected connectedCallback(): void;
    /**
     * Define elements
     *
     * @return {this}
     */
    static define(): any;
    /**
     * Generate elements
     *
     * @return {this}
     */
    static createElement(): any;
    /**
     * Add a circular marker to Google Maps
     *
     * @param  {GoogleMapCircleMarkerOption} option
     * @return {GoogleMapCircleMarker}
     */
    addMarker(option?: GoogleMapCircleMarkerOption): Promise<GoogleMapCircleMarker>;
    /**
     * Remove marker.
     *
     * @param  {GoogleMapCircleMarker} marker
     * @return {GoogleMap}
     */
    removeMarker(marker: GoogleMapCircleMarker): GoogleMap;
    /**
     * Zoom to fit all longitude/latitude or markers.
     *
     * @param  {google.maps.LatLng[]|google.maps.LatLngLiteral[]|google.maps.Marker[]|GoogleMapCircleMarker[]} positions
     * @return {GoogleMap}
     */
    zoomToFitAllPositions(positions: google.maps.LatLng[] | google.maps.LatLngLiteral[] | google.maps.Marker[] | GoogleMapCircleMarker[]): GoogleMap;
    /**
     * Move the map position.
     *
     * @param  {google.maps.LatLng|google.maps.LatLngLiteral} latlng
     * @param  {boolean}                                      zoomToCurrentPosition
     * @return {GoogleMap}
     */
    moveToPosition(latlng: google.maps.LatLng | google.maps.LatLngLiteral, zoomToCurrentPosition?: boolean): GoogleMap;
    /**
     * Add event listener
     *
     * @param  {string}           type
     * @param  {() => void}       listener
     * @param  {{ once: boolen }} options.once
     * @return {GoogleMap}
     */
    on(type: string, listener: (event?: Event) => void, option?: {
        once: boolean;
    }): GoogleMap;
    /**
     * Remove event listener
     *
     * @param  {string}     type
     * @param  {() => void} listener
     * @return {GoogleMap}
     */
    off(type: string, listener: (event?: Event) => void): GoogleMap;
    /**
     * Call event listener
     *
     * @param  {string} type
     * @param  {Object}     detail
     * @return {void}
     */
    private invoke;
    /**
     * Add theme control.
     *
     * @return {void}
     */
    private addThemeControl;
}
export default GoogleMap;
