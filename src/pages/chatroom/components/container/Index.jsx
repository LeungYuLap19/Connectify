import React, { useEffect, useReducer, useRef } from 'react'
import indexStyle from './index.module.css';
import { ChatroomContext } from '../../../../context/ChatroomContext';
import List from '../list/Index';
import Chat from '../chat/Index';
import { useSelector } from 'react-redux';
import Done from './../../../../animations/Done';
import Popup from '../popup/Index';

export default function Index() {
    const inputRef = useRef(null);
    const reducer = (state, action) => {
        switch (action.type) {
            case 'setSearchResults':
                return { ...state,searchResults: action.payload };
            case 'setSelectedButton':
                return { ...state,selectedButton: action.payload };
            case 'setClickedData':
                return { ...state,clickedData: action.payload };
            case 'setChatrooms':
                return { ...state,chatrooms: action.payload };
            case 'setDone':
                return { ...state,done: action.payload };
            case 'setPopup':
                return { ...state,popupPhoto: action.payload };
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        searchResults: null,
        selectedButton: 'followings',
        clickedData: null,
        chatrooms: null,
        done: false,
        inputRef: inputRef,
        popupPhoto: null
    });

    const userData = useSelector(state => state.user.value.userData);
    const chatroomsData = useSelector(state => state.chatrooms.value.chatroomsData);
    useEffect(() => {
        const chatrooms = { followings: [], others: [] };
        chatroomsData.forEach(chatroom => {
            const user = chatroom.users.find(user => user.id !== userData.id);
            if (userData.followings.includes(user.id)) {
                chatrooms.followings.push(chatroom);
            } else {
                chatrooms.others.push(chatroom);
            }
        });
        chatrooms.followings.sort((a, b) => new Date(b.lastTime) - new Date(a.lastTime));
        chatrooms.others.sort((a, b) => new Date(b.lastTime) - new Date(a.lastTime));
        dispatch({ type: 'setChatrooms', payload: chatrooms });
    }, [chatroomsData]);

    useEffect(() => {
        if (state.clickedData && state.clickedData.id) {
            const updatedChatroom = chatroomsData.find(chatroom => chatroom.id === state.clickedData.id);
            dispatch({ type: 'setClickedData', payload: updatedChatroom });
        }
    }, [chatroomsData, state.clickedData]);

    return (
        <ChatroomContext.Provider value={{ state, dispatch }}>
            <div className={indexStyle['container']}>
                <div className={indexStyle['list']}>
                    <List />
                </div>
                <div className={indexStyle['chat']}>
                    <Chat />
                </div>
            </div>
            {state.done && 
            <div className={indexStyle['done-popup']}>
                <Done />
            </div>
            }
            { state.popupPhoto && <Popup photo={state.popupPhoto}/> }
        </ChatroomContext.Provider>
    )
}
