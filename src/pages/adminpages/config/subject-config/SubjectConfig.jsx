import React from "react";
import { LargeButton } from "../../../../components/buttons/buttons";
import { Div } from "../configStyles";

function SubjectConfig({ handleSwitch, configs }) {
  console.log("subject_config", configs.subjects);
  const subject = configs.subjects;

  const [subjectDetails, setSubjectDetails] = React.useState();

  React.useEffect(() => {
    setSubjectDetails(subject);
  }, [subject]);

  let classList;

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
              onClick={(e) => handleSwitch(e)}
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
                classList = [];
                detail?.subject_classes?.forEach((clas) => {
                  return classList.push(
                    `${clas?.level}  ${clas?.number + clas?.denomination}`
                  );
                });
                return (
                  <tr key={i}>
                    <td>{detail.abbreviation}</td>
                    <td>{detail.name}</td>
                    <td>{classList.join(" , ")}</td>
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
