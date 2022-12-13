import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Icon from '../meterial/Icon';
import {
  Wrapper, Title, IdeologyWrapper, CircleWrapper, Circle, CircleTitle, SubTitle,
  IdeologyCardWrapper, Card,
} from './IdeologyStyled';

const Ideology = ({ data }) => {
  const theme = useTheme();
  return (
    <Wrapper>
      <Title theme={theme}>경영철학</Title>
      <IdeologyWrapper>
        {data.map((item, index) => (
          <React.Fragment key={`ideology-circle-${index}`}>
            {index !== 0 && (
              <Icon
                name="add"
                size="42"
                color="#364A9C"
                margin="0 20px"
              />
            )}
             <CircleWrapper theme={theme}>
              <Circle>
                <Icon name={item.icon} size="42" color="#000" />
                <CircleTitle>{item.title}</CircleTitle>
              </Circle>
              <SubTitle>{item.subTitle}</SubTitle>
            </CircleWrapper>
          </React.Fragment>
        ))}
      </IdeologyWrapper>
      <IdeologyCardWrapper>
        {data.map((item, index) => (
          <>
            {index !== 0 && (
              <Icon
                name="add"
                size="42"
                color="#364A9C"
                margin="20px"
              />
            )}
            <Card key={`ideology-card-${index}`}>
              <Circle>
                <Icon name={item.icon} size="42" color="#000" />
                <CircleTitle>{item.title}</CircleTitle>
              </Circle>
              <SubTitle>{item.subTitle}</SubTitle>
            </Card>
          </>
          ))}
      </IdeologyCardWrapper>
    </Wrapper>
  );
}

export default Ideology;
