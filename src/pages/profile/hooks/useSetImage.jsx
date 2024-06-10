import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBackground, setIcon } from "../../../Services/userServices";
import { modifyIcon, modifyBackground } from '../../../store/slices/userSlice';

const useSetImage = () => {
    const userData = useSelector(state => state.user.value.userData);
    const dispatch = useDispatch();

    const handlePhotoChange = (e) => {
        return new Promise((resolve, reject) => {
            const selectedPhoto = e.target.files[0];
            if (selectedPhoto) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const photoUrl = reader.result;
                    resolve(photoUrl);
                };
                reader.onerror = reject;
                reader.readAsDataURL(selectedPhoto);
            } else {
                reject(new Error("No file selected"));
            }
            e.target.value = null;
        });
    };

    const setUserBackground = async (photoUrl) => {
        await setBackground(userData.id, photoUrl);
        dispatch(modifyBackground(photoUrl));
    }

    const setUserIcon = async (photoUrl) => {
        await setIcon(userData.id, photoUrl);
        dispatch(modifyIcon(photoUrl));
    }

    return { handlePhotoChange, setUserBackground, setUserIcon };
}

export default useSetImage;
