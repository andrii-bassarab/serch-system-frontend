import React, { useContext } from "react";
import { AppContext } from "../../store/AppContext";
import { ResponseItem } from "../ResponseItem";

export const ResponseList: React.FC = () => {
  const { searchResponse } = useContext(AppContext);

  return (
    <section>
      {searchResponse.map((response, index) => (
        <ResponseItem item={response} key={index} />
      ))}
    </section>
  );
};
