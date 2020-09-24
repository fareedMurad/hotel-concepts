/**
 * Program (online course) model
 */

type SingleProgramModel = {
  id: string;
  about: {
    aboutText: string;
    id: string;
    skils: string[];
  };
  category: {
    description: string;
    id: string;
    isSubfiltersAllowed: boolean;
    name: string;
    slug: string;
    subtitle: string;
  };
  complexityLevel: string;
  courseImage: {
    file: {
      url: string;
    };
  };
  description: string;
  enroll: {
    day: string;
    id: string;
    months: string;
    year: string;
  };
  enrollNow: {
    name: string;
    price: number;
    id: string;
    description: string;
    features: string[];
  }[];
  heroImage: {
    file: {
      url: string;
    };
    title: string;
  };
  imageDivider: {
    title: string;
    file: {
      url: string;
    };
  };
  //continue
};
