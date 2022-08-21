import React from "react";
import cellEditFactory from "react-bootstrap-table2-editor";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

function UploadTable({ proceed, setData, data, onClear, onSubmit }) {
  const columns = [
    {
      dataField: "surname",
      text: "Surname",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "otherNames",
      text: "Other Names",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "email",
      text: "email",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "password",
      text: "Password",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "bankName",
      text: "BankName",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "tellerNumber",
      text: "Teller",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "status",
      text: "Status",
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
      dataField: "gender",
      text: "Gender",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "icanCode",
      text: "ICAN Code",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "tshirtSize",
      text: "Shirt Size",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "memberStatus",
      text: "Member Status",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "amount",
      text: "Amount",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "confirmedPayment",
      text: "Confirmed",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "memberCategory",
      text: "Category",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "memberAcronym",
      text: "Acronym",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "nameOfSociety",
      text: "Society",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "role",
      text: "role",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
    {
      dataField: "venue",
      text: "venue",
      headerStyle: {
        backgroundColor: "#8592a3",
        width: "200px",
      },
    },
  ];

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
