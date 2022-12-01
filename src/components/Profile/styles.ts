import styled from "styled-components";
import background from '../../assets/background2.png'

export const ContainerContent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background});
`

export const Container = styled.div`
  width: 700px;
  height: 270px;
  border-radius: 25px;
  margin-left: 5px;
  margin-right: 5px;

  display: flex;
`

export const UserData = styled.div`
  display: flex;
  flex: 1;
  max-width: 400px;
  background: var(--azul-black);
  border-radius: 0 25px 25px 0;
  justify-content: center;
  align-items: flex-start;
  padding-left: 8%;

  @media (max-width: 700px) {
    padding-left: 3%;
    font-size: 13px;
  }

  @media (max-width: 566px) {
    padding-left: 1%;
    font-size: 13px;
  }

  flex-direction: column;
  color: var(--white);
`

export const Tag = styled.div`
  cursor: pointer;
  margin-bottom: 12px;
  display: flex;
  :hover {
    color: wheat;
  }
`

export const Icon = styled.div`
  @media (max-width: 566px) {
    display: none;
  }
  width: 25px;
  font-size: 20px;
  margin-right: 12px;
  display: flex;
  align-items: center;
`