import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
   gap: 10px;
   margin: 30px 0px;
`

const Avatar = styled.img`
   width: 50px;
   height: 50px;
   border-radius: 50%;
`

const Details = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
`

const Name = styled.span`
   font-size: 13px;
   font-weight: 500;
   color: ${({ theme }) => theme.text};
`

const Date = styled.span`
   font-size: 12px;
   font-weight: 400px;
   color: ${({ theme }) => theme.textSoft};
   margin-left: 5px;
`

const Text = styled.span`
   font-size: 14px;
   color: ${({ theme }) => theme.text};
`

const Comment = () => {
  return (
    <Container>
       <Avatar src='https://pbs.twimg.com/profile_images/1554024466619011072/Ez85JPLk_400x400.jpg'/>
       <Details>
         <Name>Princess Myshkin <Date>1 day ago</Date></Name>
         <Text>Let us see the probability you'll see me on tv (Homeland, what's up) One-zero-zero-zero (1000) trillion percent</Text>
       </Details>
    </Container>
  )
}

export default Comment;
