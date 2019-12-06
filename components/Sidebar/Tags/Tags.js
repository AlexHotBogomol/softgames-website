import {useEffect, useState} from 'react';
import Link from "next/link";
import WpApiService from "../../../utils/WpApiService";

const Tags = props => {
  const wpApiService = new WpApiService();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    wpApiService.getAllTags('news_tag').then(({data: tags}) => {
      setTags(tags);
    });
  }, [wpApiService]);

  return (
    <div className="sidebar-block tags">
      <h2 className="sidebar-heading">Tags</h2>
      <ul className="tags-list">
        {tags.map(tag => {
          return (
            <li
              key={tag.id}
            >
              <Link href={`/news/${tag.slug}`}>
                <a>
                  {tag.name}
                </a>
              </Link>
            </li>
          )})}
      </ul>
    </div>
  )
};

export default Tags