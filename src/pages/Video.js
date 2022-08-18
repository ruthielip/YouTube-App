import React from 'react';
import styled from 'styled-components';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Comments from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
   display: flex;
   gap: 24px;
`

const Content = styled.div`
   flex: 5;
`

const VideoWrapper = styled.div`

`

const Title = styled.h1`
   font-size: 18px;
   font-weight: 400;
   margin-top: 20px;
   margin-bottom: 10px;
   color: ${({theme}) => theme.text};
`

const Details = styled.div`
   display: flex;
   align-itmes: center;
   justify-content: space-between;
`

const Info = styled.div`
   color: ${({theme}) => theme.textSoft};
`

const Buttons = styled.div`
   display: flex;
   gap: 20px;
   color: ${({theme}) => theme.text};
`

const Button = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   cursor: pointer;
`

const Hr = styled.hr`
   margin: 15px 0px;
   border: 0.5px solid ${({theme}) => theme.soft};
`

const Recommendation = styled.div`
   flex: 2;
`

const Channel = styled.div`
   display: flex;
   justify-content: space-between;
`

const ChannelInfo = styled.div`
   display: flex;
   gap: 20px;
`

const Image = styled.img`
   width: 50px;
   height: 50px;
   border-radius: 50%;
`

const ChannelDetail = styled.div`
   display: flex;
   flex-direction: column;
   color: ${({ theme }) => theme.text};
`

const ChannelName = styled.span`
   font-weight: 500;
`

const ChannelCounter = styled.span`
   margin-top: 5px;
   margin-bottom: 20px;
   color: ${({ theme }) => theme.textSoft};
   font-size: 12px;
`

const Description = styled.p`
   font-size: 14px;
`

const Subscribe = styled.button`
   color: white;
   background-color: #ff0086;
   border: none;
   border-radius: 3px;
   height: max-content;
   padding: 10px 20px;
   cursor: pointer;
`

const Video = () => {
  return (
    <Container>
       <Content>
         <VideoWrapper>
         <iframe
            width='100%'
            height='720'
            src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
            title='Dune Official Trailer'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
         ></iframe>
         </VideoWrapper>
         <Title>Dune Official Trailer</Title>
         <Details>
           <Info>24,435,003 views • November 14th, 2022</Info>
           <Buttons>
              <Button><ThumbUpOffAltIcon/> 9,643</Button>
              <Button><ThumbDownOffAltIcon/> Dislike</Button>
              <Button><ShareIcon/> Share</Button>
              <Button><PlaylistAddIcon/> Save</Button>
           </Buttons>
         </Details>
         <Hr/>

         <Channel>
           <ChannelInfo>
             <Image src='https://i.pinimg.com/564x/78/b6/8a/78b68aaf95dde5b9c2bdc111a14dc728.jpg' />
             <ChannelDetail>
               <ChannelName>Timmy T</ChannelName>
               <ChannelCounter>1.4M subscribers</ChannelCounter>
               <Description>A mythic and emotionally charged hero's journey, "Dune" tells the story of Paul Atreides,
                a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to
                the most dangerous planet in the universe to ensure the future of his family and his people.</Description>
             </ChannelDetail>
           </ChannelInfo>
           <Subscribe>SUBSCRIBE</Subscribe>
         </Channel>
         <Hr/>

         <Comments/>

       </Content>
       <Recommendation>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
           <Card type='sm'/>
       </Recommendation>
    </Container>
  )
}

export default Video;
