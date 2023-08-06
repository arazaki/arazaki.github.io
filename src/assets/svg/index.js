import * as React from "react";

export const ArrowDown = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-down"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

export const ArrowLeft = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-left"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
};

export const ArrowRight = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-right"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
};

export const ArrowUp = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-up"
    >
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  );
};

export const At = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-at-sign"
    >
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
    </svg>
  );
};

export const Attention = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-alert-triangle"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12" y2="17"></line>
    </svg>
  );
};

export const Award = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-award"
    >
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  );
};

export const Bluetooth = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bluetooth"
    >
      <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>
    </svg>
  );
};

export const Calendar = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-calendar"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
};

export const CameraOff = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-camera-off"
    >
      <line x1="1" y1="1" x2="23" y2="23"></line>
      <path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>
    </svg>
  );
};

export const CameraOn = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-camera"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
  );
};

export const Check = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

export const CheckCircle = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check-circle"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
};

export const CheckSquare = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check-square"
    >
      <polyline points="9 11 12 14 22 4"></polyline>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg>
  );
};

export const Circle = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-circle"
    >
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
};

export const Clock = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-clock"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
};

export const Close = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

export const CloudUpload = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-upload-cloud"
    >
      <polyline points="16 16 12 12 8 16"></polyline>
      <line x1="12" y1="12" x2="12" y2="21"></line>
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
      <polyline points="16 16 12 12 8 16"></polyline>
    </svg>
  );
};

export const Download = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-download"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  );
};

export const Edit = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-edit"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  );
};

export const Forbidden = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-slash"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </svg>
  );
};

export const Gear = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-settings"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );
};

export const Gift = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-gift"
    >
      <polyline points="20 12 20 22 4 22 4 12"></polyline>
      <rect x="2" y="7" width="20" height="5"></rect>
      <line x1="12" y1="22" x2="12" y2="7"></line>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
    </svg>
  );
};

export const Globe = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-globe"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );
};

export const Grid = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-grid"
    >
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  );
};

export const Heart = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-heart"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
};

export const Image = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-image"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  );
};

export const Information = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-info"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12" y2="8"></line>
    </svg>
  );
};

export const Link = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-link"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  );
};

export const Lock = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-lock"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );
};

export const Mail = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-mail"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
};

export const MicOff = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-mic-off"
    >
      <line x1="1" y1="1" x2="23" y2="23"></line>
      <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
      <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  );
};

export const MicOn = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-mic"
    >
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  );
};

export const Mute = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-volume-x"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <line x1="23" y1="9" x2="17" y2="15"></line>
      <line x1="17" y1="9" x2="23" y2="15"></line>
    </svg>
  );
};

export const Play = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-play"
    >
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  );
};

export const PinLocation = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-map-pin"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
};

export const Plus = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-plus"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
};

export const Printer = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-printer"
    >
      <polyline points="6 9 6 2 18 2 18 9"></polyline>
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
      <rect x="6" y="14" width="12" height="8"></rect>
    </svg>
  );
};

export const RecordingOff = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-video-off"
    >
      <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  );
};

export const RecordingOn = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-video"
    >
      <polygon points="23 7 16 12 23 17 23 7"></polygon>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
    </svg>
  );
};

export const Screen = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-monitor"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );
};

export const Search = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-search"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
};

export const Share = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-share-2"
    >
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
  );
};

export const Smartphone = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-smartphone"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
  );
};

export const Square = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-square"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    </svg>
  );
};

export const SoundLevelMax = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-volume-2"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
  );
};

export const SoundLevelMin = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-volume-1"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
  );
};

export const SoundLevelZero = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-volume"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    </svg>
  );
};

export const Star = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-star"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
};

export const Sync = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-repeat"
    >
      <polyline points="17 1 21 5 17 9"></polyline>
      <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
      <polyline points="7 23 3 19 7 15"></polyline>
      <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
    </svg>
  );
};

export const Talk = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-message-circle"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );
};

export const ThumbsDown = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-thumbs-down"
    >
      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
    </svg>
  );
};

export const ThumbsUp = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-thumbs-up"
    >
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
    </svg>
  );
};

export const ToggleLeft = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-toggle-left"
    >
      <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
      <circle cx="8" cy="12" r="3"></circle>
    </svg>
  );
};

export const ToggleRight = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-toggle-right"
    >
      <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
      <circle cx="16" cy="12" r="3"></circle>
    </svg>
  );
};

export const Trash = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-trash-2"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
  );
};

export const Tuning = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-sliders"
    >
      <line x1="4" y1="21" x2="4" y2="14"></line>
      <line x1="4" y1="10" x2="4" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12" y2="3"></line>
      <line x1="20" y1="21" x2="20" y2="16"></line>
      <line x1="20" y1="12" x2="20" y2="3"></line>
      <line x1="1" y1="14" x2="7" y2="14"></line>
      <line x1="9" y1="8" x2="15" y2="8"></line>
      <line x1="17" y1="16" x2="23" y2="16"></line>
    </svg>
  );
};

export const TurnOff = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-power"
    >
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
      <line x1="12" y1="2" x2="12" y2="12"></line>
    </svg>
  );
};

export const Upload = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-share"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
      <polyline points="16 6 12 2 8 6"></polyline>
      <line x1="12" y1="2" x2="12" y2="15"></line>
    </svg>
  );
};

export const UserCheck = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-user-check"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <polyline points="17 11 19 13 23 9"></polyline>
    </svg>
  );
};

export const Video = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-film"
    >
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
      <line x1="7" y1="2" x2="7" y2="22"></line>
      <line x1="17" y1="2" x2="17" y2="22"></line>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <line x1="2" y1="7" x2="7" y2="7"></line>
      <line x1="2" y1="17" x2="7" y2="17"></line>
      <line x1="17" y1="17" x2="22" y2="17"></line>
      <line x1="17" y1="7" x2="22" y2="7"></line>
    </svg>
  );
};

export const WifiOff = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-wifi-off"
    >
      <line x1="1" y1="1" x2="23" y2="23"></line>
      <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path>
      <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path>
      <path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path>
      <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
      <line x1="12" y1="20" x2="12" y2="20"></line>
    </svg>
  );
};

export const WifiOn = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-wifi"
    >
      <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
      <line x1="12" y1="20" x2="12" y2="20"></line>
    </svg>
  );
};

// Social Media
export const WhatsApp = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="social-icons-whatsapp"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
    >
      <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z" />
    </svg>
  );
};
export const Twitch = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="social-icons-twitch"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
    >
      <path d="M 5.3125 1 L 5.0625 1.65625 L 2.0625 9.65625 L 2 9.8125 L 2 43 L 13 43 L 13 49 L 20.40625 49 L 20.71875 48.71875 L 26.4375 43 L 35.40625 43 L 35.71875 42.71875 L 48 30.4375 L 48 1 Z M 6.6875 3 L 46 3 L 46 29.59375 L 34.59375 41 L 25.59375 41 L 19.59375 47 L 15 47 L 15 41 L 4 41 L 4 10.1875 Z M 10 5 L 10 35 L 18 35 L 18 42.40625 L 19.71875 40.71875 L 25.4375 35 L 37.40625 35 L 37.71875 34.71875 L 43.71875 28.71875 L 44 28.40625 L 44 5 Z M 12 7 L 42 7 L 42 27.5625 L 36.5625 33 L 24.59375 33 L 24.28125 33.28125 L 20 37.5625 L 20 33 L 12 33 Z M 20 13 L 20 27 L 26 27 L 26 13 Z M 30 13 L 30 27 L 36 27 L 36 13 Z M 22 15 L 24 15 L 24 25 L 22 25 Z M 32 15 L 34 15 L 34 25 L 32 25 Z" />
    </svg>
  );
};
export const Discord = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="social-icons-discord"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
    >
      <path d="M 18.90625 7 C 18.90625 7 12.539063 7.4375 8.375 10.78125 C 8.355469 10.789063 8.332031 10.800781 8.3125 10.8125 C 7.589844 11.480469 7.046875 12.515625 6.375 14 C 5.703125 15.484375 4.992188 17.394531 4.34375 19.53125 C 3.050781 23.808594 2 29.058594 2 34 C 1.996094 34.175781 2.039063 34.347656 2.125 34.5 C 3.585938 37.066406 6.273438 38.617188 8.78125 39.59375 C 11.289063 40.570313 13.605469 40.960938 14.78125 41 C 15.113281 41.011719 15.429688 40.859375 15.625 40.59375 L 18.0625 37.21875 C 20.027344 37.683594 22.332031 38 25 38 C 27.667969 38 29.972656 37.683594 31.9375 37.21875 L 34.375 40.59375 C 34.570313 40.859375 34.886719 41.011719 35.21875 41 C 36.394531 40.960938 38.710938 40.570313 41.21875 39.59375 C 43.726563 38.617188 46.414063 37.066406 47.875 34.5 C 47.960938 34.347656 48.003906 34.175781 48 34 C 48 29.058594 46.949219 23.808594 45.65625 19.53125 C 45.007813 17.394531 44.296875 15.484375 43.625 14 C 42.953125 12.515625 42.410156 11.480469 41.6875 10.8125 C 41.667969 10.800781 41.644531 10.789063 41.625 10.78125 C 37.460938 7.4375 31.09375 7 31.09375 7 C 31.019531 6.992188 30.949219 6.992188 30.875 7 C 30.527344 7.046875 30.234375 7.273438 30.09375 7.59375 C 30.09375 7.59375 29.753906 8.339844 29.53125 9.40625 C 27.582031 9.09375 25.941406 9 25 9 C 24.058594 9 22.417969 9.09375 20.46875 9.40625 C 20.246094 8.339844 19.90625 7.59375 19.90625 7.59375 C 19.734375 7.203125 19.332031 6.964844 18.90625 7 Z M 18.28125 9.15625 C 18.355469 9.359375 18.40625 9.550781 18.46875 9.78125 C 16.214844 10.304688 13.746094 11.160156 11.4375 12.59375 C 11.074219 12.746094 10.835938 13.097656 10.824219 13.492188 C 10.816406 13.882813 11.039063 14.246094 11.390625 14.417969 C 11.746094 14.585938 12.167969 14.535156 12.46875 14.28125 C 17.101563 11.410156 22.996094 11 25 11 C 27.003906 11 32.898438 11.410156 37.53125 14.28125 C 37.832031 14.535156 38.253906 14.585938 38.609375 14.417969 C 38.960938 14.246094 39.183594 13.882813 39.175781 13.492188 C 39.164063 13.097656 38.925781 12.746094 38.5625 12.59375 C 36.253906 11.160156 33.785156 10.304688 31.53125 9.78125 C 31.59375 9.550781 31.644531 9.359375 31.71875 9.15625 C 32.859375 9.296875 37.292969 9.894531 40.3125 12.28125 C 40.507813 12.460938 41.1875 13.460938 41.8125 14.84375 C 42.4375 16.226563 43.09375 18.027344 43.71875 20.09375 C 44.9375 24.125 45.921875 29.097656 45.96875 33.65625 C 44.832031 35.496094 42.699219 36.863281 40.5 37.71875 C 38.5 38.496094 36.632813 38.84375 35.65625 38.9375 L 33.96875 36.65625 C 34.828125 36.378906 35.601563 36.078125 36.28125 35.78125 C 38.804688 34.671875 40.15625 33.5 40.15625 33.5 C 40.570313 33.128906 40.605469 32.492188 40.234375 32.078125 C 39.863281 31.664063 39.226563 31.628906 38.8125 32 C 38.8125 32 37.765625 32.957031 35.46875 33.96875 C 34.625 34.339844 33.601563 34.707031 32.4375 35.03125 C 32.167969 35 31.898438 35.078125 31.6875 35.25 C 29.824219 35.703125 27.609375 36 25 36 C 22.371094 36 20.152344 35.675781 18.28125 35.21875 C 18.070313 35.078125 17.8125 35.019531 17.5625 35.0625 C 16.394531 34.738281 15.378906 34.339844 14.53125 33.96875 C 12.234375 32.957031 11.1875 32 11.1875 32 C 10.960938 31.789063 10.648438 31.699219 10.34375 31.75 C 9.957031 31.808594 9.636719 32.085938 9.53125 32.464844 C 9.421875 32.839844 9.546875 33.246094 9.84375 33.5 C 9.84375 33.5 11.195313 34.671875 13.71875 35.78125 C 14.398438 36.078125 15.171875 36.378906 16.03125 36.65625 L 14.34375 38.9375 C 13.367188 38.84375 11.5 38.496094 9.5 37.71875 C 7.300781 36.863281 5.167969 35.496094 4.03125 33.65625 C 4.078125 29.097656 5.0625 24.125 6.28125 20.09375 C 6.90625 18.027344 7.5625 16.226563 8.1875 14.84375 C 8.8125 13.460938 9.492188 12.460938 9.6875 12.28125 C 12.707031 9.894531 17.140625 9.296875 18.28125 9.15625 Z M 18.5 21 C 15.949219 21 14 23.316406 14 26 C 14 28.683594 15.949219 31 18.5 31 C 21.050781 31 23 28.683594 23 26 C 23 23.316406 21.050781 21 18.5 21 Z M 31.5 21 C 28.949219 21 27 23.316406 27 26 C 27 28.683594 28.949219 31 31.5 31 C 34.050781 31 36 28.683594 36 26 C 36 23.316406 34.050781 21 31.5 21 Z M 18.5 23 C 19.816406 23 21 24.265625 21 26 C 21 27.734375 19.816406 29 18.5 29 C 17.183594 29 16 27.734375 16 26 C 16 24.265625 17.183594 23 18.5 23 Z M 31.5 23 C 32.816406 23 34 24.265625 34 26 C 34 27.734375 32.816406 29 31.5 29 C 30.183594 29 29 27.734375 29 26 C 29 24.265625 30.183594 23 31.5 23 Z" />
    </svg>
  );
};
export const Telegram = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="social-icons-telegram"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
    >
      <path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z M 34.087891 16.035156 C 34.362891 16.035156 34.608406 16.080641 34.816406 16.181641 C 35.289406 16.408641 35.530031 16.914688 35.457031 17.679688 C 35.215031 20.202687 33.253938 33.008969 32.835938 34.292969 C 32.477938 35.390969 32.100813 36.335938 31.382812 36.335938 C 30.664813 36.335938 29.880422 36.08425 29.107422 35.53125 C 28.334422 34.97925 23.201281 31.536891 22.488281 31.087891 C 21.863281 30.693891 21.201813 29.711719 22.132812 28.761719 C 22.899812 27.979719 28.717844 22.332938 29.214844 21.835938 C 29.584844 21.464938 29.411828 21.017578 29.048828 21.017578 C 28.923828 21.017578 28.774141 21.070266 28.619141 21.197266 C 28.011141 21.694266 19.534781 27.366266 18.800781 27.822266 C 18.314781 28.124266 17.56225 28.341797 16.78125 28.341797 C 16.44825 28.341797 16.111109 28.301891 15.787109 28.212891 C 14.659109 27.901891 12.750187 27.322734 11.992188 27.052734 C 11.263188 26.792734 10.998047 26.543656 10.998047 26.097656 C 10.998047 25.463656 11.892938 25.026 12.835938 24.625 C 13.831938 24.202 31.066062 16.883437 32.414062 16.398438 C 33.038062 16.172438 33.608891 16.035156 34.087891 16.035156 z" />
    </svg>
  );
};
export const Vimeo = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="social-icons-vimeo"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
    >
      <path d="M 40.976563 7 C 42.636719 7.042969 43.828125 7.46875 44.613281 8.300781 C 45.632813 9.382813 46.097656 11.273438 46 13.902344 C 45.796875 18.144531 42.597656 24.378906 36.976563 31.480469 C 29.804688 40.886719 25.25 42.863281 22.691406 42.863281 C 21.007813 42.863281 19.277344 40.722656 17.8125 36.839844 C 17.214844 34.589844 16.582031 32.3125 15.96875 30.109375 C 15.351563 27.886719 14.714844 25.585938 14.105469 23.289063 C 12.851563 18.90625 11.121094 14.429688 7.800781 14.429688 C 7.539063 14.429688 7.046875 14.429688 5.8125 15.066406 C 5.953125 14.953125 6.09375 14.84375 6.234375 14.730469 C 7.425781 13.789063 8.65625 12.8125 9.878906 11.703125 C 11.546875 10.257813 14.070313 8.070313 15.183594 7.992188 C 15.3125 7.980469 15.441406 7.972656 15.566406 7.972656 C 18.609375 7.972656 19.617188 11.722656 19.949219 13.96875 C 20.800781 19.445313 21.546875 22.464844 21.90625 23.914063 L 21.945313 24.070313 C 22.800781 28.089844 23.898438 32 27 32 C 28.203125 32 30.625 31.386719 33.359375 27.238281 C 35.746094 23.484375 36.292969 20.433594 36.402344 18.917969 C 36.550781 17.660156 36.605469 15.871094 35.476563 14.59375 C 34.382813 13.355469 32.78125 13.214844 31.671875 13.214844 C 31.597656 13.214844 31.523438 13.214844 31.453125 13.21875 C 33.546875 8.847656 36.472656 7 40.976563 7 M 40.976563 5 C 34.203125 5 30.464844 8.804688 28.167969 16.210938 C 29.371094 15.765625 30.578125 15.214844 31.671875 15.214844 C 33.972656 15.214844 34.738281 16.070313 34.410156 18.726563 C 34.300781 20.386719 33.644531 23.066406 31.671875 26.164063 C 29.699219 29.152344 27.984375 30 27 30 C 25.796875 30 24.882813 28.269531 23.898438 23.621094 C 23.570313 22.292969 22.804688 19.304688 21.925781 13.664063 C 21.203125 8.742188 18.878906 5.972656 15.570313 5.972656 C 15.382813 5.972656 15.191406 5.980469 15 6 C 13.46875 6.109375 11.636719 7.535156 8.570313 10.191406 C 6.378906 12.183594 4.300781 13.621094 2 15.613281 L 4.191406 18.421875 C 6.269531 16.984375 7.476563 16.429688 7.804688 16.429688 C 9.335938 16.429688 10.757813 18.863281 12.183594 23.84375 C 13.386719 28.378906 14.699219 32.914063 15.90625 37.449219 C 17.765625 42.429688 20.066406 44.863281 22.691406 44.863281 C 27.074219 44.863281 32.328125 40.882813 38.570313 32.695313 C 44.699219 24.949219 47.78125 18.535156 48 14 C 48.21875 8.027344 45.816406 5.109375 41 5 C 40.992188 5 40.984375 5 40.976563 5 Z" />
    </svg>
  );
};
export const Youtube = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="social-icons-youtube"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
    >
      <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z" />
    </svg>
  );
};
export const Facebook = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="social-icons-facebook"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
    >
      <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z" />
    </svg>
  );
};
export const Instagram = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="social-icons-instagram"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
    >
      <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
    </svg>
  );
};
export const Linkedin = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="social-icons-linkedin"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
    >
      <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z" />
    </svg>
  );
};
export const Tiktok = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="social-icons-tiktok"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
    >
      <path d="M 9 4 C 6.2495759 4 4 6.2495759 4 9 L 4 41 C 4 43.750424 6.2495759 46 9 46 L 41 46 C 43.750424 46 46 43.750424 46 41 L 46 9 C 46 6.2495759 43.750424 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.671576 6 44 7.3284241 44 9 L 44 41 C 44 42.671576 42.671576 44 41 44 L 9 44 C 7.3284241 44 6 42.671576 6 41 L 6 9 C 6 7.3284241 7.3284241 6 9 6 z M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z" />
    </svg>
  );
};
export const Twitter = ({ width, height, color, outline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="social-icons-twitter"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      fill={color}
      stroke={outline}
    >
      <path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z" />
    </svg>
  );
};

