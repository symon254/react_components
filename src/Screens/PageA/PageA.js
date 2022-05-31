import React from "react";

const PageA = () => {
    return (
        <div className="row" style={{ marginLeft: "100px" }}>
            <div className="col-md-6">
                <div className="card rounded-5 p-3 mb-2">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div className="icon">
                                <i className="bx bxl-mailchimp" />
                            </div>
                            <div className="ms-2 c-details">
                                <h6 className="mb-0">Mailchimp</h6>{" "}
                                <span>1 days ago</span>
                            </div>
                        </div>
                        <div className="badge">
                            <span>Design</span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="heading">
                            Senior Product
                            <br />
                            Designer-Singapore
                        </h3>
                        <div className="mt-5">
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow={50}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                            <div className="mt-3">
                                <span className="text1">
                                    32 Applied{" "}
                                    <span className="text2">
                                        of 50 capacity
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card rounded-5 p-3 mb-2">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div className="icon">
                                <i className="bx bxl-dribbble" />
                            </div>
                            <div className="ms-2 c-details">
                                <h6 className="mb-0">Dribbble</h6>{" "}
                                <span>4 days ago</span>
                            </div>
                        </div>
                        <div className="badge">
                            <span>Product</span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="heading">
                            Junior Product
                            <br />
                            Designer-Singapore
                        </h3>
                        <div className="mt-5">
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow={50}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                            <div className="mt-3">
                                <span className="text1">
                                    42 Applied{" "}
                                    <span className="text2">
                                        of 70 capacity
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageA;
