import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TechSelectOption from "../techs/TechSelectOption";
import PropTypes from "prop-types";
import { updateLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

function EditLogModal({ current, updateLog }) {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(true);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onsubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and technician" });
    } else {
      const updLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };

      updateLog(updLog);
      M.toast({ html: `Updated by ${tech}` });

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
              <TechSelectOption />
              {/* <option value="John Doe"> John Doe </option>
              <option value="Sam Smith"> Sam Smith </option>
              <option value="Sara Williams"> Sara Williams </option> */}
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
                  checked={attention}
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

EditLogModal.prototype = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
