//Important Address Page code..
import React from "react";
import Aggrid from "../styles/Aggrid.css";
import axios from "axios";
import Imp from "../styles/Imp.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Card from "./Card";
import Footer from "../layout/Footer";
const ImportantAddress = () => {
  const rowStyle = {
    background: "transparent",
    color: "#192a56",
  };
  const onGridReady = (params) => {
    console.log("grid is ready");
    fetch("http://localhost:3000/api/SoilSchema")
      .then((resp) => resp.json())
      .then((resp) => params.api.applyTransaction({ add: resp }));
  };

  const columns = [
    {
      headerName: "STATE",
      field: "STATE",
    },
    {
      headerName: "DIST",
      field: "dist",
    },
    {
      headerName: "OFFICE ADDRESS",
      field: "Office_Address",
    },
    {
      headerName: "NO OF STAFF",
      field: "No_of_Staff",
    },

    {
      headerName: "SOIL EQUIPMENT",
      field: "Soil_Equipment",
    },
    {
      headerName: "SOIL TEST NUMBER",
      field: "Soil_Test_No",
    },

    {
      headerName: "ACTION",
      cellRendererFramework: (params) => (
        <div>
          <button
            onClick={() => cellDeleteing(params)}
            className="deleteAddress"
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

    axios.put(`http://localhost:3000/api/soil/${id}`, resp.data);
    console.log(resp);
    alert("your data has been updated 🙂☺ ");
  };
  const cellDeleteing = (resp) => {
    id = resp.data._id;
    resp.api.applyTransaction({
      remove: [resp.node.data],
    });
    axios.delete(`http://localhost:3000/api/soil/${id}`, resp.data);
    alert("your data has been Deleted 🙂☺ ");
  };

  return (
    <div>
      <Card />
      <br />
      <h1>Soil Testing Labs</h1>
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
          onRowDoubleClicked={UpadateFunction}
          onCellEditingStopped={cellEditing}
          height="350px"
          rowStyle={rowStyle}
        />
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default ImportantAddress;
