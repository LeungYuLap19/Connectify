import React, { useRef, useState } from 'react';
import indexStyle from './index.module.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Photo from '../Photo/Index';

export default function Index() {
    const photoRef = useRef(null);
    const [uploaded, setUploaded] = useState([]);

    const handleFileChange = (e) => {
        console.log('uploaded');
        const selectedFile = e.target.files[0];
        if (selectedFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageDataUrl = reader.result;
            if (uploaded.includes(imageDataUrl)) {
            console.log('Image already uploaded.');
            } else {
            setUploaded([...uploaded, imageDataUrl]);
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

    return (
        <div className={indexStyle['container']}>
        <Swiper slidesPerView={4.5} grabCursor={true}>
            {uploaded.map((photo, index) => (
            <SwiperSlide key={index}>
                <Photo photo={photo} onRemove={() => removePhoto(index)} />
            </SwiperSlide>
            ))}

            {uploaded.length < 6 && (
            <SwiperSlide>
                <div
                className={indexStyle['upload']}
                onClick={() => {
                    photoRef.current.click();
                }}
                >
                <input
                    type="file"
                    ref={photoRef}
                    style={{ display: 'none' }}
                    accept="image/*"
                    multiple={false}
                    onChange={handleFileChange}
                />
                <h1>+</h1>
                <p>Upload Photo</p>
                </div>
            </SwiperSlide>
            )}
        </Swiper>
        </div>
    );
}