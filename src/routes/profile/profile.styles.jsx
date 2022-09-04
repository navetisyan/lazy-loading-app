import styled from 'styled-components';
import { header, btn } from '../../components/common.styles';

export const Header = styled.h1`
  ${header}
`;

export const Message = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonBox = styled.div`
  ${btn}
`;
