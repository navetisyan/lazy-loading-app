import styled from 'styled-components';

export const BtnWrapper = styled.div`
  text-align: right;
  padding: 20px;
  a {
    background-color: lightblue;
    color: #4a4a4a;
    padding: 5px;
    text-decoration: none;
    border: 1px solid rgb(93, 171, 207);
    border-radius: 5px;
    margin: 5px;
  }
  a:hover {
    background-color: rgb(93, 171, 207);
    color: white;
    cursor: pointer;
  }

  a.save-btn {
  }
`;
