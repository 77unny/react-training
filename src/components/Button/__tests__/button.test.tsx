import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../index";

describe("<Button />", () => {
  it("Button 컴포넌트 렌더링", () => {
    const { container } = render(<Button label="버튼" />);
    expect(container).toMatchSnapshot();
    const label = screen.getByText("버튼");
    expect(label).toBeInTheDocument();
  });
});
