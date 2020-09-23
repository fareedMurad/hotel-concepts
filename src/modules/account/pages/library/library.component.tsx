import * as React from 'react';
import { LibraryProps } from './library.props';
import * as styles from './library.scss';
import { H2, Icon } from '@core/components';
import { useLibraryData } from './library.hook';
import { useClickOutside, usePrefixedRoutes } from '@core/shared';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, toggleBookPreviewModal } from '@ui/modal';
import { Modals } from '@ui/models';
import { BookPreviewModal } from '@pages/components/book-preview-modal';
import { State } from '@app/redux/state';
import { Hero } from '@account/components/hero';
import { Navigation } from '@account/components/navigation';
import { NavLink, Route, useHistory } from 'react-router-dom';
import { BookCard } from './components/book-card';
import { Books } from './components/books';
import classNames from 'classnames';
import { MyProducts } from '../components/my-products';

/**
 * Renders Library
 */
const Library: React.FC<LibraryProps> = ({}) => {
  const [wishlist, purchased] = usePrefixedRoutes(['wishlist', 'purchased']);
  const [showMenu, setShowMenu] = React.useState(0);
  const books = useLibraryData();
  const ref = React.useRef();

  useClickOutside(ref, () => setShowMenu(0));
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Hero title='My library' />
      <Navigation />

      <MyProducts title={'My bookshelf'} products={'books'} navigate='library'>
        <Route path={wishlist} component={() => <Books type='wishlist' />} />
        <Route path={purchased} component={() => <Books type='purchased' />} />
      </MyProducts>
    </React.Fragment>
  );
};

export { Library };
