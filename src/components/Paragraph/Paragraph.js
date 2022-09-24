import * as React from "react";
import { Wrapper, ParagraphStyle } from './ParagraphStyled';

const Paragraph = ({ sentences }) => {
  return (
    <Wrapper>
      <ParagraphStyle>
          {sentences.map((sentence, index) => (
            <React.Fragment key={`Paragraph_${index}`}>
              {sentence}
              <br />
            </React.Fragment>
          ))}
      </ParagraphStyle>
    </Wrapper>
  );
}

export default Paragraph;
