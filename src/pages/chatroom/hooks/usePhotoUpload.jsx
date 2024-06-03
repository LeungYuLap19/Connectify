import { useState } from "react";

const usePhotoUpload = () => {
    const [uploaded, setUploaded] = useState(null);

    const handlePhotoChange = (e) => {
        const selectedPhoto = e.target.files[0];
        if (selectedPhoto) {
            const reader = new FileReader();
            reader.onloadend = () => {
               const photoUrl = reader.result;
               setUploaded(photoUrl); 
            }
            reader.readAsDataURL(selectedPhoto);
        }
        e.target.value = null;
    }

    const removePhoto = () => {
        setUploaded(null);
    }

    return { uploaded, handlePhotoChange, removePhoto }
}

export default usePhotoUpload;