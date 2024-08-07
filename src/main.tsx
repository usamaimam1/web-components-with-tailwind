import { convertReact2WebComponent, MyComponent } from "./MyComponent";

const webComponent = convertReact2WebComponent(MyComponent, {
  shadow: "open",
});
customElements.define("my-component", webComponent);
