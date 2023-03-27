import React from "react";

const Circle = (props) => {
  return (
    <>
      <div
        class="circle"
        style={{
          height: props.height,
          width: props.width,
          top: props.top,
          left: props.left,
        }}
      >
        <p style={{ backgroundColor: props.backgroundColor }} class="text"></p>
      </div>
    </>
  );
};

export default Circle;
