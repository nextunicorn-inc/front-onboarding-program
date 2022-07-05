import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from "@emotion/styled";

import {MediaQueryOne, MediaQueryTwo} from "../utils/MediaQuery";

const Box1 = styled.div`
  ${MediaQueryOne.mobile`
    width: 200px;
    height: 200px;
    background-color: red;
  `}
`;

const Box2 = styled.div`
  ${MediaQueryTwo.mobile} {
    width: 200px;
    height: 200px;
    background-color: steelblue;
  }
`;



function Home() {
  return (
    <>
      <Box1 />
      <Box2 />
    </>
  )
}

export default Home;
