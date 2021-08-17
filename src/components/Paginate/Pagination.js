
  
import React from 'react';
import Pagination1 from '@material-ui/lab/Pagination';

  

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
const pageNumbers = Math.ceil(totalPosts / postsPerPage);
const [page, setPage] = React.useState(1);
const handleChange = (event, value) => {
  setPage(value);
  paginate(value);
};


  return (
    <nav>
        <ul className='pagination'>
            <Pagination1 size="large" count={pageNumbers} page={page} onChange={handleChange} variant="outlined" shape="rounded"/>

        </ul>
    </nav>
);
};

export default Pagination;