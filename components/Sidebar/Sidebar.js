import "./Sidebar.scss";

import PressKit from "./PressKit/PressKit";
import Subscribe from "./Subscribe/Subscribe";
import Meetings from "./Meetings/Meetings";
import Tags from "./Tags/Tags";

const Sidebar = ({pressKit = true, subscribe = true, meetings = true, tags = true}) => (
  <section className="sidebar">
    {pressKit ? <PressKit /> : null}
    {subscribe ? <Subscribe /> : null}
    {meetings ? <Meetings /> : null}
    {tags ? <Tags /> : null}
  </section>
);

export default Sidebar;
