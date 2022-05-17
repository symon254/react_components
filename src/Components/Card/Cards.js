import React from "react";

const Cards = ({ header, description }) => {
    return (
        <>
            <>
                <div className="card rounded-5 p-3 mb-2">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div className="icon">
                                <i className="bx bxl-dribbble" />
                            </div>
                            <div className="ms-2 c-details">
                                <h4 className="mb-0">{header}</h4>
                            </div>
                        </div>
                        <div className="badge">
                            <span className="px-1">Components</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="heading">{description}</h3>
                    </div>
                </div>
            </>
        </>
    );
};

export default Cards;
