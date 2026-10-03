import React from "react";
import Brokerage from "./Brokerage.js";
import Hero from "./Hero.js";
import OpenAccount from "../OpenAccount.js";

function PricingPage() {
  return (
    <>
      <Hero />
      <OpenAccount />
      <Brokerage />
    </>
  );
}

export default PricingPage;
