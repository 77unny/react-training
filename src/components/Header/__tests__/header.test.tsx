import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "..";

describe('<Header />', () => {
  it('Header Rendering', function () {
    render(<Header />)

    const getHeaderText = screen.getByText('Header Component')
    expect(getHeaderText).toBeInTheDocument()
  });
})