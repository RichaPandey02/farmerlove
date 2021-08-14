import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Aggrid from "../styles/Aggrid.css";
import schemee from "../styles/schemee.css";
import Footer from "../layout/Footer";
import Card from "./Card";

const Schemes = () => {
  const rowStyle = {
    background: "transparent",
    color: "#192a56",
  };
  const cellStyle = { textAlign: "center" };

  let gridApi;
  const onGridReady = (params) => {
    fetch("http://localhost:3000/api/schemeSchema")
      .then((resp) => resp.json())
      .then((resp) => params.api.applyTransaction({ add: resp }));

    gridApi = params.api;
  };
  const columns = [
    {
      headerName: "TITLE",
      field: "title",
      editable: true,
      className: "ag-header-cell-label",
    },
    {
      headerName: "STATE",
      field: "State",
    },

    {
      headerName: "WEBSITE",
      field: "Website",
    },
    {
      headerName: "DESCRIPTION",
      field: "Description",
    },
    {
      headerName: "ACTION",

      cellRendererFramework: (params) => (
        <div>
          <button
            onClick={() => cellDeleteing(params)}
            className="delete-Schemes"
          >
            Delete
          </button>
        </div>
      ),
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
  };

  let id;
  const UpadateFunction = (resp) => {
    console.log(resp);
    id = resp.data._id;
    alert("Do you want to update tour data?🙄🙄");
  };

  const cellEditing = (resp) => {
    id = resp.data._id;

    axios.put(`http://localhost:3000/api/scheme/${id}`, resp.data);
    console.log(resp);
    alert("your data has been updated 🙂☺ ");
  };
  const cellDeleteing = (resp) => {
    id = resp.data._id;
    resp.api.applyTransaction({
      remove: [resp.node.data],
    });
    axios.delete(`http://localhost:3000/api/scheme/${id}`, resp.data);
  };

  const onExportClick = () => {
    gridApi.exportDataAsCsv();
  };

  return (
    <div>
      <div>
        <Card />

        <section>
          <h1>
            <br />
            Shemes Available For Market Price
          </h1>
        </section>

        <button onClick={() => onExportClick()} className="export-btn">
          {/* export */}
        </button>

        <div
          className="ag-theme-alpine manage-table
          container table-responsive-sm"
        >
          <AgGridReact
            columnDefs={columns}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
            pagination={true}
            paginationPageSize={10}
            paginationAutoPageSize={true}
            onRowDoubleClicked={UpadateFunction}
            onCellEditingStopped={cellEditing}
            height="350px"
            rowStyle={rowStyle}
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default Schemes;
