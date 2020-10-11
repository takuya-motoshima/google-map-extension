import GoogleMapCircleMarkerOption from '~/interface/GoogleMapCircleMarkerOption';
import { Template } from 'js-shared';

export default class GoogleMapCircleMarker {

  private map: google.maps.Map;
  public marker!: google.maps.Marker;
  private info!: google.maps.InfoWindow;

  /**
   * constructor
   * 
   * @param {google.maps.Map}    map
   */
  constructor(map: google.maps.Map) {
    this.map = map;
  }

  /**
   * Attach a marker to the map
   * 
   * @param {GoogleMapCircleMarkerOption} option
   */
  public async attach(option? : GoogleMapCircleMarkerOption) {
    // Initialize options.
    option = Object.assign({
      position: {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng()
      },
      size: 50,
      visible: true,
      image: undefined,
      color: 'rgb(0,122,255)',
      info: undefined
    }, option || {});

    // Marker HTML.
    let html = Template.compile(`
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="48" height="48" viewBox="0 0 48 48">
        <style>@keyframes inflate{from{stroke-width:20px;stroke-opacity:1;transform:scale(.3)}to{stroke-width:0;stroke-opacity:0;transform:scale(2)}}</style>
        <g>
          <circle style="transform-origin: 50% 50%; transform-box: fill-box; animation: inflate 1.5s infinite;" cx="50%" cy="50%" r="25%" fill="rgb(255,255,255)" stroke="{{color}}" fill-opacity="0"></circle>
          <circle cx="50%" cy="50%" r="25%" fill="{{color}}"></circle>
          <circle cx="50%" cy="50%" r="12.5%" fill="rgb(255,255,255)"></circle>
        </g>
      </svg>`)({ color: option.color });;
    if (option.image) {
      const blob = (await (await fetch(option.image)).blob());
      const base64 = await new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
      const rand = Math.random().toString(36).slice(2);
      html = Template.compile(`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="48" height="48" viewBox="0 0 48 48">
          <style>@keyframes inflate{from{stroke-width:20px;stroke-opacity:1;transform:scale(.3)}to{stroke-width:0;stroke-opacity:0;transform:scale(2)}}</style>
          <defs>
            <pattern id="{{rand}}" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 48 48">
              <image x="0%" y="0%" width="48" height="48" xlink:href="{{base64}}"></image>
            </pattern>
          </defs>
          <g>
            <circle style="transform-origin: 50% 50%; transform-box: fill-box; animation: inflate 1.5s infinite;" cx="50%" cy="50%" r="25%" fill="rgb(255,255,255)" stroke="{{color}}" fill-opacity="0"></circle>
            <!-- <circle cx="50%" cy="50%" r="27%" fill="rgba(28,28,28,1)"></circle> -->
            <circle cx="50%" cy="50%" r="25%" fill="url(#{{rand}})"></circle>
          </g>
        </svg>`)({ rand, base64, color: option.color });
    }

    // Show markers on the map.
    this.marker = new google.maps.Marker({
      map: this.map,
      position: option.position,
      visible: option.visible,
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(html),
        scaledSize: new google.maps.Size(option.size * 2, option.size * 2)
      },
      draggable: false,
      clickable: true,
      optimized: false
    });

    // Added marker callout.
    this.info = new google.maps.InfoWindow({
      content: option.info ? `<div class="google-map-info">${option.info}</div>` : undefined,
      maxWidth: 200
    });
    if (this.info.getContent()) this.info.open(this.map, this.marker);
    else this.info.close();

    // Show a callout when the marker is clicked.
    this.marker.addListener('click', () => {
      if (!this.info.getContent()) return;
      this.info.open(this.map, this.marker)
    });
  }

  /**
   * Move the marker to the specified position.
   * 
   * @param  {google.maps.LatLng|google.maps.LatLngLiteral} latlng
   * @param  {boolean}                                      zoomToCurrentPosition
   * @return {GoogleMapCircleMarker}
   */
  public moveToPosition(latlng: google.maps.LatLng|google.maps.LatLngLiteral, zoomToCurrentPosition: boolean = true): GoogleMapCircleMarker {
    this.marker.setPosition(latlng);
    if (zoomToCurrentPosition) {
      this.map.panTo(latlng);
      if (this.marker.getAnimation() !== null) this.marker.setAnimation(null);
      this.marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(() => this.marker.setAnimation(null), 1400);
    }
    return this;
  }

  // /**
  //  * Move the marker to the specified address.
  //  * 
  //  * @param  {string}       address
  //  * @return {GoogleMapCircleMarker}
  //  */
  // public moveToAddress(address: string): GoogleMapCircleMarker {
  //   return this;
  // }

  /**
   * Returns the latitude and longitude of the marker position..
   * 
   * @return {google.maps.LatLngLiteral}
   */
  public getPosition(): google.maps.LatLngLiteral {
    const latlng = this.marker.getPosition() as google.maps.LatLng;
    return {
      lat: latlng.lat(),
      lng: latlng.lng()
    };
  }

  /**
   * Switch the visible state of the marker.
   * 
   * @param  {boolean}               visible
   * @return {GoogleMapCircleMarker}
   */
  public setVisible(visible: boolean): GoogleMapCircleMarker {
    this.marker.setVisible(visible);
    return this;
  }

  /**
   * Remove marker.
   * 
   * @return {void}
   */
  public remove(): void {
    this.marker.setMap(null);
  }

  /**
   * Set the marker balloon text.
   * 
   * @param  {string}                content
   * @return {GoogleMapCircleMarker}
   */
  public setInfo(content: string): GoogleMapCircleMarker {
    this.info.setContent(`<div class="google-map-info">${content}</div>`);
    this.info.open(this.map, this.marker);
    return this;
  }

  /**
   * Clear the marker balloon message.
   * 
   * @return {GoogleMapCircleMarker}
   */
  public clearInfo(): GoogleMapCircleMarker {
    this.info.setContent('');
    this.info.close();
    return this;
  }
}