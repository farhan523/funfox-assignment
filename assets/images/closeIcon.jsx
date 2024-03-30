import React from "react";

export default function CloseIcon({setIsModelOpen}) {
  return (
    <svg
      onClick={setIsModelOpen}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{cursor:"pointer"}}
    >
      <circle
        cx="24"
        cy="24"
        r="22.5"
        fill="#9B52C5"
        stroke="#F8EBFD"
        stroke-width="3"
      />
      <circle cx="24.0004" cy="24" r="20.3636" fill="#FD3737" />
      <path
        d="M14.1953 7.57916C17.7038 5.0985 20.3264 5.06952 21.1991 5.36511C14.0686 7.95319 13.1758 11.8201 12.6751 12.0675C10.8698 12.9593 9.80957 10.68 14.1953 7.57916Z"
        fill="white"
      />
      <ellipse
        cx="23.0468"
        cy="4.6018"
        rx="1"
        ry="0.5"
        transform="rotate(-6.00198 23.0468 4.6018)"
        fill="white"
      />
      <path
        d="M30.9021 16H31.0273C31.056 16.0112 31.0855 16.0203 31.1155 16.0273C31.5646 16.1047 31.8894 16.4169 31.9752 16.8621C32.0502 17.2557 31.9075 17.5733 31.6313 17.8499C29.6197 19.8632 27.6093 21.8764 25.6003 23.8897C25.5426 23.9394 25.4822 23.9861 25.4196 24.0295C25.482 24.0719 25.5418 24.1179 25.5988 24.1673C27.5874 26.1582 29.5753 28.1495 31.5626 30.1413C31.6215 30.2007 31.6824 30.2582 31.737 30.321C31.8446 30.4441 31.9217 30.5907 31.9621 30.7492C32.0025 30.9076 32.0049 31.0732 31.9693 31.2328C31.9337 31.3923 31.8609 31.5412 31.757 31.6674C31.6531 31.7936 31.5209 31.8935 31.3712 31.9591C31.3098 31.9859 31.246 32.0078 31.1837 32.0317H30.7146C30.415 31.9299 30.1988 31.716 29.984 31.4959C28.0357 29.5388 26.0853 27.5838 24.1327 25.631C24.0899 25.5881 24.0451 25.5472 23.9866 25.4892C23.9379 25.5482 23.8984 25.5983 23.8546 25.6422C21.8966 27.6044 19.939 29.5671 17.9819 31.53C17.7749 31.7375 17.565 31.9333 17.2815 32.0297H16.8124C16.6001 31.9537 16.3867 31.8685 16.2557 31.6766C16.1525 31.5251 16.0838 31.3493 16 31.1846V30.8398C16.0706 30.5261 16.2698 30.3001 16.4905 30.0795C18.4632 28.1094 20.4335 26.1372 22.4017 24.1629C22.459 24.1162 22.5201 24.0741 22.5843 24.0373C22.4908 23.9627 22.4382 23.9286 22.3934 23.8843C20.4272 21.9156 18.4609 19.947 16.4944 17.9785C16.2733 17.7579 16.075 17.5309 16 17.2192V16.8767C16.0838 16.5845 16.2197 16.3239 16.4934 16.1739C16.6395 16.094 16.8095 16.0565 16.9688 16H17.094C17.4744 16.0487 17.7374 16.2791 17.9965 16.5397C19.9517 18.5072 21.9102 20.4717 23.8721 22.4333C23.9121 22.4733 23.9535 22.5108 24.0309 22.5843C24.0629 22.5275 24.0999 22.4737 24.1415 22.4236C26.096 20.4632 28.0505 18.5028 30.0049 16.5421C30.2592 16.2796 30.5217 16.0458 30.9021 16Z"
        fill="white"
      />
    </svg>
  );
}
