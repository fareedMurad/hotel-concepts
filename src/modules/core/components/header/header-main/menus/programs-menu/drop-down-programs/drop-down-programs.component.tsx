import * as React from 'react';
import { DropDownProgramsProps } from './drop-down-programs.props';
import * as styles from './drop-down-programs.scss';
import { NavLink } from 'react-router-dom';
import { Spinner } from '@core/components/spinner';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import { animated, useTransition } from 'react-spring';
import { useAnimation } from '../../../animation';

/**
 * Renders DropDown
 */
const DropDownPrograms: React.FC<DropDownProgramsProps> = ({
  subLinks,
  setToggleDropdown,
  show
}) => {
  const dispatch = useDispatch();
  const ref = React.useRef();

  const { transitions } = useAnimation(show);

  const handleClick = link => {
    dispatch(navigate(link));
    setToggleDropdown(false);
  };
  return (
    <React.Fragment>
      {transitions.map(({ item, key, props }) => {
        return (
          item && (
            <animated.div key={key} style={props} className={styles.dropDown}>
              {subLinks.map(el => {
                return (
                  <div
                    className={styles.dropDownItem}
                    key={el.sys.id}
                    onClick={() =>
                      handleClick(`/programs-catalogue/${el.sys.id}`)
                    }
                  >
                    <div className={styles.dropDownItemName}> {el.name}</div>
                    <div className={styles.dropDownItemSubtitle}>
                      {el.subtitle}
                    </div>
                  </div>
                );
              })}
              <div
                className={styles.dropDownFooter}
                onClick={() => handleClick('/learning-approach')}
              >
                <div className={styles.dropDownFooterTitle}>
                  Learning Approach <span>&#8594;</span>
                </div>
                <div
                  className={styles.dropDownFooterImage}
                  style={{
                    backgroundImage: `url(${require('img/header-image.png')})`
                  }}
                />
              </div>
            </animated.div>
          )
        );
      })}
    </React.Fragment>
  );
};

export { DropDownPrograms };
