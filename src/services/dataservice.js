import axios from "axios";
import React from "react";
import { getAllurl } from "./url";

export const dataService = {
  getJokes: async () => {
    try {
      const allJokes = await axios.get(getAllurl);
      return allJokes;
    } catch (error) {
      console.log("AN ERROR OCCURED HERE", error.message);
    }
  },
};

const SelectAllPTags = () => {
  React.useEffect(() => {
    // select all p tags in the page
  });
  return (
    <>
      <></>
    </>
  );
};
