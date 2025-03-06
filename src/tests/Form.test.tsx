import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../components/Form";
import { act } from "react";

describe("form", () => {
  it("it calls the onSubmit function", async () => {
    const mockOnSubmit = jest.fn();
    render(<Form onSubmit={mockOnSubmit} />);

    await act(async () => {
      fireEvent.change(screen.getByTestId("name"), {
        target: { value: "first name" },
      });
      fireEvent.change(screen.getByTestId("last-name"), {
        target: { value: "last name" },
      });
      fireEvent.change(screen.getByTestId("email"), {
        target: { value: "email@email.com" },
      });
      fireEvent.change(screen.getByTestId("subject"), {
        target: { value: "subject" },
      });
      fireEvent.change(screen.getByTestId("message"), {
        target: { value: "message" },
      });
    });

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    });

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
