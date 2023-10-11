import React from "react";
import {Link} from "react-router-dom";
//style
import "./breadCrumb.scss";
// Types
type Props = {
  courseTitle: string;
};

const BreadCrumb: React.FC<Props> = ({courseTitle}) => (
  <div className="bread-crumb_wrapper">
    <div className="bread-crumb_content">
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{courseTitle}</span>
    </div>
  </div>
);

export default BreadCrumb;
