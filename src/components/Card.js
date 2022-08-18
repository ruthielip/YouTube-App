import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
   width: ${(props) => props.type !== 'sm' && '360px'};
   margin-bottom: ${(props)=>props.type === 'sm' ? '10px' : '45px'};
   cursor: pointer;
   display: ${(props)=>props.type === 'sm' && 'flex'};
   gap: 8px;
`

const Image = styled.img`
   width: 100%;
   height: ${(props)=>props.type === 'sm' ? '120px' : '202px'};
   background-color: #999;
   gap: 10px;
   flex: 1;
`

const Details = styled.div`
   display: flex;
   margin-top: ${(props) => props.type !== 'sm' && '16px'};
   gap: 12px;
   flex: 1;
`

const ChannelImg = styled.img`
   width: 36px;
   height 36px;
   border-radius: 50%;
   display: ${(props) => props.type === 'sm' && 'none'};
   background-color: #999;
`

const Texts = styled.div`

`
const Title = styled.h1`
   font-size: 16px;
   fot-weight: 500;
   color: ${({ theme }) => theme.text};
`
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft}
`

const Card = ({type}) => {
  return (
    <Link to='/video/test' style={{textDecoration:'none'}}>
    <Container type={type}>
      <Image type={type} src='https://i.ytimg.com/vi/jJj2yHM3d3Y/maxresdefault.jpg'/>
      <Details type={type}>
        <ChannelImg type={type} src='https://i.pinimg.com/564x/78/b6/8a/78b68aaf95dde5b9c2bdc111a14dc728.jpg' />
        <Texts>
          <Title>Dune Official Trailer</Title>
          <ChannelName>Timmy T</ChannelName>
          <Info>24,435,003 views • 9 months ago </Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Card;
