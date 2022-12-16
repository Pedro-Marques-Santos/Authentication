import styled from "styled-components";

export const ContainerContent = styled.div`

  background: red;
  width: 200px;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;

  text-align: center;
  font-size: 13px;
  
`

interface AlertProps {
  alertError: boolean;
}

export const Container = styled.div<AlertProps>`
  position: fixed;
  transition: 2s;
  right: ${(props) => props.alertError ? '1px' : '-50%'};
  top: 1px;
`