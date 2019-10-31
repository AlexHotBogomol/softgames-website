import React from 'react';
import Header from '../partials/Header/Header';
import TheLoop from '../partials/TheLoop';
import Footer from '../partials/Footer';
import {Provider} from '../context/Context'
import CommentList from '../partials/CommentList';
import CommentForm from '../partials/CommentForm';

const Single = (props) => {  

  let comments = ''; 
  let commentsForm = '';

  if(props.match.path === '/post/:slug'){
    comments = <CommentList></CommentList>; 
    commentsForm = <CommentForm></CommentForm>;
  }

  return (
    <Provider router={props} >
    <div className="Post">
      <Header></Header>
      <div className="content-area">
      <TheLoop></TheLoop>
      </div>
      {comments}
      {commentsForm}
      <Footer></Footer>
    </div>
    </Provider>
  )    
 
}
export default Single