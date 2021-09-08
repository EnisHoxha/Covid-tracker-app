import React from "react";
import CountUp from "react-countup";
import "./style.scss";

export default function Card({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  if (!confirmed) {
    return null;
  }
  return (
    <>
      <div className="row  w-100 d-flex justify-content-center mx-auto my-auto pt-5 pb-3">
        <div className="col-md-3 col-lg-3  p-3 m-3 text-center karta">
          <h1>Infected </h1>
          <p className="warning">
            <CountUp start={0} end={confirmed.value} duration={2} />
          </p>
          <small>Updated {new Date(lastUpdate).toDateString()}</small>
        </div>

        <div className=" col-md-3 col-lg-3 p-3 m-3 text-center karta">
          <h1>Recovered </h1>
          <p className="success">
            <CountUp start={0} end={recovered.value} duration={2} />
          </p>
          <small>Updated {new Date(lastUpdate).toDateString()}</small>
        </div>

        <div className="col-md-3 col-lg-3 p-3 m-3 text-center karta">
          <h1>Deaths</h1>
          <p className="error">
            {" "}
            <CountUp start={0} end={deaths.value} duration={2} />
          </p>
          <small>Updated {new Date(lastUpdate).toDateString()}</small>
        </div>
      </div>
    </>
  );
}
