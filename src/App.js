import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBTN from "./components/layout/AddBTN";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="App">
      <Provider store={store}>
        <Fragment>
          <SearchBar />
          <div className="container">
            <Logs />
            <AddBTN />
            <AddLogModal />
            <EditLogModal />
            <AddTechModal />

            <TechListModal />
          </div>
        </Fragment>
      </Provider>
    </div>
  );
};

export default App;
