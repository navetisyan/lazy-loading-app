import styled from 'styled-components';
import { btn, btnHover } from '../common.styles';

export const BtnWrapper = styled.div`
  text-align: right;
  padding: 20px;
  a {
    ${btn}
  }
  a:hover {
    ${btnHover}
  }

  a.save-btn {
  }
`;
