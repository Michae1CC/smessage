
 import React from "react";

interface TextBoxProps {
  onClick: React.MouseEventHandler<HTMLElement>;
}

export const TextBox: React.FunctionComponent<TextBoxProps> = (props: TextBoxProps) => {
    props;
    return (
            <div className="row justify-content-center main-input">
              <div className="input-group" style={{ padding: "2px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  aria-label="Message"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={props.onClick}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
    );
}
