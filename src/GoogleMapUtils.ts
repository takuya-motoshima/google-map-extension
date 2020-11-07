export default class {

  /**
   * Get latitude / longitude from address.
   * 
   * @param  {string}                    address
   * @return {google.maps.LatLngLiteral}
   */
  public static async getLatLngFromAddress(address: string): Promise<google.maps.LatLngLiteral> {
    return new Promise((resolve, reject) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (
        results: google.maps.GeocoderResult[],
        status: google.maps.GeocoderStatus
      ) => {
        if (status !== google.maps.GeocoderStatus.OK) return void reject(new Error(`Geocode was not successful for the following reason: ${status}`));
        const position = results[0].geometry.location;
        resolve({ lat: position.lat(), lng: position.lng() });
      });
    });
  }

  /**
   * Get the address from latitude and longitude.
   * 
   * @param  {google.maps.LatLng|google.maps.LatLngLiteral} latlng
   * @return {Promise<string>}
   */
  public static async getAddressFromLatLng(latlng: google.maps.LatLng|google.maps.LatLngLiteral): Promise<string|undefined> {
    return new Promise((resolve, reject) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: latlng }, (
        results: google.maps.GeocoderResult[],
        status: google.maps.GeocoderStatus
      ) => {
        if (status !== google.maps.GeocoderStatus.OK) return void reject(new Error(`Geocoder failed due to: ${status}`));
        if (!results[0]) return void resolve(undefined);
        const address = results[0].formatted_address;
        resolve(address);
      });
    });
  }

  /**
   * Returns the current latitude and longitude.
   * 
   * @param  {google.maps.LatLng|google.maps.LatLngLiteral} latlng
   * @return {Promise<string>}
   */
  public static async getCurrentPosition(option?: { timeout?: number, maximumAge?: number }): Promise<google.maps.LatLngLiteral> {
    // Initialize options.
    option = Object.assign({
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0}, option || {});
    return await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve({ lat: position.coords.latitude, lng: position.coords.longitude }),
        error => reject(error),
        option
      );
    });
  }

  /**
   * Returns the distance, in meters, between two LatLngs.
   * 
   * @param  {google.maps.LatLng|google.maps.LatLngLiteral} from
   * @param  {google.maps.LatLng|google.maps.LatLngLiteral} to
   * @return {number}
   */
  public static computeDistanceBetween(from: google.maps.LatLng|google.maps.LatLngLiteral, to: google.maps.LatLng|google.maps.LatLngLiteral): number {
    if (!(from instanceof google.maps.LatLng)) from = new google.maps.LatLng(from.lat, from.lng);
    if (!(to instanceof google.maps.LatLng)) to = new google.maps.LatLng(to.lat, to.lng);
    return google.maps.geometry.spherical.computeDistanceBetween(from as google.maps.LatLng, to as google.maps.LatLng);
  }
}