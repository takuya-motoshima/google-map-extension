/// <reference types="googlemaps" />
import CircleMarkerOption from '~/interface/CircleMarkerOption';
export default class CircleMarker {
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
     * @param {CircleMarkerOption} option
     */
    attach(option?: CircleMarkerOption): Promise<void>;
    /**
     * Move the marker to the specified position.
     *
     * @param  {number}       lat
     * @param  {number}       lng
     * @return {CircleMarker}
     */
    moveToPosition(latlang: google.maps.LatLng | google.maps.LatLngLiteral): CircleMarker;
    /**
     * Remove marker.
     *
     * @return {void}
     */
    remove(): void;
}
