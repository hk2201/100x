import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function Header({ toBeAdded }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [neww, setNeww] = useState({
    Name: "",
    Description: "",
    Interests: [],
    twitter: "",
    Linkedn: "",
  });
  function sendIt() {
    toBeAdded(neww);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setNeww({ ...neww, Name: e.target.value });
            }}
          ></input>

          <input
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setNeww({ ...neww, Description: e.target.value });
            }}
          ></input>
          <input
            type="text"
            placeholder="No of interests?"
            onChange={(e) => {
              var store = "";
              store = e.target.value; // Update the Name property of the first item
              const temp = store.split(",");
              setNeww({ ...neww, Interests: temp });
            }}
          ></input>

          <input
            type="text"
            placeholder="linkedn"
            onChange={(e) => {
              setNeww({ ...neww, Linkedn: e.target.value });
            }}
          ></input>
          <input
            type="text"
            placeholder="twitter"
            onChange={(e) => {
              setNeww({ ...neww, twitter: e.target.value });
            }}
          ></input>
          <Button onClick={sendIt}>submit</Button>
        </Box>
      </Modal>
    </div>
  );
}
