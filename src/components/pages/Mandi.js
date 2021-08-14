//Mandi page code...
import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import axios from "axios";
import Aggrid from "../styles/Aggrid.css";
import Card from "./Card";
import Mandii from "../styles/Mandii.css";
import Footer from "../layout/Footer";

const Mandi = () => {
  const rowStyle = {
    background: "transparent",
    color: "#192a56",
  };
  const onGridReady = (params) => {
    console.log("grid is ready");
    fetch("http://localhost:3000/api/mandischema")
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
      field: "DIST",
    },
    {
      headerName: "MARKET",
      field: "MARKET",
    },
    {
      headerName: "GODOWN",
      field: "GODOWN",
    },
    {
      headerName: "COLDSTORAGE",
      field: "COLDSTORAGE",
    },
    {
      headerName: "RAILWAY",
      field: "RAILWAY",
    },
    {
      headerName: "ACTION",
      cellRendererFramework: (params) => (
        <div>
          <button onClick={() => cellDeleteing(params)} className="deleteMandi">
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
    alert("Do you want to update your data?🙄🙄");
  };

  const cellEditing = (resp) => {
    id = resp.data._id;

    axios.put(`http://localhost:3000/api/mandi/${id}`, resp.data);
    console.log(resp);
    alert("your data has been updated😊😊");
  };
  const cellDeleteing = (resp) => {
    resp.api.applyTransaction({
      remove: [resp.node.data],
    });
    id = resp.data._id;
    axios.delete(`http://localhost:3000/api/mandi/${id}`, resp.data);
    alert("your data has been deleted");
  };

  return (
    <div>
      <Card />
      <br />
      <h1 data-testid="testcase"> Currently Available Mandi's</h1>
      <br />
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
          rowStyle={rowStyle}
        />
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default Mandi;
