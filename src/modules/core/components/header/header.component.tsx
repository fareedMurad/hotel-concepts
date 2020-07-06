import * as React from 'react';
import { HeaderProps } from './header.props';
import * as styles from './header.scss';
import { NavLink } from 'react-router-dom';
import { Icon } from '../icon';

/**
 * Renders Header
 */
const Header: React.FC<HeaderProps> = ({ navigation }) => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <Icon name='logo' className={styles.logo} />
        <div className={styles.header}>
          <div className={styles.navigation}>
            <div className={styles.item}>
              <div className={styles.itemMenu}>
                <Icon name='burger' />
                <div className={styles.itemMenuCaption}>Menu</div>
              </div>
              <div className={styles.itemPrograms}>
                <div>Programs</div>
                <Icon name='arrow-down' className={styles.itemProgramsIcon} />
              </div>
            </div>
            <div className={styles.navigationLinks}>
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
      </div>
    </React.Fragment>
  );
};

export { Header };
