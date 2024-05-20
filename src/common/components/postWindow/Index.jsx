import indexStyle from './index.module.css';
import PhotoSwiper from '../photoSwiper/Index';
import Close from '../close/Index';
import UserTag from '../userTag/Index';
import Comment from '../comment/Index';
import Like from '../like/Index';
import CommentInput from '../commentInput/Index';

export default function Index({ postUser, posts, setPosts, postid, setPostid }) {
    const postData = posts.find((post) => post.id === postid);

    return (
        <div 
            className={indexStyle['wrapper']}
        >
            <div className={indexStyle['container']}>
                <div className={indexStyle['photo']}>
                    <PhotoSwiper photos={postData.photo}/>
                </div>
                <div className={indexStyle['panel']}>
                    <div className={indexStyle['header']}>
                        <UserTag clickable={false} userData={postUser} />
                        <Close close={setPostid}/>
                    </div>

                    <div className={indexStyle['comments']}>
                        <div className={indexStyle['comment']}>
                            <Comment comment={{comment: postData.caption, commentTime: postData.postTime, user: postUser}} />
                        </div>
                        {
                            postData.comments.map((comment, index) => {
                                return (
                                    <div className={indexStyle['comment']} key={index}>
                                        <Comment comment={comment}/>
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div className={indexStyle['likes']}>
                        <Like postData={postData} posts={posts} setPosts={setPosts} />
                    </div>

                    <div className={indexStyle['comment-input']}>
                        <CommentInput postid={postData.id} posts={posts} setPosts={setPosts} />
                    </div>
                </div>
            </div>
        </div>
    )
}
