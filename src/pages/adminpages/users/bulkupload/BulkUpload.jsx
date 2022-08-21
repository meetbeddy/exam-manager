import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import readXlsxFile from "read-excel-file";
import readCSVFile from "papaparse";
import styled from "styled-components";
import MultiChoice from "./MultiChoice";
import UploadTable from "./UploadTable";

const DropZone = styled.div`
  text-align: center;
  padding: 20px;
  border: 3px #2f80ed dashed;
  width: 60%;
  margin: auto;
  cursor: pointer;
`;
const initialUser = {
  headers: [],
  body: [],
};

function BulkUpload() {
  const initialMatch = {
    ours: [
      { value: "surname", label: "Surname" },
      { value: "otherNames", label: "Other Names" },
      { value: "email", label: "email" },
      { value: "password", label: "Password" },
      { value: "bankName", label: "BankName" },
      { value: "tellerNumber", label: "Teller" },
      { value: "tellerDate", label: "Date" },
      { value: "status", label: "Status" },
      { value: "phone", label: "Phone" },
      { value: "gender", label: "Gender" },
      { value: "icanCode", label: "ICAN Code" },
      { value: "tshirtSize", label: "Shirt Size" },
      { value: "memberStatus", label: "Member Status" },
      { value: "amount", label: "Amount" },
      { value: "confirmedPayment", label: "Confirmed" },
      { value: "memberCategory", label: "Category" },
      { value: "memberAcronym", label: "Acronym" },
      { value: "nameOfSociety", label: "Society" },
      { value: "role", label: "role" },
      { value: "venue", label: "venue" },
    ],
    theirs: [],
  };

  const [user, setUser] = React.useState(initialUser);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "text/csv": [
        ".csv",
        "application/x-iwork-keynote-sffnumbers",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ],
    },
  });
  const [match, setMatch] = useState(initialMatch);
  const [proceed, setProceed] = useState(false);
  const [processedUser, setProcessedUser] = useState([]);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const getExtextion = (name) => {
    return name.split(".")[name.split(".").length - 1];
  };

  const getHeadersXcell = (file) => {
    readXlsxFile(file)
      .then((row) => {
        const headers = row[0].map((value) => ({ value, label: value }));
        setUser({ ...user, headers, body: row.splice(1, row.length) });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getHeadersCSV = (file) => {
    readCSVFile.parse(file, {
      complete: function ({ data, errors }) {
        if (errors.length) return;
        const headers = data[0].map((value) => ({ value, label: value }));
        setUser({ ...user, headers, body: data.splice(1, data.length) });
      },
    });
  };

  const next = (e) => {
    if (acceptedFiles.length > 1) return;
    const extension = getExtextion(acceptedFiles[0].name);
    switch (extension) {
      case "csv":
        getHeadersCSV(acceptedFiles[0]);
        break;
      case "xls":
      case "xlsx":
        getHeadersXcell(acceptedFiles[0]);
        break;
      default:
        break;
    }
  };

  const onChangeMatch = (value, key) => {
    if (!value) return;
    const indexArray = user.headers.map((idx) => idx.value);
    const index = indexArray.indexOf(value.value);
    let changeAt = match.theirs;
    if (changeAt.length) {
      changeAt = changeAt.filter((idx) => idx.key !== key.value);
    }
    changeAt.push({ ...value, indx: index, key: key.value });
    setMatch({ ...match, theirs: [...changeAt] });
  };

  const onContinue = () => {
    let data = [];
    user.body.forEach((value, index) => {
      let sabi = {};
      match.theirs.forEach((theirs) => {
        sabi[theirs.key] = value[theirs.indx];
      });
      data.push(sabi);
      sabi = {};
    });
    setProceed(true);
    setProcessedUser(data.filter((dat) => dat.email));
  };

  const onClear = () => {
    setUser({ ...initialUser });
    setMatch({ ...match, theirs: [] });
    setProceed(false);
    setProcessedUser([]);
  };

  const onSubmit = () => {
    console.log(processedUser);
  };

  return (
    <Container fluid>
      {user.body.length || proceed ? null : (
        <>
          <DropZone {...getRootProps({ className: "dropzone" })}>
            <h1>
              <i className="bx bx-cloud-upload fs-1"></i>
            </h1>
            <input className="input-zone" {...getInputProps()} />
            <div className="text-center">
              <p className="dropzone-content">
                Drag’n’drop the file then click upload
              </p>
              <p>
                {" "}
                <em>(Only *.csv, *.xls and *.xlsx files will be accepted)</em>
              </p>

              <button type="button" className="btn btn-outline-primary m-3">
                Click to select file
              </button>
            </div>
            <aside>
              <ul>{files}</ul>
            </aside>
          </DropZone>

          {acceptedFiles.length && (
            <div className="text-center m-4">
              <button
                type="button"
                className="btn btn-primary m-auto"
                onClick={next}
              >
                next
              </button>
            </div>
          )}
        </>
      )}

      <MultiChoice
        proceed={proceed}
        headers={user.headers}
        ours={match.ours}
        theirs={match.theirs}
        onChange={onChangeMatch}
        onContinue={onContinue}
        onClear={onClear}
      />

      <UploadTable
        onSubmit={onSubmit}
        proceed={proceed}
        setData={setProceed}
        data={processedUser}
      />
    </Container>
  );
}

export default BulkUpload;
