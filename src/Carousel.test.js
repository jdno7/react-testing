import React from "react";
import { render, fireEvent, queryAllByAltText } from "@testing-library/react";
import Carousel from "./Carousel";
import Card from "./Card"

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  
});

it('should render', () => {
  render(<Carousel/>)
})

test('Carousel Snapshot', () => {
  const {asFragment} = render(<Carousel/>)
  expect(asFragment()).toMatchSnapshot()
})

test('arrows hide and show properly', () => {
  const {getByTestId} = render(<Carousel/>)
  const leftArrow = getByTestId('left-arrow') 
  const rightArrow = getByTestId('right-arrow')

  expect(leftArrow).toHaveClass("hidden")
  expect(rightArrow).not.toHaveClass("hidden")

  fireEvent.click(rightArrow)

  expect(leftArrow).not.toHaveClass("hidden")

  fireEvent.click(rightArrow)

  expect(rightArrow).toHaveClass("hidden")
  
})

test('left arrow goes back', () => {
  const {getByTestId, queryByAltText} = render(<Carousel/>)
  const leftArrow = getByTestId('left-arrow') 
  const rightArrow = getByTestId('right-arrow')

  fireEvent.click(rightArrow)
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument()
  fireEvent.click(leftArrow)
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument()
  
})