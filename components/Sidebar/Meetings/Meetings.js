const meetingsData = [
  {
    date: "20-21 January 2020",
    link: "https://www.pgconnects.com/london/",
    name: "Pocket Gamer Connects",
    location: "London",
  },
];

const Meetings = props => {
  return (
    <div className="sidebar-block meetings">
      <h2 className="sidebar-heading">
        Meet us
        in person
      </h2>
      <ul className="meetings-list">
        {meetingsData.map((meeting, index)=>{
          return (
            <li key={index}>
              <p className="accentText meetings-date">{meeting.date}</p>
              <a className="link meetings-link" href={meeting.link} target="_blank">
                {meeting.name}
              </a>
              <span className="meetings-location">&nbsp;({meeting.location})</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default Meetings