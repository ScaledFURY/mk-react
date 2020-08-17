import config from './config';

const loadSettings = () => {
  const origParams        = {};
  const settings          = {};
  const urlParams         = new URLSearchParams(window.location.search);
  settings.urlCoupon      = urlParams.get('coupon');
  settings.forceVariantId = urlParams.get('forceVariantId');
  settings.resetCookie    = urlParams.get('resetCookie') === 'true';

  settings.checkoutPage   = window.location;

  for (const [key,value] of urlParams.entries()) {
    origParams[key] = value;
  }

  settings.checkoutPageParams  = JSON.stringify(origParams);

  return Object.assign({}, settings, config);

}

export default loadSettings;