import React from 'react';
import Card from '../Card/Card';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <div>

<li key={post.id} className='list-group-item'>
          {post.title}
        </li>

        </div>
        
      ))}
    </ul>
  );
};

export default Posts;