import React from 'react';
import './Pagination.scss';
import ArrowNext from "../../assets/icons/ArrowNext";
import ArrowPrev from "../../assets/icons/ArrowPrev";

const Pagination = ({currentPage, totalPosts, postsPerPage, paginate}) => {
  const pages = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pages.push(i);
  }

  const beforePage = () => {
    if(currentPage > 1){
      return (
        <li className="pagination-item">
          <a href="!#" onClick={(event) => {
            event.preventDefault();
            paginate(currentPage - 1);
          }} className="pagination-link">
            <ArrowPrev/>
          </a>
        </li>
      )
    }
  };

  const nextPage = () => {
    if(currentPage < pages.length){
      return (
        <li className="pagination-item">
          <a href="!#" onClick={(event) => {
            event.preventDefault();
            paginate(currentPage + 1);
          }} className="pagination-link">
            <ArrowNext/>
          </a>
        </li>
      )
    }
  };

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        {beforePage()}
        {pages.map(number => {
          const classes = [
            'pagination-link',
            (currentPage === number) ? 'pagination-link--current' : null,
          ];
          return(
            <li className="pagination-item" key={number}>
              <a href="!#" onClick={(event) => {
                event.preventDefault();
                paginate(number);
              }} className={classes.join(" ")}>{number}</a>
            </li>
            )
        })}
        {nextPage()}
      </ul>
    </nav>
  )
}

export default Pagination