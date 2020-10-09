/// <reference types="googlemaps" />
export default class {
    /**
     * Get latitude / longitude from address.
     *
     * @param  {string}                    address
     * @return {google.maps.LatLngLiteral}
     */
    static getLatLngFromAddress(address: string): Promise<google.maps.LatLngLiteral>;
    /**
     * Get the address from latitude and longitude.
  
     * @param  {google.maps.LatLng|google.maps.LatLngLiteral} latlng
     * @return {Promise<string>}
     */
    static getAddressFromLatLng(latlng: google.maps.LatLng | google.maps.LatLngLiteral): Promise<string | undefined>;
}
