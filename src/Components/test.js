import React from "react";
import "../Assets/styles.css";
import { Bar } from "react-chartjs-2";

const PageD = () => {
    return (
        <div style={{ marginLeft: "100px" }}>
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
