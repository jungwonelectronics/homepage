import * as React from "react";
// import styled from 'styled-components';
import PageLayout from '../components/PageLayout/PageLayout';
// import { StaticImage } from 'gatsby-plugin-image';

// const ImageWrapperStyled = styled.div`
//   flex: 1;
//   max-height: 640px;
//   @media (min-width: 1414px) {
//     background-color: #f2f4f6;
//     img {
//       object-fit: contain !important;
//     }
//   }
// `;

// const TextWrpperStyled = styled.div`
//   position: absolute;
//   top: 50px;
//   left: 50px;
//   color: white;
//   font-size: 6px;
//   height: 80px;
//   font-size: 28px;
//   letter-spacing: 3px;
//   font-weight: 200;
//   text-shadow: 2px 2px 2px #000;
//   .title {
//     font-size: 58px;
//     letter-spacing: 10px;
//     font-weight: normal;
//   }
//   @media (max-width: 550px) {
//     top: 25px;
//     left: 25px;
//     font-size: 20px;
//     .title {
//       font-size: 40px;
//     }
//   }
//   @media (max-width: 375px) {
//     font-size: 12px;
//     .title {
//       font-size: 32px;
//     }
//   }
// `;

const IndexPage = () => {
  return (
    <PageLayout pageTitle="Home">
      {/* <ImageWrapperStyled>
        <StaticImage
          alt="Jungwon Electronics Factory imgae"
          src="../images/factory.jpg"
          style={{ width: '100%', height: '100%' }}
        />
      </ImageWrapperStyled> */}
      {/* <TextWrpperStyled>
        <div>원칙을 세우며 발전해나가는 기업,</div>
        <div className="title">JUNGWON</div>
      </TextWrpperStyled> */}
      <div>HOME</div>
    </PageLayout>
  );
}

export default IndexPage;
