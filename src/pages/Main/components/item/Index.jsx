import React, { useEffect, useState } from 'react';
import indexStyle from './index.module.css';
import { useSelector } from 'react-redux';

export default function Index({ imagePath, itemName, clicked }) {
  const isClicked = clicked ? indexStyle['clicked'] : '';
  const { notificationsData } = useSelector(state => state.notifications.value);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    if (itemName === 'Notifications') {
      setNotificationCount(notificationsData.length);
    }
  }, [notificationsData, itemName]);

  return (
    <div className={`${indexStyle['container']} ${isClicked}`}>
      <img src={imagePath} alt="navbar-item" />
      <p>
        {itemName}
        {itemName === 'Notifications' && notificationCount > 0 && (
          <span>{notificationCount}</span>
        )}
      </p>
    </div>
  );
}