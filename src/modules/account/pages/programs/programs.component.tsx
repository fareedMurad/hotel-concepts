import * as React from 'react';
import { ProgramsProps } from './programs.props';
import * as styles from './programs.scss';
import { H3, Icon } from '@core/components';
import { useMyProgramsData } from './programs.hook';
import { useDispatch } from 'react-redux';
import { addToWishList } from '@app/redux/account';
import { Hero } from '@account/components/hero';
import { Navigation } from '@account/components/navigation';
import { SingleProgram } from './components/single-program';
import { NavLink, Route } from 'react-router-dom';
import classNames from 'classnames';
import { MyProducts } from '../components/my-products';
import { usePrefixedRoutes } from '@core/shared';
import { ProgramsList } from './components/programs';

/**
 * Renders Programs
 */
const Programs: React.FC<ProgramsProps> = ({}) => {
  const dispatch = useDispatch();
  const [wishlist, purchased] = usePrefixedRoutes(['wishlist', 'purchased']);
  return (
    <React.Fragment>
      <Hero title='My programs' />
      <Navigation />
      <MyProducts title='My programs' products='programs' navigate='programs'>
        <Route
          path={wishlist}
          component={() => <ProgramsList type='wishlist' />}
        />
        <Route
          path={purchased}
          component={() => <ProgramsList type='purchased' />}
        />
      </MyProducts>
    </React.Fragment>
  );
};

export { Programs };
