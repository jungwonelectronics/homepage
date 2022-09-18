import * as React from "react";
import { Wrapper, ParagraphStyle } from './ParagraphStyled';

const Paragraph = ({ sentences }) => {
  return (
    <Wrapper>
      <ParagraphStyle>
          {sentences.map(sentence => (
            <>
              {sentence}
              <br />
            </>
          ))}
      </ParagraphStyle>
    </Wrapper>
  );
}

export default Paragraph;
