import React from 'react';

function Pagination({totalPosts,post, setPage}) {
    let pages = [];
    
    for(let i =1; i<=Math.ceil(totalPosts/post); i++){
        pages.push(i);
    }
  return (
    <div className='page'>
    {

        pages.map((page,i)=>{
          
            return(
                <button className='btn-page' key={i} onClick={()=>{setPage(page)}}>{page}</button>
            )
        })
       
    }</div>
  )
}

export default Pagination
