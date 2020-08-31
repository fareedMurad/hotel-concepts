import * as React from 'react';
import { DropDownProps } from './drop-down.props';
import * as styles from './drop-down.scss';
import { NavLink } from 'react-router-dom';
import { Spinner } from '@core/components/spinner';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import { animated, useTransition } from 'react-spring';

/**
 * Renders DropDown
 */
const DropDown: React.FC<DropDownProps> = ({ subLinks, show }) => {
  const dispatch = useDispatch();

  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
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
                      dispatch(navigate(`/programs-catalogue/${el.sys.id}`))
                    }
                  >
                    <div className={styles.dropDownItemName}> {el.name}</div>
                    <div className={styles.dropDownItemSubtitle}>
                      {el.subtitle}
                    </div>
                  </div>
                );
              })}
            </animated.div>
          )
        );
      })}
    </React.Fragment>
  );
};

export { DropDown };