// Outros Estilos

export const GoogleIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width}
      height={height}
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
};

export const FlagBR = ({ width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-br"
      width={width}
      viewBox="0 0 640 480"
    >
      <g strokeWidth="1pt">
        <path fill="#229e45" fillRule="evenodd" d="M0 0h640v480H0z" />
        <path
          fill="#f8e509"
          fillRule="evenodd"
          d="m321.4 436 301.5-195.7L319.6 44 17.1 240.7 321.4 436z"
        />
        <path
          fill="#2b49a3"
          fillRule="evenodd"
          d="M452.8 240c0 70.3-57.1 127.3-127.6 127.3A127.4 127.4 0 1 1 452.8 240z"
        />
        <path
          fill="#ffffef"
          fillRule="evenodd"
          d="m283.3 316.3-4-2.3-4 2 .9-4.5-3.2-3.4 4.5-.5 2.2-4 1.9 4.2 4.4.8-3.3 3m86 26.3-3.9-2.3-4 2 .8-4.5-3.1-3.3 4.5-.5 2.1-4.1 2 4.2 4.4.8-3.4 3.1m-36.2-30-3.4-2-3.5 1.8.8-3.9-2.8-2.9 4-.4 1.8-3.6 1.6 3.7 3.9.7-3 2.7m87-8.5-3.4-2-3.5 1.8.8-3.9-2.7-2.8 3.9-.4 1.8-3.5 1.6 3.6 3.8.7-2.9 2.6m-87.3-22-4-2.2-4 2 .8-4.6-3.1-3.3 4.5-.5 2.1-4.1 2 4.2 4.4.8-3.4 3.2m-104.6-35-4-2.2-4 2 1-4.6-3.3-3.3 4.6-.5 2-4.1 2 4.2 4.4.8-3.3 3.1m13.3 57.2-4-2.3-4 2 .9-4.5-3.2-3.3 4.5-.6 2.1-4 2 4.2 4.4.8-3.3 3.1m132-67.3-3.6-2-3.6 1.8.8-4-2.8-3 4-.5 1.9-3.6 1.7 3.8 4 .7-3 2.7m-6.7 38.3-2.7-1.6-2.9 1.4.6-3.2-2.2-2.3 3.2-.4 1.5-2.8 1.3 3 3 .5-2.2 2.2m-142.2 50.4-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2M419 299.8l-2.2-1.1-2.2 1 .5-2.3-1.7-1.6 2.4-.3 1.2-2 1 2 2.5.5-1.9 1.5"
        />
        <path
          fill="#ffffef"
          fillRule="evenodd"
          d="m219.3 287.6-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2"
        />
        <path
          fill="#ffffef"
          fillRule="evenodd"
          d="m219.3 287.6-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m42.3 3-2.6-1.4-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .5-2.3 2.1m-4.8 17-2.6-1.5-2.7 1.4.6-3-2.1-2.3 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m87.4-22.2-2.6-1.6-2.8 1.4.6-3-2-2.3 3-.3 1.4-2.7 1.2 2.8 3 .5-2.2 2.1m-25.1 3-2.7-1.5-2.7 1.4.6-3-2-2.3 3-.3 1.4-2.8 1.2 2.9 3 .5-2.2 2.1m-68.8-5.8-1.7-1-1.7.8.4-1.9-1.3-1.4 1.9-.2.8-1.7.8 1.8 1.9.3-1.4 1.3m167.8 45.4-2.6-1.5-2.7 1.4.6-3-2.1-2.3 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m-20.8 6-2.2-1.4-2.3 1.2.5-2.6-1.7-1.8 2.5-.3 1.2-2.3 1 2.4 2.5.4-1.9 1.8m10.4 2.3-2-1.2-2.1 1 .4-2.3-1.6-1.7 2.3-.3 1.1-2 1 2 2.3.5-1.7 1.6m29.1-22.8-2-1-2 1 .5-2.3-1.6-1.7 2.3-.3 1-2 1 2.1 2.1.4-1.6 1.6m-38.8 41.8-2.5-1.4-2.7 1.2.6-2.8-2-2 3-.3 1.3-2.5 1.2 2.6 3 .5-2.3 1.9m.6 14.2-2.4-1.4-2.4 1.3.6-2.8-1.9-2 2.7-.4 1.2-2.5 1.1 2.6 2.7.5-2 2m-19-23.1-1.9-1.2-2 1 .4-2.2-1.5-1.7 2.2-.2 1-2 1 2 2.2.4-1.6 1.6m-17.8 2.3-2-1.2-2 1 .5-2.2-1.6-1.7 2.3-.2 1-2 1 2 2.1.4-1.6 1.6m-30.4-24.6-2-1.1-2 1 .5-2.3-1.6-1.6 2.2-.3 1-2 1 2 2.2.5-1.6 1.5m3.7 57-1.6-.9-1.8.9.4-2-1.3-1.4 1.9-.2.9-1.7.8 1.8 1.9.3-1.4 1.3m-46.2-86.6-4-2.3-4 2 .9-4.5-3.2-3.3 4.5-.6 2.2-4 1.9 4.2 4.4.8-3.3 3.1"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M444.4 285.8a124.6 124.6 0 0 0 5.8-19.8c-67.8-59.5-143.3-90-238.7-83.7a124.5 124.5 0 0 0-8.5 20.9c113-10.8 196 39.2 241.4 82.6z"
        />
        <path
          fill="#309e3a"
          d="m414 252.4 2.3 1.3a3.4 3.4 0 0 0-.3 2.2 3 3 0 0 0 1.4 1.7c.7.5 1.4.8 2 .7.6 0 1-.3 1.3-.7a1.3 1.3 0 0 0 .2-.9 2.3 2.3 0 0 0-.5-1c-.2-.3-.7-1-1.5-1.8a7.7 7.7 0 0 1-1.8-3 3.7 3.7 0 0 1 2-4.4 3.8 3.8 0 0 1 2.3-.2 7 7 0 0 1 2.6 1.2c1.4 1 2.3 2 2.6 3.2a4.1 4.1 0 0 1-.6 3.3l-2.4-1.5c.3-.6.4-1.2.2-1.7-.1-.5-.5-1-1.2-1.4a3.2 3.2 0 0 0-1.8-.7 1 1 0 0 0-.9.5c-.2.3-.2.6-.1 1s.6 1.2 1.6 2.2c1 1 1.6 1.9 2 2.5a3.9 3.9 0 0 1-.3 4.2 4.1 4.1 0 0 1-1.9 1.5 4 4 0 0 1-2.4.3c-.9-.2-1.8-.6-2.8-1.3-1.5-1-2.4-2.1-2.7-3.3a5.4 5.4 0 0 1 .6-4zm-11.6-7.6 2.5 1.3a3.4 3.4 0 0 0-.2 2.2 3 3 0 0 0 1.4 1.6c.8.5 1.4.7 2 .6.6 0 1-.3 1.3-.8a1.3 1.3 0 0 0 .2-.8c0-.3-.2-.7-.5-1a34.6 34.6 0 0 0-1.6-1.8c-1.1-1.1-1.8-2-2-2.8a3.7 3.7 0 0 1 .4-3.1 3.6 3.6 0 0 1 1.6-1.4 3.8 3.8 0 0 1 2.2-.3 7 7 0 0 1 2.6 1c1.5 1 2.4 2 2.7 3.1a4.1 4.1 0 0 1-.4 3.4l-2.5-1.4c.3-.7.4-1.2.2-1.7s-.6-1-1.3-1.4a3.2 3.2 0 0 0-1.9-.6 1 1 0 0 0-.8.5c-.2.3-.2.6-.1 1s.7 1.2 1.7 2.2c1 1 1.7 1.8 2 2.4a3.9 3.9 0 0 1 0 4.2 4.2 4.2 0 0 1-1.8 1.6 4 4 0 0 1-2.4.3 8 8 0 0 1-2.9-1.1 6 6 0 0 1-2.8-3.2 5.4 5.4 0 0 1 .4-4zm-14.2-3.8 7.3-12 8.8 5.5-1.2 2-6.4-4-1.6 2.7 6 3.7-1.3 2-6-3.7-2 3.3 6.7 4-1.2 2-9-5.5zm-20.7-17 1.1-2 5.4 2.7-2.5 5c-.8.2-1.8.3-3 .2a9.4 9.4 0 0 1-3.3-1 7.7 7.7 0 0 1-3-2.6 6 6 0 0 1-1-3.5 8.6 8.6 0 0 1 1-3.7 8 8 0 0 1 2.6-3 6.2 6.2 0 0 1 3.6-1.1c1 0 2 .3 3.2 1 1.6.7 2.6 1.7 3.1 2.8a5 5 0 0 1 .3 3.5l-2.7-.8a3 3 0 0 0-.2-2c-.3-.6-.8-1-1.6-1.4a3.8 3.8 0 0 0-3.1-.3c-1 .3-1.9 1.2-2.6 2.6-.7 1.4-1 2.7-.7 3.8a3.7 3.7 0 0 0 2 2.4c.5.3 1.1.5 1.7.5a6 6 0 0 0 1.8 0l.8-1.6-2.9-1.5zm-90.2-22.3 2-14 4.2.7 1.1 9.8 3.9-9 4.2.6-2 13.8-2.7-.4 1.7-10.9-4.4 10.5-2.7-.4-1.1-11.3-1.6 11-2.6-.4zm-14.1-1.7 1.3-14 10.3 1-.2 2.4-7.5-.7-.3 3 7 .7-.3 2.4-7-.7-.3 3.8 7.8.7-.2 2.4-10.6-1z"
        />
        <g strokeOpacity=".5">
          <path
            fill="#309e3a"
            d="M216.5 191.3c0-1.5.3-2.6.7-3.6a6.7 6.7 0 0 1 1.4-1.9 5.4 5.4 0 0 1 1.8-1.2c1-.3 2-.5 3-.5 2.1 0 3.7.8 5 2a7.4 7.4 0 0 1 1.6 5.5c0 2.2-.7 4-2 5.3a6.5 6.5 0 0 1-5 1.7 6.6 6.6 0 0 1-4.8-2 7.3 7.3 0 0 1-1.7-5.3z"
          />
          <path
            fill="#f7ffff"
            d="M219.4 191.3c0 1.5.3 2.7 1 3.6.7.8 1.6 1.3 2.8 1.3a3.5 3.5 0 0 0 2.8-1.1c.7-.8 1-2 1.1-3.7 0-1.6-.2-2.8-1-3.6a3.5 3.5 0 0 0-2.7-1.3 3.6 3.6 0 0 0-2.8 1.2c-.8.8-1.1 2-1.2 3.6z"
          />
        </g>
        <g strokeOpacity=".5">
          <path
            fill="#309e3a"
            d="m233 198.5.2-14h6c1.5 0 2.5.2 3.2.5.7.2 1.2.7 1.6 1.3s.6 1.4.6 2.3a3.8 3.8 0 0 1-1 2.6 4.5 4.5 0 0 1-2.7 1.2l1.5 1.2c.4.4.9 1.2 1.5 2.3l1.7 2.8h-3.4l-2-3.2-1.4-2a2.1 2.1 0 0 0-.9-.6 5 5 0 0 0-1.4-.2h-.6v5.8H233z"
          />
          <path
            fill="#fff"
            d="M236 190.5h2c1.4 0 2.3 0 2.6-.2.3 0 .6-.3.8-.5s.3-.7.3-1c0-.6-.1-1-.4-1.2-.2-.3-.6-.5-1-.6h-2l-2.3-.1v3.5z"
          />
        </g>
        <g strokeOpacity=".5">
          <path
            fill="#309e3a"
            d="m249 185.2 5.2.3c1.1 0 2 .1 2.6.3a4.7 4.7 0 0 1 2 1.4 6 6 0 0 1 1.2 2.4c.3.9.4 2 .3 3.3a9.3 9.3 0 0 1-.5 3c-.4 1-1 1.8-1.7 2.4a5 5 0 0 1-2 1c-.6.2-1.5.2-2.5.2l-5.3-.3.7-14z"
          />
          <path
            fill="#fff"
            d="m251.7 187.7-.5 9.3h3.8c.5 0 .9-.2 1.2-.5.3-.3.6-.7.8-1.3.2-.6.4-1.5.4-2.6l-.1-2.5a3.2 3.2 0 0 0-.8-1.4 2.7 2.7 0 0 0-1.2-.7 13 13 0 0 0-2.3-.3h-1.3z"
          />
        </g>
        <g strokeOpacity=".5">
          <path
            fill="#309e3a"
            d="m317.6 210.2 3.3-13.6 4.4 1 3.2 1c.7.4 1.3 1 1.6 1.9.4.8.4 1.7.2 2.8-.2.8-.5 1.5-1 2a3.9 3.9 0 0 1-3 1.4c-.7 0-1.7-.2-3-.5l-1.7-.5-1.2 5.2-2.8-.7z"
          />
          <path
            fill="#fff"
            d="m323 199.6-.8 3.8 1.5.4c1 .2 1.8.4 2.2.3a1.9 1.9 0 0 0 1.6-1.5c0-.5 0-.9-.2-1.3a2 2 0 0 0-1-.9l-1.9-.5-1.3-.3z"
          />
        </g>
        <g strokeOpacity=".5">
          <path
            fill="#309e3a"
            d="m330.6 214.1 4.7-13.2 5.5 2c1.5.5 2.4 1 3 1.4.5.5.9 1 1 1.8s.2 1.5 0 2.3c-.4 1-1 1.7-1.8 2.2-.8.4-1.8.5-3 .3.4.5.8 1 1 1.6l.8 2.7.6 3.1-3.1-1.1-1-3.6a19.5 19.5 0 0 0-.7-2.4 2.1 2.1 0 0 0-.6-.8c-.2-.3-.6-.5-1.3-.7l-.5-.2-2 5.6-2.6-1z"
          />
          <path
            fill="#fff"
            d="m336 207.4 1.9.7c1.3.5 2.1.7 2.5.7.3 0 .6 0 .9-.3.3-.2.5-.5.6-.9.2-.4.2-.8 0-1.2a1.7 1.7 0 0 0-.8-.9l-2-.7-2-.7-1.2 3.3z"
          />
        </g>
        <g strokeOpacity=".5">
          <path
            fill="#309e3a"
            d="M347 213.6a9 9 0 0 1 1.7-3.2 6.6 6.6 0 0 1 1.8-1.5 6 6 0 0 1 2-.7c1 0 2 0 3.1.4a6.5 6.5 0 0 1 4.2 3.3c.8 1.6.8 3.5.2 5.7a7.4 7.4 0 0 1-3.4 4.5c-1.5.9-3.3 1-5.2.4a6.6 6.6 0 0 1-4.2-3.3 7.3 7.3 0 0 1-.2-5.6z"
          />
          <path
            fill="#fff"
            d="M349.8 214.4c-.4 1.5-.5 2.8 0 3.8s1.2 1.6 2.3 2c1 .3 2 .2 3-.4 1-.5 1.6-1.6 2.1-3.2.5-1.5.5-2.7 0-3.7a3.5 3.5 0 0 0-2.2-2 3.6 3.6 0 0 0-3 .3c-1 .6-1.7 1.6-2.2 3.2z"
          />
        </g>
        <g strokeOpacity=".5">
          <path
            fill="#309e3a"
            d="m374.3 233.1 6.4-12.4 5.3 2.7a10 10 0 0 1 2.7 1.9c.5.5.8 1.1.8 1.9s0 1.5-.4 2.2a3.8 3.8 0 0 1-2 2c-1 .2-2 .2-3.1-.2.4.6.6 1.2.8 1.7.2.6.3 1.5.4 2.8l.2 3.2-3-1.5-.4-3.7a20 20 0 0 0-.3-2.5 2 2 0 0 0-.5-1l-1.2-.7-.5-.3-2.7 5.2-2.5-1.3z"
          />
          <path
            fill="#fff"
            d="m380.5 227.2 1.9 1c1.2.6 2 1 2.3 1 .3 0 .7 0 1-.2.3-.1.5-.4.7-.8.2-.4.3-.8.2-1.2a2 2 0 0 0-.7-1 23.7 23.7 0 0 0-1.8-1l-2-1-1.6 3.2z"
          />
        </g>
        <g strokeOpacity=".5">
          <path
            fill="#309e3a"
            d="M426.1 258.7a8.9 8.9 0 0 1 2.5-2.6 6.6 6.6 0 0 1 2.2-.9 5.5 5.5 0 0 1 2.2 0c1 .2 1.9.6 2.8 1.2a6.6 6.6 0 0 1 3 4.4c.3 1.7-.2 3.6-1.4 5.5a7.3 7.3 0 0 1-4.5 3.3 6.5 6.5 0 0 1-5.2-1.1 6.6 6.6 0 0 1-3-4.4c-.3-1.8.2-3.6 1.4-5.4z"
          />
          <path
            fill="#fff"
            d="M428.6 260.3c-1 1.3-1.3 2.5-1.1 3.6a3.6 3.6 0 0 0 1.6 2.5c1 .7 2 .9 3 .6 1-.3 2-1 2.9-2.4.9-1.4 1.3-2.6 1.1-3.6-.1-1-.7-1.9-1.6-2.6s-2-.8-3-.5c-1 .2-2 1-3 2.4z"
          />
        </g>
        <path
          fill="#309e3a"
          d="m301.8 204.5 2.3-9.8 7.2 1.7-.3 1.6-5.3-1.2-.5 2.2 4.9 1.1-.4 1.7-4.9-1.2-.6 2.7 5.5 1.3-.4 1.6-7.5-1.7z"
        />
      </g>
    </svg>
  );
};

