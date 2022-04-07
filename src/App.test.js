import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import Carousel from "./Carousel"
import Card from "./Card"

it('should render', () => {
    render(<App/>)
  })
test('App Snapshot', () => {
    const {asFragment} = render(<App/>)
    expect(asFragment()).toMatchSnapshot()
  })

