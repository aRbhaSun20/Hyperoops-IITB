import * as React from "react";
import NavbarAfter from "../../Components/Navbar/NavbarAfter";
import LeftBar from "./LeftBar";
import PassengerDetails from "./PassengerDetails";
import PharmacyDetails from "./PharmacyDetails";

export default function AuthorityDashboard() {
  return (
    <React.Fragment>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
        <LeftBar />
        <div
          style={{
            backgroundColor: "#F4F4FC",
            display: "grid",
            width: "100%",
            height: "100vh",
            gridTemplateRows: "10vh auto",
          }}
        >
          <NavbarAfter />
          <PassengerDetails />
          <br />
          <PharmacyDetails />
        </div>
      </div>
    </React.Fragment>
  );
}
