import strings from "@/app/constants/strings";
import React from "react";

const Me = () => {
  return (
    <div>
      <h1>{strings.me.name}</h1>
      <h2>{strings.me.title}</h2>
      <p>{strings.me.description}</p>
    </div>
  );
};

export default Me;
