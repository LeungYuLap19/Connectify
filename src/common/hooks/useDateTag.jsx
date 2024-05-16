import { useState, useEffect } from 'react';

const useDateTag = (isCreatePost, dateTime) => {
  const [dateTag, setDateTag] = useState('');

  useEffect(() => {
    const now = new Date();
    const postDate = new Date(dateTime);
    
    const timeDiffInHours = Math.floor((now - postDate) / (1000 * 60 * 60));
    const timeDiffInMinutes = Math.floor(((now - postDate) / (1000 * 60)) % 60);

    if (isCreatePost) {
      setDateTag(now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    } else if (timeDiffInHours < 24) {
      if (timeDiffInMinutes < 60 && timeDiffInHours < 1) {
        setDateTag(`${timeDiffInMinutes}m`);
      } else {
        setDateTag(`${timeDiffInHours}h`);
      }
    } else if (postDate.getFullYear() === now.getFullYear()) {
      setDateTag(postDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    } else {
      setDateTag(postDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));
    }
  }, [isCreatePost, dateTime]);

  return dateTag;
};

export default useDateTag;