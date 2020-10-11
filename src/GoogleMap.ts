import './style/map.css';
import themes from '~/theme';
import { Cookie } from 'js-shared';
import GoogleMapCircleMarker from '~/GoogleMapCircleMarker';
import GoogleMapCircleMarkerOption from '~/interface/GoogleMapCircleMarkerOption';
import GoogleMapOption from '~/interface/GoogleMapOption';

class GoogleMap extends HTMLElement {

  public map: google.maps.Map;
  private theme!: HTMLSelectElement;

  /**
   * constructor
   */
  constructor() {
    super();

    // Map options
    const option: GoogleMapOption = {
      zoom: 13,
      center: { lat: 0, lng: 0 },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: undefined,
      // disableDefaultUI: true,
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      clickableIcons: false
    };
    if (this.getAttribute('zoom')) option.zoom = parseInt(this.getAttribute('zoom') as string, 10);
    if (this.getAttribute('center')) {
      const [ lat, lng ] = (this.getAttribute('center') ? this.getAttribute('center') : '0,0')!.split(',');
      option.center = { lat: parseFloat(lat), lng: parseFloat(lng) };
    }
    if (this.getAttribute('type')) option.mapTypeId = this.getAttribute('type') as google.maps.MapTypeId;
    // @ts-ignore
    if (this.getAttribute('theme') && this.getAttribute('theme') in themes) option.styles = themes[this.getAttribute('theme')] as google.maps.MapTypeStyle[];
    if (this.getAttribute('zoom-control') !== null) option.zoomControl = true;
    if (this.getAttribute('streetview-control') !== null) option.streetViewControl = true;
    if (this.getAttribute('fullscreen-control') !== null) option.fullscreenControl = true;

    // Initialize map
    this.map = new google.maps.Map(this, option);

    // Add theme selection UI if theme control option is enabled.
    if (this.getAttribute('theme-control') !== null) {
      this.addThemeControl();
      // Select the theme stored in the cookie.
      if (Cookie.get('theme') && (Cookie.get('theme') === 'standard' || Cookie.get('theme') in themes)) {
        // @ts-ignore
        const styles = Cookie.get('theme') !== 'standard' ? themes[Cookie.get('theme')] as google.maps.MapTypeStyle[] : undefined;
        this.map.setOptions({ styles });
        const option = this.theme.querySelector(`option[value="${Cookie.get('theme')}"`) as HTMLOptionElement;
        option.setAttribute('selected', 'selected');
      }
    }

    // Returns the latitude and longitude you clicked when you clicked on the map.
    // this.map.addListener('click', event => this.invoke('click.map', { lat: event.latLng.lat(), lng: event.latLng.lng() }));
  }

  /**
   * Called every time the element is inserted into the DOM.
   * 
   * @return {void}
   */
  protected connectedCallback(): void {
    // If the display is inline, change it to a block.
    this.classList.add('google-map');
    if (getComputedStyle(this).display === 'inline') this.style.display = 'block';
  }

  /**
   * Define elements
   *
   * @return {this}
   */
  public static define(): any {
    if (window.customElements.get('google-map')) return this;
    window.customElements.define('google-map', this);
    return this;
  }

  /**
   * Generate elements
   *
   * @return {this}
   */
  public static createElement(): any {
    this.define();
    return new (window.customElements.get('google-map'))()
  }

  /**
   * Add a circular marker to Google Maps
   * 
   * @param  {GoogleMapCircleMarkerOption} option
   * @return {GoogleMapCircleMarker}
   */
  public async addMarker(option? : GoogleMapCircleMarkerOption): Promise<GoogleMapCircleMarker> {
    // Returns a google map marker object.
    const circlemarker = new GoogleMapCircleMarker(this.map);
    await circlemarker.attach(option);
    return circlemarker;
  }

  /**
   * Remove marker.
   * 
   * @param  {GoogleMapCircleMarker} marker
   * @return {GoogleMap}
   */
  public removeMarker(marker : GoogleMapCircleMarker): GoogleMap {
    marker.remove();
    // @ts-ignore
    marker = null;
    return this;
  }

  /**
   * Zoom to fit all longitude/latitude or markers.
   * 
   * @param  {google.maps.LatLng[]|google.maps.LatLngLiteral[]|google.maps.Marker[]|GoogleMapCircleMarker[]} positions
   * @return {GoogleMap}
   */
  public zoomToFitAllPositions(positions: google.maps.LatLng[]|google.maps.LatLngLiteral[]|google.maps.Marker[]|GoogleMapCircleMarker[]): GoogleMap {
    const bounds = new google.maps.LatLngBounds();
    for (let position of positions) {
      if (position instanceof google.maps.LatLng) bounds.extend(position);
      else if (position instanceof google.maps.Marker) bounds.extend(position.getPosition() as google.maps.LatLng);
      else if (position instanceof GoogleMapCircleMarker) bounds.extend((position as GoogleMapCircleMarker).getPosition());
      else bounds.extend(position as google.maps.LatLngLiteral);
    }
    this.map.fitBounds(bounds);
    return this;
  }

  /**
   * Move the map position.
   * 
   * @param  {google.maps.LatLng|google.maps.LatLngLiteral} latlng
   * @param  {boolean}                                      zoomToCurrentPosition
   * @return {GoogleMap}
   */
  public moveToPosition(latlng: google.maps.LatLng|google.maps.LatLngLiteral, zoomToCurrentPosition: boolean = true): GoogleMap {
    if (zoomToCurrentPosition) this.map.panTo(latlng);
    else this.map.setCenter(latlng);
    return this;
  }

  /**
   * Add event listener
   * 
   * @param  {string}           type
   * @param  {() => void}       listener
   * @param  {{ once: boolen }} options.once
   * @return {GoogleMap}
   */
   public on(type: string, listener: (event?: Event) => void, option: { once: boolean } = { once: false }): GoogleMap {
    this.addEventListener(type, listener, option);
    return this;
  }

  /**
   * Remove event listener
   * 
   * @param  {string}     type
   * @param  {() => void} listener
   * @return {GoogleMap}
   */
   public off(type: string, listener: (event?: Event) => void): GoogleMap {
    this.removeEventListener(type, listener);
    return this;
  }

  /**
   * Call event listener
   * 
   * @param  {string} type
   * @param  {Object}     detail
   * @return {void}
   */
  private invoke(type: string, detail: {} = {}): void {
    const event = new CustomEvent(type, { detail });
    this.dispatchEvent(event);
  }

  /**
   * Add theme control.
   * 
   * @return {void}
   */
  private addThemeControl(): void {
    this.theme = document.createElement('select') as HTMLSelectElement;
    this.theme.classList.add('google-map-theme-control');
    for (let value of [ 'standard', ...Object.keys(themes) ]) {
      const option = document.createElement('option');
      option.textContent = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
      option.value = value;
      this.theme.appendChild(option);
    }
    this.theme.addEventListener('change', (event: Event) => {
      const value = (<HTMLSelectElement>event.target).value;
      // @ts-ignore
      this.map.setOptions({ styles: value !== 'standard' ? themes[value] as google.maps.MapTypeStyle[] : undefined });
      Cookie.set('theme', value);
    });
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.theme);
  }
}

GoogleMap.define();
export default GoogleMap;