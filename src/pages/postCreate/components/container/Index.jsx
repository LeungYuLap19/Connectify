import React, { useEffect, useState } from 'react'
import indexStyle from './index.module.css'
import Upload from '../Upload/Index';
import Caption from '../caption/Index'
import { useSelector } from 'react-redux';
import useCreatePost from '../../hooks/useCreatePost';

export default function Index() {
  const { handleCreatePost } = useCreatePost();
  const userData = useSelector((state) => state.user.value.userData);
  const [post, setPost] = useState({
    userid: userData.id,
    postTime: new Date().toISOString(),
    photo: [],
    caption: null,
    likes: [],
    comments: []
  });

  const createPost = async () => {
    if (post.photo.length !== 0) {
      const done = await handleCreatePost(post);
    }
    else {
      alert('You need to upload a photo');
    }
  };

  return (
    <div className={indexStyle['container']}>
      <h1>Create Post</h1>

      <div className={indexStyle['create-window']}>
        <div className={indexStyle['create-window-upload']}>
          <Upload post={post} setPost={setPost}/>
        </div>
        <div className={indexStyle['create-window-input']}>
          <Caption post={post} setPost={setPost} handleCreatePost={createPost}/>
        </div> 
      </div>
    </div>
  )
}
