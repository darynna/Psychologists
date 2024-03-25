import React from 'react';
import { ReactComponent as CheckIcon } from '../../assets/icons/fe_check.svg';
import {Wrapper, IconWrapper, SmallText, NumberlText} from "./ExperienceBox.style"

export const ExperienceBox: React.FC = () => {
  return (
      <Wrapper>
          <IconWrapper>
              <CheckIcon/>
          </IconWrapper>
          <div>
              <SmallText>Experienced psychologists</SmallText>
              <NumberlText>15,000</NumberlText>
          </div>
   </Wrapper>
  );
};
