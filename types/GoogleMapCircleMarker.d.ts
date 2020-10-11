/// <reference types="googlemaps" />
import GoogleMapCircleMarkerOption from '~/interface/GoogleMapCircleMarkerOption';
export default class GoogleMapCircleMarker {
    map: google.maps.Map;
    marker: google.maps.Marker;
    /**
     * constructor
     *
     * @param {google.maps.Map}    map
     */
    constructor(map: google.maps.Map);
    /**
     * Attach a marker to the map
     *
     * @param {GoogleMapCircleMarkerOption} option
     */
    attach(option?: GoogleMapCircleMarkerOption): Promise<void>;
    /**
     * Move the marker to the specified position.
     *
     * @param  {google.maps.LatLng|google.maps.LatLngLiteral} latlng
     * @param  {boolean}                                      zoomToCurrentPosition
     * @return {GoogleMapCircleMarker}
     */
    moveToPosition(latlng: google.maps.LatLng | google.maps.LatLngLiteral, zoomToCurrentPosition?: boolean): GoogleMapCircleMarker;
    /**
     * Returns the latitude and longitude of the marker position..
     *
     * @return {google.maps.LatLngLiteral}
     */
    getPosition(): google.maps.LatLngLiteral;
    /**
     * Switch the visible state of the marker.
     *
     * @param  {boolean}               visible
     * @return {GoogleMapCircleMarker}
     */
    setVisible(visible: boolean): GoogleMapCircleMarker;
    /**
     * Remove marker.
     *
     * @return {void}
     */
    remove(): void;
}
