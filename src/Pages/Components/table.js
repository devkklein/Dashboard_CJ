import React, { useState, useEffect } from "react";
import { Input, Table } from "antd";
import { Button, Flex } from "antd";
import "../Style/userdata.css";
import axios from "axios";
import AddUsers from "./addUsers";

function Userdata() {
  const [responseData, setResponseData] = useState("");
  const [searchText, setsearchText] = useState("");

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return (
          String(record.name).toLowerCase().includes(value.toLowerCase()) ||
          String(record.age).toLowerCase().includes(value.toLowerCase()) ||
          String(record.address).toLowerCase().includes(value.toLowerCase())
        );
      },

      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      sorter: (a, b) => a.address.length - b.address.length,
    },
  ];

  useEffect(() => {
    axios
      .post("http://localhost:8081/userdata")
      .then((res) => {
        setResponseData(res.data);
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen der Daten:", error);
      });
  }, [<AddUsers />]);

  return (
    <div className="dataDesktop">
      <Table
        columns={columns}
        dataSource={responseData}
        bordered
        title={() => (
          <>
            <div className="sort-title">
              <Input.Search
                className="input_search"
                onSearch={(value) => setsearchText(value)}
              />
            </div>
          </>
        )}
        footer={() => <AddUsers />}
      />
    </div>
  );
}

export default Userdata;
