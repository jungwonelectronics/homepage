import * as React from "react";
import styled from 'styled-components';
import PageLayout from '../components/PageLayout/PageLayout';
import { StaticImage } from 'gatsby-plugin-image';

const ImageWrapperStyled = styled.div`
  flex: 1;
  max-height: 640px;
  @media (min-width: 1414px) {
    background-color: #f2f4f6;
    img {
      object-fit: contain !important;
    }
  }
`;

const IndexPage = () => {
  return (
    <PageLayout pageTitle="Home">
      <ImageWrapperStyled>
        <StaticImage
          alt="Jungwon Electronics Factory imgae"
          src="../images/factory.jpg"
        />
      </ImageWrapperStyled>
    </PageLayout>
  );
}

export default IndexPage;
