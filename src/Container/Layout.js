import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import Card from "../Components/Card/Card";
import { Button } from "../Components/Button/Button";
import {
    Checkbox,
    RadioButton,
    Toggle,
    Select,
} from "../Components/Input/Input";
import { Table } from "../Components/Table/Table";
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
                        description={
                            <div className="container-sm">
                                <>{dataItem.map((item) => item)}</>
                            </div>
                        }
                    />
                    <Card
                        header={"Inputs"}
                        description={
                            <div className="container-sm mt-4">
                                <>
                                    <Checkbox />
                                    <RadioButton />
                                    <Toggle />
                                    <Select />
                                </>
                            </div>
                        }
                    />
                    <Card
                        header={"Inputs"}
                        description={
                            <div className="container-sm mt-4">
                                <>
                                    <Table
                                        tableType={"filled"}
                                        table={"primary"}
                                        tableHeading={"coloured"}
                                        tableH="dark"
                                    />
                                    <Table
                                        tableType={"filled"}
                                        table={"danger"}
                                        tableHeading={"coloured"}
                                        tableH="dark"
                                    />
                                </>
                            </div>
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default layout;
