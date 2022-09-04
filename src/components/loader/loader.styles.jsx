import { ReactComponent as Loading } from '../../assets/loading.svg';
import styled from 'styled-components';

export const LoadingIcon = styled(Loading)`
  width: 200px;
  height: auto;
`;

export const LoadingWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
