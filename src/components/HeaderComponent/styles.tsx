import styled from "styled-components";

export const DivHeader = styled.div`
  letter-spacing: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 800;
  background-color: #fffbfb;
  border: solid white 1px;
  color: #041525;
  width: auto;
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
