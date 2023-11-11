import styled from "styled-components";

export const Button = styled.button`
  width: auto;
  padding: 0.5rem 1rem;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  font-style: normal;
  font-weight: 900;
  font-size: 1rem;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border: none;
  margin-top: 1rem;
  cursor: pointer;
  
  transition: 0.3s ease all;
  
  &:hover {
    filter: brightness(1.2);
    

  }
  @media (max-width: 460px) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
`;
