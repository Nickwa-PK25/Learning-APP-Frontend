import React from 'react';
import styled from "styled-components";
import { other_images } from '../utils/images';

const Hero = () => {
  return (
    <HeroWrapper className = "bg-black">
      <div className='container h-100 flex'>
        <div className='hero-content'>
          <h1> Achieve Great Knowledge</h1>
          <p>Unlock our massive sale with courses from $9.99. If you seek to learn, we've got you covered. Offer ends Aug. 31.</p>
        </div>
      </div>
    </HeroWrapper>)
  // )Discover Great Deals. Achieve Great Knowledge.
  // 
}

const HeroWrapper = styled.div`
  background: url(${other_images.hero_img}) center/cover no-repeat;
  height: 300px;
  
  .container{
    .hero-content{
      background-color: var(--clr-white);
      max-width: 450px;
      width: 100%;
      margin-left: 0;
      padding: 20px;

      h1{
        font-size: 32px;
        margin-bottom: 5px;
        white-space: nowrap;
      }
      p{
        font-size: 15px;
      }
    }
  }
`;

export default Hero