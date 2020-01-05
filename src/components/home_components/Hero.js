import React from "react";
import { HomeHero } from "./HeroComponentStyles";

export default function Hero({ bg, children }) {
  return <HomeHero bg={bg}>{children}</HomeHero>;
}
