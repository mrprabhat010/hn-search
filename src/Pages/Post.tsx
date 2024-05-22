// src/pages/Post.tsx
import { Suspense, lazy } from 'react';
const PostDetail = lazy(() => import('../Components/PostDetail'));

const Post = () => (
  <main>
    <Suspense fallback={<div>Loading...</div>}>
      <PostDetail />
    </Suspense>
  </main>
);

export default Post;
