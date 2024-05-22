import React from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '../hooks/usePost';
import Comment from './Comment';
import styles from './PostDetail.module.css';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = usePost(id!);

  if (isLoading) return <div className={styles.loaderContainer}> 
    <div className={styles.loader}></div>
  </div>;
  if (error) return <div>Error loading post details</div>;

  const renderComments = (comments: any[]) => {
    return comments.map((comment: any) => (
      <div key={comment.id}>
        <Comment
          author={comment.author}
          createdAt={comment.created_at}
          text={comment.text}
        />
        {comment.children && <div className={styles.comments}>{renderComments(comment.children)}</div>}
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.points}>Points: {data.points}</p>
        <h2>Comments</h2>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>{renderComments(data.children)}</div>
      </div>
    </div>
  );
};

export default PostDetail;
