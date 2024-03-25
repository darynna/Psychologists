import React from 'react';
import homeImg1x from '../../assets/img/home/homeImg.png';
import homeImg2x from "../../assets/img/home/homeImg@2x.png";
import { ReactComponent as QuestionIcon } from '../../assets/icons/question.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/users.svg';
import { ReactComponent as ArrorIcon } from '../../assets/icons/arrow.svg';
import { ExperienceBox } from "../ExperienceBox/ExperienceBox";
import {IconQuestionWrapper, IconUserWrapper, HomeWrapper, HomeTitle, HomeTitleSpan, HomeText, StyledButtonStart, HomeImgBox} from "./HomeContent.styled"

export const HomeContent = () => {
  return (
      <HomeWrapper>
          <div>
              <HomeTitle>The road to the <HomeTitleSpan>depths</HomeTitleSpan> of the human soul</HomeTitle>
              <HomeText>We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our experienced psychologists.</HomeText>
              <StyledButtonStart>Get started <ArrorIcon/></StyledButtonStart>
          </div>
          <HomeImgBox>
             <img 
          srcSet={`${homeImg1x} 1x, ${homeImg2x} 2x`}
          src={homeImg1x} 
                  alt="img"
                  width={464}
              />
              <ExperienceBox />
              <IconQuestionWrapper>
                  <QuestionIcon/>
              </IconQuestionWrapper>
              <IconUserWrapper>
                  <UserIcon/>
              </IconUserWrapper>
          </HomeImgBox>
   </HomeWrapper>
  );
};
