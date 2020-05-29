import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

function EditLogModal() {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onsubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and technician" });
    } else {
      console.log(message, tech, attention);
      setAttention(false);
      setMessage("");
      setTech("");
    }
  };
  return (
    <div id="edit-log-model" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4> Details </h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-filed">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Choose your option
              </option>
              <option value="John Doe"> John Doe </option>
              <option value="Sam Smith"> Sam Smith </option>
              <option value="Sara Williams"> Sara Williams </option>
            </select>
            <label>Select the Technician</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            onClick={onsubmit}
            className="modal-close wavws-effect waves-light btn"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
}
const modalStyle = {
  width: "75%",
  height: "75%",
};

export default EditLogModal;
