import { Pricing } from '@app/models';
import { ProductCategory } from '@app/models/fastspring';

/**
 * Program model
 */
type Program = {
  id: string;
  name: string;
  description: string;
  price: number;
  pricing: Pricing;
  complexityLevel: string;
  languages: string;
  results: string[];
  slug: string;
  sprints: number;
  videoVimeoUrl: string;
  weeks: number;
  __typename: ProductCategory;
  whoShouldEnrol: ProgramWhoShouldEnroll;
  subfilters: string[];
  testimonials: ProgramTestimonials[];
  about: ProgramAbout;
  category: ProgramCategory;
  enroll: ProgramEnroll;
  enrollNow: ProgramEnrollNow[];
  imageQuote: ProgramImageQuote;
  learningApproach: ProgramLearningApproach[];
  mentors: [];
  modules: ProgramModule[];
  previewVideo: {
    id: string;
    __typename: string;
    video: {
      title: string;
      file: FileModel;
    };
  };
  courseImage: {
    title: string;
    file: FileModel;
  };
  heroImage: {
    title: string;
    file: FileModel;
  };
  imageDivider: {
    title: string;
    file: FileModel;
  };
};

/**
 * Program about
 */
type ProgramAbout = {
  id: string;
  skills: string[];
  aboutText: string;
  __typename: string;
};

/**
 * Program Category
 */
type ProgramCategory = {
  id: string;
  name: string;
  description: string;
  isSubfiltersAllowed: boolean;
  slug: string;
  subtitle: string;
  __typename: string;
};

/**
 * Program enroll
 */
type ProgramEnroll = {
  id: string;
  day: number;
  months: string;
  year: number;
  __typename: string;
};

/**
 * Program enroll now
 */
type ProgramEnrollNow = {
  id: string;
  name: string;
  description: string;
  price: number;
  isMostPopular: boolean;
  features: string[];
  __typename: string;
};

/**
 * Program image quote
 */
type ProgramImageQuote = {
  id: string;
  author: string;
  quoteText: string;
  backgroundImg: {
    title: string;
    file: FileModel;
  };
};

/**
 * Program Learning approach
 */
type ProgramLearningApproach = {
  id: string;
  title: string;
  description: string;
};

/**
 * Program module
 */
type ProgramModule = {
  id: string;
  name: string;
  description: string;
  hours: number;
  weeks: number;
  modulePdf: {
    title: string;
    file: FileModel;
  };
};

/**
 * Program testimonials
 */
type ProgramTestimonials = {
  id: string;
  name: string;
  text: string;
  companyName: string;
  photo: {
    title: string;
    file: FileModel;
  };
  __typename: string;
};

/**
 * Program who should enroll
 */
type ProgramWhoShouldEnroll = {
  id: string;
  description: string;
  positions: string[];
  __typename: string;
};

/**
 * File model
 */
type FileModel = {
  contentType: string;
  fileName: string;
  url: string;
  details: {
    size: number;
    image: {
      width: number;
      height: number;
    };
  };
};

export { Program };
