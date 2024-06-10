import React, { useContext, useEffect, useRef } from 'react';
import indexStyle from './index.module.css';
import { useSelector } from 'react-redux';
import { ProfileContext } from '../../../../context/ProfileContext';
import useSetImage from '../../hooks/useSetImage';

export default function Index() {
    const { localUser } = useContext(ProfileContext);
    const userData = useSelector(state => state.user.value.userData);
    const photoRef = useRef(null);
    const { handlePhotoChange, setUserBackground } = useSetImage();

    const handleBackgroundChange = async (e) => {
        const photoUrl = await handlePhotoChange(e);
        await setUserBackground(photoUrl);
    };

    useEffect(() => {
        console.log(userData);
    }, [userData])

    const backgroundImage = userData.id === localUser.id && userData.background
        ? userData.background
        : localUser.background;

    return (
        <div className={indexStyle['container']}>
            {
                backgroundImage &&
                <img
                    className={indexStyle['background']}
                    src={backgroundImage} 
                    alt="background" />
            }

            <input 
                type="file"
                style={{ display: 'none' }}
                accept="image/*"
                multiple={false}
                ref={photoRef}
                onChange={handleBackgroundChange}/>
            
            {
                userData.id === localUser.id &&
                <button
                    onClick={() => photoRef.current.click()}
                >
                    <img src="\assets\images\pencil.png" alt="edit" />
                </button>
            }
        </div>
    )
}
