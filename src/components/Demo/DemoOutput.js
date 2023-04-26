import React from "react";

import Myparagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return (
    <Myparagraph>{props.show ? 'This is new!' : ''}</Myparagraph>
  );
};

export default React.memo(DemoOutput);