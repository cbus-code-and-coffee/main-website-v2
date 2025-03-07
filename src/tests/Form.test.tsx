import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../components/Form";
import { act } from "react";
import "@testing-library/jest-dom";

describe("form test", () => {
  it("should submit the form when all fields are valid", async () => {
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

  it("shouldn't submit the form when all fields aren't valid", async () => {
    const mockOnSubmit = jest.fn();
    render(<Form onSubmit={mockOnSubmit} />);

    await act(async () => {
      fireEvent.change(screen.getByTestId("name"), {
        target: { value: "" },
      });
      fireEvent.change(screen.getByTestId("last-name"), {
        target: { value: "" },
      });
      fireEvent.change(screen.getByTestId("email"), {
        target: { value: "" },
      });
      fireEvent.change(screen.getByTestId("subject"), {
        target: { value: "" },
      });
      fireEvent.change(screen.getByTestId("message"), {
        target: { value: "" },
      });
    });

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    });

    expect(mockOnSubmit).not.toHaveBeenCalled();

    expect(screen.getByTestId("error-name")).toHaveTextContent(
      "Please enter your first name",
    );
    expect(screen.getByTestId("error-last-name")).toHaveTextContent(
      "Please enter your last name",
    );
    expect(screen.getByTestId("error-email")).toHaveTextContent(
      "Please enter your email",
    );
    expect(screen.getByTestId("error-subject")).toHaveTextContent(
      "Please enter a subject",
    );
    expect(screen.getByTestId("error-message")).toHaveTextContent(
      "Please enter a message",
    );
  });
});
