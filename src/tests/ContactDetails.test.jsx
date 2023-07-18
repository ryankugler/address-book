// ContactDetails.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactDetails from "../components/ContactDetails"; // Adjust the path to the actual location of ContactDetails.js

test("renders contact details correctly", () => {
  // Sample contact data for testing
  const contact = {
    name: { first: "Ryan", last: "Kugler" },
    dob: { date: "2000-05-02T12:34:56.789Z" },
    email: "rwkugler@uwaterloo.ca",
    phone: "6475277357",
    location: { city: "Toronto", state: "ON" },
    picture: { large: "https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/40492175_1877133432402459_324735188691058688_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=6dxHrJRYyHcAX_hIX62&_nc_ht=scontent-ord5-1.xx&oh=00_AfCnziunUGN6XmPssnTI6nnHqWzjsMAAF3546uRq3lkTeg&oe=64DD39CB" },
  };

  // Render the ContactDetails component with the sample contact data
  render(<ContactDetails contact={contact} />);

  // Check if the contact details are rendered correctly
  const nameElement = screen.getByText("Ryan Kugler");
  const emailElement = screen.getByText("rwkugler@uwaterloo.ca");
  const phoneElement = screen.getByText("6475277357");
  const locationElement = screen.getByText("Toronto, ON");
  const birthdayElement = screen.getByText("5/2/2000");

  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
  expect(phoneElement).toBeInTheDocument();
  expect(locationElement).toBeInTheDocument();
  expect(birthdayElement).toBeInTheDocument();
});

test("calls onGoBack function when Back button is clicked", () => {
  // Create a mock onGoBack function
  const mockOnGoBack = jest.fn();

  // Sample contact data for testing
  const contact = {
    name: { first: "Ryan", last: "Kugler" },
    dob: { date: "2000-05-02T12:34:56.789Z" },
    email: "rwkugler@uwaterloo.ca",
    phone: "6475277357",
    location: { city: "Toronto", state: "ON" },
    picture: { large: "https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/40492175_1877133432402459_324735188691058688_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=6dxHrJRYyHcAX_hIX62&_nc_ht=scontent-ord5-1.xx&oh=00_AfCnziunUGN6XmPssnTI6nnHqWzjsMAAF3546uRq3lkTeg&oe=64DD39CB" },
  };

  // Render the ContactDetails component with the sample contact data and mock onGoBack function
  render(<ContactDetails contact={contact} onGoBack={mockOnGoBack} />);

  // Simulate a click on the Back button
  const backButton = screen.getByText("Back");
  fireEvent.click(backButton);

  // Verify that the onGoBack function is called
  expect(mockOnGoBack).toHaveBeenCalled();
});
