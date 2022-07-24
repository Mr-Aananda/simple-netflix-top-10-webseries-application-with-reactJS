import React from "react";
import ReactDOM from "react-dom";
import Card from "./Components/Cards";
import sdata from "./Components/Sdata";
import "./index.css";


ReactDOM.render(
  <>
    <h1 className="heading_style">List Of Top 10 Netflix Seires in Alltime</h1>

    {sdata.map((val) => {

      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />

      );
    })}

  </>,
  document.getElementById("root")
);