export const FlagUS = ({ width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-us"
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd">
        <g strokeWidth="1pt">
          <path
            fill="#bd3d44"
            d="M0 0h912v37H0zm0 73.9h912v37H0zm0 73.8h912v37H0zm0 73.8h912v37H0zm0 74h912v36.8H0zm0 73.7h912v37H0zM0 443h912V480H0z"
          />
          <path
            fill="#fff"
            d="M0 37h912v36.9H0zm0 73.8h912v36.9H0zm0 73.8h912v37H0zm0 73.9h912v37H0zm0 73.8h912v37H0zm0 73.8h912v37H0z"
          />
        </g>
        <path fill="#192f5d" d="M0 0h364.8v258.5H0z" />
        <path
          fill="#fff"
          d="m30.4 11 3.4 10.3h10.6l-8.6 6.3 3.3 10.3-8.7-6.4-8.6 6.3L25 27.6l-8.7-6.3h10.9zm60.8 0 3.3 10.3h10.8l-8.7 6.3 3.2 10.3-8.6-6.4-8.7 6.3 3.3-10.2-8.6-6.3h10.6zm60.8 0 3.3 10.3H166l-8.6 6.3 3.3 10.3-8.7-6.4-8.7 6.3 3.3-10.2-8.7-6.3h10.8zm60.8 0 3.3 10.3h10.8l-8.7 6.3 3.3 10.3-8.7-6.4-8.7 6.3 3.4-10.2-8.8-6.3h10.7zm60.8 0 3.3 10.3h10.7l-8.6 6.3 3.3 10.3-8.7-6.4-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm60.8 0 3.3 10.3h10.8l-8.8 6.3 3.4 10.3-8.7-6.4-8.7 6.3 3.4-10.2-8.8-6.3h10.8zM60.8 37l3.3 10.2H75l-8.7 6.2 3.2 10.3-8.5-6.3-8.7 6.3 3.1-10.3-8.4-6.2h10.7zm60.8 0 3.4 10.2h10.7l-8.8 6.2 3.4 10.3-8.7-6.3-8.7 6.3 3.3-10.3-8.7-6.2h10.8zm60.8 0 3.3 10.2h10.8l-8.7 6.2 3.3 10.3-8.7-6.3-8.7 6.3 3.3-10.3-8.6-6.2H179zm60.8 0 3.4 10.2h10.7l-8.8 6.2 3.4 10.3-8.7-6.3-8.6 6.3 3.2-10.3-8.7-6.2H240zm60.8 0 3.3 10.2h10.8l-8.7 6.2 3.3 10.3-8.7-6.3-8.7 6.3 3.3-10.3-8.6-6.2h10.7zM30.4 62.6l3.4 10.4h10.6l-8.6 6.3 3.3 10.2-8.7-6.3-8.6 6.3L25 79.3 16.3 73h10.9zm60.8 0L94.5 73h10.8l-8.7 6.3 3.2 10.2-8.6-6.3-8.7 6.3 3.3-10.3-8.6-6.3h10.6zm60.8 0 3.3 10.3H166l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.3-8.7-6.3h10.8zm60.8 0 3.3 10.3h10.8l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.4-10.3-8.8-6.3h10.7zm60.8 0 3.3 10.3h10.7l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.3-8.6-6.3h10.7zm60.8 0 3.3 10.3h10.8l-8.8 6.3 3.4 10.2-8.7-6.3-8.7 6.3 3.4-10.3-8.8-6.3h10.8zM60.8 88.6l3.3 10.2H75l-8.7 6.3 3.3 10.3-8.7-6.4-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm60.8 0 3.4 10.2h10.7l-8.8 6.3 3.4 10.3-8.7-6.4-8.7 6.3 3.3-10.2-8.7-6.3h10.8zm60.8 0 3.3 10.2h10.8l-8.7 6.3 3.3 10.3-8.7-6.4-8.7 6.3 3.3-10.2-8.6-6.3H179zm60.8 0 3.4 10.2h10.7l-8.7 6.3 3.3 10.3-8.7-6.4-8.6 6.3 3.2-10.2-8.7-6.3H240zm60.8 0 3.3 10.2h10.8l-8.7 6.3 3.3 10.3-8.7-6.4-8.7 6.3 3.3-10.2-8.6-6.3h10.7zM30.4 114.5l3.4 10.2h10.6l-8.6 6.3 3.3 10.3-8.7-6.4-8.6 6.3L25 131l-8.7-6.3h10.9zm60.8 0 3.3 10.2h10.8l-8.7 6.3 3.2 10.2-8.6-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.6zm60.8 0 3.3 10.2H166l-8.6 6.3 3.3 10.3-8.7-6.4-8.7 6.3 3.3-10.2-8.7-6.3h10.8zm60.8 0 3.3 10.2h10.8l-8.7 6.3 3.3 10.3-8.7-6.4-8.7 6.3 3.4-10.2-8.8-6.3h10.7zm60.8 0 3.3 10.2h10.7L279 131l3.3 10.3-8.7-6.4-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm60.8 0 3.3 10.2h10.8l-8.8 6.3 3.4 10.3-8.7-6.4-8.7 6.3L329 131l-8.8-6.3h10.8zM60.8 140.3l3.3 10.3H75l-8.7 6.2 3.3 10.3-8.7-6.4-8.7 6.4 3.3-10.3-8.6-6.3h10.7zm60.8 0 3.4 10.3h10.7l-8.8 6.2 3.4 10.3-8.7-6.4-8.7 6.4 3.3-10.3-8.7-6.3h10.8zm60.8 0 3.3 10.3h10.8l-8.7 6.2 3.3 10.3-8.7-6.4-8.7 6.4 3.3-10.3-8.6-6.3H179zm60.8 0 3.4 10.3h10.7l-8.7 6.2 3.3 10.3-8.7-6.4-8.6 6.4 3.2-10.3-8.7-6.3H240zm60.8 0 3.3 10.3h10.8l-8.7 6.2 3.3 10.3-8.7-6.4-8.7 6.4 3.3-10.3-8.6-6.3h10.7zM30.4 166.1l3.4 10.3h10.6l-8.6 6.3 3.3 10.1-8.7-6.2-8.6 6.2 3.2-10.2-8.7-6.3h10.9zm60.8 0 3.3 10.3h10.8l-8.7 6.3 3.3 10.1-8.7-6.2-8.7 6.2 3.4-10.2-8.7-6.3h10.6zm60.8 0 3.3 10.3H166l-8.6 6.3 3.3 10.1-8.7-6.2-8.7 6.2 3.3-10.2-8.7-6.3h10.8zm60.8 0 3.3 10.3h10.8l-8.7 6.3 3.3 10.1-8.7-6.2-8.7 6.2 3.4-10.2-8.8-6.3h10.7zm60.8 0 3.3 10.3h10.7l-8.6 6.3 3.3 10.1-8.7-6.2-8.7 6.2 3.3-10.2-8.6-6.3h10.7zm60.8 0 3.3 10.3h10.8l-8.8 6.3 3.4 10.1-8.7-6.2-8.7 6.2 3.4-10.2-8.8-6.3h10.8zM60.8 192l3.3 10.2H75l-8.7 6.3 3.3 10.3-8.7-6.4-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm60.8 0 3.4 10.2h10.7l-8.8 6.3 3.4 10.3-8.7-6.4-8.7 6.3 3.3-10.2-8.7-6.3h10.8zm60.8 0 3.3 10.2h10.8l-8.7 6.3 3.3 10.3-8.7-6.4-8.7 6.3 3.3-10.2-8.6-6.3H179zm60.8 0 3.4 10.2h10.7l-8.7 6.3 3.3 10.3-8.7-6.4-8.6 6.3 3.2-10.2-8.7-6.3H240zm60.8 0 3.3 10.2h10.8l-8.7 6.3 3.3 10.3-8.7-6.4-8.7 6.3 3.3-10.2-8.6-6.3h10.7zM30.4 217.9l3.4 10.2h10.6l-8.6 6.3 3.3 10.2-8.7-6.3-8.6 6.3 3.2-10.3-8.7-6.3h10.9zm60.8 0 3.3 10.2h10.8l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.4-10.3-8.7-6.3h10.6zm60.8 0 3.3 10.2H166l-8.4 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.3-8.7-6.3h10.8zm60.8 0 3.3 10.2h10.8l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.4-10.3-8.8-6.3h10.7zm60.8 0 3.3 10.2h10.7l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.3-8.6-6.3h10.7zm60.8 0 3.3 10.2h10.8l-8.8 6.3 3.4 10.2-8.7-6.3-8.7 6.3 3.4-10.3-8.8-6.3h10.8z"
        />
      </g>
    </svg>
  );
};

