const round = (val, precision = 2) => {
  const scalar = 10**precision;
  return Math.round(val * scalar) / scalar;
};


class LocalCart {

  constructor(state = null) {
    this.state = state || {
      lineItems: [],
      taxRate: 0,
      taxDescription: "",
      subTotal: 0,
      shippingSurcharge: 0,
      shippingTotal: 0,
      taxTotal: 0,
      discountType: "",
      discountValue: 0,
      discountTotal: 0,
      total: 0
    };
  }

  toJSON() {
    return JSON.stringify(this.asJSON());
  }

  asJSON() {
    return this.state;
  }

  calculateSubTotal() {
    this.state.subTotal = 0.0;
    this.state.shippingTotal = this.state.shippingSurcharge;
    this.state.lineItems.forEach(li => {
      const lineSubtotal = li.price * li.quantity;
      const lineShipping = li.shippingRatePerItem * li.quantity;
      this.state.subTotal += lineSubtotal;
      this.state.shippingTotal += lineShipping;
    });
  }

  calculateTax() {
    if (this.state.taxRate != 0) {
      this.state.taxTotal = (this.state.subTotal - this.state.discountTotal) * this.state.taxRate;
      this.state.taxTotal = round(this.state.taxTotal);
    } else {
      this.state.taxTotal = 0;

    }
  }

  calculateDiscount() {
    this.state.discountTotal = 0;

    if (this.state.discountType === "fixed_amount") {
      this.state.discountTotal = this.state.discountValue;
    }

    if (this.state.discountType === "percentage") {
      this.state.discountTotal = this.state.subTotal * this.state.discountValue;
      this.state.discountTotal = round(this.state.discountTotal);
    }

    if (this.state.discountTotal > this.state.subTotal) {
      this.state.discountTotal = this.state.subTotal;
    }

  }

  hasVariant(variantId) {
    return this.state.lineItems.map(x => parseFloat(x.variantId)).indexOf(parseFloat(variantId)) > -1;
  }

  removeLineItem(variantId) {
    this.state.lineItems = this.state.lineItems.filter(x => parseFloat(x.variantId) != parseFloat(variantId));
    this.calculate();
  }

  clearLineItems() {
    this.state.lineItems = [];
    this.calculate();
  }

  calculate() {
    this.calculateSubTotal();
    this.calculateDiscount();
    this.calculateTax();
    this.state.total = this.state.subTotal - this.state.discountTotal + this.state.taxTotal + this.state.shippingTotal
    this.state.taxableAmount = this.state.total - this.state.taxTotal;
    this.state.taxableAmount = round(this.state.taxableAmount);
    this.state.total         = round(this.state.total);
    this.state.subTotal      = round(this.state.subTotal);
    this.state.discountTotal = round(this.state.discountTotal);
    this.state.taxTotal      = round(this.state.taxTotal);
    this.state.shippingTotal = round(this.state.shippingTotal);

  }

  setShippingSurcharge(amount) {
    this.state.shippingSurcharge = amount;
    this.calculate();
  }

  setDiscount(discountType, discountValue) {
    this.state.discountType = discountType;
    this.state.discountValue = discountValue;
    this.calculate();
  }

  addLineItem(variantId, title, subtitle, price, quantity, shippingRatePerItem) {
    this.state.lineItems.push({ variantId, title, subtitle, price, quantity, shippingRatePerItem });
    this.calculate();
  }

  setTax(taxDescription, taxRate) {
    this.state.taxDescription = taxDescription;
    this.state.taxRate = taxRate;
    this.calculate();
  }

}

LocalCart.fromJSON = (jsonStr) => {
  return new LocalCart(JSON.parse(jsonStr));
}

export default LocalCart;
//module.exports = LocalCart;

/*
const lc = new LocalCart();

lc.addLineItem(1234, "Main Title", "SubTitle", 19.95, 5, 3.923423412349);

//console.log(lc.state);
lc.setTax("Tax", 0.10);
//console.log(lc.state);
lc.setDiscount("percent", 0.10);
//console.log(lc.state);
lc.setDiscount("fixed_amount", 10.0);
//console.log(lc.state);


const lc2 = LocalCart.fromJSON(lc.toJSON());
console.log(lc2.state);

console.log("Has Variant");
console.log(lc2.hasVariant(1234));

lc2.setShippingSurcharge(50);
console.log(lc2.state);

lc2.removeLineItem(1234);
console.log(lc2.state);

console.log("Has Variant");
console.log(lc2.hasVariant(1234));
*/