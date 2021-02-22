import { ProductCategory } from './fastspring';
import { Pricing } from './product';
/**
 * Single program (online course) model
 */

type SingleProgramModel = {
  id: string;
  inWishlist?: boolean;
  about: {
    aboutText: string;
    id: string;
    skills: string[];
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
    isMostPopular: boolean;
    description: string;
    features: string[];
  }[];
  heroImage: {
    file: {
      url: string;
    };
    title: string;
  };
  heroImageTablet: {
    file: {
      url: string;
    };
    title: string;
  };
  heroImageMobile: {
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
  imageQuote: {
    author: string;
    quoteText: string;
    id: string;
    backgroundImg: {
      file: {
        url: string;
      };
    };
  };
  languages: string;
  learningApproach: {
    title: string;
    description: string;
    id: string;
  }[];
  mentors: {
    experiance: string;
    from: string;
    id: string;
    mentorPicture: {
      file: {
        url: string;
      };
    };
    name: string;
    position: string;
    showMentorOnHomePage: boolean;
    slug: string;
    surname: string;
    workAt: string;
  }[];
  modules: {
    description: string;
    hours: number;
    id: string;
    modulePdf: {
      title: string;
      name: string;
      file: {
        url: string;
      };
    };
    name: string;
    weeks: 5;
  }[];
  name: string;
  previewVideo: {
    id: string;
    video: {
      file: {
        url: string;
      };
    };
  };
  price: number;
  pricing: Pricing;
  results: string[];
  showOnHomePage: boolean;
  slug: string;
  sprints: number;
  subfilters: string[];
  testimonials: {
    name: string;
    companyName: string;
    id: string;
    photo: {
      file: {
        url: string;
      };
    };
    text: string;
  }[];
  videoVimeoUrl: string;
  weeks: number;
  __typename: ProductCategory;
  whoShouldEnrol: {
    description: string;
    id: string;
    positions: string[];
  };
  additionalMaterials: {
    id: string;
    materials: {
      title: string;
      file: {
        url: string;
      };
    }[];
  };
  syllabus: {
    file: {
      url;
    };
  };
};

export { SingleProgramModel };
