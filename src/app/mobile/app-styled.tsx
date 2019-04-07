import styled from 'styled-components';
import CommonHeader from 'common/Header/Header';
import CommonHeading from 'common/Heading/Heading';

const Container = styled.div`
  flex-direction: column;
`;

const Header = styled(CommonHeader)`
  padding: 5px 15px;
`;

const Heading = styled(CommonHeading)`
  font-size: 1.4rem;
`;

export { Container, Header, Heading };
