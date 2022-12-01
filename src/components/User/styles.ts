import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  max-width: 300px;
  background: #002244;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  color: var(--white);
  font-size: 17px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0em;
  @media (max-width: 566px) {
    font-size: 14px;
  }
`

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  width: 30px;
  height: 30px;
  color: red;
  border: 1px solid red;
`