/// <reference types="googlemaps" />
import './style/googleMap.css';
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
     * Add theme control.
     *
     * @return {void}
     */
    private addThemeControl;
}
export default GoogleMap;
