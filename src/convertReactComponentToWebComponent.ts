import r2wc from "@r2wc/react-to-web-component";
import styles from "./output.css?inline";

export const convertReact2WebComponent = (
    Component: Parameters<typeof r2wc>[0],
    options?: Parameters<typeof r2wc>[1]
) => {
    const WebComponent = r2wc(Component, options);

    class WebComponentWithStyle extends WebComponent {
        constructor() {
            super();
            const _styles = document.createElement("style");
            _styles.textContent = styles;
            this.shadowRoot?.appendChild(_styles);
        }
    }

    return WebComponentWithStyle;
};
