import React from 'react';
import tw, { styled } from 'twin.macro';

const about = () => {
  return (
    <Wrapper>
      <h1>about</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`grid`}
  grid-template-rows: auto 1fr auto;
`;
export default about;
