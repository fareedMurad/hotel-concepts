/**
 * Google Sign In Model
 */
type GoogleSignInValues = {
  name: string;
  surname: string;
  email: string;
};

// type GoogleSignInValues = {
//   token: string;
// };

/**
 * Facebook Sign In Model
 */
// type FacebookSignInValues = {
//   accessToken: string;
//   data_access_expiration_time: number;
//   email: string;
//   expiresIn: number;
//   graphDomain: string;
//   id: string;
//   name: string;
//   picture: {
//     data: any;
//   };
//   signedRequest: string;
//   userID: string;
// };

type FacebookSignInValues = {
  token: string;
};

export { GoogleSignInValues, FacebookSignInValues };
