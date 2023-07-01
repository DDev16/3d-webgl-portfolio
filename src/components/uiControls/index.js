import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import useStore from '../../context/mainStore';
import configs from '../../configs';

const { relevantStops } = configs;

const MainControlerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: ${(props) => props.windowWidth - 30}px;
  height: 40px;
  padding: 0px 40px;
  z-index: 19999;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${(props) => props.theme.colors.primary}; */
  width: 100%;
  bottom: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${(props) => props.theme.colors.light};
  font-size: 25px;
  font-weight: bold;
  border-image-source: ${(props) =>
    `linear-gradient(to left, transparent, ${props.theme.colors.primary}, transparent)`};
`;

const Button = styled.button`
  padding: 12px 24px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.light};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.dark};
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.24);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;


const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightblue;
  opacity: 0.2;
  align-items: center;
  position: fixed;
  width: ${(props) => props.windowWidth - 30}px;
  height: 50px;
  z-index: 99999;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${(props) => props.theme.colors.primary}; */
  width: 100%;
  bottom: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${(props) => props.theme.colors.dark};
  font-size: 35px;
  font-weight: bold;
  border-image-source: ${(props) =>
    `linear-gradient(to left, transparent, ${props.theme.colors.primary}, transparent)`};

  &:hover {
    opacity: 1;
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  height: 100%;
  background-color: lightblue;
  opacity: 0.3;
  z-index: -1;
  width: ${(props) => props.progress * 100}%;
`;

function UIControls() {
  const { floatingCamera, setFloatingCamera, scrollElement } = useStore();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (scrollElement) {
      scrollElement.onscroll = () => {
        const { scrollTop, scrollHeight } = scrollElement;
        setProgress((scrollTop * 1.125) / scrollHeight);
      };
    }
  }, [scrollElement]);

  const scrollTo = useCallback(
    (index = 0) =>
      scrollElement?.scroll({
        top: index * scrollElement.scrollHeight,
        behavior: 'smooth',
      }),
    [scrollElement]
  );

  const onGoPrev = () => {
    let targetPosition = Math.floor(progress * relevantStops.length - 0.3);

    //Is this not elegant enought? The other option would be to map every position to every scroll percentage. No thnks...
    if (progress * relevantStops.length === 8) {
      targetPosition = 6;
    }

    if (targetPosition >= 0) scrollTo(relevantStops[targetPosition].position);
  };

  const onGoNext = () => {
    let targetPosition = Math.ceil(progress * relevantStops.length + 0.69);
    if (targetPosition <= relevantStops.length) {
      scrollTo(relevantStops[targetPosition].position);
    }
  };

  if (floatingCamera)
    return (
      <MainContainer onClick={() => setFloatingCamera(false)}>
        <div />
        <div>Go Back.</div>
        <div />
      </MainContainer>
    );

  return (
    <MainControlerContainer>
      <div />
      <Button onClick={onGoPrev} className='controls'>
        Prev page
      </Button>
      <Button onClick={onGoNext} className='controls'>
        Next page
      </Button>
      <div />
      <ProgressBar progress={progress} />
    </MainControlerContainer>
  );
}

export default UIControls;
