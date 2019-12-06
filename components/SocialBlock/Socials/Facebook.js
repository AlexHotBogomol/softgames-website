const Facebook = ({className, link}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={className}>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <rect x="0.375" y="0.7052" width="40.8828" height="40.8828" rx="20.4414" fill="#4267B2"/>
          <path d="M22.1813 34.7741V22.3417H26.3544L26.9791 17.4966H22.1813V14.4031C22.1813 13.0004 22.5709 12.0443 24.5826 12.0443L27.1483 12.0431V7.70975C26.7043 7.65092 25.1814 7.51904 23.4096 7.51904C19.7105 7.51904 17.178 9.77688 17.178 13.9235V17.4967H12.9941V22.3418H17.1779V34.7742L22.1813 34.7741Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="40.8828" height="40.8828" fill="white" transform="translate(0.375 0.7052)"/>
          </clipPath>
        </defs>
      </svg>
    </a>
  )
};

export default Facebook