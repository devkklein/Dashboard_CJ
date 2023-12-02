import React, { useState } from "react";
import { Button } from "antd";
import "../Style/addUsers.css";
import axios from "axios";
import { Message } from "@mui/icons-material";

function AddUsers() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    toggleModal();

    axios
      .post("http://localhost:8081/addUser", values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <Button type="primary" onClick={toggleModal} className="btn-modal">
        add Users
      </Button>

      {modal && (
        <div className="popup-overlay">
          <div className="center">
            <form className="form">
              <div className="txt_field">
                <input
                  type="name"
                  placeholder="Enter Name"
                  name="name"
                  onChange={(event) =>
                    setValues({ ...values, name: event.target.value })
                  }
                />
              </div>
              <div className="txt_field">
                <input
                  type="age"
                  placeholder="Enter Age"
                  name="age"
                  onChange={(event) =>
                    setValues({ ...values, age: event.target.value })
                  }
                />
              </div>
              <div className="txt_field">
                <input
                  type="address"
                  placeholder="Enter address"
                  name="address"
                  onChange={(event) =>
                    setValues({ ...values, address: event.target.value })
                  }
                />
              </div>
              <div className="pass">
                <Button onClick={handleSubmit}>add User </Button>

                <Button onClick={toggleModal}>Back</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddUsers;
