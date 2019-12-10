import './SimpleCard.scss';

const SimpleCard = ({icon, content, className}) => {
  const classes = [
    'simpleCard',
    className,
  ];
  return (
    <div className={classes.join(" ")}>
      <div className="simpleCard-imgWrapper">
        {typeof icon !== "string" ? icon : (
          <img
            src={icon}
            alt={content}
          />
        )}
      </div>
      {content}
    </div>
  )
};

export default SimpleCard