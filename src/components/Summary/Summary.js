import * as React from "react";
import styled from 'styled-components';
import Icon from '../meterial/Icon';

const SummaryWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  flex-wrap: wrap;
`;

const SummaryBox = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #364A9C;
  color: #fff;
  flex-direction: column;
  padding: 10px;
  &:nth-child(even) {
    background-color: #f2f2f2;
    color: #000;
  }
  &:hover {
    cursor: pointer;
  }
  position: relative;
  @media (max-width: 1024px) {
    width: 25%;
    height: 225px;
  }
  @media (max-width: 768px) {
    width: 50%;
    &:nth-child(1) {
      background-color: #364A9C;
      color: #fff;
      svg {
        color: #fff !important;
      }
    }
    &:nth-child(2) {
      background-color: #f2f2f2;
      color: #000;
      svg {
        color: #000 !important;
      }
    }
    &:nth-child(3) {
      background-color: #f2f2f2;
      color: #000;
      svg {
        color: #000 !important;
      }
    }
    &:nth-child(4) {
      background-color: #364A9C;
      color: #fff;
      svg {
        color: #fff !important;
      }
    }
  }
`;

const BGImage = styled.div`
  position: absolute;
  opacity: 0.25;
  background-image: url(/images/summary1.jpg);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  &:hover {
    opacity: 0.4;
  }
`;

const BGImage1 = styled.div`
  position: absolute;
  opacity: 0.25;
  background-image: url(/images/summary2.jpg);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  &:hover {
    opacity: 0.4;
  }
`;

const BGImage2 = styled.div`
  position: absolute;
  opacity: 0.25;
  background-image: url(/images/summary3.jpg);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  &:hover {
    opacity: 0.4;
  }
`;

const BGImage3 = styled.div`
  position: absolute;
  opacity: 0.25;
  background-image: url(/images/summary4.jpg);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  &:hover {
    opacity: 0.4;
  }
`;

const Title = styled.div`
  margin-top: 5px;
  text-align: center;
`;

const getBGImage = index => {
  if (index === 0) {
    return <BGImage />;
  } else if (index === 1) {
    return <BGImage1 />;
  } else if (index === 2) {
    return <BGImage2/>;
  } else if (index === 3) {
    return <BGImage3 />;
  }
  return null;
}


const Summary = ({ data }) => {
  return (
    <SummaryWrapper>
      {data.map((item, index) => (
        <SummaryBox key={`summary-box-${index}`}>
          {getBGImage(index)}
          <Icon name={item.icon} size="42" color={index % 2 === 0 ? '#fff' : '#000'} />
          <Title>{item.title}</Title>
        </SummaryBox>
      ))}
    </SummaryWrapper>
  );
}

export default Summary;
