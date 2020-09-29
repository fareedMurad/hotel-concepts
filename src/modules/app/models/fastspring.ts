type Session = {
  coupon?: string;
  products: Product[];
  checkout?: boolean;
  clean?: boolean;
  reset?: boolean;
  secure?: string;
  tags?: any;
  language?: string;
  country?: string;
  paymentContact?: PaymentContact;
};

type CreateSession = {
  coupon?: string;
  products: CreateSessionItem[];
};

type CreateSessionItem = {
  product: string;
  quantity: number;
};

type Product = {
  path: string;
  quantity: number;
};

type PaymentContact = {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  region?: string;
  country?: string;
  postalCode?: number;
  phoneNumber?: string;
};

type StoreBuilder = {
  builder: Builder;
};

type Recipient = {
  email: string;
  firstName: string;
  lastName: string;
  address: {
    addressLine1: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  memo: string;
};

type Builder = {
  /**
   * fastspring.builder.push() takes a Session Object payload as input and applies data to the session. Each call to the fastspring.builder.push() method usually results in an updated order object response from the FastSpring backend. If you registered callback functions when initializing the Library, your functions will be called with corresponding data on each request made. Using callback functions allows you to create a tight integration between platforms.
   */
  push: (session: Session, callback?: (any) => void) => any;
  /**
   * Expects either no input or a session ID obtained after pre-creating a session using the server API.
   */
  checkout: (sessionId?: string | number) => any;
  /**
   * Launches the checkout and attempts to skip the Storefront and send the customer directly to PayPal.
   */
  payment: (method: string, callback?: (any) => void) => void;
  /**
   * When the popup cart is enabled on the Storefront's Settings, this method launches the Popup Storefront and opens the cart directly instead of the checkout page.
   */
  viewCart: (callback?: (any) => void) => void;
  /**
   * Takes coupon code as input, applies it to the cart.
   */
  promo: (code: string | number, callback?: (any) => void) => void;
  /**
   * Takes the customer's postal code as input, and applies it to the session to calculate sales tax (when the order country is the United States). This method allows you to display sales tax amounts for U.S. orders on your page before triggering the checkout.
   */
  postalCode: (callback?: (any) => void) => void;
  /**
   * Takes the customer's GST ID or VAT ID as input, attempts to validate it in conjunction with the customer's country (detected via geo IP location or set by fastspring.builder.country()). If the ID is validated successfully, it is applied to the session, and no VAT or GST is applied.
   */
  taxId: (id: string | number, callback?: (any) => void) => void;
  /**
   * Takes a product ID and quantity as input, updates specified product's quantity in the cart. Example: ('product-path',1)
   */
  update: (pruductId: string, qty: number) => void;
  /**
   * Takes product ID as input, adds the product to cart.
   */
  add: (pruductId: string) => void;
  /**
   * Takes product ID as input, removes the product from the cart.
   */
  remove: (pruductId: string) => void;
  /**
   * Takes one or more key and value pairs as input, applies tag(s) to the session.
   */
  tag: (tag: any) => void;
  /**
   * No input, resets the cart immediately.
   */
  reset: () => void;
  /**
   * No input, resets the cart after redirecting to checkout. This effect lasts until the page is refreshed; for practical intents, it effectively changes "data-continuous" to "false" temporarily.
   */
  clean: () => void;
  /**
   * Takes a secure payload (encrypted or plain text, depending on the storefront state) and secure key as input, applies secure payload to the current session.
   */
  secure: (securePayload: string, secureKey: string) => void;
  /**
   * Takes a secure payload (encrypted or plain text, depending on the Storefront state) and a secure key as input. If the payload contains a customer account id, this method redirects the customer to the account/subscription management page.
   */
  authenticate: (securePayload: string, secureKey: string) => void;
  /**
   * Applies "tentatively" known (unconfirmed) customer information to the order but does not hide input fields during the checkout process. See paymentContact object above for object definition.
   */
  recognize: (paymentContact: PaymentContact) => void;
  /**
   * Applies "tentatively" known (unconfirmed) gift recipient information to the order but does not hide input fields during the checkout process.
   */
  recognizeRecipients: () => void;
  /**
   * Sets the checkout country to the supplied "countryCode" (where countryCode is a two-letter ISO country code such as "US" or "DE").
   */
  country: (countryCode: string) => void;
  /**
   * Sets the checkout language to "language" (where "language" is a two-letter ISO language code such as "es" or "de").
   */
  labguage: (language: string) => void;
};

export {
  Session,
  PaymentContact,
  StoreBuilder,
  Recipient,
  Product,
  CreateSession,
  CreateSessionItem
};
