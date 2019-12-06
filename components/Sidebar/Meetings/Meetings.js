const meetingsData = [
  {
    date: "11-12 September 2019",
    link: "https://www.google.com",
    name: "DMEXCO",
    location: "Cologne",
  },
  {
    date: "1-2 October 2019",
    link: "https://www.google.com",
    name: "Pocket Gamerz Connects",
    location: "Helsinki",
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
              <a className="link meetings-link" href={meeting.link}>
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