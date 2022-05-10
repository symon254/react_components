import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import Card from "../Components/Card/Card";
import { Button } from "../Components/Button/Button";

const getData = () => {
  const data = [
    <>
      <div className="row align-items-start mt-4">
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

const layout = () => {
  const dataItem = getData();

  return (
    <>
      <Navbar />
      <div className="content-wrapper  ">
        <div className="container">
          <Card
            header={"Buttons"}
            // title={"Outline"}
            description={
              <div className="container-sm">
                {/* <div className="row align-items-start">
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
                </div> */}

                <>{dataItem.map((item) => item)}</>
              </div>
            }
          />

          {/* <Card
            header={"Buttons"}
            title={"Filled"}
            description={
              <div className="container-sm">
                <div className="row align-items-start">
                  <Button
                    type="button"
                    children={"Button"}
                    buttonType="filled"
                    button="primary"
                  />
                  <Button
                    type="button"
                    children={"Button filled"}
                    buttonType="filled"
                    button="success"
                  />
                  <Button
                    type="button"
                    children={"Button filled"}
                    buttonType="filled"
                    button="warning"
                  />

                  <Button
                    type="button"
                    children={"Button filled"}
                    buttonType="filled"
                    button="danger"
                  />
                </div>
              </div>
            }
          /> */}
        </div>
      </div>
    </>
  );
};

export default layout;
