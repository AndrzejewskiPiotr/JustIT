import styled from 'styled-components';
import CommonImage from 'common/Image/Image';
import CommonText from 'common/Text/Text';
import * as COLORS from 'globalStyled/app-colors';

interface IPropsExp {
    backgroundColor: string
};


const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 86px;
  box-shadow: ${COLORS.BOX_SHADOW_JOB};
  background-color: ${COLORS.BACKGROUND_COLOR_2};
  box-sizing: border-box;
  padding: 15px 5px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 0 0 112px;
`;

const CompanyLogo = styled(CommonImage)`
  align-self: center;
  max-width: 90px;
  max-height: 45px;
`;

const Row = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

const Title = styled(CommonText)`
  color: ${COLORS.FONT_BLACK};
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 5px 0 0;
  font-weight: 600;
`;

const Salary = styled(CommonText)`
  color: ${COLORS.FONT_GREEN};
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 5px 0 0;
  font-weight: 600;
`;

const ExpLevel = styled(CommonText)<IPropsExp>`
  background-color: ${ props => props.backgroundColor};
  color: ${COLORS.FONT_WHITE};
  width: 60px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
  text-transform: capitalize;
`;

export { Wrapper, CompanyLogo, Row, Title, Salary, ExpLevel, ImageWrapper };
