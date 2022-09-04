import { render, screen, fireEvent } from "@testing-library/react";
import ImageCarousel from "./ImageCarousel";
import React from "react";

test("carousel is rendered properly", async () => {
  render(<ImageCarousel />);
  const carousel = await screen.findByTestId("img-carousel");
  expect(carousel).toBeInTheDocument();
});

describe("Click tests", () => {
  it("should click next", async () => {
    render(<ImageCarousel />);
    const nextButton = await screen.findByTestId("next-btn");
    fireEvent.click(nextButton);
  });
  it("should click prev", async () => {
    render(<ImageCarousel />);
    const prevButton = await screen.findByTestId("prev-btn");
    fireEvent.click(prevButton);
  });
});
