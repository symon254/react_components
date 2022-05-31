import React from "react";
import "../../Assets/styles.css";
import { Bar } from "react-chartjs-2";
import { HiUserGroup } from "react-icons/hi";
import { BsArrowUp } from "react-icons/bs";
import { GiWhiteBook } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";
import { FaMoneyBillWave } from "react-icons/fa";

const PageD = () => {
    return (
        <div style={{ marginLeft: "100px" }}>
            <div className="row">
                <div className="col-md-4  ">
                    <div className=" styled-card ">
                        <div className="card-style">
                            <div className="icons">
                                <HiUserGroup />
                            </div>
                            <div className="content">
                                <h3> Students</h3>
                                <h1>1.4K</h1>
                                <br />
                                <label className="card-style labels">
                                    <BsArrowUp className="label-icon" />
                                    <span style={{ marginLeft: "-1px" }}>
                                        90%{" "}
                                        <span
                                            style={{
                                                color: "grey",
                                            }}
                                        >
                                            Attended{" "}
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="styled-card2 ">
                        <div className="card-style">
                            <div className="content2">
                                <h3> Subjects</h3>
                                <h1>15</h1>
                                <br />
                                <label className="card-style labels">
                                    <GiWhiteBook className="label-icon" />
                                    <span
                                        style={{
                                            color: "grey",
                                        }}
                                    >
                                        Offered
                                    </span>
                                </label>
                            </div>
                            <div className="icons">
                                <SiBookstack />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="styled-card3 ">
                        <div className="card-style">
                            <div className="content3">
                                <h3> Fees</h3>
                                <label
                                    style={{
                                        fontSize: "20px",
                                        marginLeft: "-14px",
                                    }}
                                >
                                    <span>
                                        Total
                                        <span
                                            style={{
                                                color: "grey",
                                            }}
                                        >
                                            1.6M
                                        </span>
                                    </span>
                                </label>
                                <label
                                    style={{
                                        fontSize: "20px",
                                        marginLeft: "-14px",
                                    }}
                                >
                                    <span>
                                        Arrears
                                        <span
                                            style={{
                                                color: "grey",
                                            }}
                                        >
                                            505K
                                        </span>
                                    </span>
                                </label>
                                <br />
                            </div>
                            <div className="content4">
                                <FaMoneyBillWave style={{ fontSize: "90px" }} />
                            </div>
                        </div>
                        <div
                            style={{
                                marginLeft: "30px",
                                padding: "10px",
                            }}
                        >
                            <div
                                className="progress"
                                style={{
                                    width: "300px",
                                }}
                            >
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "90%" }}
                                    aria-valuenow={90}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Bar
                        data={{
                            labels: ["Term1", "Term2", "Term3"],
                            datasets: [
                                {
                                    label: "# fee payed",
                                    data: [1500, 2300, 4300],
                                },
                            ],
                            backgroundColor: ["red", "blu", "green"],
                        }}
                        height={100}
                        width={200}
                        options={{
                            maintainAspectRatio: false,
                        }}
                    />
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    );
};

export default PageD;
