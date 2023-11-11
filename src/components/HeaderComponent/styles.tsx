import styled from "styled-components";

export const DivHeader = styled.div`
  letter-spacing: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:1rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 800;
  background-color: #fffbfb;
  border: solid white 1px;
  color: #041525;
  width: auto;
  box-shadow: rgba(240, 46, 170, 0.4) 3px 3px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;

  .help{
    font-size: .8rem;
    border: solid 1px;
    padding: .5rem;
    cursor: help;
  }
  span
  {
    img
    {
      cursor:help;
     }
  }


`;
