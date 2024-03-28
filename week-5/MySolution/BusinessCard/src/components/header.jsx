import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
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
      {/* <AddCircleSharpIcon /> */}
      <AddCircleSharpIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              maxWidth: "200px",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <TextField
              label="Name"
              type="text"
              onChange={(e) => {
                setNeww({ ...neww, Name: e.target.value });
              }}
            ></TextField>
            <TextField
              label="Description"
              type="text"
              onChange={(e) => {
                setNeww({ ...neww, Description: e.target.value });
              }}
            ></TextField>
            <TextField
              label="Interests"
              type="text"
              onChange={(e) => {
                var store = "";
                store = e.target.value; // Update the Name property of the first item
                const temp = store.split(",");
                setNeww({ ...neww, Interests: temp });
              }}
            ></TextField>
            <TextField
              label="Linkedn"
              type="text"
              onChange={(e) => {
                setNeww({ ...neww, Linkedn: e.target.value });
              }}
            ></TextField>
            <TextField
              label="Twitter"
              type="text"
              onChange={(e) => {
                setNeww({ ...neww, twitter: e.target.value });
              }}
            ></TextField>

            <Button onClick={sendIt}>submit</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
