import { useTranslation } from 'react-i18next';
const MapsModalData = () => {
  const { t } = useTranslation();

  const about = [
    {
      id: 1,
      labal: t(
        'hotel-concepts.about-maps-modals-data.maps-modal1.koncept-hotels.about.details.location.labal'
      ),
      value: t(
        'hotel-concepts.about-maps-modals-data.maps-modal1.koncept-hotels.about.details.location.value'
      )
    },
    {
      id: 2,
      labal: t(
        'hotel-concepts.about-maps-modals-data.maps-modal1.koncept-hotels.about.details.type.labal'
      ),
      value: t(
        'hotel-concepts.about-maps-modals-data.maps-modal1.koncept-hotels.about.details.type.value'
      )
    },
    {
      id: 3,
      labal: t(
        'hotel-concepts.about-maps-modals-data.maps-modal1.koncept-hotels.about.details.purpose.labal'
      ),
      value: t(
        'hotel-concepts.about-maps-modals-data.maps-modal1.koncept-hotels.about.details.purpose.value'
      )
    }
  ];
  const stars = [
    {
      id: 1,
      imgSrc: `img/filledStar.png`
    },
    {
      id: 2,
      imgSrc: `img/filledStar.png`
    },
    {
      id: 3,
      imgSrc: `img/filledStar.png`
    },
    {
      id: 4,
      imgSrc: `img/filledStar.png`
    },
    {
      id: 5,
      imgSrc: `img/emptyStar.png`
    }
  ];
  const achievments = [
    {
      id: 1,
      achieve: t(
        'hotel-concepts.about-maps-modals-data.maps-modal1.koncept-hotels.about.achievments.type.achieve1'
      )
    },
    {
      id: 2,
      achieve: t(
        'hotel-concepts.about-maps-modals-data.maps-modal1.koncept-hotels.about.achievments.type.achieve2'
      )
    },
    {
      id: 3,
      achieve: t(
        'hotel-concepts.about-maps-modals-data.maps-modal1.koncept-hotels.about.achievments.type.achieve3'
      )
    }
  ];
  const awards = [
    {
      id: 1,
      label: t(
        'hotel-concepts.about-maps-modals-data.maps-modal1.koncept-hotels.about.awards.lists.li1.label'
      )
    },
    {
      id: 2,
      label: t(
        'hotel-concepts.about-maps-modals-data.maps-modal1.koncept-hotels.about.awards.lists.li2.label'
      )
    }
  ];

  const distination = [
    {
      id: 1,
      dist: t(
        'hotel-concepts.about-maps-modals-data.maps-modal1.koncept-hotels.about.distination.type.dist1'
      )
    },
    {
      id: 2,
      dist: t(
        'hotel-concepts.about-maps-modals-data.maps-modal1.koncept-hotels.about.distination.type.dist2'
      )
    }
  ];

  return { about, stars, achievments, awards, distination };
};

export { MapsModalData };
