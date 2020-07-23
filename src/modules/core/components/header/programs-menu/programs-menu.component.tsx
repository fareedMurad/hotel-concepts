import * as React from 'react';
import { ProgramsMenuProps } from './programs-menu.props';
import * as styles from './programs-menu.scss';
import { useProgramsMenuData } from './programs-menu.hooks';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { gql, useQuery } from '@apollo/client';

/**
 * query categoriess of programs
 */

const CATEGORIES = gql`
  {
    courseCategoryCollection {
      items {
        category
        subtitle
        sys {
          id
        }
      }
    }
  }
`;
/**
 * Renders ProgramsMenu
 */
const ProgramsMenu: React.FC<ProgramsMenuProps> = ({ closeMenu, isOpened }) => {
  const { programs } = useProgramsMenuData();

  const [isFullHide, setFullHide] = React.useState(true);
  const { data, loading, error } = useQuery(CATEGORIES);

  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    if (isOpened) {
      setFullHide(false);
      return;
    }
    const timeout = setTimeout(() => {
      setFullHide(true);
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [isOpened]);

  React.useEffect(() => {
    if (!loading) {
      // setCategories(data.courseCategoryCollection.items);
    }
  });

  return (
    <div
      className={classNames(styles.programsMenu, {
        [styles.opened]: isOpened,
        [styles.hidden]: isFullHide
      })}
    >
      <div onClick={closeMenu} className={styles.blur} />
      <div className={styles.content}>
        <div className={styles.linksContainer}>
          {categories.map((category, i) => {
            return (
              <NavLink
                to={
                  category.sys ? `/programs-catalogue/${category.sys.id}` : '/'
                }
                key={i}
                className={styles.link}
                onClick={closeMenu}
              >
                <div className={styles.linkName}>{category.category}</div>
                <div className={styles.description}>{category.subtitle}</div>
                <div className={styles.separator} />
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { ProgramsMenu };
