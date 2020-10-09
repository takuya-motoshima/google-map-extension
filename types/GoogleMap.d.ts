/// <reference types="googlemaps" />
import './style/map.css';
import GoogleMapCircleMarker from '~/GoogleMapCircleMarker';
import GoogleMapCircleMarkerOption from '~/interface/GoogleMapCircleMarkerOption';
declare class Map extends HTMLElement {
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
     * @return {Map}
     */
    removeMarker(marker: GoogleMapCircleMarker): Map;
    /**
     * Add event listener
     *
     * @param  {string}           type
     * @param  {() => void}       listener
     * @param  {{ once: boolen }} options.once
     * @return {this}
     */
    on(type: string, listener: (event?: Event) => void, option?: {
        once: boolean;
    }): Map;
    /**
     * Remove event listener
     *
     * @param  {string}     type
     * @param  {() => void} listener
     * @return {this}
     */
    off(type: string, listener: (event?: Event) => void): Map;
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
export default Map;
