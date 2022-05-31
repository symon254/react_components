import React, { Fragment, useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";
import data from "../../Assets/Data/Data.json";
import { nanoid } from "nanoid";

const tableFill = {
    primary: "table-primary",
    secondary: "table-secondary",
    success: "table-success",
    danger: "table-danger",
    info: "table-info",
    warning: "table-warning",
    dark: "table-dark",
};
export const Table = ({
    className,
    table,
    tableType,
    tableHeading,
    tableH,
}) => {
    const TableHead = ({ item }) => {
        let classHead = [];

        const tableHead = [tableFill[tableH]];

        if (tableHeading === "coloured") {
            classHead.push(...tableHead);
        }

        classHead = classHead.join(" ");
        return (
            <td className={classHead} title={item}>
                {item}
            </td>
        );
    };

    const thData = ["name", "email", "date", "Actions"];

    const [list, setList] = useState(data);
    const [add, setAdd] = useState({
        name: "",
        email: "",
        date: "",
    });
    const [editFormData, setEditFormData] = useState({
        name: "",
        email: "",
        date: "",
    });

    const [editDataId, setEditDataId] = useState(null);

    const handleAddChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newData = { ...add };
        newData[fieldName] = fieldValue;

        setAdd(newData);
    };

    const handleEditChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newData = { ...editFormData };
        newData[fieldName] = fieldValue;

        setEditFormData(newData);
    };
    const handleEditSubmit = (e) => {
        e.preventDefault();

        const editedDataItem = {
            id: editDataId,
            name: editFormData.name,
            email: editFormData.email,
            date: editFormData.date,
        };

        const newDataItems = [...list];
        const index = list.findIndex((lists) => lists.id === editDataId);
        newDataItems[index] = editedDataItem;
        setList(newDataItems);
        setEditDataId(null);
    };
    const handleAddSubmit = (e) => {
        e.preventDefault();
        const newDataItem = {
            id: nanoid(),
            name: add.name,
            email: add.email,
            date: add.date,
        };

        const newDataItems = [...list, newDataItem];
        setList(newDataItems);
    };

    const handleEditClick = (e, lists) => {
        e.preventDefault();
        setEditDataId(lists.id);

        const formValues = {
            name: lists.name,
            email: lists.email,
            date: lists.date,
        };

        setEditFormData(formValues);
    };
    const handleCancelClick = () => {
        setEditDataId(null);
    };
    const handleDeleteClick = (listId) => {
        const newDataItems = [...list];
        const index = list.findIndex((lists) => lists.id === listId);

        newDataItems.splice(index, 1);
        setList(newDataItems);
    };

    let classes = [];

    const tableFilled = [tableFill[table]];

    if (tableType === "filled") {
        classes.push(...tableFilled);
    }

    classes = classes.join(" ");

    const ReadData = ({ lists, handleEditClick }) => {
        return (
            <>
                <tr>
                    <td>{lists.name} </td>
                    <td>{lists.email}</td>
                    <td>{lists.date} </td>
                    <td>
                        <button
                            type="button"
                            onClick={(e) => handleEditClick(e, lists)}
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#edit"
                        >
                            edit
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDeleteClick(lists.id)}
                        >
                            del
                        </button>
                    </td>
                </tr>
            </>
        );
    };

    return (
        <div>
            <form onSubmit={handleEditSubmit}>
                <Modal
                    title={"add"}
                    id="staticBackdrop"
                    content={
                        <form onSubmit={handleAddSubmit}>
                            <Input
                                type="text"
                                name="name"
                                required="required"
                                placeholder="enter name..."
                                onChange={handleAddChange}
                            />

                            <Input
                                type="email"
                                name="email"
                                required="required"
                                placeholder="enter email..."
                                onChange={handleAddChange}
                            />

                            <Input
                                type="date"
                                name="date"
                                placeholder="enter date..."
                                onChange={handleAddChange}
                            />

                            <button className="btn btn-primary" type="submit">
                                add
                            </button>
                        </form>
                    }
                />
                <Modal
                    title={"edit"}
                    id="edit"
                    content={
                        <form>
                            <Input
                                type="text"
                                name="name"
                                value={editFormData.name}
                                required="required"
                                placeholder="enter name..."
                                onChange={() => handleEditChange()}
                            />{" "}
                            <Input
                                type="email"
                                name="email"
                                value={editFormData.email}
                                required="required"
                                placeholder="enter email..."
                                onChange={handleEditChange}
                            />{" "}
                            <Input
                                type="text"
                                name="date"
                                value={editFormData.date}
                                placeholder="enter date..."
                                onChange={handleEditChange}
                            />
                            <button type="submit" className="btn btn-success">
                                save
                            </button>
                        </form>
                    }
                />
                <table className={` table ${classes} ${className}`}>
                    <thead>
                        <tr>
                            {thData.map((h) => {
                                return <TableHead key={h} item={h} />;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((lists, index) => (
                            <Fragment>
                                <ReadData
                                    lists={lists}
                                    key={index}
                                    handleEditClick={handleEditClick}
                                    handleDeleteClick={handleDeleteClick}
                                />
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>
            <h2>add to list</h2>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            >
                Add
            </button>
        </div>
    );
};
