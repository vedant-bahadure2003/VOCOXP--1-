const UsedVocoxpSketchArrow = () => {
  return (
    <svg
      viewBox="0 0 900 220"
      className="w-full h-[180px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* LEFT HAND-DRAWN ARROW */}
      <path
        d="M60 110 L220 110"
        stroke="#1e293b"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M205 95 L220 110 L205 125"
        stroke="#1e293b"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* HAND-DRAWN BOX */}
      <path
        d="M240 60 
           L520 58 
           L530 70 
           L528 150 
           L250 148 
           L238 135 Z"
        fill="none"
        stroke="#1e293b"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* TEXT INSIDE BOX */}
      <text
        x="300"
        y="95"
        fontSize="20"
        fill="#1e293b"
        fontWeight="600"
      >
        Used
      </text>
      <text
        x="300"
        y="125"
        fontSize="26"
        fill="#1e293b"
        fontWeight="700"
      >
        VOCOXP
      </text>

      {/* VERTICAL DIVIDER INSIDE BOX */}
      <path
        d="M390 60 L392 150"
        stroke="#1e293b"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* RIGHT ARROW WITH DOWN TURN */}
      <path
        d="M530 110 L700 110 L700 150"
        stroke="#1e293b"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M685 135 L700 150 L715 135"
        stroke="#1e293b"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default UsedVocoxpSketchArrow;
