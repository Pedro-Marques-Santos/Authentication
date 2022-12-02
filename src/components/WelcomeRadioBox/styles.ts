import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  display: flex;

  div {
    cursor: pointer;
    width: 15px;
    height: 15px;
    margin: 5px;
    border-radius: 30px;
    background: var(--azul-black);

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 21px;
    }
  }
`

export const RadioBox = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;
  margin: 5px;
  border-radius: 30px;
  background: var(--azul-black);

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 21px;
  }
`