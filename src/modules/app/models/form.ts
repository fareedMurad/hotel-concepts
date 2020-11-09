/*
 *  form types
 */

/**
 * Job aply form type
 */

export type JobDetailsFormValues = {
  email: string;
  // accept: boolean;
  name: string;
  phone: string;
  location: string;
  linkedIn: string;
};

/**
 * Contact us form type [contact-us page]
 */

export type ContactUsFormValues = {
  subject: string;
  email: string;
  title: string;
  name: string;
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
  employeesAmount: string;
  interes: string;
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
  specialization: string;
  linkedIn: string;
  email: string;
  message: string;
};

/**
 * FAQ form type
 */

export type FAQFormValues = {
  name: string;
  email: string;
  message: string;
};

//make dynamic type set

export type FormModel =
  | JobDetailsFormValues
  | ContactUsFormValues
  | ProgramCatalogueFormValues
  | AboutUsFormValues
  | ContributorsApplyValues
  | FAQFormValues;
