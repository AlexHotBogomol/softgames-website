import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb-list">
        {items.map((item, index, array) => {
          return (
            <li className="breadcrumb-item breadcrumb-item--active" key={index}>
              {index === array.length - 1 ? (
                <Link
                  className="breadcrumb-link breadcrumb-link--active"
                  to={item.slug}
                >
                  {item.name}
                </Link>
              ) : (
                <Link className="breadcrumb-link" to={item.slug}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
