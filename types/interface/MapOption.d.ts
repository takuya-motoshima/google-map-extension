/// <reference types="googlemaps" />
export default interface  {
    zoom: number;
    center: google.maps.LatLng | google.maps.LatLngLiteral;
    mapTypeId: google.maps.MapTypeId;
    styles?: google.maps.MapTypeStyle[] | undefined;
    zoomControl: boolean;
    streetViewControl: boolean;
    mapTypeControl: boolean;
    fullscreenControl: boolean;
    clickableIcons: boolean;
}
