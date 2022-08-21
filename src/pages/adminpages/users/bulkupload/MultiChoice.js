import React from "react";
import Select from "react-select";
import { Button, Card, Col, Row } from "react-bootstrap";

const MultiChoice = ({
  headers,
  onChange,
  ours,
  theirs,
  onClear,
  onContinue,
  proceed,
}) => {
  if (!headers.length) return null;
  if (proceed) return null;
  const start = (
    <Col md="12" key="1">
      <Button onClick={onClear} size="sm" className="text-left" color="danger">
        Clear <i className="fa fa-times" />{" "}
      </Button>
      <p className="text-center text-primary text-uppercase font-weight-bold">
        please match the headers in your spreadsheet file with ours
      </p>
    </Col>
  );
  const lessData = (
    <Col md="12" key="2" className="my-1">
      <p className="text-center text-danger text-uppercase font-weight-bold">
        Some of the fields are missing though :)
      </p>
    </Col>
  );
  const end = (
    <Col md="12" key={headers.length + 4} className="text-right my-3">
      <Button onClick={onContinue} color="success">
        Continue <i className="fa fa-arrow-right" />
      </Button>
    </Col>
  );

  const render = [start];
  if (headers.length < ours.length) {
    render.push(lessData);
  }

  headers.forEach((value, index) => {
    render.push(
      <Col key={index + 3} md="4">
        <Card>
          <Card.Body>
            <Select
              className="basic-single  text-capitalize"
              classNamePrefix="select"
              defaultValue={ours[index]}
              isDisabled={true}
              isLoading={false}
              isClearable={true}
              // onChange={(e) => onChange(e, "ours")}
              value={ours[index]}
              isSearchable={true}
              name="ours"
              options={ours}
            />

            <p className="mb-0 mt-2 text-italics text-danger font-italic ">
              Choose what{" "}
              <strong className="text-dark text-capitalize">
                {ours[index] && ours[index].value}
              </strong>{" "}
              is to you
            </p>
            <Select
              className="basic-single my-1 text-capitalize"
              classNamePrefix="select"
              defaultValue={theirs[index]}
              isDisabled={false}
              isLoading={false}
              isClearable={true}
              onChange={(e) => onChange(e, ours[index])}
              // value={}
              isSearchable={true}
              name="theirs"
              options={headers}
            />
          </Card.Body>
        </Card>
      </Col>
    );
  });

  render.push(end);
  return <Row>{render}</Row>;
};

export default MultiChoice;
