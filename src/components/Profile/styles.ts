import styled from "styled-components";

export const ContainerContent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gray-fundo-perfil);
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
  min-width: 180px;
  background: var(--black-perfil);
  box-shadow: 1px 1px 1px 1px var(--black-perfil);
  border-radius: 0 25px 25px 0;
`