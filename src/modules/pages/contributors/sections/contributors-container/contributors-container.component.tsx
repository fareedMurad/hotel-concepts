import * as React from 'react';
import { useState, useEffect } from 'react';
import { ContributorsContainerProps } from './contributors-container.props';
import * as styles from './contributors-container.scss';
import { H2, Paragraph, PreCaption, SectionTitle, Hr } from '@core/components';
import { useContributorsData } from '@pages/contributors/contributor.hook';
import { useDispatch, useSelector } from 'react-redux';
import { toogleContributorModal } from '@ui/modal/actions';
import { useMediaPoints } from '@core/shared';
import { MentorModal } from '@pages/components/mentor-modal';
import { ContributorCard } from '@pages/components/contributor-card';
import { Spinner } from '@core/components/spinner';
import { State } from '@app/redux/state';
import { Pagination } from '@core/components/pagination';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useTranslation } from 'react-i18next';

const responsiveBreakpoints = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1290 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1290, min: 1000 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1000, min: 700 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 699, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};
/**
 * Renders ContributorsContainer
 */
const ContributorsContainer: React.FC<ContributorsContainerProps> = ({}) => {
  const { language } = useSelector((state: State) => state.localization);
  const { contributors: data, loading } = useContributorsData(language);
  const [contributors, setContributors] = React.useState([]);
  const { mobile } = useMediaPoints();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      setContributors(data);
    }
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentContributors = contributors.slice(firstItemIndex, lastItemIndex);
  const isMobileRendering = mobile ? contributors : currentContributors;
  const pages = Math.ceil(contributors.length / itemsPerPage);

  const changePage = page => () => {
    setCurrentPage(page);
    scrollTo('contributors');
  };

  return (
    <React.Fragment>
      <div className={styles.contributorsContainer}>
        <div className={styles.heading}>
          <PreCaption>
            {t('contributors.contributors-container.pre-caption')}
          </PreCaption>
          <SectionTitle className={styles.headingTitle}>
            {t('contributors.contributors-container.title')}
          </SectionTitle>
          <Paragraph className={styles.headingParagraph}>
            {t('contributors.contributors-container.description')}
          </Paragraph>
          <Paragraph className={styles.headingParagraph}>
            {t('contributors.contributors-container.description2')}
          </Paragraph>
          <Hr className={styles.headingHr} />
          <div className={styles.headingStatistic}>
            <div>
              <H2>55+</H2>
              <div className={styles.headingCaption}>
                {t('contributors.contributors-container.experts')}
              </div>
            </div>
            <div>
              <H2>25+</H2>
              <div className={styles.headingCaption}>
                {t('contributors.contributors-container.nationalities')}
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <section className={styles.contributorsList} id='contributors'>
            {isMobileRendering.map((contributor, index) => (
              <ContributorCard
                contributor={contributor}
                key={index}
                onClick={() => {
                  dispatch(toogleContributorModal(contributor.sys.id));
                }}
              />
            ))}
          </section>
        )}

        <MentorModal />
      </div>
      {!mobile && (
        <div className={styles.pagination}>
          <Pagination
            currentPage={currentPage}
            onChangePage={changePage}
            countOfPages={pages}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export { ContributorsContainer };
