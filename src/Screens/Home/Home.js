import React from "react";
import Card from "../../Components/Card/Card";
import { Button } from "../../Components/Button/Button";

const getData = () => {
  const data = [
    <>
      <div className="row align-items-start">
        <h5 className="title">Outline</h5>
        <Button
          type="button"
          children={"Button"}
          buttonType="outline"
          button="primary"
        />
        <Button
          type="button"
          children={"Button"}
          buttonType="outline"
          button="success"
        />
        <Button
          type="button"
          children={"Button"}
          buttonType="outline"
          button="warning"
        />

        <Button
          type="button"
          children={"Button"}
          buttonType="outline"
          button="danger"
        />
      </div>

      <div className="row align-items-start mt-4">
        <h5 className="title">Filled</h5>
        <Button
          type="button"
          children={"Button"}
          buttonType="filled"
          button="primary"
        />
        <Button
          type="button"
          children={"Button"}
          buttonType="filled"
          button="success"
        />
        <Button
          type="button"
          children={"Button"}
          buttonType="filled"
          button="warning"
        />
        <Button
          type="button"
          children={"Button"}
          buttonType="filled"
          button="danger"
        />
      </div>
    </>,
  ];
  return [...data];
};

const Home = () => {
  const dataItem = getData();

  return (
    <>
      <Card
        header={"Buttons"}
        description={
          <div className="container-sm">
            {dataItem.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        }
      />
    </>
  );
};

export default Home;
