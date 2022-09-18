import * as React from "react";
import { useTheme } from '@mui/material/styles';
import {
  Wrapper, Title, ImageArea, ImageWrapper,
} from './ProductIntroductionStyled';

const ProductIntroduction = ({
  title, introduction, images
}) => {
  const theme = useTheme();
  console.log('images', images);
  return (
    <Wrapper>
      <Title theme={theme}>
        <p>{title}</p>
      </Title>
      <p>{introduction}</p>
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
