import React from "react";
import { LargeButton } from "../../../../components/buttons/buttons";
import { Div } from "../configStyles";

function PromotionConfig({ handleSwitch }) {
  const gradingDetails = [
    {
      lowerPercent: 0,
      upperPercent: 40,
      condition: "repeat class",
    },
    {
      lowerPercent: 41,
      upperPercent: 60,
      condition: "promoted",
    },
  ];
  return (
    <Div className="mt-4">
      <div className="card-header">
        <div className="row ">
          <div className="col-lg-6">
            <h4 className="mt-4">Promotion Condition</h4>
          </div>
          <div className="col-lg-6 ">
            <LargeButton
              className="btn btn-primary float-end"
              name="promotion"
              onClick={(e) => handleSwitch("promotion")}
            >
              Edit Instruction
            </LargeButton>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive text-nowrap col-lg-12">
          <table className="table">
            <thead className="table-light-gray">
              <tr>
                <th>Percentage {">"}=</th>
                <th>Percentage {"<"}=</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {gradingDetails.map((detail, i) => {
                return (
                  <tr key={i}>
                    <td>{detail.lowerPercent}%</td>
                    <td>{detail.upperPercent}%</td>
                    <td>{detail.condition}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Div>
  );
}

export default PromotionConfig;
