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
     * @param  {number}       lat
     * @param  {number}       lng
     * @return {GoogleMapCircleMarker}
     */
    moveToPosition(latlng: google.maps.LatLng | google.maps.LatLngLiteral): GoogleMapCircleMarker;
    /**
     * Remove marker.
     *
     * @return {void}
     */
    remove(): void;
}
