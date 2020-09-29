import * as React from 'react';
import { DropdownProps } from './dropdown.props';
import * as styles from './dropdown.scss';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import { useClickOutside } from '@core/shared';

/**
 * Renders Dropdown
 */
const Dropdown: React.FC<DropdownProps> = ({
  programs,
  title,
  links,
  setSelectedMenu,
  flexDirection
}) => {
  const dispatch = useDispatch();

  const ref = React.useRef<HTMLDivElement>();
  useClickOutside(ref, () => {
    setSelectedMenu('');
  });

  return (
    <div className={styles.dropdown} ref={ref}>
      {title && (
        <div className={styles.dropdownTitle}>
          {title}
          <span>&#8594;</span>
        </div>
      )}
      {programs && (
        <div className={styles.dropdownPrograms}>
          {programs.map(program => {
            return (
              <div
                key={program.sys.id}
                onClick={() =>
                  dispatch(navigate(`/programs-catalogue/${program.sys.id}`))
                }
                className={styles.dropdownProgramsProgram}
              >
                <div> {program.name}</div>
                <div className={styles.dropdownProgramsProgramSubtitle}>
                  {program.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div
        className={styles.dropdownLinks}
        style={{ flexDirection: flexDirection }}
      >
        {links.map(link => {
          return (
            <div
              key={link.name}
              className={styles.dropdownLinksLink}
              onClick={() => {
                dispatch(navigate(link.to));
              }}
            >
              <div className={styles.dropdownLinksLinkCaption}>
                {link.name} {link.image && <span>&#8594;</span>}
              </div>
              {link.image && (
                <div
                  className={styles.dropdownLinksLinkImage}
                  style={{
                    //hardcoded image
                    backgroundImage: `url(${require('img/header-image.png')})`
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Dropdown };
