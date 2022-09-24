import * as React from "react";
import { useTheme } from '@mui/material/styles';
import {
  Wrapper, Title, ImageArea, ImageWrapper,
} from './ProductIntroductionStyled';

const ProductIntroduction = ({
  title, introduction, images
}) => {
  const theme = useTheme();
  return (
    <Wrapper>
      <Title theme={theme}>
        <span>{title}</span>
      </Title>
      <span>{introduction}</span>
      <ImageArea>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            {image}
          </ImageWrapper>
        )) }
      </ImageArea>
    </Wrapper>
  );
}

export default ProductIntroduction;
