import React, { useState } from "react";

export default function PrevIcon({prevPage}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconSize = isHovered ? 39 : 41; // Change the size here as needed

  return (
    <svg
      onClick={prevPage}
      style={{ cursor: "pointer", width: iconSize, height: iconSize }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      viewBox="0 0 41 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M35.138 43.9578C36.4112 43.9556 37.6316 43.4548 38.5318 42.5653C39.4321 41.6757 39.9388 40.4698 39.9411 39.2117V5.79236C39.9437 4.95875 39.7236 4.13925 39.3028 3.41671C38.8821 2.69418 38.2757 2.09424 37.545 1.67759C36.8143 1.26095 35.9852 1.04237 35.1416 1.04395C34.298 1.04554 33.4697 1.26722 32.7407 1.68661L3.45196 18.3984C2.72277 18.8141 2.1172 19.4122 1.69617 20.1326C1.27514 20.853 1.05344 21.6702 1.05344 22.502C1.05344 23.3339 1.27514 24.1511 1.69617 24.8715C2.1172 25.5918 2.72277 26.19 3.45196 26.6057L32.7407 43.3175C33.468 43.7338 34.2931 43.9546 35.1337 43.9578H35.138Z" fill="#AA1070"/>
    <path d="M31.9241 39C33.0045 38.9983 34.0401 38.6132 34.8041 37.9292C35.5681 37.2451 35.9981 36.3178 36 35.3503V9.65144C36.0022 9.01042 35.8154 8.38023 35.4584 7.82462C35.1013 7.269 34.5868 6.80766 33.9667 6.48726C33.3466 6.16687 32.6431 5.99879 31.9272 6.00001C31.2113 6.00122 30.5084 6.1717 29.8897 6.4942L5.03538 19.3453C4.41659 19.6649 3.9027 20.1249 3.54541 20.6788C3.18813 21.2328 3 21.8612 3 22.5009C3 23.1406 3.18813 23.769 3.54541 24.3229C3.9027 24.8769 4.41659 25.3368 5.03538 25.6565L29.8897 38.5076C30.507 38.8278 31.2072 38.9975 31.9205 39H31.9241Z" fill="#CD3F97"/>
    <path d="M35.1381 2.09263C34.483 2.09471 33.84 2.26796 33.2745 2.59485L3.98575 19.2941C3.4176 19.6185 2.94587 20.085 2.61789 20.6467C2.28991 21.2083 2.11724 21.8453 2.11724 22.4937C2.11724 23.1421 2.28991 23.7792 2.61789 24.3408C2.94587 24.9024 3.4176 25.3689 3.98575 25.6933L33.2745 42.4009C33.8421 42.7287 34.4874 42.9023 35.1449 42.9041C35.8023 42.9059 36.4486 42.7358 37.018 42.4111C37.5875 42.0864 38.0599 41.6187 38.3873 41.0553C38.7147 40.492 38.8855 39.853 38.8823 39.2034V5.7924C38.8823 4.81115 38.4879 3.87011 37.7857 3.17627C37.0835 2.48243 36.1312 2.09263 35.1381 2.09263ZM35.1381 0C36.6922 0.00221423 38.1819 0.61318 39.2807 1.69899C40.3796 2.7848 40.9979 4.25683 41.0001 5.7924V39.2118C41.0055 40.2298 40.7385 41.2312 40.2261 42.1144C39.7137 42.9976 38.9742 43.7313 38.0824 44.2411C37.1906 44.751 36.1784 45.0189 35.1481 45.0176C34.1178 45.0164 33.1061 44.7461 32.2156 44.2341L2.92687 27.5265C2.0368 27.0183 1.29776 26.2877 0.78392 25.408C0.270084 24.5282 -0.000419617 23.5304 -0.000419617 22.5146C-0.000419617 21.4989 0.270084 20.501 0.78392 19.6213C1.29776 18.7416 2.0368 18.0109 2.92687 17.5028L32.2156 0.795186C33.1035 0.285719 34.1114 0.0158226 35.1381 0.0125425V0Z" fill="#F8EBFD"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5 7.99994C28.5 8.99994 26 10.759 24.3596 11.678C22 12.9999 19.1863 14.6925 17.5 14.5C15.2307 13.8706 19.4123 12.6275 21 11.5C22.9309 10.096 25.0863 8.69926 27.5 7.99995C29.5 6.49995 32.7522 5.75924 30.5 7.99994Z" fill="#CD3F97"/>
    </svg>
  );
}
