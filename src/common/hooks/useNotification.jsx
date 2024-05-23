import { createNotification, handleComment, handleFollow, handleLike } from "../../Services/notificationService";

const useNotification = () => {
    const likeNotification = async (userData, postUser, postData) => {
        if (userData.id !== postUser.id) {
            const notification = {
                fromUser: userData,
                toUser: postUser.id,
                post: postData.id,
                dateTime: new Date().toISOString(),
                message: 'liked your post'
            }
            const data = await createNotification(notification);
            notification.id = data.data;
            await handleLike(notification);
        }
    }

    const commentNotification = async (userData, postUser, postData, comment) => {
        if (userData.id !== postUser.id) {
            const notification = {
                fromUser: userData,
                toUser: postUser.id,
                post: postData.id,
                comment: comment,
                dateTime: new Date().toISOString(),
                message: 'commented on your post'
            }
            const data = await createNotification(notification);
            notification.id = data.data;
            await handleComment(notification);
        }
    }

    const followNotification = async (userData, user) => {
        const notification = {
            fromUser: userData,
            toUser: user.id,
            dateTime: new Date().toISOString(),
            message: 'followed you'
        }
        const data = await createNotification(notification);
        notification.id = data.data;
        await handleFollow(notification);
    }

    return { likeNotification, commentNotification, followNotification };
}

export default useNotification;