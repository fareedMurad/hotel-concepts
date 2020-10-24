import * as React from 'react';
import { navigate } from '@router/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardDropdown } from '../../components/card-dropdown';
import { useHeaderMainData } from '../../hooks/header-main.hook';
import { ProgramsMenuProps } from './programs-menu.props';
import * as styles from './programs-menu.scss';
import { LinkDropdown } from '../../components/link-dropdown';
import { NavTitle } from '../../components/nav-title';

/**
 * Renders ProgramsMenu
 */
const ProgramsMenu: React.FC<ProgramsMenuProps> = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { programsData } = useHeaderMainData();
  const dispatch = useDispatch();
  return (
    <div
      className={styles.programsMenu}
      onMouseOver={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <NavTitle className={className} title='Progrmas' />
      {showMenu && (
        <CardDropdown
          className={styles.dropdown}
          onMouseLeave={() => setShowMenu(false)}
        >
          {programsData?.map(program => (
            <div
              key={program.sys.id}
              onClick={() => {
                dispatch(navigate(`/programs-catalogue/${program.sys.id}`));
                setShowMenu(false);
              }}
              className={styles.program}
            >
              <div> {program.name}</div>
              <div className={styles.programSubtitle}>{program.subtitle}</div>
            </div>
          ))}
          <LinkDropdown
            className={styles.link}
            onClick={() => setShowMenu(false)}
            link='Learning approach'
            to='/learning-approach'
            image='img/header-image.png'
          />
        </CardDropdown>
      )}
    </div>
  );
};

export { ProgramsMenu };
