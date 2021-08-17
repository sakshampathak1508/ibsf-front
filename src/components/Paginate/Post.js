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

        <Card size="45vh" image="https://dtwhistledev.wpengine.com/wp-content/uploads/2016/02/c7.jpg" title="okbr" description="kokf"/>

        </div>
        
      ))}
    </ul>
  );
};

export default Posts;