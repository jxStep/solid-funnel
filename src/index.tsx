import {render} from "solid-js/web";
import App from "./App";
import "/src/index.css";

render(
    () => <App></App>, 
    document.getElementById("root")!
)