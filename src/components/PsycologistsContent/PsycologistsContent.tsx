import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getPsycologists } from '../../redux/Psycologists/psycologistOperations';
import { nanoid } from 'nanoid';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

const PsychologistsList: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, Action<string>> = useDispatch()
  const { data, loading, error } = useSelector((state: RootState) => state.psychologist);

  useEffect(() => {
    dispatch(getPsycologists());
  }, [dispatch]);
    
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div>
      <h1>Psychologists</h1>
      <div>
        {data?.map(psychologist => (
          <div key={nanoid()}>
            {/* Render psychologist details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PsychologistsList;
