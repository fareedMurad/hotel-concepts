import * as React from 'react';
import { HeaderProps } from './header.props';
import * as styles from './header.scss';
import { NavLink } from 'react-router-dom';
import { Icon } from '../icon';
import classNames from 'classnames';
import { useHomeData } from '@pages/home/home.hook';

/**
 * Renders Header
 */
const Header: React.FC<HeaderProps> = ({ whiteBackground }) => {
  const { navigation } = useHomeData();
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <Icon
          name={!whiteBackground ? 'logo' : 'logo-b'}
          className={styles.logo}
        />

        <div className={styles.navigation}>
          <div
            className={classNames(styles.item, {
              [styles.itemGray]: whiteBackground
            })}
          >
            <div className={styles.itemMenu}>
              <Icon name={!whiteBackground ? 'burger' : 'burger-g'} />
              <div className={styles.itemMenuCaption}>Menu</div>
            </div>
            <div className={styles.itemPrograms}>
              <div>Programs</div>
              <Icon
                name={whiteBackground ? 'arrow-down-g' : 'arrow-down'}
                className={styles.itemProgramsIcon}
              />
            </div>
          </div>
          <div
            className={classNames(styles.navigationLinks, {
              [styles.navigationLinksGray]: whiteBackground
            })}
          >
            {navigation.map(item => {
              const { id, title, to } = item;
              return (
                <NavLink key={id} to={to}>
                  {title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { Header };
