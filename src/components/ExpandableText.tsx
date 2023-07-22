import { useState } from "react";
import Button from "./Button";

interface ExpandableTextProps {
  children: string;
  maxLength?: number;
}

const ExpandableText = ({ children, maxLength = 10 }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length < maxLength) {
    return <>{children}</>;
  }

  const text = isExpanded ? children : `${children.slice(0, maxLength)}...`;

  return (
    <>
      {text}
      <Button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </Button>
    </>
  );
};

export default ExpandableText;