export const FlagES = ({ width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-es"
      viewBox="0 0 640 480"
      width={width}
    >
      <path fill="#AA151B" d="M0 0h640v480H0z" />
      <path fill="#F1BF00" d="M0 120h640v240H0z" />
      <path
        fill="#ad1519"
        d="m127.3 213.3-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 0 1 1.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 0 0 2 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".3"
        d="m127.3 213.3-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 0 1 1.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 0 0 2 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9z"
      />
      <path
        fill="#c8b100"
        d="M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5z"
      />
      <path
        fill="#c8b100"
        d="M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2z"
      />
      <path
        fill="#c8b100"
        d="M133.8 204.5c0-.4.4-.8.8-.8s1 .4 1 .8c0 .5-.5.9-1 .9s-.8-.4-.8-.9"
      />
      <path
        fill="#c8b100"
        d="M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
      />
      <path
        fill="#c8b100"
        d="M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M134.9 203.7c.4.1.6.4.6.8 0 .5-.4.9-.8.9s-1-.4-1-.9c0-.4.3-.7.7-.8"
      />
      <path
        fill="#c8b100"
        d="M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M126.8 206.8c1-.5 3 1.1 4.6 3.6m11-3.6c-.8-.5-2.8 1.1-4.5 3.6"
      />
      <path
        fill="#c8b100"
        d="m127.8 215.3-.5-1a27.3 27.3 0 0 1 14.7 0l-.5.8a5.7 5.7 0 0 0-.3.8 22.9 22.9 0 0 0-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m127.8 215.3-.5-1a27.3 27.3 0 0 1 14.7 0l-.5.8a5.7 5.7 0 0 0-.3.8 22.9 22.9 0 0 0-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
      />
      <path
        fill="#c8b100"
        d="M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
      />
      <path
        fill="#c8b100"
        d="m142.1 213.2-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 0 1 7.2-.9c3 0 5.5.4 7.4 1l.2-.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m142.1 213.2-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 0 1 7.2-.9c3 0 5.5.4 7.4 1l.2-.6z"
      />
      <path
        fill="#c8b100"
        d="M134.7 210.7h.2a1 1 0 0 0 0 .4c0 .6.4 1 1 1a1 1 0 0 0 1-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 0 0-.1.4 1 1 0 0 0 1 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 0 1-1.2-.6 1.6 1.6 0 0 1-1 .4 1.6 1.6 0 0 1-1.3-.6 1.6 1.6 0 0 1-2.4.2 1.6 1.6 0 0 1-1.2.6 1.5 1.5 0 0 1-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 0 0 1-1 .9.9 0 0 0 0-.4v-.5l.4.4a.7.7 0 0 0 0 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 0 0 0-.3h.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M134.7 210.7h.2a1 1 0 0 0 0 .4c0 .6.4 1 1 1a1 1 0 0 0 1-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 0 0-.1.4 1 1 0 0 0 1 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 0 1-1.2-.6 1.6 1.6 0 0 1-1 .4 1.6 1.6 0 0 1-1.3-.6 1.6 1.6 0 0 1-2.4.2 1.6 1.6 0 0 1-1.2.6 1.5 1.5 0 0 1-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 0 0 1-1 .9.9 0 0 0 0-.4v-.5l.4.4a.7.7 0 0 0 0 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 0 0 0-.3h.3z"
      />
      <path
        fill="#c8b100"
        d="M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 0 1 7.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 0 0-7.4-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".3"
        d="M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 0 1 7.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 0 0-7.4-1z"
      />
      <path
        fill="#fff"
        d="M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4c0 .2-.2.4-.4.4a.4.4 0 0 1-.5-.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4c0 .2-.2.4-.4.4a.4.4 0 0 1-.5-.4z"
      />
      <path
        fill="#ad1519"
        d="M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 0 1 .2.3.3.3 0 0 1-.3.3h-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 0 1 .2.3.3.3 0 0 1-.3.3h-1"
      />
      <path
        fill="#058e6e"
        d="M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 0 1 .2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 0 1-.3.4h-.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 0 1 .2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 0 1-.3.4h-.7"
      />
      <path fill="#ad1519" d="m127.3 215.3.3-.4h.7l-.4.6-.6-.2" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m127.3 215.3.3-.4h.7l-.4.6-.6-.2"
      />
      <path
        fill="#fff"
        d="M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 0 1 .5.4.4.4 0 0 1-.5.4.4.4 0 0 1-.4-.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 0 1 .5.4.4.4 0 0 1-.5.4.4.4 0 0 1-.4-.4z"
      />
      <path
        fill="#058e6e"
        d="M139.3 214.9h.6a.3.3 0 0 0 .4-.2.3.3 0 0 0-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M139.3 214.9h.6a.3.3 0 0 0 .4-.2.3.3 0 0 0-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
      />
      <path fill="#ad1519" d="m142 215.4-.3-.5h-.7l.3.6.6-.1" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m142 215.4-.3-.5h-.7l.3.6.6-.1"
      />
      <path
        fill="#ad1519"
        d="M134.6 217.1a25 25 0 0 1-6-.6 25.5 25.5 0 0 1 12.1 0c-1.6.4-3.7.6-6 .6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".3"
        d="M134.6 217.1a25 25 0 0 1-6-.6 25.5 25.5 0 0 1 12.1 0c-1.6.4-3.7.6-6 .6z"
      />
      <path
        fill="#c8b100"
        d="m142 212-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m142 212-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3z"
      />
      <path
        fill="#c8b100"
        d="M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
      />
      <path
        fill="#c8b100"
        d="m132 211.2.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m132 211.2.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3z"
      />
      <path
        fill="#c8b100"
        d="m127.3 212 .1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m127.3 212 .1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3z"
      />
      <path fill="#c8b100" d="m134.6 208.5-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m134.6 208.5-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
      />
      <path fill="#c8b100" d="m132.8 210.5.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m132.8 210.5.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
      />
      <path fill="#c8b100" d="m136.4 210.5-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m136.4 210.5-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
      />
      <path fill="#c8b100" d="m129.3 209-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m129.3 209-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
      />
      <path fill="#c8b100" d="m128 211.2.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m128 211.2.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
      />
      <path fill="#c8b100" d="m131.5 210.5-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m131.5 210.5-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
      />
      <path fill="#c8b100" d="M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
      />
      <path
        fill="#c8b100"
        d="M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4z"
      />
      <path fill="#c8b100" d="m140 209 .7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m140 209 .7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
      />
      <path fill="#c8b100" d="m141.4 211.2-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m141.4 211.2-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
      />
      <path fill="#c8b100" d="m137.8 210.5.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m137.8 210.5.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
      />
      <path fill="#c8b100" d="m142.5 211.4.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m142.5 211.4.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
      />
      <path
        fill="#c8b100"
        d="M134.2 210.4a.5.5 0 0 1 .4-.4c.3 0 .5.2.5.4a.5.5 0 0 1-.5.5.5.5 0 0 1-.4-.5"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M134.2 210.4a.5.5 0 0 1 .4-.4c.3 0 .5.2.5.4a.5.5 0 0 1-.5.5.5.5 0 0 1-.4-.5z"
      />
      <path
        fill="#c8b100"
        d="M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4z"
      />
      <path
        fill="#c8b100"
        d="m124.8 212.2-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 0 1 .4.2v-.2s.3 0 .4.3v1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m124.8 212.2-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 0 1 .4.2v-.2s.3 0 .4.3v1z"
      />
      <path
        fill="#c8b100"
        d="M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5z"
      />
      <path
        fill="#c8b100"
        d="m144.3 212.2.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 0 0-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m144.3 212.2.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 0 0-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
      />
      <path
        fill="#c8b100"
        d="M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
      />
      <path fill="#c8b100" d="M124 223h21.4v-5.5H124v5.6z" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M124 223h21.4v-5.5H124v5.6z"
      />
      <path
        fill="#c8b100"
        d="M126.2 226.8a1 1 0 0 1 .4 0h16.5a1.4 1.4 0 0 1-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 0 1-.4 0h-16a1.4 1.4 0 0 1-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 0 1-1 1.2"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".4"
        d="M126.2 226.8a1 1 0 0 1 .4 0h16.5a1.4 1.4 0 0 1-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 0 1-.4 0h-16a1.4 1.4 0 0 1-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 0 1-1 1.2z"
      />
      <path
        fill="#c8b100"
        d="M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8z"
      />
      <path
        fill="#c8b100"
        d="M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6z"
      />
      <path
        fill="#005bbf"
        d="M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 0 1-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.7-.8 8 8 0 0 0-3.7.8 8.3 8.3 0 0 1-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 0 1 3.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 0 0 3.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 0 1-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.7-.8 8 8 0 0 0-3.7.8 8.3 8.3 0 0 1-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 0 1 3.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 0 0 3.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4z"
      />
      <path
        fill="#ccc"
        d="M149.6 319.8a8 8 0 0 1-3.7-.9 8.3 8.3 0 0 0-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 0 0-3.7-.8 8.2 8.2 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 0 1 3.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 0 0 7.5 0 8.5 8.5 0 0 1 7.5.1 8.1 8.1 0 0 0 3.7.8v-2.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M149.6 319.8a8 8 0 0 1-3.7-.9 8.3 8.3 0 0 0-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 0 0-3.7-.8 8.2 8.2 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 0 1 3.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 0 0 7.5 0 8.5 8.5 0 0 1 7.5.1 8.1 8.1 0 0 0 3.7.8v-2.3"
      />
      <path
        fill="#005bbf"
        d="M149.6 322a7 7 0 0 1-3.7-.8 8.3 8.3 0 0 0-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 0 0-3.7-.8 8 8 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 0 1 7.4 0 7 7 0 0 0 3.7.9 8.4 8.4 0 0 0 3.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M149.6 322a7 7 0 0 1-3.7-.8 8.3 8.3 0 0 0-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 0 0-3.7-.8 8 8 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 0 1 7.4 0 7 7 0 0 0 3.7.9 8.4 8.4 0 0 0 3.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
      />
      <path
        fill="#ccc"
        d="M149.6 326.7a8 8 0 0 1-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 0 0-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 0 0 3.8-.9 10.2 10.2 0 0 1 7.4 0 8 8 0 0 0 3.7.9 8.4 8.4 0 0 0 3.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M149.6 326.7a8 8 0 0 1-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 0 0-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 0 0 3.8-.9 10.2 10.2 0 0 1 7.4 0 8 8 0 0 0 3.7.9 8.4 8.4 0 0 0 3.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
      />
      <path
        fill="#005bbf"
        d="M149.6 329a8.1 8.1 0 0 1-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 0 0-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 0 0 3.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 0 0 7.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M149.6 329a8.1 8.1 0 0 1-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 0 0-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 0 0 3.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 0 0 7.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3z"
      />
      <path
        fill="#c8b100"
        d="m126.2 308 .2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 0 1-2.7-2.6v-.5a1.3 1.3 0 0 1-.3 0h-16a1.4 1.4 0 0 1-.5 0"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".4"
        d="m126.2 308 .2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 0 1-2.7-2.6v-.5a1.3 1.3 0 0 1-.3 0h-16a1.4 1.4 0 0 1-.5 0z"
      />
      <path
        fill="#c8b100"
        d="M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
      />
      <path fill="#c8b100" d="M123.7 316.7h22V311h-22v5.6z" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M123.7 316.7h22V311h-22v5.6z"
      />
      <path
        fill="#ad1519"
        d="M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 0 0-.1-8.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 0 0-.1-8.8z"
      />
      <path fill="#ccc" d="M126.8 305.6h15.6V229h-15.6v76.5z" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M138 229.2v76.3m1.7-76.3v76.3m-12.9 0h15.6v-76.4h-15.6v76.5z"
      />
      <path
        fill="#ad1519"
        d="M158.4 257.7a49.6 49.6 0 0 0-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 0 1 9.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".4"
        d="M158.4 257.7a49.6 49.6 0 0 0-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 0 1 9.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
      />
      <path
        fill="#ad1519"
        d="M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
      />
      <path
        fill="#ad1519"
        d="M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
      />
      <path
        fill="#ad1519"
        d="M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".4"
        d="M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7z"
      />
      <path
        fill="#c8b100"
        d="M125.8 254c1.9-.6 3.1-1.5 2.5-3-.4-1-1.4-1-2.8-.6l-2.6 1 2.3 5.8.8-.3.8-.3-1-2.5zm-1.2-2.7.7-.3c.5-.2 1.2.1 1.4.8.2.5.2 1-.5 1.5a4.4 4.4 0 0 1-.6.3l-1-2.3m7.3-2.5-.9.3h-.8l1.3 6.1 4.3-.8-.2-.4v-.4l-2.5.6-1.2-5.3m8.4 5.2c.8-2.2 1.7-4.3 2.7-6.4a5.3 5.3 0 0 1-1 0 54.8 54.8 0 0 1-1.8 4.6l-2.4-4.3-1 .1h-1a131.4 131.4 0 0 1 3.5 6h1m8.8-4.7.4-.9a3.4 3.4 0 0 0-1.7-.6c-1.7-.1-2.7.6-2.8 1.7-.2 2.1 3.2 2 3 3.4 0 .6-.7.9-1.4.8-.8 0-1.4-.5-1.4-1.2h-.3a7.3 7.3 0 0 1-.4 1.1 4 4 0 0 0 1.8.6c1.7.2 3-.5 3.2-1.7.2-2-3.3-2.1-3.1-3.4 0-.5.4-.8 1.3-.7.7 0 1 .4 1.2.9h.2"
      />
      <path
        fill="#ad1519"
        d="M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 0 1 2 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 0 1 2.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 0 1 2 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 0 1 2.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9z"
      />
      <path
        fill="#c8b100"
        d="M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9z"
      />
      <path
        fill="#c8b100"
        d="M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8z"
      />
      <path
        fill="#c8b100"
        d="M271 215.3a4.5 4.5 0 0 0-.5-1 27.4 27.4 0 0 1 14.8 0l-.6.8a5.2 5.2 0 0 0-.3.8 22.9 22.9 0 0 0-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M271 215.3a4.5 4.5 0 0 0-.5-1 27.4 27.4 0 0 1 14.8 0l-.6.8a5.2 5.2 0 0 0-.3.8 22.9 22.9 0 0 0-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
      />
      <path
        fill="#c8b100"
        d="M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 0 0-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 0 0-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
      />
      <path
        fill="#fff"
        d="M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 0 1-.4-.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".2"
        d="M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 0 1-.4-.4zm-.2-1.4a.4.4 0 0 1 .4-.4c.2 0 .4.1.4.4s-.2.4-.4.4a.4.4 0 0 1-.4-.4zm-1.1-1c0-.2.2-.3.4-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 0 1-.4-.5zm-1.4-.4c0-.2.2-.4.4-.4.3 0 .5.2.5.4s-.2.4-.4.4-.5-.2-.5-.4zm-1.4 0c0-.2.2-.3.5-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 0 1-.5-.4z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth=".3"
        d="m287.8 211.2.2-1a2.7 2.7 0 0 0-2.7-2.8c-.5 0-1 .1-1.3.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m283 209.2.2-.8c0-1.1-1.1-2-2.5-2-.6 0-1.2.2-1.6.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".2"
        d="M288.2 210c0-.3.2-.5.4-.5s.4.2.4.4c0 .3-.2.4-.4.4s-.4-.1-.4-.4zm-.2-1.6c0-.2.2-.4.4-.4a.4.4 0 0 1 .5.4c0 .2-.2.4-.4.4-.3 0-.5-.2-.5-.4zm-1-1.1a.4.4 0 0 1 .5-.4c.2 0 .4.1.4.4a.4.4 0 0 1-.4.4.4.4 0 0 1-.5-.4zm-1.3-.7c0-.2.2-.4.5-.4s.4.2.4.4c0 .3-.2.5-.4.5a.4.4 0 0 1-.5-.5zm-1.4.1c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4z"
      />
      <path
        fill="#c8b100"
        d="m285.3 213.2-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 0 1 7.3-.9c2.8 0 5.4.4 7.3 1l.2-.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m285.3 213.2-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 0 1 7.3-.9c2.8 0 5.4.4 7.3 1l.2-.6z"
      />
      <path
        fill="#fff"
        d="M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 0 1-.4.4.4.4 0 0 1-.4-.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".2"
        d="M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 0 1-.4.4.4.4 0 0 1-.4-.4zm.2-1.4c0-.3.2-.4.4-.4s.5.1.5.4-.2.4-.5.4a.4.4 0 0 1-.4-.4zm1-1c0-.2.3-.3.5-.3s.5.1.5.4c0 .2-.2.4-.5.4a.4.4 0 0 1-.4-.5zm1.4-.4c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4zm1.4 0c0-.2.2-.3.5-.3.2 0 .4.1.4.4 0 .2-.2.4-.4.4a.4.4 0 0 1-.5-.4z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth=".3"
        d="M267.8 211.2a2.8 2.8 0 0 1-.2-1 2.7 2.7 0 0 1 2.7-2.8c.5 0 1 .1 1.4.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M272.7 209.2a1.7 1.7 0 0 1-.3-.8c0-1 1.2-2 2.6-2a3 3 0 0 1 1.5.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".2"
        d="M266.6 210c0-.3.2-.5.4-.5.3 0 .4.2.4.4a.4.4 0 0 1-.4.4c-.2 0-.4-.1-.4-.4zm.1-1.6c0-.2.3-.4.5-.4s.4.2.4.4-.2.4-.4.4-.4-.2-.4-.4zm1-1.1c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4.4.4 0 0 1-.5-.4zm1.3-.7c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.4.4 0 0 1-.5-.5zm1.4.1c0-.2.2-.4.5-.4a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4c-.3 0-.5-.2-.5-.4z"
      />
      <path
        fill="#c8b100"
        d="M277.9 210.7h.2a1 1 0 0 0 0 .4c0 .6.5 1 1 1a1 1 0 0 0 1-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 0 0 0-.1l.4-.4.2.5a1 1 0 0 0-.1.4 1 1 0 0 0 1 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 0 1-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 0 1-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 0 1-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 0 1-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 0 1-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 0 0 1-1 1 1 0 0 0 0-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 0 0 0-.3h.2"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M277.9 210.7h.2a1 1 0 0 0 0 .4c0 .6.5 1 1 1a1 1 0 0 0 1-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 0 0 0-.1l.4-.4.2.5a1 1 0 0 0-.1.4 1 1 0 0 0 1 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 0 1-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 0 1-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 0 1-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 0 1-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 0 1-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 0 0 1-1 1 1 0 0 0 0-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 0 0 0-.3h.2z"
      />
      <path
        fill="#c8b100"
        d="M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 0 0-7.4-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 0 0-7.4-1z"
      />
      <path
        fill="#fff"
        d="M275 214.4c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4c-.3 0-.5-.2-.5-.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M275 214.4c0-.3.2-.4.5-.4a.4.4 0 0 1 .4.4.4.4 0 0 1-.4.4c-.3 0-.5-.2-.5-.4z"
      />
      <path
        fill="#ad1519"
        d="M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 0 1 .2.3.3.3 0 0 1-.3.3h-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 0 1 .2.3.3.3 0 0 1-.3.3h-1"
      />
      <path
        fill="#058e6e"
        d="M273.2 214.9h-.6a.3.3 0 0 1-.4-.2.3.3 0 0 1 .3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 0 1-.3.4h-.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M273.2 214.9h-.6a.3.3 0 0 1-.4-.2.3.3 0 0 1 .3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 0 1-.3.4h-.7"
      />
      <path fill="#ad1519" d="m270.5 215.3.3-.4h.7l-.4.6-.6-.2" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m270.5 215.3.3-.4h.7l-.4.6-.6-.2"
      />
      <path
        fill="#fff"
        d="M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 0 1-.4-.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 0 1-.4-.4z"
      />
      <path
        fill="#058e6e"
        d="M282.5 214.9h.7a.3.3 0 0 0 .3-.2.3.3 0 0 0-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M282.5 214.9h.7a.3.3 0 0 0 .3-.2.3.3 0 0 0-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
      />
      <path fill="#ad1519" d="m285.1 215.4-.2-.5h-.7l.3.6.6-.1" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m285.1 215.4-.2-.5h-.7l.3.6.6-.1"
      />
      <path
        fill="#ad1519"
        d="M277.8 217.1a25 25 0 0 1-6-.6 25.4 25.4 0 0 1 6-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".3"
        d="M277.8 217.1a25 25 0 0 1-6-.6 25.4 25.4 0 0 1 6-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6z"
      />
      <path
        fill="#c8b100"
        d="m285.2 212-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m285.2 212-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3z"
      />
      <path
        fill="#c8b100"
        d="M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
      />
      <path
        fill="#c8b100"
        d="M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3z"
      />
      <path
        fill="#c8b100"
        d="m270.5 212 .1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m270.5 212 .1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3z"
      />
      <path fill="#c8b100" d="m277.8 208.5-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m277.8 208.5-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
      />
      <path fill="#c8b100" d="m276 210.5.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m276 210.5.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
      />
      <path fill="#c8b100" d="m279.6 210.5-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m279.6 210.5-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
      />
      <path fill="#c8b100" d="m272.5 209-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m272.5 209-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
      />
      <path fill="#c8b100" d="m271.1 211.2.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m271.1 211.2.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
      />
      <path fill="#c8b100" d="m274.7 210.5-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m274.7 210.5-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
      />
      <path fill="#c8b100" d="M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
      />
      <path
        fill="#c8b100"
        d="M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.4.5.5 0 0 1-.5-.4z"
      />
      <path fill="#c8b100" d="m283.2 209 .7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m283.2 209 .7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
      />
      <path fill="#c8b100" d="m284.6 211.2-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m284.6 211.2-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
      />
      <path fill="#c8b100" d="m281 210.5.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m281 210.5.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
      />
      <path fill="#c8b100" d="M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
      />
      <path
        fill="#c8b100"
        d="M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 0 1-.5-.5"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 0 1-.5-.5z"
      />
      <path
        fill="#c8b100"
        d="M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 0 1-.5-.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 0 1-.5-.4z"
      />
      <path
        fill="#c8b100"
        d="M277 205.4c0-.5.4-.8.8-.8s1 .3 1 .8-.5.8-1 .8a.9.9 0 0 1-.8-.8"
      />
      <path
        fill="#c8b100"
        d="M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4z"
      />
      <path
        fill="#c8b100"
        d="M279 205.1v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M278.1 204.6c.4 0 .6.4.6.8 0 .5-.4.8-.9.8a.9.9 0 0 1-.8-.8c0-.4.2-.7.6-.8"
      />
      <path
        fill="#c8b100"
        d="m268 212.2-.6-.7a2.3 2.3 0 0 0-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m268 212.2-.6-.7a2.3 2.3 0 0 0-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1z"
      />
      <path
        fill="#c8b100"
        d="M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5z"
      />
      <path
        fill="#c8b100"
        d="m287.5 212.2.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 0 0-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m287.5 212.2.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 0 0-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
      />
      <path
        fill="#c8b100"
        d="M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
      />
      <path fill="#c8b100" d="M267.2 223h21.4v-5.5h-21.4v5.6z" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M267.2 223h21.4v-5.5h-21.4v5.6z"
      />
      <path
        fill="#c8b100"
        d="M286.3 226.8a1 1 0 0 0-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".4"
        d="M286.3 226.8a1 1 0 0 0-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2z"
      />
      <path
        fill="#c8b100"
        d="M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8z"
      />
      <path
        fill="#c8b100"
        d="M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6z"
      />
      <path
        fill="#005bbf"
        d="M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 0 1 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 0 1 3.6-.8 8 8 0 0 1 3.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v-2.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 0 1 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 0 1 3.6-.8 8 8 0 0 1 3.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 0 1-3.7-.9 8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.9-3.8.9v-2.4z"
      />
      <path
        fill="#ccc"
        d="M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 0 1-3.8-.9 8.1 8.1 0 0 0-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 0 1-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 0 0-3.7.7 8.1 8.1 0 0 1-3.8.9v-2.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 0 1-3.8-.9 8.1 8.1 0 0 0-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 0 1-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 0 0-3.7.7 8.1 8.1 0 0 1-3.8.9v-2.3"
      />
      <path
        fill="#005bbf"
        d="M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.8 8 8 0 0 1 3.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.8-3.8.8V322"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.8 8 8 0 0 1 3.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.8-3.8.8V322"
      />
      <path
        fill="#ccc"
        d="M263 326.7a8 8 0 0 0 3.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 0 1 3.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 0 0 3.8.8v-2.3a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M263 326.7a8 8 0 0 0 3.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 0 1 3.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 0 0 3.8.8v-2.3a8.3 8.3 0 0 1-3.8-.9 8.2 8.2 0 0 0-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 0 0-3.8-.8 8.3 8.3 0 0 0-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
      />
      <path
        fill="#005bbf"
        d="M263 329a8.1 8.1 0 0 0 3.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 0 1-3.8-.8 8.2 8.2 0 0 0-3.7-.8 8.4 8.4 0 0 0-3.6.7 8.2 8.2 0 0 1-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M263 329a8.1 8.1 0 0 0 3.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 0 0 3.8-.9 8.4 8.4 0 0 1 3.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 0 1-3.8-.8 8.2 8.2 0 0 0-3.7-.8 8.4 8.4 0 0 0-3.6.7 8.2 8.2 0 0 1-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3z"
      />
      <path
        fill="#c8b100"
        d="m286.3 308-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".4"
        d="m286.3 308-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8z"
      />
      <path
        fill="#c8b100"
        d="M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
      />
      <path fill="#c8b100" d="M266.9 316.7h22V311h-22v5.6z" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M266.9 316.7h22V311h-22v5.6z"
      />
      <path
        fill="#ad1519"
        d="M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 0 1 .2-8.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 0 1 .2-8.8z"
      />
      <path fill="#ccc" d="M270.1 305.6h15.6V229h-15.6v76.5z" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M281.4 229.1v76.3m1.8-76.3v76.3m-13 .2h15.5V229h-15.6v76.5z"
      />
      <path
        fill="#ad1519"
        d="M254.2 257.7a49.6 49.6 0 0 1 23.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 0 0-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".4"
        d="M254.2 257.7a49.6 49.6 0 0 1 23.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 0 0-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
      />
      <path
        fill="#ad1519"
        d="M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
      />
      <path
        fill="#ad1519"
        d="M270 261.5a13 13 0 0 0-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M270 261.5a13 13 0 0 0-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
      />
      <path
        fill="#ad1519"
        d="M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".4"
        d="M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7z"
      />
      <path
        fill="#c8b100"
        d="M263.9 254.4c.6-2.3 1.4-4.4 2.1-6.6h-.5a5.2 5.2 0 0 1-.5.1 52.8 52.8 0 0 1-1.4 4.8c-1-1.4-2-2.7-2.7-4.1l-1 .2h-1a131.3 131.3 0 0 1 4 5.7h.5l.5-.1m6-6.6h-1a8 8 0 0 1-.8 0v6.2h4.2v-.7h-2.6l.1-5.5m6.8 1 2 .3v-.7l-5.8-.5v.8a19.3 19.3 0 0 1 2 0l-.4 5.6h1.6l.5-5.4m2.4 6c.3 0 .5 0 .8.2l.8.2.7-2.9.6 1.2.8 2.1 1 .2c.4 0 .7.2 1 .3l-.3-.7c-.4-1-1-1.9-1.3-2.9 1 0 1.9-.3 2.1-1.2.1-.6 0-1-.7-1.5-.4-.3-1.2-.4-1.7-.5l-2.4-.5-1.4 6m3-5.2c.7.2 1.5.3 1.5 1v.5c-.3.9-1 1.2-2 .9l.5-2.4m8 7-.2 2 .8.5.9.5.5-7a3.4 3.4 0 0 1-.7-.3l-6.1 3.8.5.3.4.2 1.7-1.2 2.3 1.3zm-1.7-1.5 2-1.4-.2 2.3-1.8-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".1"
        d="M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 0 1-2.1-2z"
      />
      <path
        fill="#ad1519"
        stroke="#000"
        strokeWidth=".3"
        d="M205.7 175.4c6.3 0 12 1 15.7 2.4a31.7 31.7 0 0 0 14.6 2.3c2.7 0 6.5.8 10.3 2.4a27.3 27.3 0 0 1 7.4 4.7l-1.5 1.4-.4 3.8-4.1 4.7-2 1.8-5 3.9-2.5.2-.7 2.1-31.6-3.7-31.7 3.7-.8-2.1-2.5-.2-4.9-4-2-1.7-4.1-4.7-.5-3.8-1.5-1.4a27.6 27.6 0 0 1 7.5-4.7 26 26 0 0 1 10.2-2.4c2 .2 4.2.1 6.6-.2a30 30 0 0 0 8-2c3.7-1.5 9-2.5 15.5-2.5z"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".4"
        d="M206.2 217.1c-11.8 0-22.4-1.4-29.9-3.6a1.1 1.1 0 0 1-.8-1.2c0-.5.3-1 .8-1.2a109 109 0 0 1 29.9-3.6c11.7 0 22.3 1.4 29.8 3.6a1.3 1.3 0 0 1 0 2.4c-7.5 2.2-18 3.6-29.8 3.6"
      />
      <path
        fill="#ad1519"
        d="M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0 1 27.6 3c-7.3 2-17 3.2-27.6 3.2"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".1"
        d="M206.9 215.7v-6.3m-1.7 6.3v-6.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".2"
        d="M203.6 215.7v-6.3m-1.6 6.3v-6.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M200.6 215.7v-6.3m-2.8 5.9v-5.7m1.3 5.8v-6m-3.8 5.6v-5.2m1.3 5.4v-5.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M192 214.8V210m1 4.7V210m1.2 5v-5m-3.4 4.7v-4.5"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".5"
        d="M189.7 214.5v-4.2m-1.2 4.1v-4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".6"
        d="M186 214v-3m1.3 3.2v-3.5m-2.5 3.1V211"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".7"
        d="M183.7 213.6v-2.3m-1.3 2v-1.8m-1.2 1.6v-1.3"
      />
      <path fill="none" stroke="#000" strokeWidth=".9" d="M179.8 212.8v-.7" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".1"
        d="M213.7 215.3v-5.8m-2.9 6v-6.1m-2.1 6.2v-6.3"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".4"
        d="M206 207.4a108 108 0 0 0-30 3.9c.6-.3.5-1-.3-3-1-2.5-2.4-2.4-2.4-2.4 8.3-2.5 20-4 32.8-4a123 123 0 0 1 33 4s-1.5-.1-2.5 2.3c-.8 2-.8 2.8-.2 3-7.5-2.2-18.4-3.7-30.3-3.7"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".4"
        d="M206.1 201.9c-12.9 0-24.5 1.5-32.8 4a1 1 0 0 1-1.3-.6 1 1 0 0 1 .7-1.3 121 121 0 0 1 33.4-4.2c13.2 0 25.2 1.7 33.5 4.2.6.2.9.8.7 1.3-.2.5-.8.8-1.3.6-8.4-2.5-20-4-32.9-4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".4"
        d="M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0 1 27.6 3c-7.3 2-17 3.2-27.6 3.2z"
      />
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth=".4"
        d="M197 204.8c0-.5.4-1 1-1 .5 0 1 .5 1 1s-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="#ad1519"
        stroke="#000"
        strokeWidth=".4"
        d="M206.1 205.6H203a1 1 0 0 1 0-2h6.4c.5 0 1 .5 1 1s-.5 1-1 1h-3.2"
      />
      <path
        fill="#058e6e"
        stroke="#000"
        strokeWidth=".4"
        d="m190.3 206.5-2.3.2c-.6.1-1-.3-1.2-.8a1 1 0 0 1 1-1.1l2.2-.3 2.4-.3c.5 0 1 .3 1.1.9.1.5-.3 1-.9 1l-2.3.4"
      />
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth=".4"
        d="M181 206.7c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="#ad1519"
        stroke="#000"
        strokeWidth=".4"
        d="m174 208.5 1.2-1.6 3.3.4-2.6 2-1.8-.8"
      />
      <path
        fill="#058e6e"
        stroke="#000"
        strokeWidth=".4"
        d="m222 206.5 2.3.2c.5.1 1-.3 1.1-.8a1 1 0 0 0-.9-1.1l-2.2-.3-2.4-.3a1 1 0 0 0-1.1.9c-.1.5.3 1 .9 1l2.3.4"
      />
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth=".4"
        d="M213.3 204.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1m15.8 1.9c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="#ad1519"
        stroke="#000"
        strokeWidth=".4"
        d="m238.2 208.5-1.1-1.6-3.3.4 2.6 2 1.8-.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M177.3 212.8c7.4-2.1 17.6-3.4 28.8-3.4 11.3 0 21.4 1.3 28.9 3.4"
      />
      <path
        fill="#c8b100"
        d="m182.3 183.8 1.4 1 2-3.2a7.4 7.4 0 0 1-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 0 0-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 0 0 3 7.6l-1 1.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="m182.3 183.8 1.4 1 2-3.2a7.4 7.4 0 0 1-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 0 0-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 0 0 3 7.6l-1 1.8"
      />
      <path
        fill="#c8b100"
        d="M182.4 183.8a9.3 9.3 0 0 1-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 0 0-3.4 6.8 8.9 8.9 0 0 0 3 6.7l-.9 1.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M182.4 183.8a9.3 9.3 0 0 1-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 0 0-3.4 6.8 8.9 8.9 0 0 0 3 6.7l-.9 1.8"
      />
      <path
        fill="#c8b100"
        d="M160.1 187.1a8.8 8.8 0 0 1-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 0 0-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 0 0-.7 3.1 7.3 7.3 0 0 0 2.7 5.6l-2.6 4.1-1.3-1 1.7-2.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M160.1 187.1a8.8 8.8 0 0 1-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 0 0-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 0 0-.7 3.1 7.3 7.3 0 0 0 2.7 5.6l-2.6 4.1-1.3-1 1.7-2.8z"
      />
      <path
        fill="#c8b100"
        d="M162.7 173.3a10.5 10.5 0 0 0-4 4.1 8.6 8.6 0 0 0-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 0 1-2.3-6.5c0-4 2.5-7.5 6.4-9.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M162.7 173.3a10.5 10.5 0 0 0-4 4.1 8.6 8.6 0 0 0-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 0 1-2.3-6.5c0-4 2.5-7.5 6.4-9.8z"
      />
      <path
        fill="#c8b100"
        d="M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6z"
      />
      <path
        fill="#c8b100"
        d="M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 0 1 .4-4.2 2 2 0 0 1 1.8-1.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 0 1 .4-4.2 2 2 0 0 1 1.8-1.4z"
      />
      <path
        fill="#c8b100"
        d="m229.7 183.8-1.3 1-2-3.2a7.4 7.4 0 0 0 3.6-6.3 7 7 0 0 0 0-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 0 0-8.5 2.4 23 23 0 0 0-.2-1.8 17.4 17.4 0 0 1 8.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 0 1-3 7.6l1 1.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="m229.7 183.8-1.3 1-2-3.2a7.4 7.4 0 0 0 3.6-6.3 7 7 0 0 0 0-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 0 0-8.5 2.4 23 23 0 0 0-.2-1.8 17.4 17.4 0 0 1 8.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 0 1-3 7.6l1 1.8"
      />
      <path
        fill="#c8b100"
        d="M229.6 183.8a9.1 9.1 0 0 0 4.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 0 1 3.4 6.8 8.9 8.9 0 0 1-3.2 6.7l1 1.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M229.6 183.8a9.1 9.1 0 0 0 4.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 0 1 3.4 6.8 8.9 8.9 0 0 1-3.2 6.7l1 1.8"
      />
      <path
        fill="#c8b100"
        d="M252 187.1a8.8 8.8 0 0 0 2.2-5.9 8.7 8.7 0 0 0-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 0 0-6 .6l1 1.4a25.4 25.4 0 0 1 5-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 0 1-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M252 187.1a8.8 8.8 0 0 0 2.2-5.9 8.7 8.7 0 0 0-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 0 0-6 .6l1 1.4a25.4 25.4 0 0 1 5-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 0 1-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8z"
      />
      <path
        fill="#c8b100"
        d="M249.3 173.3a10.6 10.6 0 0 1 4 4.1 8.7 8.7 0 0 1 .9 3.8 8.8 8.8 0 0 1-2.3 5.9l1.6 2.5a10.4 10.4 0 0 0 2.3-6.5c0-4-2.6-7.5-6.5-9.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M249.3 173.3a10.6 10.6 0 0 1 4 4.1 8.7 8.7 0 0 1 .9 3.8 8.8 8.8 0 0 1-2.3 5.9l1.6 2.5a10.4 10.4 0 0 0 2.3-6.5c0-4-2.6-7.5-6.5-9.8z"
      />
      <path
        fill="#fff"
        d="M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 0 1-1.8-1.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 0 1-1.8-1.7z"
      />
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth=".4"
        d="M204.2 178c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 0 1-1.8-1.7m.4-3.7c0-.7.6-1.3 1.4-1.3.8 0 1.5.6 1.5 1.3 0 .8-.7 1.4-1.5 1.4s-1.4-.6-1.4-1.4m.4-3.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1m.2-2.8c0-.5.4-.8.8-.8.5 0 .9.3.9.8 0 .4-.4.8-.9.8a.8.8 0 0 1-.8-.8"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".4"
        d="m206.2 191.8 1.2.2a4.6 4.6 0 0 0 4.5 6 4.7 4.7 0 0 0 4.4-3c.1 0 .5-1.7.7-1.7.2 0 .1 1.8.2 1.7.3 2.3 2.4 3.8 4.7 3.8a4.6 4.6 0 0 0 4.7-5l1.5-1.5.7 2a4 4 0 0 0-.4 1.9 4.4 4.4 0 0 0 4.5 4.2c1.6 0 3-.7 3.8-1.9l.9-1.2v1.5c0 1.5.6 2.8 2 3 0 0 1.7.1 4-1.6 2.1-1.7 3.3-3.1 3.3-3.1l.2 1.7s-1.8 2.8-3.8 4c-1 .6-2.7 1.3-4 1-1.4-.2-2.4-1.3-3-2.6a6.7 6.7 0 0 1-3.3 1 6.5 6.5 0 0 1-6.1-3.7 7 7 0 0 1-10.4-.3 7 7 0 0 1-4.6 1.8 6.9 6.9 0 0 1-5.7-3 6.9 6.9 0 0 1-5.7 3 7 7 0 0 1-4.7-1.8 7 7 0 0 1-10.4.3 6.5 6.5 0 0 1-6 3.7 6.7 6.7 0 0 1-3.4-1c-.6 1.3-1.5 2.4-3 2.7-1.2.2-2.9-.5-4-1.1-2-1.2-3.8-4-3.8-4l.2-1.7s1.2 1.4 3.4 3.1c2.2 1.8 3.9 1.6 3.9 1.6 1.4-.2 2-1.5 2-3v-1.5l1 1.2a4.6 4.6 0 0 0 3.7 2c2.5 0 4.5-2 4.5-4.3a4 4 0 0 0-.4-2l.8-1.9 1.5 1.5a4.4 4.4 0 0 0 0 .6c0 2.4 2 4.4 4.6 4.4 2.4 0 4.4-1.5 4.7-3.8 0 0 0-1.6.2-1.7.2 0 .6 1.7.7 1.6a4.7 4.7 0 0 0 4.5 3.1 4.6 4.6 0 0 0 4.5-6l1.2-.2"
      />
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth=".4"
        d="M238.6 197.7c.3-.8 0-1.6-.6-1.8-.5-.2-1.2.3-1.5 1.1-.3.8 0 1.6.6 1.8.5.2 1.2-.3 1.5-1.1m-20.5-4c0-.8-.3-1.6-1-1.6-.5-.1-1 .5-1.2 1.4-.1.8.3 1.5.9 1.6.6 0 1.2-.6 1.3-1.4m-23.9 0c0-.8.4-1.6 1-1.6.6-.1 1.1.5 1.2 1.4.1.8-.3 1.5-.9 1.6-.6 0-1.1-.6-1.2-1.4m-20.6 4c-.2-.8 0-1.6.6-1.8.6-.2 1.2.3 1.5 1.1.3.8 0 1.6-.5 1.8-.6.2-1.3-.3-1.6-1.1"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".4"
        d="M182.7 184a5.1 5.1 0 0 1 2.2 2.9s0-.3.6-.6 1-.3 1-.3l-.1 1.3-.3 2.2a7.4 7.4 0 0 1-.7 1.6 1.9 1.9 0 0 0-1.5-.4 1.8 1.8 0 0 0-1.2.9s-.7-.6-1.2-1.3l-1.1-2-.7-1.1s.5-.2 1.1 0c.6 0 .8.2.8.2a4.9 4.9 0 0 1 1-3.4m.4 9.8a1.8 1.8 0 0 1-.6-1c0-.5 0-.9.3-1.2 0 0-.9-.5-1.8-.7-.7-.2-2-.2-2.3-.2h-1l.2.5c.2.5.5.7.5.7a5 5 0 0 0-3 2 5.3 5.3 0 0 0 3.5 1l-.2.8v.6l1-.4c.3-.1 1.5-.5 2-1 .8-.4 1.5-1.1 1.5-1.1m2.7-.5a1.6 1.6 0 0 0 .2-1.1 1.7 1.7 0 0 0-.6-1l1.4-1.3a10 10 0 0 1 2-.9l1.1-.4v.6a5.7 5.7 0 0 1-.2.8 5 5 0 0 1 3.4 1 5 5 0 0 1-2.9 2 6.4 6.4 0 0 0 .7 1.2h-1c-.4 0-1.6 0-2.3-.2a11 11 0 0 1-1.8-.7"
      />
      <path
        fill="#ad1519"
        stroke="#000"
        strokeWidth=".4"
        d="M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 0 1-2.1-2"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".4"
        d="M206.1 180.8a5.7 5.7 0 0 1 1.9 3.7s.2-.3.9-.5c.7-.3 1.2-.2 1.2-.2l-.5 1.4-.8 2.4a8.2 8.2 0 0 1-1 1.7 2.1 2.1 0 0 0-1.7-.7c-.6 0-1.2.3-1.6.7 0 0-.6-.7-1-1.7l-.8-2.4-.5-1.4 1.2.2c.7.2.9.5.9.5 0-1.4.8-2.8 1.8-3.7"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".4"
        d="M204.6 191.8a2 2 0 0 1-.5-1.2c0-.5.1-1 .4-1.3 0 0-.8-.7-1.8-1-.7-.4-2-.7-2.5-.7l-1.2-.2.2.6.4.9a5.9 5.9 0 0 0-3.7 1.7c1 .9 2.3 1.6 3.7 1.6l-.4 1-.2.6 1.2-.2c.4-.1 1.8-.4 2.5-.7 1-.4 1.9-1 1.9-1m3 0a1.9 1.9 0 0 0 .1-2.6s.9-.7 1.8-1a8 8 0 0 1 2.5-.7l1.2-.3-.1.7-.4.9c1.4 0 2.7.8 3.6 1.7a5.9 5.9 0 0 1-3.6 1.6 6.9 6.9 0 0 0 .5 1.6l-1.2-.2-2.5-.7c-1-.4-1.8-1-1.8-1m22-8a5.2 5.2 0 0 0-2.2 3l-.7-.6c-.6-.3-1-.3-1-.3l.2 1.3c0 .3 0 1.3.3 2.2.2 1 .6 1.6.6 1.6a2 2 0 0 1 1.5-.4c.6.1 1 .5 1.3.9l1.1-1.3c.6-.8 1-1.7 1.1-2l.7-1.1s-.4-.2-1 0c-.7 0-1 .2-1 .2a4.9 4.9 0 0 0-1-3.4m-.3 9.8c.3-.3.5-.6.6-1a1.6 1.6 0 0 0-.2-1.2s.8-.5 1.7-.7c.7-.2 2-.2 2.3-.2h1.1l-.3.5a6.2 6.2 0 0 1-.4.7 5 5 0 0 1 2.9 2 5.3 5.3 0 0 1-3.5 1l.2.8v.6l-1-.4c-.3-.1-1.4-.5-2-1-.8-.4-1.4-1.1-1.4-1.1m-2.8-.5a1.7 1.7 0 0 1-.2-1.1c0-.5.3-.8.6-1 0 0-.6-.8-1.4-1.3-.6-.4-1.7-.8-2-.9a171.4 171.4 0 0 1-1-.4v.6c0 .5.2.8.2.8a5.2 5.2 0 0 0-3.5 1c.7.9 1.7 1.7 3 2 0 0-.3.2-.5.7l-.3.5h1c.4 0 1.7 0 2.3-.2a11.1 11.1 0 0 0 1.8-.7"
      />
      <path
        fill="#ad1519"
        stroke="#000"
        strokeWidth=".4"
        d="M226 192.4c0-1 1-2 2-2s2.1 1 2.1 2a2 2 0 0 1-2 2 2 2 0 0 1-2.1-2m23.2 4.4c-.4-.5-1.4-.4-2.2.2-.8.7-1 1.6-.5 2.2.5.5 1.5.4 2.3-.3.7-.6 1-1.6.5-2"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".4"
        d="m246.3 198 .7-1c.7-.6 1.8-.7 2.3-.2l.1.2s1-2 2.3-2.6c1.3-.7 3.4-.5 3.4-.5a2.8 2.8 0 0 0-2.9-2.8 3 3 0 0 0-2.4 1l-.2-1s-1.3.3-1.9 1.8c-.6 1.5 0 3.6 0 3.6s-.3-.9-.7-1.5a8 8 0 0 0-2.4-1.6l-1.3-.7-.1.5a5 5 0 0 0 0 .8 7.9 7.9 0 0 0-3.7.5 4.7 4.7 0 0 0 2.5 2.2l-.8.7a4 4 0 0 0-.4.5l1.3.2 2.5.2a14.5 14.5 0 0 0 1.7-.2m-80.3 0c0-.4-.3-.7-.7-1-.7-.7-1.7-.8-2.2-.3l-.2.3s-1-2-2.3-2.7c-1.2-.7-3.3-.5-3.3-.5a2.8 2.8 0 0 1 2.8-2.8c1 0 1.9.4 2.4 1l.2-1s1.3.3 2 1.8c.5 1.5-.1 3.6-.1 3.6s.3-.9.8-1.5a8 8 0 0 1 2.4-1.6l1.3-.7v1.3a7.9 7.9 0 0 1 3.7.5 4.7 4.7 0 0 1-2.5 2.2l.8.7.4.5-1.2.2-2.6.2a14.7 14.7 0 0 1-1.7-.2"
      />
      <path
        fill="#ad1519"
        stroke="#000"
        strokeWidth=".4"
        d="M163 196.8c.6-.5 1.6-.4 2.4.3.7.6 1 1.5.4 2-.5.6-1.5.5-2.2-.2-.8-.6-1-1.6-.5-2m41-6.3c0-1.1.9-2 2-2s2.1.9 2.1 2c0 1-1 2-2 2a2 2 0 0 1-2.1-2"
      />
      <path
        fill="#005bbf"
        stroke="#000"
        strokeWidth=".3"
        d="M201.8 160.6c0-2.2 1.9-4 4.3-4s4.2 1.8 4.2 4-1.9 4-4.3 4a4.1 4.1 0 0 1-4.2-4"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".3"
        d="M205 149.3v2.2h-2.4v2.2h2.3v6.3H202l-.2.6c0 .6.1 1.1.3 1.6h7.9c.2-.5.3-1 .3-1.6l-.2-.6h-2.8v-6.3h2.3v-2.2h-2.3v-2.2h-2.4z"
      />
      <path
        fill="#ccc"
        d="M206.5 330.6a82 82 0 0 1-35.5-8.2 22.7 22.7 0 0 1-12.8-20.4v-32h96.4v32a22.7 22.7 0 0 1-12.8 20.4 81 81 0 0 1-35.3 8.2"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".5"
        d="M206.5 330.6a82 82 0 0 1-35.5-8.2 22.7 22.7 0 0 1-12.8-20.4v-32h96.4v32a22.7 22.7 0 0 1-12.8 20.4 81 81 0 0 1-35.3 8.2z"
      />
      <path fill="#ccc" d="M206.3 270h48.3v-53.5h-48.3V270z" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".5"
        d="M206.3 270h48.3v-53.5h-48.3V270z"
      />
      <path
        fill="#ad1519"
        d="M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".5"
        d="M168.6 320.9c1.5.8 3.6 2 5.8 2.6l-.1-54.7h-5.7v52z"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".5"
        d="M158 301.6a24.4 24.4 0 0 0 5.5 15v-47.5h-5.4v32.5z"
      />
      <path
        fill="#c7b500"
        stroke="#000"
        strokeWidth=".5"
        d="M179.4 324.7a26.6 26.6 0 0 0 5.6 0v-55.9h-5.6v56z"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".5"
        d="M190 323.5a19 19 0 0 0 5.8-2.5v-52.2H190l-.1 54.7z"
      />
      <path fill="#ad1519" d="M158.1 270h48.2v-53.5H158V270z" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".5"
        d="M158.1 270h48.2v-53.5H158V270z"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".5"
        d="M201 316c2.4-2 4.6-6.8 5.4-12.2l.1-35H201l.1 47.3z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".5"
        d="M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
      />
      <path
        fill="#ad1519"
        d="M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".5"
        d="M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
      />
      <path
        fill="#c8b100"
        d="m215.1 294.1.1.5c0 .6-.5 1-1.1 1a1 1 0 0 1-1.1-1v-.5h-1.5a2.5 2.5 0 0 0 1.8 2.9v3.9h1.6V297a2.6 2.6 0 0 0 1.7-1.6h4.4v-1.2h-6m21.8 0v1.2h-4a2.5 2.5 0 0 1-.3.6l4.6 5.2-1.2 1-4.6-5.3-.2.1v8.7h-1.6V297h-.2l-4.8 5.2-1.2-1 4.7-5.3a2.1 2.1 0 0 1-.2-.4h-4V294h13zm2.6 0v1.2h4.4c.3.8.9 1.4 1.7 1.6v3.9h1.6V297a2.5 2.5 0 0 0 1.8-2.4 2 2 0 0 0 0-.5h-1.6l.1.5c0 .6-.5 1-1 1-.7 0-1.2-.4-1.2-1a1 1 0 0 1 .1-.5h-5.9m-6.7 22.1a15.6 15.6 0 0 0 3.7-1l.8 1.4a17.6 17.6 0 0 1-4.3 1.2 2.6 2.6 0 0 1-2.6 2 2.6 2.6 0 0 1-2.5-2 17.5 17.5 0 0 1-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 0 1 1.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-11-2.2-.8 1.4a16.6 16.6 0 0 1-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 0 1-.3-3.5l.1-.1a15.3 15.3 0 0 1-1.3-4.8h1.7a13.1 13.1 0 0 0 1 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.5.9.5 2-.1 2.8a15.2 15.2 0 0 0 3.1 2.6zm-6-4.8c.3-.4 1-.5 1.5 0s.5 1 .1 1.4a1.2 1.2 0 0 1-1.6.1 1 1 0 0 1 0-1.5zm-2.2-4.5-1.6-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.2 2.7zm1.4-5.3 1.7.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6a14 14 0 0 1-.3-2.7v-2.6zm5.6 13.7a15.7 15.7 0 0 0 4.8 2.6l.4-1.6a13.7 13.7 0 0 1-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 0 0 4.8 2.6l-1.2 1.1a18.7 18.7 0 0 1-4-2l.4-1.7m2.2-9.4 1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1-1-1.4 3-3.3 1.6.7-3.6 4m18.1 9.9.8 1.4a16.7 16.7 0 0 0 3.6-3.1c.9.2 1.8 0 2.5-.5a2.4 2.4 0 0 0 .3-3.5l-.1-.1a15 15 0 0 0 1.3-4.8h-1.7a13.3 13.3 0 0 1-1 4 3 3 0 0 0-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 0 0 .1 2.8 15 15 0 0 1-3.1 2.6zm6-4.8a1.2 1.2 0 0 0-1.5 0 1 1 0 0 0-.1 1.4 1.2 1.2 0 0 0 1.6.1 1 1 0 0 0 0-1.5zm2.2-4.5 1.6-.3.3-4.3-1.7-.6v2.5c0 1 0 1.9-.2 2.8zm-1.4-5.3-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m-5.6 13.7a15.7 15.7 0 0 1-4.8 2.6l-.4-1.6a13.7 13.7 0 0 0 4-2l1.2 1m.8 1.4a17.4 17.4 0 0 1-4.8 2.6l1.2 1.1a18.6 18.6 0 0 0 4-2l-.4-1.7m-2.2-9.4-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1 1-1.4-3-3.3-1.6.7 3.6 4m-20.1-8.7.5 1.6h4.5l.5-1.6h-5.5m21.1 0-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm1.9-7.8 1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0-1.7-.4v-4.3l1.7-.5v5.2"
      />
      <path
        fill="#c8b100"
        d="M211.5 294.2c.2-1 1-1.6 1.8-2V287h1.6v5.3c.8.3 1.5.9 1.7 1.6h4.4v.3h-6a1.2 1.2 0 0 0-1-.6c-.4 0-.7.3-1 .6h-1.5m12.2 0v-.3h4.1a2.4 2.4 0 0 1 .2-.3l-5-5.7 1.2-1 5 5.6.2-.1V285h1.6v7.3h.3l4.9-5.5 1.2 1-4.9 5.5.3.6h4v.3h-13zm21.6 0a1.1 1.1 0 0 1 1-.6c.5 0 .8.3 1 .6h1.6c-.2-1-.9-1.6-1.8-2V287h-1.6v5.3c-.8.3-1.4.8-1.7 1.6h-4.4v.3h6m-30.2-15 6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 0 0-2.5-1.7 2.6 2.6 0 0 0-2.7 2.5 2.5 2.5 0 0 0 1.8 2.4v5.2h1.6v-5.2h.3zm32 0v5.3h-1.7v-5.2a2.5 2.5 0 0 1-.4-.2l-6 6.8-1.3-1 6.2-6.9-.1-.3h-4.5V276h4.5a2.6 2.6 0 0 1 2.4-1.7 2.6 2.6 0 0 1 2.7 2.5 2.5 2.5 0 0 1-1.9 2.4zm-16.1 0v3.3h-1.7v-3.2a2.6 2.6 0 0 1-1.7-1.6h-4V276h4a2.6 2.6 0 0 1 2.5-1.7c1.2 0 2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 0 1-1.6 1.6zm-17.8 4-1.7.4v4.3l1.7.5v-5.2m1.6 0 1.7.4v4.3l-1.7.5v-5.2m30.6 0-1.7.4v4.3l1.7.5v-5.2m1.6 0 1.7.4v4.3l-1.7.5v-5.2m-25.5.8 1.6-.7 2.9 3.3-1 1.4-3.5-4m-1.3 1-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1 1 1.4-3 3.3-1.5-.7 3.5-4m-20.3 9 .5-1.6h4.5l.5 1.6h-5.5m-6.7-17c0-.6.5-1 1.2-1a1 1 0 0 1 1 1c0 .6-.4 1-1 1a1.1 1.1 0 0 1-1.2-1zm12.1.8-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6-.5-1.6h-4.5l-.5 1.6h5.5m15.7 17.8-.5-1.6h-4.5l-.5 1.6h5.5m4.4-17c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1.1 1a1.1 1.1 0 0 1-1.1-1zm6.2.8.5 1.6h4.6l.5-1.6h-5.6m0-1.6.5-1.6h4.6l.5 1.6h-5.6m-5.9 5-1.7.5v4.3l1.7.5V281m1.7 0 1.6.5v4.3l-1.6.5V281"
      />
      <path
        fill="none"
        stroke="#c8b100"
        strokeWidth=".3"
        d="M232.7 316.3a15.6 15.6 0 0 0 3.7-1.1l.8 1.4a17.6 17.6 0 0 1-4.3 1.2 2.6 2.6 0 0 1-2.6 2 2.6 2.6 0 0 1-2.5-2 17.5 17.5 0 0 1-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 0 1 1.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-4.7-20.4a2.3 2.3 0 0 1-.2-.5h-4V294h4a2.6 2.6 0 0 1 .2-.4l-5-5.6 1.2-1 5 5.5a2.2 2.2 0 0 1 .2 0V285h1.7v7.3h.2l4.9-5.5 1.2 1-4.9 5.5.3.6h4v1.5h-4c0 .2-.2.4-.3.5l4.7 5.3-1.3 1-4.6-5.3-.2.1v8.7h-1.6V297l-.2-.1-4.8 5.3-1.2-1 4.7-5.3m-12.8-16.7 6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 0 0-2.5-1.7 2.6 2.6 0 0 0-2.6 2.5 2.5 2.5 0 0 0 1.7 2.4v5.2h1.6v-5.2h.3zm6.5 34.8-.8 1.4a16.6 16.6 0 0 1-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 0 1-.3-3.5l.1-.1a15.3 15.3 0 0 1-1.2-4.8h1.6a13.1 13.1 0 0 0 1 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.6.9.5 2-.1 2.8a15.2 15.2 0 0 0 3.1 2.6zm-8.4-13.1V297a2.5 2.5 0 0 1-1.8-2.4c0-1 .8-2 1.8-2.4V287h1.6v5.3c.8.2 1.5.8 1.7 1.6h4.4v1.5h-4.4a2.6 2.6 0 0 1-1.6 1.6v3.9h-1.7m2.3 8.3c.4-.4 1.1-.5 1.6 0s.5 1 .1 1.4a1.2 1.2 0 0 1-1.6.1 1 1 0 0 1 0-1.5zm-2-4.5-1.7-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.3 2.7zm1.4-5.3 1.6.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6-.3-2.7v-2.6zm5.5 13.7a15.7 15.7 0 0 0 4.8 2.6l.4-1.6a13.7 13.7 0 0 1-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 0 0 4.8 2.6l-1.2 1.1a18.7 18.7 0 0 1-4-2l.4-1.7"
      />
      <path
        fill="none"
        stroke="#c8b100"
        strokeWidth=".3"
        d="m221.9 305.1 1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1-1-1.4 3-3.3 1.6.7-3.6 4m-7.6-9.5c0-.6.5-1 1-1 .7 0 1.2.5 1.2 1 0 .6-.5 1.1-1.1 1.1a1 1 0 0 1-1.1-1zm25.7 19.4.8 1.4a16.7 16.7 0 0 0 3.6-3.1c.9.2 1.8 0 2.6-.5a2.4 2.4 0 0 0 .2-3.5l-.1-.1a15 15 0 0 0 1.3-4.8h-1.7a13.3 13.3 0 0 1-1 4 3 3 0 0 0-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 0 0 .1 2.8 15 15 0 0 1-3 2.6zm8.4-13.1V297a2.5 2.5 0 0 0 1.8-2.4c0-1-.7-2-1.8-2.4V287h-1.6v5.3c-.8.2-1.4.8-1.7 1.6h-4.4v1.5h4.4c.3.8.9 1.3 1.7 1.6v3.9h1.6zm-2.3 8.3a1.2 1.2 0 0 0-1.6 0 1 1 0 0 0-.1 1.4 1.2 1.2 0 0 0 1.6.1 1 1 0 0 0 0-1.5zm2-4.5 1.7-.3.3-4.3-1.7-.6v2.5c0 1 0 1.8-.2 2.7zm-1.3-5.3-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m1.6-20.1v5.2h-1.6v-5.2a2.3 2.3 0 0 1-.4-.2l-6 6.8-1.2-1 6-7v-.2h-4.5V276h4.4a2.6 2.6 0 0 1 2.5-1.7 2.6 2.6 0 0 1 2.6 2.5 2.5 2.5 0 0 1-1.8 2.4zm-16 0v3.2h-1.7v-3.2a2.6 2.6 0 0 1-1.7-1.6h-4V276h4c.4-1 1.3-1.7 2.5-1.7s2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 0 1-1.6 1.6zm8.8 33.8a15.7 15.7 0 0 1-4.8 2.6l-.4-1.6a13.7 13.7 0 0 0 4-2l1.2 1m.8 1.4a17.4 17.4 0 0 1-4.8 2.6l1.2 1.1a18.7 18.7 0 0 0 4-2l-.4-1.7m-27.4-31.4-1.7.5v4.3l1.7.5v-5.2m1.7 0 1.6.4v4.3l-1.6.5V283m30.5 0-1.7.5v4.3l1.7.5V283"
      />
      <path
        fill="none"
        stroke="#c8b100"
        strokeWidth=".3"
        d="m247.1 283.1 1.7.5v4.3l-1.7.5V283m-8.6 22-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1 1-1.4-3-3.3-1.6.7 3.6 4m-18.2-20 1.6-.7 3 3.3-1 1.4-3.6-4m-1.3 1-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1 1 1.4-3 3.2-1.5-.6 3.5-4m-20.3 9 .5-1.6h4.5l.5 1.6h-5.5m0 1.5.5 1.6h4.5l.5-1.6h-5.5M213 277c0-.6.5-1 1.2-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1.2-1zm12.1.8-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6-.5-1.6h-4.5l-.5 1.6h5.5m20.1 18.5c0-.5.5-1 1.1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1.1-1 1.1a1 1 0 0 1-1.2-1zm-4.4-.7-.5-1.6h-4.5l-.5 1.6h5.5m0 1.5-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm1.9-7.8 1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0-1.7-.4v-4.3l1.7-.5v5.2m15.7-32.6c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 0 1 1.1 1c0 .6-.5 1-1 1a1.1 1.1 0 0 1-1.2-1zm6.2.8.5 1.6h4.6l.5-1.6h-5.5m0-1.6.4-1.6h4.6l.5 1.6h-5.5m-6 5-1.6.5v4.3l1.6.5V281m1.7 0 1.6.5v4.3l-1.6.5V281"
      />
      <path
        fill="#058e6e"
        d="M227.7 294.7a2.6 2.6 0 0 1 2.6-2.5 2.6 2.6 0 0 1 2.6 2.5 2.6 2.6 0 0 1-2.6 2.4c-1.4 0-2.6-1-2.6-2.4"
      />
      <path
        fill="#db4446"
        d="M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 0 1-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 0 1-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2z"
      />
      <path
        fill="#ed72aa"
        stroke="#000"
        strokeWidth=".4"
        d="M238.1 227.5v1.4c.2.6-.1 1.2 0 1.5 0 .4.1.6.3.9l.2.9-.7-.5-.6-.4v1c.1.2.3.8.6 1.1l1 1.3c.2.5.1 1.4.1 1.4s-.4-.7-.8-.8l-1.2-.7s.7.8.7 1.5c0 .8-.3 1.6-.3 1.6s-.3-.7-.8-1.1l-1-.9s.4 1.2.4 2v2.3l-.9-1-1-.7c0-.2.5.6.6 1.1 0 .5.3 2.3 1.8 4.5 1 1.3 2.3 3.6 5.3 2.9 3-.8 1.9-4.8 1.3-6.7a16.8 16.8 0 0 1-1-4.6c0-.8.6-2.9.5-3.3a8 8 0 0 1 .2-3.1c.4-1.3.7-1.8.9-2.3.2-.6.4-.9.4-1.3l.1-1.3.7 1.3.1 1.5s.1-1 1-1.6c.8-.6 1.8-1.1 2-1.4.3-.3.3-.5.3-.5s0 1.8-.6 2.6l-1.7 2s.7-.3 1.2-.3h.9s-.6.4-1.4 1.6c-.8 1-.5 1.2-1 2.1-.6 1-1 1-1.7 1.5-1 .8-.5 4.2-.4 4.7.2.5 2 4.5 2 5.5s.2 3.2-1.5 4.6c-1.1 1-3 1-3.4 1.2-.4.3-1.2 1.1-1.2 2.8 0 1.7.6 2 1 2.4.6.5 1.2.2 1.3.6.2.3.2.5.5.7.2.2.3.4.2.8 0 .3-.8 1.1-1.1 1.7l-.8 2.4c0 .2-.1 1 .1 1.3 0 0 .9 1 .3 1.2-.4.2-.8-.2-1-.2l-.9.5c-.3-.1-.3-.3-.4-.8l-.1-.7c-.2 0-.3.2-.4.5 0 .2 0 .8-.3.8-.2 0-.5-.4-.8-.5-.2 0-.8-.2-.8-.4 0-.3.4-.9.7-1 .4 0 .8-.3.5-.5s-.5-.2-.7 0-.8 0-.7-.2v-.8c0-.2-.4-.5.1-.8.6-.3.8.2 1.4.1.6 0 .8-.3 1-.6.2-.3.2-1-.2-1.4-.4-.5-.7-.5-.9-.8l-.3-.9v2.2l-.7-.8c-.3-.3-.6-1.3-.6-1.3v1.3c0 .4.3.7.2.8-.1.1-.8-.7-1-.8a3.7 3.7 0 0 1-1-1l-.4-1.4a4.2 4.2 0 0 1 0-1.5l.4-1h-1.4c-.7 0-1.2-.3-1.5.2-.3.5-.2 1.5.2 2.8.3 1.2.5 1.9.4 2.1a3 3 0 0 1-.7.8h-.9a2.5 2.5 0 0 0-1.2-.3h-1.3l-1.1-.3c-.3.1-.8.3-.6.7.2.6-.2.7-.5.7l-.9-.2c-.4-.1-.9 0-.8-.4 0-.4.2-.4.4-.7.2-.3.2-.5 0-.5h-.6c-.2.2-.5.5-.8.4-.2-.1-.4-.4-.4-1s-.7-1.2 0-1.1c.5 0 1.3.4 1.4 0 .2-.3 0-.4-.2-.7s-.8-.4-.3-.7l.7-.5c.1-.2.4-.8.7-.6.6.2 0 .7.6 1.3.6.7 1 1 2 .8 1 0 1.3-.2 1.3-.5l-.1-1v-1s-.4.3-.5.6l-.4.8v-2a8 8 0 0 0-.2-.8l-.3.9-.1 1s-.7-.5-.5-1.5c.1-.7-.1-1.6.1-2 .2-.3.7-1.5 2-1.6h2.6l2-.3s-2.8-1.4-3.5-1.9a9.5 9.5 0 0 1-2-2l-.6-1.6s-.5 0-1 .3a5 5 0 0 0-1.2 1l-.7 1 .1-1.2v-.8s-.4 1.2-1 1.7l-1.4 1v-.8l.2-1s-.4.8-1.1 1c-.7 0-1.8 0-1.9.4 0 .5.2 1 0 1.4 0 .3-.4.5-.4.5l-.8-.4c-.4 0-.7.2-.7.2s-.3-.4-.2-.7c.1-.2.7-.6.5-.8l-.8.2c-.3.1-.8.3-.8-.2 0-.4.2-.7 0-1 0-.3 0-.5.2-.6l1.2-.1c0-.2-.2-.5-.8-.6-.6-.1-.8-.5-.5-.8.3-.2.3-.3.5-.6.1-.2.2-.7.7-.5.5.3.4.8 1 1a4 4 0 0 0 2-.2l1.5-1 1.5-1-1-.8c-.3-.3-.7-.9-1-1a8.3 8.3 0 0 0-1.8-.6 9 9 0 0 1-1.7-.5l.8-.3c.2-.2.6-.6.8-.6h.3-1.4c-.3-.1-1-.6-1.3-.6l-.8.1s.8-.4 1.4-.5l1-.1s-.9-.3-1.1-.6l-.6-1c-.2-.1-.3-.5-.6-.5l-1 .3c-.4 0-.6-.2-.6-.6l-.1-.5c-.2-.3-.6-.8-.2-1h1.4c0-.2-.5-.6-.8-.8-.4-.2-1-.5-.7-.8l.8-.5c.2-.3.3-1 .7-.7.4.2.8 1.2 1.1 1.1.3 0 .3-.8.3-1 0-.4 0-1 .2-.9.3 0 .5.4 1 .5.4 0 1-.1 1 .2 0 .3-.3.7-.6 1-.3.3-.4 1-.3 1.4.2.5.7 1.2 1.2 1.4.4.3 1.2.5 1.7.9.5.3 1.7 1.2 2.1 1.3l.8.4s.5-.2 1.1-.2c.7 0 2.1 0 2.6-.2.6-.2 1.3-.6 1-1-.1-.6-1.3-1-1.2-1.4 0-.4.5-.4 1.2-.4.8 0 1.8.1 2-1 .2-1 .2-1.5-.8-1.8-1-.2-1.8-.2-2-1-.2-.7-.4-.9-.2-1.1.3-.2.6-.3 1.4-.4.8 0 1.6 0 1.9-.2.2-.2.3-.7.6-.9.3-.2 1.4-.4 1.4-.4s1.4.7 2.7 1.7a15 15 0 0 1 2.2 2.1"
      />
      <path d="m228.1 226.8-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m228.1 226.8-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3z"
      />
      <path d="M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".1"
        d="M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m237.3 231.3-.4-.7a8 8 0 0 1-.3-.4"
      />
      <path
        fill="#db4446"
        d="M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 0 1-.6.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 0 1-.6.8z"
      />
      <path
        fill="#db4446"
        d="M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 0 0 .4-.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 0 0 .4-.6z"
      />
      <path
        fill="#db4446"
        d="M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8z"
      />
      <path d="m228.2 230.5.3-.5.3.5h-.7" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m228.2 230.5.3-.5.3.5h-.7"
      />
      <path d="m229 230.5.3-.5.4.5h-.8" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m229 230.5.3-.5.4.5h-.8"
      />
      <path d="m228.6 227.3.8.3-.7.4-.1-.6" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m228.6 227.3.8.3-.7.4-.1-.6"
      />
      <path d="m229.5 227.6.7.2-.5.4-.2-.6" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m229.5 227.6.7.2-.5.4-.2-.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M224.2 233.7s-.7.2-1 .6c-.4.5-.3 1-.3 1s.6-.5 1.5-.3l1.2.3 1.3-.3s-.7.8-.7 1.3l.2 1.1c0 .7-.6 1.6-.6 1.6l1-.3a4.6 4.6 0 0 0 1.7-.8l.9-1s-.2 1 0 1.4l.2 1.6.8-.6c.2-.1.7-.4.9-.7l.3-1s0 .8.4 1.3l.6 1.6s.3-.8.6-1.1c.3-.4.7-.8.7-1a4.3 4.3 0 0 0-.1-.9l.4.8m-11 .6s.5-.8 1-1l1.1-.8.9-.4m1 5 1.3-.8a4 4 0 0 0 1-1"
      />
      <path
        fill="#db4446"
        d="M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6z"
      />
      <path
        fill="#db4446"
        d="M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8z"
      />
      <path
        fill="#db4446"
        d="M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7zm16 1.3s2 1.2 1.9 2.2c0 1-1 2.3-1 2.3"
      />
      <path
        fill="#db4446"
        d="M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6z"
      />
      <path
        fill="#db4446"
        d="M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7z"
      />
      <path
        fill="#db4446"
        d="M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2z"
      />
      <path
        fill="#db4446"
        d="M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4z"
      />
      <path
        fill="#db4446"
        d="M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 0 1-.7-.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 0 1-.7-.3z"
      />
      <path
        fill="#db4446"
        d="M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3z"
      />
      <path
        fill="#ffd691"
        stroke="#000"
        strokeWidth=".5"
        d="M208.8 316.4c2 .6 3 2 3 3.8 0 2.3-2.2 4-5 4-3 0-5.3-1.7-5.3-4 0-1.7 1-3.6 3-3.8l-.2-.4-.7-.7h1.2l.8.5.5-.7c.3-.4.6-.5.6-.5l.6.6.3.5.7-.4.8-.3s0 .4-.2.7l-.1.7"
      />
      <path
        fill="#058e6e"
        stroke="#000"
        strokeWidth=".5"
        d="M206.3 326.7s-3.8-2.6-5.5-3c-2-.4-4.5 0-5.5 0 0 0 1.2.8 1.8 1.4.5.5 2.3 1.5 3.3 1.8 3 .8 6-.2 6-.2m1 .2s2.4-2.5 5-2.9c3-.4 5 .3 6.2.6l-1.5.8c-.5.3-2 1.5-4 1.6-2 0-4.4-.3-4.8-.2l-.9.1"
      />
      <path
        fill="#ad1519"
        stroke="#000"
        strokeWidth=".5"
        d="M206.7 323.8a4.8 4.8 0 0 1 0-7.1 4.8 4.8 0 0 1 1.5 3.5 4.9 4.9 0 0 1-1.5 3.6"
      />
      <path
        fill="#058e6e"
        stroke="#000"
        strokeWidth=".5"
        d="M205.7 329s.6-1.5.6-2.7l-.1-2.1h.8s.3 1.1.3 2l-.1 2.4-.7.1-.8.3"
      />
      <path
        fill="#fff"
        d="M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"
      />
      <path
        fill="#fff"
        d="M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 0 1 0 2c-.6 0-1-.4-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 0 1 0 2c-.6 0-1-.4-1-1z"
      />
      <path
        fill="#fff"
        d="M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"
      />
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth=".4"
        d="M231.7 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1m.6 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 0 1-1-1m0 3c0-.5.6-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1m-1 2.8c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1 0 .6-.4 1-1 1a1 1 0 0 1-1-1m-1.9 2.6c0-.5.5-1 1-1 .7 0 1.2.5 1.2 1s-.5 1-1.1 1c-.6 0-1-.4-1-1"
      />
      <path
        fill="#fff"
        d="M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1z"
      />
      <path
        fill="#fff"
        d="M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"
      />
      <path
        fill="#fff"
        d="M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"
      />
      <path
        fill="#fff"
        d="M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M166.6 169.1c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M166.6 169.1c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M170 168.5c0-.5.5-1 1.1-1a1 1 0 0 1 0 2c-.6 0-1-.4-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M170 168.5c0-.5.5-1 1.1-1a1 1 0 0 1 0 2c-.6 0-1-.4-1-1z"
      />
      <path
        fill="#fff"
        d="M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 0 1-1.1-1z"
      />
      <path
        fill="#fff"
        d="M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth=".4"
        d="M178.2 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1m-.7 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 0 1-1-1m-.2 3c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1m.9 2.8c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 0 1-1.1-1m1.8 2.6c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"
      />
      <path
        fill="#fff"
        d="M182.3 166.5c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M182.3 166.5c0-.5.5-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1z"
      />
      <path
        fill="#fff"
        d="M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#fff"
        d="M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".4"
        d="M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 0 1-1-1z"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".4"
        d="M174.7 228.9h-1v-1h-1.5v3.6h1.6v2.5h-3.4v7h1.8v14.3h-3.5v7.3h27.2v-7.3h-3.5V241h1.8v-7h-3.4v-2.5h1.6V228h-1.6v.9h-.8v-1h-1.6v1h-1.1v-1h-1.6v3.6h1.6v2.5H184v-7.8h1.7v-3.5H184v.9h-1v-1h-1.5v1h-.9v-1H179v3.6h1.7v7.8h-3.3v-2.5h1.6V228h-1.6v.9h-.9v-1h-1.8v1zm-6 33.7H196m-27.3-1.8H196m-27.3-1.8H196m-27.3-1.7H196m-27.3-2H196m-23.8-1.6h20.2m-20.2-1.8h20.2m-20.2-2h20.2m-20.2-1.7h20.2m-20.2-1.8h20.2m-20.2-1.8h20.2m-20.2-1.7h20.2m-22-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-20.4-1.7h17m-10.2-1.8h3.4m-3.4-1.8h3.4m-3.4-1.8h3.4m-3.4-1.7h3.4m-5.1-2.2h6.8m-12 7.5h3.6m-5-2.2h6.6m-6.7 32.6v-1.8m0-1.8v-1.7m-1.8 1.7v1.8m3.4 0V259m1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m-1.7 7.4v-2m-3.4 2v-2m7 0v2m1.5-2v-1.6m-5.1-1.8v1.8m3.5-1.8v1.8m3.3-1.8v1.8M179 252v-2m1.7-1.7v1.7m0-5.3v1.8m-1.7-3.6v1.8m1.7-3.5v1.7m-3.3-1.7v1.7m-3.5-1.7v1.7m-1.6-3.5v1.8m3.3-1.8v1.8m3.4-1.8v1.8m1.7-3.6v1.8m-3.3-1.8v1.8m-3.5-1.8v1.8m-1.6-3.6v1.8m6.7-1.8v1.8m-3.4-5.3v1.8m15.3-1.8h-3.5m5-2.2h-6.6m6.7 32.6v-1.8m0-1.8v-1.7m1.8 1.7v1.8m-3.4 0V259m-1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m1.7 7.4v-2m3.4 2v-2m-7 0v2m-1.5-2v-1.6m5.1-1.8v1.8m-3.5-1.8v1.8m-3.3-1.8v1.8m1.7-1.8v-2m-1.7-1.7v1.7m0-5.3v1.8m1.7-3.6v1.8m-1.7-3.5v1.7m3.3-1.7v1.7m3.5-1.7v1.7m1.6-3.5v1.8m-3.3-1.8v1.8m-3.4-1.8v1.8m-1.7-3.6v1.8m3.3-1.8v1.8m3.5-1.8v1.8m1.6-3.6v1.8m-6.7-1.8v1.8m3.4-5.3v1.8m-7 18v-2m0-5.4v-1.8m0 5.4v-1.8m0-5.3v-1.8m0-1.8v-1.7m0-3.6v-1.8m0-1.7v-1.8m-8.3 4.6h3.5m3.3-5.3h3.4m3.3 5.3h3.5"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".4"
        d="M186.8 262.6v-4.7c0-.8-.4-3.5-4.6-3.5-4 0-4.4 2.7-4.4 3.5v4.7h9z"
      />
      <path
        fill="#c8b100"
        stroke="#000"
        strokeWidth=".4"
        d="m179.3 258.2-2.2-.3c0-.9.2-2.2.9-2.6l2 1.5c-.3.2-.7 1-.7 1.4zm6 0 2.2-.3c0-.9-.2-2.2-.9-2.6l-2 1.5c.3.2.7 1 .7 1.4zm-2.2-2.3 1-2a5.3 5.3 0 0 0-2-.4l-1.7.4 1.1 2h1.6zm-4.2-5.5v-4.9c0-1.3-1-2.4-2.5-2.4s-2.4 1-2.4 2.4v4.9h4.9zm6.8 0v-4.9c0-1.3 1-2.4 2.5-2.4s2.4 1 2.4 2.4v4.9h-4.9zm-1.7-12 .4-4.4h-4.2l.2 4.4h3.6zm3.3 0-.4-4.4h4.4l-.5 4.4h-3.5zm-10 0 .2-4.4h-4.2l.5 4.4h3.5z"
      />
      <path
        fill="#0039f0"
        d="M185.3 262.6v-4c0-.7-.5-2.7-3.1-2.7-2.4 0-2.9 2-2.9 2.7v4h6zm-6.9-12.7v-4.2c0-1-.6-2.2-2-2.2s-2 1.1-2 2.2v4.3h4zm7.8 0v-4.2c0-1 .7-2.2 2-2.2s2 1.1 2 2.2v4.3h-4z"
      />
      <path
        fill="#ad1519"
        d="M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".6"
        d="M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5z"
      />
      <path
        fill="#005bbf"
        d="M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".6"
        d="M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13z"
      />
      <path
        fill="#c8b100"
        d="M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 0 0 .6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 0 1 0 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 0 0-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".3"
        d="M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 0 0 .6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 0 1 0 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 0 0-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
      />
      <path fill="#c8b100" d="M199.2 269.9h4.1v-1h-4.1v1z" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M199.2 269.9h4.1v-1h-4.1v1z"
      />
      <path
        fill="#c8b100"
        d="M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 0 1 1 1 .9.9 0 0 1 0 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 0 0-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".3"
        d="M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 0 1 1 1 .9.9 0 0 1 0 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 0 0-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
      />
      <path fill="#c8b100" d="M209.4 269.9h4.1v-1h-4.1v1z" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M209.4 269.9h4.1v-1h-4.1v1z"
      />
      <path
        fill="#c8b100"
        d="M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 0 1 1 1 .9.9 0 0 1 0 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 0 0-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth=".3"
        d="M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 0 1 1 1 .9.9 0 0 1 0 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 0 1 0-.3 1 1 0 0 1 1-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 0 0-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
      />
      <path fill="#c8b100" d="M204.3 278.6h4.1v-1h-4.1v1z" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M204.3 278.6h4.1v-1h-4.1v1z"
      />
      <path
        fill="#c8b100"
        d="M237.6 223.4h-.3a1.5 1.5 0 0 1-.3.4c-.2.2-.6.2-.8 0a.5.5 0 0 1-.1-.4.5.5 0 0 1-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 0 1 0-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 0 1 2.9 1.6 9 9 0 0 1 2.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 0 1-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 0 1-.1-.4.6.6 0 0 1-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M237.6 223.4h-.3a1.5 1.5 0 0 1-.3.4c-.2.2-.6.2-.8 0a.5.5 0 0 1-.1-.4.5.5 0 0 1-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 0 1 0-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 0 1 2.9 1.6 9 9 0 0 1 2.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 0 1-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 0 1-.1-.4.6.6 0 0 1-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3z"
      />
      <path d="M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".1"
        d="M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2z"
      />
      <path d="m236.3 224.8-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".1"
        d="m236.3 224.8-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
      />
      <path d="m234.6 223.7-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".1"
        d="m234.6 223.7-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
      />
      <path d="M233.7 223h.2v.2h-.2s-.1-.1 0-.2" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".1"
        d="M233.7 223h.2v.2h-.2s-.1-.1 0-.2z"
      />
      <path d="M237.3 225.5v-.2h-.3l.1.2h.2" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".1"
        d="M237.3 225.5v-.2h-.3l.1.2h.2z"
      />
      <path d="m237.9 226.2.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".1"
        d="m237.9 226.2.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
      />
      <path d="M238.8 227v-.3h-.3v.2h.3" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".1"
        d="M238.8 227v-.3h-.3v.2h.3z"
      />
      <path fill="#c8b100" d="M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
      />
      <path fill="#c8b100" d="M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
      />
      <path fill="#c8b100" d="m236.4 222.6-.4.3-.6-.7v-.1h1.1v.5" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m236.4 222.6-.4.3-.6-.7v-.1h1.1v.5"
      />
      <path
        fill="#c8b100"
        d="M235.3 222a.3.3 0 0 1 .4 0 .3.3 0 0 1 0 .3.3.3 0 0 1-.3 0 .3.3 0 0 1-.1-.3"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M235.3 222a.3.3 0 0 1 .4 0 .3.3 0 0 1 0 .3.3.3 0 0 1-.3 0 .3.3 0 0 1-.1-.3z"
      />
      <path
        fill="#c8b100"
        d="m233.2 221.1-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m233.2 221.1-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1z"
      />
      <path fill="#c8b100" d="m234.2 221.4-.4.4-.6-.6v-.2h1v.4" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m234.2 221.4-.4.4-.6-.6v-.2h1v.4"
      />
      <path fill="#c8b100" d="m233.1 221 .3-.1v.3c0 .2-.1.2-.2.2l-.1-.3" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m233.1 221 .3-.1v.3c0 .2-.1.2-.2.2l-.1-.3z"
      />
      <path fill="#c8b100" d="M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
      />
      <path fill="#c8b100" d="M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
      />
      <path fill="#c8b100" d="m238.4 224-.5.2-.4-.7v-.2h.1l.9.2-.1.5" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m238.4 224-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
      />
      <path
        fill="#c8b100"
        d="M237.3 223.2h.4a.3.3 0 0 1 0 .4.3.3 0 0 1-.3 0 .3.3 0 0 1 0-.4"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M237.3 223.2h.4a.3.3 0 0 1 0 .4.3.3 0 0 1-.3 0 .3.3 0 0 1 0-.4z"
      />
      <path fill="#c8b100" d="m240.2 224.3.1.5-.8.3h-.2v-.2l.4-.8.5.2" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m240.2 224.3.1.5-.8.3h-.2v-.2l.4-.8.5.2"
      />
      <path fill="#c8b100" d="m240 225.8-.5.1-.3-.8v-.1h.2l.8.3-.1.5" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m240 225.8-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
      />
      <path fill="#c8b100" d="m238.6 224.3-.2.5.9.3h.1v-.1l-.3-.8-.5.1" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m238.6 224.3-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
      />
      <path
        fill="#c8b100"
        d="M239.5 225.2a.3.3 0 0 0 0-.3.3.3 0 0 0-.4 0 .3.3 0 0 0 0 .3.3.3 0 0 0 .4 0"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M239.5 225.2a.3.3 0 0 0 0-.3.3.3 0 0 0-.4 0 .3.3 0 0 0 0 .3.3.3 0 0 0 .4 0z"
      />
      <path
        fill="#c8b100"
        d="M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2z"
      />
      <path fill="#c8b100" d="m240.3 226.1-.3.5.8.5v-.1h.2l-.1-1-.6.1" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="m240.3 226.1-.3.5.8.5v-.1h.2l-.1-1-.6.1"
      />
      <path fill="#c8b100" d="M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3" />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".3"
        d="M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3zm38-21.9v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
      />
      <path
        fill="none"
        d="M134.4 217.1v-1.2m-.4 1.2v-1.2m-.2 1.2v-1.2m-.3 1.2v-1.2"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".1"
        d="M133.2 217.1v-1.2m-.5 1.1v-1m.2 1v-1m-.7 1v-1m.2 1v-1m-.9 1v-1m.2 1v-1m.3 1v-1m-.7 1v-1m-.3.9v-.8m-.1.8v-.8m-.5.7v-.6m.2.6v-.6m-.4.5v-.5m-.2.5v-.4m-.3.3v-.3m-.3.3v-.2"
      />
      <path fill="none" stroke="#000" strokeWidth=".2" d="M129.2 216.6v-.2" />
      <path
        fill="none"
        d="M135.7 217v-1m-.5 1v-1m-.4 1.2V216m143 1.1V216m-.4 1.1V216m-.3 1.1V216m-.3 1.2V216"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth=".1"
        d="M276.6 217.1V216m-.6 1v-1m.3 1v-1m-.8 1v-1m.3 1v-1m-.9 1v-1m.2 1v-1m.2 1v-1m-.6 1v-1m-.3.9v-.8m-.2.8v-.8m-.4.7v-.6m.2.6v-.6m-.5.6v-.6m-.2.5v-.4m-.3.4v-.4m-.2.3v-.2"
      />
      <path fill="none" stroke="#000" strokeWidth=".2" d="M272.6 216.6v-.2" />
      <path fill="none" d="M279.1 217v-1m-.6 1v-1m-.4 1.1V216" />
    </svg>
  );
};