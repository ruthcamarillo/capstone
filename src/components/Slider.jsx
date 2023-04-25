import React from 'react';
import styled, { keyframes } from 'styled-components';


const slideAnimation = keyframes`
0%{left:0;}
10%{left:0;}
12%{left:-100%;} 
22%{left:-100%;} 
24%{left:-200%;}
34%{left:-200%;}
36%{left:-300%;}
46%{left:-300%;}
48%{left:-400%;}
58%{left:-400%;}
60%{left:-300%;}
70%{left:-300%;}
72%{left:-200%;}
82%{left:-200%;}
84%{left:-100%;}
94%{left:-100%;}
100%{left:0;}`
;

const Container = styled.div`
overflow:hidden;
    max-width:80px;
    max-height:100vh;
    background-color: black;
    position: relative;
    bottom:0%;
   padding: 50px;
    
`;


const Wrapper = styled.div`
    height: 100%;
    margin:0;
    position:relative;
    width:500%;
    animation-name: ${slideAnimation};
    animation-duration: 20s;
    animation-iteration-count: infinite;
   
`;


const Slide = styled.div`
    height: 100vh;
    float:left;
    width:20%;
    display: flex;
    align-items: center;
    

`;
const ImgContainer = styled.div`
height: 100%;
position:relative;
width:500%;
margin:0;

flex: 1;
`;

const Image = styled.img`
    width:100%;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    float:left;
    z-index: -1;
`;

const Button = styled.button`
    color:#1f3d4738;
    background: 38fabba;
    padding: 10px 2opx;
    border-radius: 5px;
    text-transform: capatalize;
    border: none;
    outline: none;
    font-weight: 500;
    cursor: pointer;
    width: 120px; 
  `;



const Slider = () => {
    return (
        <Container>
          
            <Wrapper>
                <Slide>
                <ImgContainer>
                <Image src="https://pa1.narvii.com/6973/0a20e5dc8fe92ba2231c4082a16bb10531bc6babr1-500-375_hq.gif" alt="tornado" />
                </ImgContainer>
                </Slide>
               
                <Slide>
                <ImgContainer>
                <Image src="https://thumbs.gfycat.com/GrimDeafeningArcticwolf-size_restricted.gif" alt="water" />
                </ImgContainer>
                </Slide>
                
                <Slide>
                <ImgContainer>
                <Image src="https://media0.giphy.com/media/3Ybuu8DQaljag/giphy.gif" alt="flood" />
                </ImgContainer>
                </Slide>

                <Slide>
                <ImgContainer>
                <Image src="https://media.tenor.com/B3YKSSyyHlwAAAAC/day-after-tomorrow-tsunami.gif" alt="tsunami" />
                </ImgContainer>
                </Slide>
            
                <Slide>
                <ImgContainer>
                <Image src="https://www.icegif.com/wp-content/uploads/earthquake-icegif-29.gif" />
                </ImgContainer>
                </Slide>
               
                <Button className="button">Click Me</Button>
            </Wrapper>
                
        </Container>
    );
};

export default Slider;