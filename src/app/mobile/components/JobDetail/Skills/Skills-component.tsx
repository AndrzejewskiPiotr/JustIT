import React, { FunctionComponent } from 'react';
import { Wrapper, Title, Container } from './Skills-styled';
import Rating from 'mobile/components/JobDetail/Rating/Rating-component';

interface IProps {
  title: string;
  skills: Array<{ level: number; name: string }>;
}

const Skills: FunctionComponent<IProps> = ({ title, skills }): JSX.Element => {
  return (
    <Container>
      <Title>{title}</Title>
      <Wrapper>
        {skills.map((skill: { level: number; name: string }, index: number) => (
          <Rating
            key={index}
            rating={skill.level}
            title={skill.name}
            level={skill.level}
          />
        ))}
      </Wrapper>
    </Container>
  );
};
export default Skills;
