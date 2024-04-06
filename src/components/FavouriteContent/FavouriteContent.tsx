import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import PsycologistList from '../PsycologistsList/PsycologistsList';
import { FavouriteInfoText} from "./FavouriteContent.style"

const FavouriteContent: React.FC = () => {
  const { favoritePsychologists } = useSelector((state: RootState) => state.auth);

  if (favoritePsychologists.length === 0) {
    return (
        <FavouriteInfoText>No favorite psychologists saved.</FavouriteInfoText>
    );
  }

  return <PsycologistList data={favoritePsychologists} />;
};

export default FavouriteContent;
