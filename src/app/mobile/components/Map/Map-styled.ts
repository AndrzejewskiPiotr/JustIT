import styled from 'styled-components';

const Container = styled.div`
  padding: 5px;

  & .leaflet-container {
    width: 100%;
    height: calc(100vh - 185px);
  }
`;

export { Container };
