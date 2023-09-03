import React from "react";
import { FormattedResult } from "../../types/SearchResponce";
import "./ResponseItem.scss";
import { getHostName } from "../../utils/getHostName";

interface IProps {
  item: FormattedResult;
}

export const ResponseItem: React.FC<IProps> = ({ item }) => {
  const { title, summary, image, link } = item;

  return (
    <div className="responseItem">
      <a target="_blank" href={link} className="responseItem__headerLabel">
        <div className="responseItem__header">
          <img src={image} alt="icon" className="responseItem__image" />
          <div className="responseItem__domainLabel">
            <span className="responseItem__domain">{getHostName(link)}</span>
            <cite className="responseItem__link">{link}</cite>
          </div>
        </div>
        <h2 className="responseItem__title">{title}</h2>
      </a>
      <p className="responseItem__summary">{summary}</p>
    </div>
  );
};
