import React, { useState } from "react";

interface Props {
  maxChar: number;
  children: string;
}

const ExpendableText = ({ maxChar, children }: Props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <p>
        {showMore ? children : children.substring(1, maxChar) + "..."}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "More" : "Less"}
        </button>
      </p>
    </div>
  );
};

export default ExpendableText;
