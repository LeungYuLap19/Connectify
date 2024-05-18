import indexStyle from './index.module.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Photo from '../Photo/Index';
import useImageUpload from '../../hooks/useImageUpload';
import { useEffect } from 'react';

export default function Index({ post, setPost, done }) {
    const { uploaded, photoRef, handleFileChange, removePhoto, setUploaded } = useImageUpload();

    useEffect(() => {
        setPost({...post, photo: uploaded});
    }, [uploaded]);

    useEffect(() => {
        if (done) { setUploaded([]); }
    }, [done]);

    return (
        <div className={indexStyle['container']}>
            <Swiper 
                direction={'vertical'}
                slidesPerView={1.5} 
                grabCursor={true}
            >
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

                {uploaded.map((photo, index) => (
                <SwiperSlide key={index}>
                    <Photo photo={photo} onRemove={() => removePhoto(index)} />
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}