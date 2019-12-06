import React, { useState, useEffect } from "react";
import "./TimelineSlider.scss";
import textImg from "../../assets/images/joinUs.jpg";
import textImg2 from '../../assets/images/gamesImage.jpg';
import ArrowPrev from "../../assets/icons/ArrowPrev";
import ArrowNext from "../../assets/icons/ArrowNext";

const slides = [
  {
    date: 2006,
    image: textImg,
    text: `Founded in October 2006 by the brothers Andre and
          Alexander Krug directly out of the parents' garage to
          build J2ME Games for Feature Phones.`
  },
  {
    date: 2007,
    image: textImg2,
    text: `2Founded in October 2006 by the brothers Andre and
          Alexander Krug directly out of the parents' garage to
          build J2ME Games for Feature Phones.`
  },
  {
    date: 2008,
    image: textImg,
    text: `3Founded in October 2006 by the brothers Andre and
          Alexander Krug directly out of the parents' garage to
          build J2ME Games for Feature Phones.`
  },
  {
    date: 2009,
    image: textImg2,
    text: `4Founded in October 2006 by the brothers Andre and
          Alexander Krug directly out of the parents' garage to
          build J2ME Games for Feature Phones.`
  },
  {
    date: 2010,
    image: textImg,
    text: `5Founded in October 2006 by the brothers Andre and
          Alexander Krug directly out of the parents' garage to
          build J2ME Games for Feature Phones.`
  },
  {
    date: 2011,
    image: textImg2,
    text: `6Founded in October 2006 by the brothers Andre and
          Alexander Krug directly out of the parents' garage to
          build J2ME Games for Feature Phones.`
  },
  {
    date: 2012,
    image: textImg,
    text: `7Founded in October 2006 by the brothers Andre and
          Alexander Krug directly out of the parents' garage to
          build J2ME Games for Feature Phones.`
  },
  {
    date: 2013,
    image: textImg2,
    text: `8Founded in October 2006 by the brothers Andre and
          Alexander Krug directly out of the parents' garage to
          build J2ME Games for Feature Phones.`
  },
  {
    date: 2014,
    image: textImg,
    text: `9Founded in October 2006 by the brothers Andre and
          Alexander Krug directly out of the parents' garage to
          build J2ME Games for Feature Phones.`
  },
  {
    date: 2015,
    image: textImg2,
    text: `10Founded in October 2006 by the brothers Andre and
          Alexander Krug directly out of the parents' garage to
          build J2ME Games for Feature Phones.`
  },
  {
    date: 2016,
    image: textImg,
    text: `11Founded in October 2006 by the brothers Andre and
          Alexander Krug directly out of the parents' garage to
          build J2ME Games for Feature Phones.`
  },
  {
    date: 2017,
    image: textImg2,
    text: `12Founded in October 2006 by the brothers Andre and
          Alexander Krug directly out of the parents' garage to
          build J2ME Games for Feature Phones.`
  },
  {
    date: 2018,
    image: textImg,
    text: `13Founded in October 2006 by the brothers Andre and
          Alexander Krug directly out of the parents' garage to
          build J2ME Games for Feature Phones.`
  },
  {
    date: 2019,
    image: textImg2,
    text: `14Founded in October 2006 by the brothers Andre and
          Alexander Krug directly out of the parents' garage to
          build J2ME Games for Feature Phones.`
  }
];

const TimelineSlider = props => {
  let [activeIndex, setActiveIndex] = useState(0);
  let [content, setContent] = useState(slides[0]);
  const delay = 4000;

  useEffect(() => {
    setContent(slides[activeIndex]);
    const timeout = setTimeout(() => {
      nextSlide(activeIndex);
    }, delay);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const onDateClick = index => {
    setActiveIndex(index);
  };

  const nextSlide = currentIndex => {
    if (currentIndex + 1 >= slides.length) {
      return;
    }
    setActiveIndex(++currentIndex);
  };

  const prevSlide = currentIndex => {
    if (currentIndex <= 0) {
      return;
    }
    setActiveIndex(--currentIndex);
  };

  const onPrevBtnClick = () => {
    prevSlide(activeIndex);
  };

  const onNextBtnClick = () => {
    nextSlide(activeIndex);
  };

  const renderContent = ( date, image, text) => {
    return (
      <div className="timelineSlider-content">
        <div
          className="timelineSlider-dateWrapper"
          style={{ backgroundImage: `url(${image})` }}
        >
          <h1>{date}</h1>
        </div>
        <p className="timelineSlider-text">{text}</p>
      </div>
    )
  };
  return (
    <div className="timelineSlider">
      <ul className="timelineSlider-dates">
        {slides.map((slide, index) => {
          const classes = [
            "timelineSlider-date",
            activeIndex === index ? "timelineSlider-date--active" : null
          ];
          return (
            <li
              key={slide.date}
              className={classes.join(" ")}
              onClick={() => onDateClick(index)}
            >
              {slide.date}
            </li>
          );
        })}
      </ul>
      {renderContent(content.date, content.image, content.text)}
      <div className="timelineSlider-arrows">
        <button
          className="timelineSlider-arrow timelineSlider-prevArrow"
          onClick={onPrevBtnClick}
        >
          <ArrowPrev />
        </button>
        <button
          className="timelineSlider-arrow timelineSlider-nextArrow"
          onClick={onNextBtnClick}
        >
          <ArrowNext />
        </button>
      </div>
    </div>
  );
};

export default TimelineSlider;
