import './style/googleMap.css';
import themes from '~/theme';
import { Cookie } from 'js-shared';

class GoogleMap extends HTMLElement {

  public map: google.maps.Map;
  private theme!: HTMLSelectElement;

  /**
   * constructor
   */
  constructor() {
    super();

    // Map options
    const option: {
      zoom: number,
      center: google.maps.LatLng | google.maps.LatLngLiteral,
      mapTypeId: google.maps.MapTypeId,
      styles?: google.maps.MapTypeStyle[]|undefined
      // disableDefaultUI: boolean,
      zoomControl: boolean,
      streetViewControl: boolean,
      mapTypeControl: boolean,
      fullscreenControl: boolean,
      clickableIcons: boolean
    } = {
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

    // console.log('option=', option);

    // Initialize map
    this.map = new google.maps.Map(this, option);

    // Add theme selection UI if theme control option is enabled.
    if (this.getAttribute('theme-control') !== null) {
      this.addThemeControl();
      // Select the theme stored in the cookie.
      if (Cookie.get('theme') && Cookie.get('theme') in themes) {
        // @ts-ignore
        this.map.setOptions({ styles: Cookie.get('theme') !== 'standard' ? themes[Cookie.get('theme')] as google.maps.MapTypeStyle[] : undefined });
        const option = this.theme.querySelector(`option[value="${Cookie.get('theme')}"`) as HTMLOptionElement;
        option.setAttribute('selected', 'selected');
      }
    }
  }

  /**
   * Called every time the element is inserted into the DOM.
   * 
   * @return {void}
   */
  protected connectedCallback(): void {
    // If the display is inline, change it to a block.
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
   * Add theme control.
   * 
   * @return {void}
   */
  private addThemeControl(): void {
    this.theme = document.createElement('select') as HTMLSelectElement;
    this.theme.classList.add('theme-control');
    for(let value of [ 'standard', ...Object.keys(themes) ]) {
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