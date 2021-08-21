//helpline page ....

import React from "react";
import Help from "../styles/Help.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Card from "./Card";
import Aggrid from "../styles/Aggrid.css";
import Footer from "../layout/Footer";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const Helplines = () => {
  const rowStyle = {
    background: "transparent",
    color: "#192a56",
  };

  const onGridReady = (params) => {
    
    fetch("http://localhost:3000/api/HelplineSchema")
      .then((resp) => resp.json())
      .then((resp) => params.api.applyTransaction({ add: resp }));
  };

  const columns = [
    {
      headerName: "TITLE",
      field: "title",
    },
    {
      headerName: "DETAILS",
      field: "details",
    },
  ];

  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
    minWidth: 120,
    cellClass: "grid-cell-centered",

    rowStyle: { rowStyle },
  };

  return (
    <div>
      <Card />

      <section></section>
      <div className="about-para">
        <br />
        <h1 className="about-para__helpline" data-testid="helpline">
          Available Helplines 😊😊
        </h1>
        <br></br>

        <h5 data-testid="helpline__testcase" className="about-para__help">
          Bharat Sarkar has started a Kisan Call Center for the support of the
          farmers.
        </h5>
      </div>
      <br></br>
      <div
        className="ag-theme-alpine manage-table
         container table-responsive-sm "
      >
        <AgGridReact
          columnDefs={columns}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          pagination={true}
          paginationPageSize={10}
          paginationAutoPageSize={true}
          height="350px"
          rowStyle={rowStyle}
        />
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Helplines;
