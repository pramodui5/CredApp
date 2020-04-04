import React from "react";
import MaterialTable from "material-table";

function Datatable() {
  const [state, setState] = React.useState({
    columns: [
      { title: "UserID", field: "UserID" },
      { title: "Password", field: "Password" },
      { title: "Region", field: "Region" },
      { title: "Release", field: "Release" },
      { title: "Url", field: "Url" }
    ],
    data: [
      {
        UserID: "MID234565",
        Password: "password7",
        Region: "HQAC",
        Release: "Feb2019",
        Url: "www.google.com"
      },
      {
        UserID: "MID234564",
        Password: "password7",
        Region: "DEV4",
        Release: "Feb2019",
        Url: "www.google.com"
      },
      {
        UserID: "MID234566",
        Password: "password7",
        Region: "HINT1",
        Release: "Feb2019",
        Url: "www.google.com"
      },
      {
        UserID: "MID205080",
        Password: "password7",
        Region: "SCAL",
        Release: "Feb2019",
        Url: "www.google.com"
      }
    ]
  });

  return (
    <MaterialTable
      title="Environment Details"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}

export default Datatable;
