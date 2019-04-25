import React, { FunctionComponent } from 'react';
import {
  Wrapper,
  Title,
  RatingWrapper,
  Star,
  Experience,
} from './Rating-styled';
import { getSkillLevel } from 'utility/getSkillLevel';

interface IProps {
  title: string;
  level: number;
  rating: number;
  starsAmount?: number;
}

const Rating: FunctionComponent<IProps> = ({
  title,
  level,
  rating,
  starsAmount = 5,
}): JSX.Element => {
  const stars: number[] = [...Array(starsAmount).keys()];
  const skillLevel: string = getSkillLevel(level);
  return (
    <Wrapper>
      <RatingWrapper>
        {stars.map((star: number, index: number) => {
          const isActive = index < rating;
          return <Star key={index} active={isActive} />;
        })}
      </RatingWrapper>
      <Title text={title} />
      <Experience text={`${skillLevel}`} />
    </Wrapper>
  );
};
export default Rating;
