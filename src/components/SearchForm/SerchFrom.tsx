import React, { FormEvent, useContext, useState } from "react";
import "./SearchFrom.scss";
import SearchIcon from "../../assets/icon-search.svg";
import { searchRequest } from "../../api/searchRequest";
import { AppContext } from "../../store/AppContext";

export const SearchForm: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setSearchResponse, setResultLoader, resultLoader, setResultsError } = useContext(AppContext);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setResultLoader(true);
      setResultsError(false);
      const responseFromServer = await searchRequest(searchValue);
      setSearchResponse(responseFromServer);
    } catch (e) {
      setResultsError(true);
    } finally {
      setResultLoader(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="searchForm">
      <label className="searchForm__label">
        <img src={SearchIcon} alt="Search icon" className="searchForm__icon" />
        <input
          type="text"
          className="searchForm__input"
          placeholder="Search"
          value={searchValue}
          required
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>
      <button type="submit" disabled={resultLoader}>Search</button>
    </form>
  );
};
