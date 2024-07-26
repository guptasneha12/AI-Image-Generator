import React, { useState }  from 'react'
import styled from 'styled-components';
import GenerateImageForm from '../components/GenerateImageForm';
import GeneratedImageCard from '../components/GeneratedImageCard';
import { NearMeDisabledOutlined } from '@mui/icons-material';




const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
  background: ${({ theme }) => theme.background};
`;






const Wrapper = styled.div`
  display: flex;
  gap: 8%;
  flex: 1;
  max-width: 1200px;
  height: fit-content;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;






export default function CreatePost() {
  const [generateImageLoading,setGenerateImageLoading]=useState(false);
  const [createPostLoading,setCreatePostLoading]=useState(false);
 const [post,setPost]=useState({
  name:"",
  prompt:"",
  photo:"",
 })
  return (
    <Container>
      <Wrapper>
      <GenerateImageForm 
      post={post} 
      setPost={setPost} 
      createPostLoading={createPostLoading} 
      setGenerateImageLoading={setGenerateImageLoading}
      generateImageLoading={generateImageLoading}
      setCreatePostLoading={setCreatePostLoading}
      />
      <GeneratedImageCard src={post.photo} loading={generateImageLoading}/>
    </Wrapper>
    </Container>
  )
}
