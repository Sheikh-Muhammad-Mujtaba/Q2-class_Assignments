import React from 'react';
import styled from 'styled-components';

const CodeButton = () => {
  return (
    <StyledWrapper className='absolute right-4 top-4'>
      <button className="button">
        <span className="bracket left">❴</span>
        <span className="text">Code</span>
        <span className="bracket right">❵</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: 45px;
    width: 45px;
    border: none;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
    transition: all 0.3s;
    overflow: hidden;
  }
  .bracket {
    font-size: 18px;
    transition: all 0.3s;
    color: rgb(182, 104, 255);
  }
  .text {
    font-size: 15px;
    width: 0;
    transform: scale(0);
    transition: all 0.3s;
    color: black;
  }
  .button:hover {
    width: 100px;
  }
  .button:hover .text {
    transform: scale(1);
    width: 40px;
  }`;

export default CodeButton;
