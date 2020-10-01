enum Preloaders {
  general = 'general',

  // Auth
  register = 'register',
  login = 'login',
  forgotPassword = 'forgot password',
  resetPassword = 'reset password',
  updatePassword = 'update password',
  emailVerification = 'email verification',
  interests = 'interests',
  otp = 'otp',

  /**
   * Account preloaders
   */
  // Profile
  profile = 'profile',
  profileLanguage = 'profile language',
  profileContactAddress = 'profile contact address',
  profileInterests = 'profile interests',
  profileUpdatePassword = 'profile update password',
  profilePaymentMethods = 'profile payment methods',
  profileAvatar = 'profile avatar',
  profileNewsletter = 'profile newsletter',

  // Subscription
  subscription = 'subscription',

  // Library
  library = 'library',
  libraryPurchased = 'library purchased',
  libraryWishlist = 'library wishlist',

  // Programs
  programs = 'programs',
  programsPurchased = 'programs purchased',
  programsWishlist = 'programs wishlist',

  // Marketplace
  marketplace = 'marketplace',
  marketplaceProduct = 'marketplace product',

  //Programs
  programs = 'programs',
  categories = 'programs categories',

  // Uikit
  uikit = 'uikit',

  getVacancies = 'get vacancies'
}

export { Preloaders };
