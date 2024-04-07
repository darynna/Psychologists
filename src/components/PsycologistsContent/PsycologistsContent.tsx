import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getPsycologists } from '../../redux/Psycologists/psycologistOperations';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { Psychologist } from "../../redux/Psycologists/psycologistOperations";
import PsycologistList from '../PsycologistsList/PsycologistsList';
import {Loader} from "./PsycologistsContent.styled"

const PsycologistContent: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, Action<string>> = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.psychologist);

  useEffect(() => {
    dispatch(getPsycologists());
  }, [dispatch]);

  if (loading) {
    return <Loader>Loading...</Loader>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <PsycologistList data={data as Psychologist[]} />;
};

export default PsycologistContent;

