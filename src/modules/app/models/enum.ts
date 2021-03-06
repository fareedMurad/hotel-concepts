/**
 * User source enum
 */
enum UserSource {
  internal = 'internal',
  google = 'google',
  facebook = 'facebook'
}

/**
 * Position enum
 */
enum Position {
  professional = 'Hospitality professional',
  student = 'Hospitality student',
  switch = 'Want to switch to hospitality',
  other = 'Other'
}

/**
 * Title enum
 */
enum Title {
  mr = 'Mr.',
  ms = 'Ms.'
}

/**
 * Language enum
 */
enum Language {
  en = 'en-US',
  es = 'es',
  ru = 'ru-RU'
}

/**
 * Payment Methods enum
 */
enum PaymentMethod {
  card = 'card',
  paypal = 'paypal',
  transfer = 'transfer'
}

/**
 * Interests enum
 */
enum Interest {
  socialmedia = 'Social Media',
  trends = 'Trends',
  crm = 'CRM',
  management = 'Management',
  luxurymarketing = 'Luxury Marketing',
  guestloyalty = 'Guest Loyalty',
  reputationmanagement = 'Reputation Management'
}
/**
 * Content type enum
 */
enum ContentType {
  product = 'product',
  onlineCourse = 'onlineCourse',
  courseCategory = 'courseCategory'
}

/**
 * Online course subfilter enum
 */

enum OnlineCourseSubfilter {
  all = 'all',
  familybusiness = 'familyBusiness',
  strategy = 'strategy',
  marketing = 'marketing',
  governance = 'governance',
  innovation = 'innovation',
  negotiation = 'negotiation',
  organizationallearning = 'organizationalLearning',
  sustainability = 'sustainability',
  finance = 'finance'
}

enum SocketResponseType {
  checkout = 'checkout'
}

enum LocalStorageKeys {
  cart = 'cart'
}

enum CurrenciesesCharacters {
  USD = '$',
  EUR = '&euro'
}

export {
  UserSource,
  Position,
  Title,
  Language,
  PaymentMethod,
  Interest,
  SocketResponseType,
  ContentType,
  OnlineCourseSubfilter,
  LocalStorageKeys,
  CurrenciesesCharacters
};
