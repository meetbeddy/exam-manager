import React from "react";
import cellEditFactory from "react-bootstrap-table2-editor";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

const teacher = [
  {
    dataField: "last_name",
    text: "Last Name",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "first_name",
    text: "First Name",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "email",
    text: "Email",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "nationality",
    text: "nationality",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "gender",
    text: "Gender",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "address",
    text: "Address",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "language",
    text: "Teacher Language",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "phone",
    text: "Phone",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "classroom",
    text: "Teacher Language",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "subjects",
    text: "Subjects",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "state",
    text: "State",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "state_of_origin",
    text: "State Of Origin",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "country",
    text: "Country",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
];
const student = [
  {
    dataField: "last_name",
    text: "Last Name",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "middle_name",
    text: "Middle Name",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "first_name",
    text: "First Name",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "email",
    text: "Email",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "nationality",
    text: "nationality",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "state_of_origin",
    text: "State Of Origin",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "state",
    text: "State",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "country",
    text: "Country",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "lga",
    text: "LGA",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "address",
    text: "Address",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "gender",
    text: "Gender",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "religion",
    text: "Religion",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "student_class",
    text: "Student Class",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "enrollment_number",
    text: "Enrollment Number",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "subjects_offered",
    text: "Subjects Offered",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "parent_first_name",
    text: "Parents First Name",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "parent_last_name",
    text: "Parent Last Name",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "parent_gender",
    text: "Parent's Gender",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "parent_phone",
    text: "Parent's Phone",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "parent_email",
    text: "Parent's Email",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
  {
    dataField: "phone",
    text: "Phone",
    headerStyle: {
      backgroundColor: "#8592a3",
      width: "200px",
    },
  },
];

function UploadTable({ proceed, data, onClear, onSubmit, userType }) {
  const columns = userType === "student" ? student : teacher;

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: data.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  if (!proceed) return null;
  return (
    <div className="table-responsive text-wrap col-lg-12">
      <div>
        <button className="btn btn-primary my-4" onClick={onSubmit}>
          {" "}
          submit
        </button>
        <button className="btn btn-danger my-4 ms-4" onClick={onClear}>
          {" "}
          cancel
        </button>

        <p className="text-primary "> double click on col to edit then enter</p>
      </div>
      <BootstrapTable
        keyField="email"
        data={data}
        columns={columns}
        cellEdit={cellEditFactory({ mode: "click" })}
        pagination={paginationFactory(options)}
      />
    </div>
  );
}

export default UploadTable;
