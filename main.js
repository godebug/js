import * as React from "react";
import {render} from "react-dom";
import {data} from "./in";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cX: 30,
            oX: 0,
        }
    }
    render = () =>
        <div id={'l'}>{
            data.map((a, b) =>
                <div className={'row'} key={'r_' + b}>{
                    a.d.map((a, c) =>
                        <p className={'d'} key={'a_' + b + 'b_' + c}>{a}</p>).concat(
                        a.m.filter((i, c) => (c >= this.state.oX) && (c <= this.state.cX))
                            .map((a, c) =>
                                <p className={'m'} key={'m_' + b + 'b_' + c}>{a}</p>)
                    )
                }</div>
            )
        }</div>
}

render(<App/>, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}
