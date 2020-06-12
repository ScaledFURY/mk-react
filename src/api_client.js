import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

window.Cookies = Cookies;

const COOKIE_NAME="checkoutSessionCookie";


window.resetCookie = () => {
  Cookies.set(COOKIE_NAME, uuidv4(), { expires: 7 });
  window.location.reload();
}

window.showCookie = () => {
  return Cookies.get(COOKIE_NAME);
}

export default class ApiClient {
  constructor(props) {
    this.props = props;
    this.getSessionId();
  }

  getSessionId() {
    this.sessionId = Cookies.get(COOKIE_NAME);
    if (this.sessionId === undefined) {
      this.sessionId = uuidv4();
      Cookies.set(COOKIE_NAME, this.sessionId, { expires: 7 });
    }
  }


  getKlaviyoData() {
    return this.apiRequest(`cart/${this.sessionId}/klaviyo_data`);
  }


  getPixelData() {
    return this.apiRequest(`cart/${this.sessionId}/pixel_data`);
  }

  completeStripeIntent(data) {
    return this.apiRequest(`stripe/${this.sessionId}/complete_intent`, { "method": "POST", "body": JSON.stringify(data) }, {});
  }

  getMeta() {
    return this.apiRequest('meta');
  }

  setupStripeIntent() {
    return this.apiRequest(`stripe/${this.sessionId}/create_intent`);
  }

  charge(ccData) {
    return this.apiRequest(`cart/${this.sessionId}/charge`, { "method": "POST", "body": JSON.stringify(ccData) }, {});

  }

  setCountry(country) {
    return this.apiRequest(`cart/${this.sessionId}/set_country`, { "method": "POST", "body": JSON.stringify({ "country": country }) }, {});
  }

  toggleAddon(variantId) {
    return this.apiRequest(`cart/${this.sessionId}/toggle_addon`, { "method": "POST", "body": JSON.stringify({ variantId }) }, {});
  }

  getReceipt(props) {
    return this.apiRequest(`cart/${this.sessionId}/receipt`, {}, this.props);
  }


  getCart(props) {
    return this.apiRequest(`cart/${this.sessionId}`, {}, this.props);
  }

  acceptUpsell(data) {
    return this.apiRequest(`cart/${this.sessionId}/accept_upsell`, { "method": "POST", "body": JSON.stringify(data) }, {});
  }

  setCurrentVariant(variantId) {
    return this.apiRequest(`cart/${this.sessionId}/set_current_variant`, { "method": "POST", "body": JSON.stringify({ "variantId": variantId }) }, {});
  }

  applyCoupon(code) {
    return this.apiRequest(`cart/${this.sessionId}/apply_coupon`, { "method": "POST", "body": JSON.stringify({ "code": code }) }, {});
  }

  async apiRequest(endPoint, opts={}, queryParams={}) {

    const url = new URL(`https://${this.props.apiEndpoint}/v1/${endPoint}`);
    url.search = new URLSearchParams(queryParams).toString();
    const settings = Object.assign({
        method: 'get',
        mode: 'cors',
        headers: {
          'Content-Type': "application/json"
        },
        cache: 'no-cache',
    }, opts);

    const response = await fetch(url, settings);
    return await response.json();
  }
}
