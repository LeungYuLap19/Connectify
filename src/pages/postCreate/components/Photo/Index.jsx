import React, { useState } from 'react'
import indexStyle from './index.module.css';

export default function Index({ photo, onRemove }) {
    const [removing, setRemoving] = useState(false);

    const handleRemove = () => {
        setRemoving(true);
        setTimeout(() => {
            onRemove();
        }, 300); 
    };

  return (
    <div className={`${indexStyle['container']} ${removing ? indexStyle['removing'] : ''}`}>        <img src={photo} alt="uploaded-photo" />
        <div 
            className={indexStyle['layer']}
            onClick={handleRemove}    
        >
            <img src="/assets/images/trash.png" alt="remove" />
            <p>Remove</p>
        </div>
    </div>
  )
}
