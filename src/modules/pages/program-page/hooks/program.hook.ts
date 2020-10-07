import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProgram } from '@app/redux/programs';

const useProgramData = (locale: string, id: string) => {
  const dispatch = useDispatch();
  const { singleProgram } = useSelector((state: State) => state.programsData);
  const payload = {
    locale,
    id
  };

  useEffect(() => {
    dispatch(getSingleProgram(payload));
  }, []);

  return { singleProgram };
};

export { useProgramData };
