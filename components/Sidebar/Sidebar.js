import React from 'react';
import "./Sidebar.scss";

import PressKit from "./PressKit/PressKit";
import Meetings from "./Meetings/Meetings";

const Sidebar = (props) => (
  <section className="sidebar">
    <PressKit />
    <Meetings />
  </section>
);

export default Sidebar;
