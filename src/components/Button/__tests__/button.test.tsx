import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../index";

describe("<Button />", () => {
  it("Button 컴포넌트 렌더링", () => {
    const { container } = render(<Button label="버튼" />);
    expect(container).toMatchSnapshot();
    const label = screen.getByText("버튼");
    expect(label).toBeInTheDocument();
  });

  it("Button 컴포넌트 onClick", () => {
    const handClick = jest.fn();
    render(<Button label="클릭 버튼" onClick={handClick} />);
    const label = screen.getByText("클릭 버튼");
    expect(handClick).toHaveBeenCalledTimes(0);
    fireEvent.click(label);
    expect(handClick).toHaveBeenCalledTimes(1);
  });
});
