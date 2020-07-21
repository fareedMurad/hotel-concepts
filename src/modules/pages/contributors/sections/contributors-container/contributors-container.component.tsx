import * as React from 'react';
import { ContributorsContainerProps } from './contributors-container.props';
import * as styles from './contributors-container.scss';
import { H2, Paragraph, PreCaption } from '@core/components';
import { useContributorsData } from '@pages/contributors/contributor.hook';
import { Modals } from '@ui/models';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, toogleContributorModal } from '@ui/modal/actions';
import { navigate } from '@router/store';
import { useMediaPoints } from '@core/shared';
import { MentorModal } from '@pages/components/mentor-modal';
import { ContributorCard } from '@pages/components/contributor-card';
import { Spinner } from '@core/components/spinner';
import { State } from '@app/store/state';
import { Pagination } from '@core/components/pagination';
import { scrollTo } from '@core/helpers/scroll-to.helper';

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
  const { contributors: data, loading } = useContributorsData();
  const [contributors, setContributors] = React.useState([]);
  const { mobile } = useMediaPoints();
  const { contributorModal } = useSelector((state: State) => state.ui.modal);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!loading) {
      setContributors(data);
    }
  });
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(12);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentContributors = contributors.slice(firstItemIndex, lastItemIndex);

  const pages = Math.ceil(contributors.length / itemsPerPage);

  const changePage = page => () => {
    setCurrentPage(page);
    scrollTo('contributors');
  };

  return (
    <React.Fragment>
      <div className={styles.contributorsContainer}>
        <div className={styles.heading}>
          <PreCaption>Contributors</PreCaption>
          <H2 className={styles.headingTitle}>Meet the experts</H2>
          <Paragraph className={styles.headingParagraph}>
            Cordie participants can benefit from a wide spectrum of experts with
            diverse backgrounds. <br /> Our expert team are knowledge creators
            and industry leaders at the cutting edge of their fields.
          </Paragraph>
          <div className={styles.headingHr} />
          <div className={styles.headingStatistic}>
            <div>
              <H2>75+</H2>
              <div className={styles.headingCaption}>Teaching Experts</div>
            </div>
            <div>
              <H2>25+</H2>
              <div className={styles.headingCaption}>Nationalities</div>
            </div>
          </div>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <section className={styles.contributorsList} id='contributors'>
            {currentContributors.map((contributor, index) => (
              <ContributorCard
                contributor={contributor}
                key={index}
                onClick={() => {
                  dispatch(
                    navigate(
                      `/contributors/mentor/${contributor.slug}?mentorId=${contributor.sys.id}`
                    )
                  );
                  !mobile &&
                    (dispatch(showModal(Modals.contributor)),
                    dispatch(toogleContributorModal(true)));
                }}
              />
            ))}
          </section>
        )}
        {contributorModal && (
          <MentorModal
            hideComponent={() => dispatch(toogleContributorModal(false))}
          />
        )}
      </div>
      <div className={styles.pagination}>
        <Pagination
          currentPage={currentPage}
          onChangePage={changePage}
          countOfPages={pages}
        />
      </div>
    </React.Fragment>
  );
};

export { ContributorsContainer };
