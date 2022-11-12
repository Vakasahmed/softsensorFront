import React from "react";
import Pagination from "./Pagination";
import SingleCart from "./SingleCart";

function Main({detail,totalItems,post,setPage}) {
  
  return (
    
    <div className="main">
    
      {detail.map((detail, id) => {
       return( 
        
        <SingleCart key={id} detail={detail} img={detail.image} title={detail.title} description={detail.description} price={detail.price} category={detail.category}/>
      
     ) })}
     
    <div className="pagination">
    <Pagination totalPosts={totalItems.length} post={post} setPage={setPage} />
    </div>
    </div>
  );
}

export default Main;
