import Link from "next/link";

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb-list">
        {items.map((item, index, array) => {
          return (
            <li className="breadcrumb-item breadcrumb-item--active" key={index}>
              {index === array.length - 1 ? (
                <Link href={item.slug} >
                  <a className="breadcrumb-link breadcrumb-link--active">
                    {item.name}
                  </a>
                </Link>
              ) : (
                <Link href={item.slug}>
                  <a className="breadcrumb-link" >
                    {item.name}
                  </a>
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
