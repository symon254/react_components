import React from "react";

const Cards = ({ header, description, icon }) => {
    return (
        <>
            <>
                <div className="card">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div className="icon">{icon}</div>
                            <div className="header">{header}</div>
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
