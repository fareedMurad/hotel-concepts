/*
 *  form types
 */

/**
 * Job aply form type
 */
export type ConsultRequestFormValues = {
  name: string;
  email: string;
  website: string;
  teamSize: string;
  interests: string;
};

export type JobDetailsFormValues = {
  name: string;
  phone: string;
  email: string;
  location: string;
  linkedInUrl: string;
  cv: any;
  cover: any;
};

/**
 * Contact us form type [contact-us page]
 */

export type ContactUsFormValues = {
  name: string;
  title: string;
  email: string;
  subject: string;
  surname: string;
  comment: string;
};

/**
 * Programs catalogue  form type
 */

export type ProgramCatalogueFormValues = {
  name: string;
  email: string;
  website: string;
  interes: string;
  employeesAmount: string;
};

/**
 * About us form type
 */

export type AboutUsFormValues = {
  name: string;
  email: string;
  comment: string;
};

/**
 * Contributor apply form values
 */

export type ContributorsApplyValues = {
  name: string;
  email: string;
  comment: string;
  linkedInUrl: string;
  specialization: string;
};

/**
 * FAQ form type
 */

export type FAQFormValues = {
  name: string;
  email: string;
  comment: string;
  accept: boolean;
};

//make dynamic type set

// export type FormModel =
//   | JobDetailsFormValues
//   | ContactUsFormValues
//   | ProgramCatalogueFormValues
//   | AboutUsFormValues
//   | ContributorsApplyValues
//   | FAQFormValues;

export type FormModel = {
  data: any;
  files?: any;
  subject: string;
};
