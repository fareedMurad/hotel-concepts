import * as React from 'react';
import * as styles from './programs-menu.scss';
import { CardDropdown, LinkDropdown, NavTitle } from '../../components';
import { ProgramsMenuProps } from './programs-menu.props';
import { navigate } from '@router/store';
import { useDispatch } from 'react-redux';
import { useHeaderMainData } from '../../hooks';
import { useState } from 'react';

/**
 * Renders ProgramsMenu
 */
const ProgramsMenu: React.FC<ProgramsMenuProps> = ({ className }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { programsData } = useHeaderMainData();

  return (
    <div
      className={styles.programsMenu}
      onMouseOver={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <NavTitle className={className} title='Programs' />
      {showMenu && (
        <CardDropdown
          className={styles.dropdown}
          onMouseLeave={() => setShowMenu(false)}
          height={650}
          open={showMenu}
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
