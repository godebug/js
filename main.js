import * as React from "react";
import { render } from "react-dom";

const App = () => <h1>Hello world</h1>;

render(<App />, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}
