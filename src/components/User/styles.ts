import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  max-width: 300px;
  min-width: 133px;
  background: gray;
  box-shadow: 1px 1px 1px 1px var(--black-perfil);
  border-radius: 25px 0 0 25px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ImgUser = styled.div`
  background: white;
  display: flex;
  flex: 1;
  max-width: 95px;
  min-width: 95px;
  max-height: 95px;
  min-height: 95px;
  border-radius: 50%;
`

export const Name = styled.div`
  margin-top: 12px;
  color: var(--gray-white);
  font-size: 17px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0em;
`