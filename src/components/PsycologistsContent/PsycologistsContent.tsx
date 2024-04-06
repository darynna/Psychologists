import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getPsycologists } from '../../redux/Psycologists/psycologistOperations';
import { nanoid } from 'nanoid';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Psychologist } from "../../redux/Psycologists/psycologistOperations";
import { ReactComponent as StarIcon } from '../../assets/icons/icon_star.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import {PsycologistWrapContent, PsycologistWrapImg, PsycologistImg,ReadMorebutton, PsycologistText,PsycologisList, PsycologistNane, PsycologisListWrap, PsycologistWrapContentFirst, PsycologistBoxContentFirst, PsycologistPrice} from "./Psycologistscontent.styled"

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
      <div>
        {(data as Psychologist[])?.map((psychologist: Psychologist) => {
          const { name, avatar_url, experience, reviews, price_per_hour, rating, license, specialization, initial_consultation, about } = psychologist;
          return (<PsycologistWrapContent key={nanoid()}>
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
                <HeartIcon/>
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
              <ReadMorebutton>Read More</ReadMorebutton>
              <div>
                {
                  (reviews.map((review) => {
                    return (
                      <div key={nanoid()}>
                        <div>
                          <img src="" alt="" />
                        <div>
                          <p>{review.reviewer}</p>
                          <p>{review.rating}</p>
                        </div>
                        </div>
                        <div>
                          <p>{ review.comment}</p>
                        </div>
                        <button>Make an appointment</button>
                      </div>
                    )
                  }))
                }
              </div>
            </div>
          </PsycologistWrapContent>
        )})}
      </div>
    </div>
  );
};

export default PsychologistsList;
