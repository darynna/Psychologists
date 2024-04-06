import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Psychologist } from "../../redux/Psycologists/psycologistOperations";
import { RootState } from '../../redux/store';
import { ReactComponent as StarIcon } from '../../assets/icons/icon_star.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { addToFavorites, removeFromFavorites } from '../../redux/Auth/authSlice'; 
import { PsycologistWrapContent, PsycologistWrapImg,PsycologistlikeButton, ReviewParagrph, RevieButton, ReviewSecondaryWrap, PsycologistImg, ReadMorebutton, ReviewMainWrap, ReviewWrap, ReviewerImg, PsycologistText, PsycologisList, PsycologistNane, PsycologisListWrap, PsycologistWrapContentFirst, PsycologistBoxContentFirst, PsycologistPrice } from "./PsycologistItem.styled";

interface PsycologistItemProps {
  psychologist: Psychologist;
  expanded: boolean;
  toggleReadMore: (psychologistId: number) => void;
}

const PsycologistItem: React.FC<PsycologistItemProps> = ({ psychologist, expanded, toggleReadMore }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, favoritePsychologists  } = useSelector((state: RootState) => state.auth);
    
    const { id, name, avatar_url, experience, reviews, price_per_hour, rating, license, specialization, initial_consultation, about } = psychologist;

const isFavorite = favoritePsychologists.some(p => p.id === id);

  const handleLikeClick = () => {
    if (!isAuthenticated) {
       Notify.warning('Please sign in to add this psychologist to your favorites.');
      return;
    }

    if (isFavorite) {
      dispatch(removeFromFavorites(String(id)));
      Notify.success('Psychologist removed from favorites!');
    } else {
      dispatch(addToFavorites(psychologist));
      Notify.success('Psychologist added to favorites!');
    }
  };

  return (
    <PsycologistWrapContent>
   <div>
              <PsycologistWrapImg>
                <PsycologistImg src={avatar_url} alt="" width={96} />
                </PsycologistWrapImg>
            </div>
            <div>
              <PsycologistWrapContentFirst>
              <div>
                <PsycologistText>Psychologist</PsycologistText>
                <PsycologistNane>{name}</PsycologistNane>
              </div>
                <PsycologistBoxContentFirst>
                  <StarIcon/>
                <p>Rating: {rating}</p>
                <span>|</span>
                <p>1 hour: <PsycologistPrice>{price_per_hour}$</PsycologistPrice></p>
                      <PsycologistlikeButton onClick={handleLikeClick}> <HeartIcon style={{ fill: isFavorite ? 'rgb(52, 112, 255)' : 'white' }}/> </PsycologistlikeButton>
              </PsycologistBoxContentFirst>
              </PsycologistWrapContentFirst>
              <PsycologisListWrap>
                <PsycologisList>Experience: <span>{experience}</span></PsycologisList>
                <PsycologisList>License: <span>{license}</span></PsycologisList>
                <PsycologisList>Specialization: <span>{specialization}</span></PsycologisList>
                <PsycologisList>Initial_consultation: <span>{initial_consultation}</span></PsycologisList>
              </PsycologisListWrap>
              <div>
                <PsycologistText>{about}</PsycologistText>
              </div>
               <div>
                  {expanded && (
                    <ReviewMainWrap>
                      {reviews.map((review) => (
                        <ReviewSecondaryWrap key={nanoid()}>
                          <ReviewWrap>
                            <ReviewerImg>{review.reviewer.charAt(0)}</ReviewerImg>
                            <div>
                              <p>{review.reviewer}</p>
                              <p> <span> <StarIcon/></span> {review.rating}</p>
                            </div>
                          </ReviewWrap>
                          <div>
                            <ReviewParagrph>{review.comment}</ReviewParagrph>
                          </div>
                        </ReviewSecondaryWrap>
                      ))}
                    <RevieButton>Make an appointment</RevieButton>
                    </ReviewMainWrap>
                  )}
                </div>
                {reviews.length > 0 && <ReadMorebutton onClick={() => toggleReadMore (id) }>{expanded ? 'Hide Details' : 'Read More'}</ReadMorebutton>}
              </div>
    </PsycologistWrapContent>
  );
};

export default PsycologistItem;
