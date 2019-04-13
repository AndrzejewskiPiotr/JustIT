import styled from 'styled-components';
import CommonImage from 'common/Image/Image';
import * as COLORS from 'globalStyled/app-colors';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 86px;
  box-shadow: ${COLORS.BOX_SHADOW_JOB};
  background-color: ${COLORS.BACKGROUND_COLOR_2};
  box-sizing: border-box;
  padding: 15px 5px;
`;

const CompanyLogo = styled(CommonImage)`
  max-width: 90px;
  max-height: 45px;
`;

export { Wrapper, CompanyLogo };
