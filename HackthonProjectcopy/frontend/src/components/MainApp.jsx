import React from "react";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import TabletReminder from "./Medication";

function MainApp() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "10px" }}>
        {/* Add margin so content isn’t hidden behind fixed navbar */}
        <MainPage />
        <TabletReminder />
      </div>
    </>
  );
}

export default MainApp;
