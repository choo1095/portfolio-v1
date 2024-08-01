import strings from "@/constants/strings";
import React from "react";

const Me = () => {
  return (
    <div>
      <h1>{strings.me.name}</h1>
      <h2 className="mt-1">{strings.me.title}</h2>
      <p className="text-md mt-3 leading-normal text-stone-600">
        {strings.me.description}
      </p>
    </div>
  );
};

export default Me;
