import styled from 'styled-components';

export const DivChronology = styled.div`
  margin: 2rem;
  cursor: copy;
  transform: translateX(-20px);
  animation: animeLeft 1s forwards;

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
