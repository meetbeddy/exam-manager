import React from "react";
import { LargeButton } from "../../../../components/buttons/buttons";
import { Div } from "../configStyles";
import { useSelector } from "react-redux";

function SubjectConfig({ handleSwitch }) {
  const { configs } = useSelector((state) => state.config);

  const subjectDetails = configs.subjects;

  return (
    <Div className="mt-4">
      <div className="card-header">
        <div className="row ">
          <div className="col-lg-6">
            <h4 className="mt-4">Subjects</h4>
          </div>
          <div className="col-lg-6 ">
            <LargeButton
              className="btn btn-primary float-end"
              name="subjects"
              onClick={(e) => handleSwitch("subjects")}
            >
              Edit Subject
            </LargeButton>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive text-nowrap col-lg-12">
          <table className="table">
            <thead className="table-light-gray">
              <tr>
                <th>Abbreviation</th>
                <th>Subject Name</th>
                <th>Subject Classes</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {subjectDetails?.map((detail, i) => {
                let class_list = [];
                detail?.subject_classes?.map((clas) => {
                  return class_list.push(
                    `${clas?.level}  ${clas?.number}  ${clas?.denomination}`
                  );
                });

                return (
                  <tr key={i}>
                    <td>{detail?.abbreviation}</td>
                    <td>{detail?.name}</td>
                    <td>{class_list?.join(" , ")}</td>
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

export default SubjectConfig;
