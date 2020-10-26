import { getPrograms, getSingleCategory } from '@app/redux/programs';
import { State } from '@app/redux/state';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

const useProgramsCatalogueData = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const {
    localization: { language },
    programsData: { selectedCategory, programs, programsTotal }
  } = useSelector((state: State) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFilter, setCurrentFilter] = useState('all');
  const itemsPerPage = 6;
  const totalPages = Math.ceil(programsTotal / itemsPerPage);

  const filters = [
    { caption: 'All programs', value: 'all' },
    { caption: 'Family business', value: 'familyBusiness' },
    { caption: 'Strategy', value: 'strategy' },
    { caption: 'Marketing', value: 'marketing' },
    { caption: 'Governance', value: 'governance' },
    { caption: 'Innovation', value: 'innovation' },
    { caption: 'Negotiation', value: 'negotiation' },
    { caption: 'Organizational Learning', value: 'organizationalLearning' },
    { caption: 'Sustainability', value: 'sustainability' },
    { caption: 'Finance', value: 'finance' }
  ];

  useEffect(() => {
    dispatch(getSingleCategory({ locale: language, id }));
    dispatch(
      getPrograms({
        skip: 0,
        limit: itemsPerPage,
        category: id,
        locale: language,
        subfilters: currentFilter
      })
    );
  }, [id]);

  return {
    id,
    filters,
    programs,
    totalPages,
    currentPage,
    itemsPerPage,
    currentFilter,
    setCurrentPage,
    selectedCategory,
    setCurrentFilter
  };
};

export { useProgramsCatalogueData };
