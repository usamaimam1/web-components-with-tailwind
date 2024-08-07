import CandlestickChart from "./CandleStickChart";
import { convertReact2WebComponent } from "./convertReactComponentToWebComponent";
// import { MyComponent } from "./MyComponent";

const webComponent = convertReact2WebComponent(CandlestickChart, {
  shadow: "open",
});
customElements.define("my-component", webComponent);
