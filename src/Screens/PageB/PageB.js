import React from "react";
import Card from "../../Components/Card/Card";
import { Button } from "../../Components/Button/Button";
import {
    Checkbox,
    RadioButton,
    Toggle,
    Select,
    Input,
} from "../../Components/Input/Input";
import { Table } from "../../Components/Table/Table";
import { Alert } from "../../Components/Alert/Alert";

import { BsInfoCircleFill, BsExclamationTriangleFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdDangerous } from "react-icons/md";

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

const PageB = () => {
    const dataItem = getData();

    return (
        <>
            <div className="content-wrapper  ">
                <div className="container"></div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Card
                                header={"Buttons"}
                                description={
                                    <div className="container-sm">
                                        <>{dataItem.map((item) => item)}</>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {" "}
                            <Card
                                header={"Inputs"}
                                description={
                                    <div className="container-sm mt-4">
                                        <>
                                            <Input />
                                            <Checkbox />
                                            <RadioButton />
                                            <Toggle />
                                            <Select />
                                        </>
                                    </div>
                                }
                            />
                            <div className="row">
                                <div className="col">
                                    <Card
                                        header={"alert with Icons"}
                                        description={
                                            <div className="container-sm mt-4">
                                                <>
                                                    <Alert
                                                        icons={
                                                            <AiFillCheckCircle />
                                                        }
                                                        alertType={"plain"}
                                                        alert={"success"}
                                                        label=" A simple success alert—check it out!"
                                                    />{" "}
                                                    <Alert
                                                        icons={<MdDangerous />}
                                                        alertType={"plain"}
                                                        alert={"danger"}
                                                        label=" A simple danger alert—check it out!"
                                                    />{" "}
                                                    <Alert
                                                        icons={
                                                            <BsInfoCircleFill />
                                                        }
                                                        alertType={"plain"}
                                                        alert={"info"}
                                                        label=" A simple info alert—check it out!"
                                                    />{" "}
                                                    <Alert
                                                        icons={
                                                            <BsExclamationTriangleFill />
                                                        }
                                                        alertType={"plain"}
                                                        alert={"warning"}
                                                        label=" A simple warning alert—check it out!"
                                                    />
                                                </>
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <Card
                                header={"alert"}
                                description={
                                    <div className="container-sm mt-4">
                                        <>
                                            <Alert
                                                alertType={"plain"}
                                                alert={"primary"}
                                                label=" A simple primary alert—check it out!"
                                            />
                                            <Alert
                                                alertType={"plain"}
                                                alert={"secondary"}
                                                label=" A simple secondary alert—check it out!"
                                            />
                                            <Alert
                                                alertType={"plain"}
                                                alert={"success"}
                                                label=" A simple success alert—check it out!"
                                            />{" "}
                                            <Alert
                                                alertType={"plain"}
                                                alert={"danger"}
                                                label=" A simple danger alert—check it out!"
                                            />{" "}
                                            <Alert
                                                alertType={"plain"}
                                                alert={"info"}
                                                label=" A simple info alert—check it out!"
                                            />{" "}
                                            <Alert
                                                alertType={"plain"}
                                                alert={"warning"}
                                                label=" A simple warning alert—check it out!"
                                            />{" "}
                                            <Alert
                                                alertType={"plain"}
                                                alert={"light"}
                                                label=" A simple light alert—check it out!"
                                            />{" "}
                                            <Alert
                                                alertType={"plain"}
                                                alert={"dark"}
                                                label=" A simple dark alert—check it out!"
                                            />
                                        </>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {" "}
                            <Card
                                header={"Tables"}
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
                </div>
            </div>
        </>
    );
};

export default PageB;
