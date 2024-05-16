import { useRef, useState } from "react";

const useImageUpload = () => {
    const photoRef = useRef(null);
    const [uploaded, setUploaded] = useState([]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageDataUrl = reader.result;
            if (uploaded.includes(imageDataUrl)) {
            console.log('Image already uploaded.');
            } else {
            setUploaded([imageDataUrl, ...uploaded]);
            }
        };
        reader.readAsDataURL(selectedFile);
        }
        e.target.value = null;
    };

    const removePhoto = (index) => {
        const updatedUploaded = [...uploaded];
        updatedUploaded.splice(index, 1);
        setUploaded(updatedUploaded);
    };

    return { uploaded, photoRef, handleFileChange, removePhoto, setUploaded }
}

export default useImageUpload;