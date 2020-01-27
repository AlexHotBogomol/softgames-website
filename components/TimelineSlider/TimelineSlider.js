import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./TimelineSlider.scss";
import textImg from "../../assets/images/joinUs.jpg";
import textImg2 from "../../assets/images/gamesImage.jpg";
import ArrowPrev from "../../assets/icons/ArrowPrev";
import ArrowNext from "../../assets/icons/ArrowNext";

const slides = [
  {
    date: 2006,
    image: textImg,
    text: `Founded in October 2006 by the brothers Andre and 
    Alexander Krug directly out of the parents' garage to build J2ME Games
     for large German TV stations. First release was “Galileo Sudoku”
    in cooperation with ProSiebenSat1`
  },
  {
    date: 2007,
    image: textImg2,
    text: `Hired the first interns, moved into first office.
     Release of the official Mobile Game for the famous TV show “Germany’s Next Topmodel.`
  },
  {
    date: 2008,
    image: textImg,
    text: `SOFTGAMES releases “RTL Racer” and expands cooperation with 
    ProSiebenSat1 through the release of more games for popular TV shows`
  },
  {
    date: 2009,
    image: textImg2,
    text: `Moving into bigger offices as the team is growing. Releasing own IP
     “My little Farm” which ranks up across all major carriers and portals. 
     iPhone is released and brings major changes to the mobile games industry.`
  },
  {
    date: 2010,
    image: textImg,
    text: `SOFTGAMES pivots to development of freemium web browser games
     in XHTML to be prepared for the smartphone area. `
  },
  {
    date: 2011,
    image: textImg2,
    text: `To scale the new business faster, transition from developing
     to publishing freemium web based mobile games. Super successful with
      making money from ads rather than monetizing the user base through IAP. `
  },
  {
    date: 2012,
    image: textImg,
    text: `Pivoting from freemium browser games to ad based hyper-casual HTML5 
    Games with the mission to help flash game portals to transform their business
     from Desktop only towards a cross platform experience. Focus on providing 
     a white label solution. 1M MAU within 3 months.`
  },
  {
    date: 2013,
    image: textImg2,
    text: `Extensive growth phase to 10M MAU. Moving into bigger offices as the team
     is growing to 20. Creation of a worldwide developer network as we expanded our
      business model from white labels to stand-alone games. 50 HTML5 games licensed.`
  },
  {
    date: 2014,
    image: textImg,
    text: `Focus on the development of exclusive content. Release of 100 original
     titles while serving 30M MAU across the growthing affiliate network.`
  },
  {
    date: 2015,
    image: textImg2,
    text: `Adding support for over 14 languages - creation of SOFTGAMES Studio in Berlin.`
  },
  {
    date: 2016,
    image: textImg,
    text: `SOFTGAMES becomes a Facebook Messenger Instant Games Launch Partner among
     only 14 others including Zynga, KING, JamCity.`
  },
  {
    date: 2017,
    image: textImg2,
    text: `Release of “Cookie Crush” which grows from 0 to 3M users within a week
     and is the most successful Match-3 Instant Game since then.`
  },
  {
    date: 2018,
    image: textImg,
    text: `Solitaire Story Launch. Team doubles to 60 people.`
  },
  {
    date: 2019,
    image: textImg2,
    text: `Opening up a branch in Canada, In Feb HQ moves to its new,
     bigger offices. Mahjong Story launch. Team grows to 90 people.`
  }
];

const TimelineSlider = props => {
  let [activeIndex, setActiveIndex] = useState(0);
  let [content, setContent] = useState(slides[0]);
  const delay = 6000;

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

  const renderContent = (date, image, text) => {
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
    );
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
