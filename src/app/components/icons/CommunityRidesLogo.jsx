import React from "react";

const CommunityRidesLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={props.fill || "#007BFF"} // Default blue fill color
    className={`w-8 h-8 ${props.className}`}
  >
    {/* Motorbike Icon */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 14.5h-.75a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25H17v-2.5zm-3-1.5V18h1.5v-5h-1.5zm4.5 1.5H20v-2.5h-1.5v2.5zm-12 3v-2.5h-1.5v2.5H6zm-1.5-3v1.5h1.5V15H4.5zM3 18h18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 11.5v-1h-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h-1v1h-4zm1-1h3v-1h-3v1z"
    />
    <path d="M8.207 9.207a.5.5 0 0 0-.707 0l-1 1a.5.5 0 0 0 0 .707l1 1a.5.5 0 0 0 .707-.707L7.707 11l.5-.5-.5-.5zM12.5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3zm.5 3V11h1v2h-1z" />
  </svg>
);

export default CommunityRidesLogo;
