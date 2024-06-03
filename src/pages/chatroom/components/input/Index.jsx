import React, { useContext, useEffect, useRef } from 'react'
import indexStyle from './index.module.css';
import { ChatroomContext } from '../../../../context/ChatroomContext';
import useChatroomHooks from '../../hooks/useChatroomHooks';
import usePhotoUpload from '../../hooks/usePhotoUpload';

export default function Index({ user }) {
  const messageRef = useRef(null);
  const { state } = useContext(ChatroomContext);
  const { createNewChatroom, handleSendMessage, handleSendPhoto } = useChatroomHooks();
  const { uploaded, handlePhotoChange, removePhoto } = usePhotoUpload();
  const photoRef = useRef(null);

  return (
    <div className={indexStyle['container']}>
      <input type="text" placeholder='Message...' ref={messageRef} />
      <input 
        type="file" 
        style={{ display: 'none' }}
        accept="image/*"
        multiple={false}
        ref={photoRef}
        onChange={handlePhotoChange}/>
      <button
        onClick={() => {
          uploaded ? removePhoto() :
          photoRef.current.click()
        }}
      >
        { uploaded ? <img className={indexStyle['uploaded']} src={uploaded} alt="uploaded" /> :
        <img src="\assets\images\image-gallery.png" alt="image" /> }
        { uploaded && <div className={indexStyle['layer']}>
          <img src="\assets\images\close.png" alt="delete" />
        </div> }
      </button>
      <button 
        onClick={async () => {
          let chatroomid = state.clickedData.id;
          if (uploaded) {
            !chatroomid ? chatroomid = await createNewChatroom(user, uploaded, true) :
            await handleSendPhoto(chatroomid, user, uploaded);
            removePhoto();
          }
          if (messageRef.current.value) {
            !chatroomid ? createNewChatroom(user, messageRef.current.value) :
            handleSendMessage(chatroomid, user, messageRef.current.value);
            messageRef.current.value = '';
          }
        }}
      >
          <img src="\assets\images\send.png" alt="send" />
      </button>
    </div>
  )
}