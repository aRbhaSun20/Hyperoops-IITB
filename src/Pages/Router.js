import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthorityChat from "./AuthorityChat/AuthorityChat";
import AuthorityDashboard from "./AuthorityDashboard/AuthorityDashboard";
import AuthorityHistory from "./AuthorityHistory/AuthorityHistory";
import AuthorityRequest from "./AuthorityRequest/AuthorityRequest";
import Home from "./Home";
import PharmacyMap from "./PharmacyMaps/PharmacyMap";

export default function Router() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="authoritydashboard" element={<AuthorityDashboard />} />
          <Route path="authorityhistory" element={<AuthorityHistory />} />
          <Route path="authorityrequest" element={<AuthorityRequest />} />
          <Route path="authoritychat" element={<AuthorityChat />} />
          <Route path="passengerdashboard" element={<AuthorityDashboard />} />
          <Route path="passengerhistory" element={<AuthorityHistory />} />
          <Route path="passengerrequest" element={<AuthorityRequest />} />
          <Route path="passengerchat" element={<AuthorityChat />} />
          <Route path="pharmacyMap" element={<PharmacyMap />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
