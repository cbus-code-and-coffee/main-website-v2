import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../components/Hero";
import userEvent from "@testing-library/user-event";

describe("Hero component test", () => {
  const handleOnClickMock = jest.fn();
  const renderComponent = () => {
    return render(
      <Hero title={"squawk"} subtitle={"cawww"} onClick={handleOnClickMock} />,
    );
  };

  it("should fire a mouse event when the button is clicked", async () => {
    renderComponent();
    const button = screen.getByTestId("hero-button");

    await userEvent.click(button);

    expect(handleOnClickMock).toHaveBeenCalled();
  });
});
