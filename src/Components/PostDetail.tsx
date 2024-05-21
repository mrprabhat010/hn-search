import { useParams } from 'react-router-dom';
import { usePost } from '../hooks/usePost';

const PostDetail = () => {
  const { id} = useParams<{ id: string }>();
  const { data, error, isLoading } = usePost(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading post</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>Points: {data.points}</p>
      <h3>Comments:</h3>
      <ul>
        {data.children.map((comment: any) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
