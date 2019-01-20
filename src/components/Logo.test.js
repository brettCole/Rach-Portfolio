import React from "react";
import ReactDOM from "react-dom";
import Logo from "./Logo";

it("renders Logo without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Logo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
