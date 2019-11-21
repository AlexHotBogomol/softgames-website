import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import WpApiService from "../../../services/WpApiService";

const Tags = props => {
  const wpApiService = new WpApiService();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    wpApiService.getAllTags('news_tag').then(({data: tags}) => {
      setTags(tags);
    });
  }, []);

  return (
    <div className="sidebar-block tags">
      <h2 className="sidebar-heading">Tags</h2>
      <ul className="tags-list">
        {tags.map(tag => {
          return (
            <li
              key={tag.id}
            >
              <Link to={`/news/${tag.slug}`}>{tag.name}</Link>
            </li>
          )})}
      </ul>
    </div>
  )
};

export default Tags