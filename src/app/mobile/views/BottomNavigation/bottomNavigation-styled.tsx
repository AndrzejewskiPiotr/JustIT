import styled from 'styled-components';
import CommonHomeIcon from 'common/Svg/Home/Home-svg';
import CommonFilterIcon from 'common/Svg/Filter/Filter-svg';
import CommonLanguageIcon from 'common/Svg/Languages/Languages-svg';
import CommonWorldIcon from 'common/Svg/World/World-svg';
import * as COLOR from 'globalStyled/app-colors';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  color: black;
  background-color: ${COLOR.BACKGROUND_COLOR_2};
  box-shadow: ${COLOR.BOX_SHADOW_NAVIGATION};
  margin-top: 0.5px;
  height: 56px;
`;

const HomeIcon = styled(CommonHomeIcon)`
  align-self: center;
`;

const FilterIcon = styled(CommonFilterIcon)`
  align-self: center;
`;

const LanguageIcon = styled(CommonLanguageIcon)`
  align-self: center;
`;

const WorldIcon = styled(CommonWorldIcon)`
  align-self: center;
`;

export { Container, HomeIcon, FilterIcon, LanguageIcon, WorldIcon };
