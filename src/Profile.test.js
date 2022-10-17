import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile/>", () =>{
    it("matches snapshot", () => {
        const utils = render(<Profile username="taeone" name="윤태원" />);
        expect(utils.container).toMatchSnapshot();
    });
    it("show the props correctly", () => {
        const utils = render(<Profile username="taeone" name="윤태원" />);
        utils.getByText("taeone");
        utils.getByText("(윤태원)");
        // utils.getByText("taeone(윤태원)");
    });
});
