import * as React from "react";
import { render } from "react-dom";
import {data} from "./in";

const App = () => <div>
    {data.map((a,b) => <div className={'row'} key={'a_'+b}>{a.m.map((a,c)=><span className={'m'} key={'a_'+b+'b_'+c}>{a}</span>)}</div>)}
</div>;

render(<App />, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}
