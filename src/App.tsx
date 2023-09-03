import "./App.css";
import { ResponseList } from "./components/ResponseList";
import { SearchForm } from "./components/SearchForm";
import { Loader } from "./components/Loader";
import { useContext } from "react";
import { AppContext } from "./store/AppContext";

function App() {
  const { resultLoader, resultsError } = useContext(AppContext);

  return (
    <>
      <h1 className="title">Search system</h1>
      <SearchForm />
      {!resultLoader && !resultsError && <ResponseList />}
      {resultLoader && <Loader />}
      {!resultLoader && resultsError && <h4 className="error-fetch">Error: Failed to fetch</h4>}
    </>
  );
}

export default App;
