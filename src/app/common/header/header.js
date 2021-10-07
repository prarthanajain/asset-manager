import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      header
      <Link to="/asset-tracking">Asset Tracking</Link>
    </div>
  );
}
