import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import {
  AiOutlineMenu,
  AiFillCaretRight,
  AiFillPauseCircle,
} from 'react-icons/ai';
import { useRaf, useWindowSize } from 'rooks';
import logo from '../../components/navBar/DevD (4).gif';

import theme from '~/src/theme';
import NavModal from './NavModal';
import useStore from '../../context/mainStore';
import CONFIG from '../../configs';
import matrixGif from '../../components/navBar/stock_back_low.gif'; // Import the GIF file


const { navTitle } = CONFIG;


const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: ${(props) => props.windowWidth - 0}px;
  margin-left: px;
  height: 50px;
  z-index: 1;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${(props) => props.theme.colors.primary}; */
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${(props) => props.theme.colors.light};
  border-image-source: ${(props) =>
    `linear-gradient(to left, transparent, ${props.theme.colors.primary}, transparent)`};
  // background-image: url(${matrixGif}); /* Set the background image */
  background-size: fill; /* Adjust the image size to cover the container */
  background-repeat: repeat; /* Prevent the image from repeating */
`;


const MenuButton = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  width: 80px;
  margin-right:50px;
  border: 1px none;
  justify-content: center;
  border-right-width: 0px;
  background-color: transparent;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const PlayButton = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

const StyledDiv = styled.div`
  font-size: 30px; /* Increase the font size */
  font-weight: bold; /* Make the text bold */
  color: lightblue; /* Set a custom text color */
  margin-right: 0px;
  /* 3D text effect */
  text-shadow: 1px 1px 0 #fff, 
               2px 2px 0 #fff, 
               3px 3px 0 #fff,
               4px 4px 0 #ccc, 
               5px 5px 0 #ccc, 
               6px 6px 0 #ccc,
               7px 7px 0 #bbb, 
               8px 8px 0 #bbb, 
               9px 9px 0 #bbb;
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  perspective: 1000px;

  @media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    font-size: 20px; /* Adjust the font size */
    text-shadow: none; /* Remove the text shadow */
    transform: none; /* Remove the rotation */
    perspective: none; /* Remove the perspective */
  }
`;


const LogoContainer = styled.div`
  position: absolute;
  right: 90.7%;
  margin-top: 205px;
  transform: translateX(-50%);
`;

const LogoImage = styled.img`
  height: 150px;
`;


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { innerWidth } = useWindowSize();
  const [windowWidth, setWindowWidth] = useState(innerWidth);
  const [playAudio, setPlayingAudio] = useState(true);
  const audio = useRef();
  let userinteraction = 0;

  useEffect(() => {
    if (!audio.current) {
      audio.current = new Audio('audio/music.mp3');
      audio.current.loop = true;

      document.addEventListener('click', () => {
        if (userinteraction) return;
        userinteraction++;
        audio.current.play();
        setPlayingAudio(!audio.current.paused);
      });
    }
  }, []);

  useEffect(() => {
    setWindowWidth(innerWidth);
  }, [innerWidth]);

  return (
    <CSSTransitionGroup
  transitionName='example'
  transitionAppearTimeout={500}
  transitionEnterTimeout={500} // add this
  transitionLeaveTimeout={500} // and possibly this
  transitionAppear={true}
  transitionEnter={true}
  transitionLeave={true}
>

      <NavModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      <MainContainer windowWidth={windowWidth}>
        <PlayButton
          onClick={() => {
            if (audio.current.paused) {
              audio.current.play();
            } else {
              audio.current.pause();
            }
  
            setPlayingAudio(!audio.current.paused);
          }}
        >
          {!playAudio ? (
            <AiFillCaretRight color={theme.colors.primary} size={30} />
          ) : (
            <AiFillPauseCircle color={theme.colors.primary} size={30} />
          )}
        </PlayButton>
        <StyledDiv>{navTitle}</StyledDiv>
        <LogoContainer>
          <LogoImage src={logo} alt="Logo" />
        </LogoContainer>
        <MenuButton onClick={() => setIsOpen(true)}>
          <AiOutlineMenu color={theme.colors.primary} size={30} />
        </MenuButton>
      </MainContainer>
    </CSSTransitionGroup>
  );
};

export default NavBar;
