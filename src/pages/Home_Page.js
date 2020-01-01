import React, { useContext } from "react";
import { DataContext } from "../context/context";

export default function Home_Page() {
  const [list, , menuToggles] = useContext(DataContext);

  return <div>Home Page</div>;
}
