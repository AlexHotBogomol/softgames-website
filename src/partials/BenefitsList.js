import React from 'react';
import Visa from "../assets/icons/benefits/Visa";
import Relocation from "../assets/icons/benefits/Relocation";
import Languages from "../assets/icons/benefits/Languages";
import FurtherTraining from "../assets/icons/benefits/FurtherTraining";
import FlexibleWorkingHours from "../assets/icons/benefits/FlexibleWorkingHours";
import HomeOffice from "../assets/icons/benefits/HomeOffice";
import TeamSpirit from "../assets/icons/benefits/TeamSpirit";
import Equipment from "../assets/icons/benefits/Equipment";
import Food from "../assets/icons/benefits/Food";
import Parties from "../assets/icons/benefits/Parties";
import TeamEvents from "../assets/icons/benefits/TeamEvents";
import Studio from "../assets/icons/benefits/Studio";

const benefits = [
  {
    icon: <Visa/>,
    title: "Visa",
    description: `Our visa assistance service guides you through the whole
          process and helps with tips and tricks to get the approvals
          and your visa as fast as possible.`,
  },
  {
    icon: <Relocation/>,
    title: "Relocation",
    description: `We support your move to Berlin with e.g. flat hunting, paper
          work like local registration, setting up bank accounts etc.`,
  },
  {
    icon: <Languages/>,
    title: "Language classes",
    description: `We pay your German lessons so you can order food auf Deutsch
          very fast and go right up to perfecting your business
          vocabulary.`,
  },
  {
    icon: <FurtherTraining/>,
    title: "Further training",
    description: `A personal learning budget to spend on learning and
          development, including books, workshops, etc.`,
  },
  {
    icon: <FlexibleWorkingHours/>,
    title: "Flexible working hours",
    description: `Productive hours differ individually. That’s why you're
          welcome to show up in the office whenever you're ready for
          it.`,
  },
  {
    icon: <HomeOffice/>,
    title: "Home office",
    description: `Need to watch the kids or wait for a handicraftsman? No
          problem - we also offer the opportunity for home office.`,
  },
  {
    icon: <TeamSpirit/>,
    title: "Team spirit",
    description: `Beyond our amazing parties and company events, the team
          further organizes activities themselves such as playing
          soccer together, a cooking group, a Japanese learning group,
          and much more.`,
  },
  {
    icon: <Equipment/>,
    title: "Equipment",
    description: `Choose between the latest MacBooks or Windows Laptops at
          your choice. Furthermore our office features the latest
          projectors, cameras, testing devices, monitors - you name
          it.`,
  },
  {
    icon: <Food/>,
    title: "Fresh fruits, snacks and drinks",
    description: `Enjoy fresh fruits, free coffee and a fully stocked fridge
          with cold Water, Juices, Coke, Club Mate, Beer etc. For the
          sweet-toothed we have snacks, chocolate and chips of course.`,
  },
  {
    icon: <Parties/>,
    title: "Epic company parties",
    description: `Regular company parties to celebrate, including Carnival,
          Summer Party, Oktoberfest, Christmas Party`,
  },
  {
    icon: <TeamEvents/>,
    title: "Team events",
    description: `We have regular Casual Fridays, Board Game Nights, Pub
          Quizzes, Team lunches, Company breakfasts and much more …`,
  },
  {
    icon: <Studio/>,
    title: "Studio",
    description: `A super modern office with state of the art tech, based in
          the center of Berlin, quickly to reach from all destinations
          thanks to the excellent public transport connections.`,
  },
];

const BenefitsList = props => {
  return (
    <ul className="benefits-list">
      {benefits.map((benefit) => (
        <li className="benefits-item">
          <div className="benefits-icon">
            {benefit.icon}
          </div>
          <h5 className="benefits-title">{benefit.title}</h5>
          <p className="benefits-description">
            {benefit.description}
          </p>
        </li>
      ))}
    </ul>
  )
};

export default BenefitsList