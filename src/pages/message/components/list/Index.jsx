import React, { useContext } from 'react';
import indexStyle from './index.module.css';
import Search from '../search/Index';
import { ChatroomContext } from '../../../../context/ChatroomContext';
import UserTag from '../../../../common/components/userTag/Index';
import Item from '../item/Index';
import useGetUser from './../../hooks/useGetUser';

const UserList = ({ users }) => {
    const { setClickedUser } = useContext(ChatroomContext);
    return (
        users.map((user, index) => (
            <div 
            onClick={() => setClickedUser(user)}
            key={index} className={indexStyle['item']}>
                <UserTag clickable={false} userData={user} />
            </div>
        ))
    );
};

const ChatroomList = ({ chatrooms }) => {
    const { setClickedUser } = useContext(ChatroomContext);
    const { getUserByUserid } = useGetUser();
    return (
        chatrooms.map((chatroom, index) => (
            <div
            onClick={async () => {
                const userData = await getUserByUserid(chatroom.user.id);
                console.log(userData);
                const newChatroom = {
                    ...chatroom,
                    user: userData
                }
                setClickedUser(newChatroom);
            }}
            key={index} className={indexStyle['item']}>
                <Item chatroom={chatroom}/>
            </div>
        ))
    );
}

export default function Index() {
    const { searchResult, selectedButton, setSelectedButton, chatrooms } = useContext(ChatroomContext);

    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['search']}>
                <Search />
            </div>

            <div className={indexStyle['section']}>
                <button
                    className={selectedButton === 'Following' ? indexStyle['selected'] : ''}
                    onClick={() => setSelectedButton('Following')}
                >
                    Following
                </button>
                <button
                    className={selectedButton === 'Others' ? indexStyle['selected'] : ''}
                    onClick={() => setSelectedButton('Others')}
                >
                    Others
                </button>
            </div>

            <div className={indexStyle['list']}>
                {searchResult ? (<UserList users={selectedButton === 'Following' ? searchResult.following : searchResult.others} />) :
                (chatrooms && (<ChatroomList chatrooms={selectedButton === 'Following' ? chatrooms.following : chatrooms.others} />))}
            </div>
        </div>
    );
}