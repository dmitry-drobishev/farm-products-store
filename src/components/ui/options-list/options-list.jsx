import React from "react";
import { Ul, Li } from "/src/components/styled";

export default function OptionsList({ list = [] }) {
  return (
    <Ul>
      {list.map((option, index) => (
        <Li key={`tab${index * 10}`}>
          <span>{option.property}</span> : <span>{option.value}</span>
        </Li>
      ))}
    </Ul>
  );
}
