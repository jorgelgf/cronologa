import styled from "styled-components";
//import bg from './_img/bg.jpg'
export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display:flex ;
  flex-direction: column;
  background-size: 100%; background-position: center;
background-color: #041525;
  transform: translateX(-20px);
  animation: animeLeft 0.4s forwards;
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  //classe que envolve as divisões layout 
.cont{
  @media (max-width: 913px) {
  flex-direction: column;
  height: 100%;
  }}
  section{
    margin-left: 1rem;
    display:flex ;
    flex-direction: column;
    -webkit-backdrop-filter: blur(10px);backdrop-filter: blur(10px);
    width: auto;
 

span{
  min-width:30%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: 500;
}

  }

  label {
    b {
      margin-inline-end: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  transform: translateX(-20px);
  animation: animeLeft 0.4s forwards;
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

export const DivForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const DivChronology = styled.div`
  margin: 2rem;
  transform: translateX(-20px);
  animation: animeLeft 1s forwards;
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
