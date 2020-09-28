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
  es = 'es'
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

enum SocketResponseType {
  checkout = 'checkout'
}

export {
  UserSource,
  Position,
  Title,
  Language,
  PaymentMethod,
  Interest,
  SocketResponseType
};
