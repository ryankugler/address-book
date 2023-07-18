// ContactCard.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import ContactCard from "./ContactCard"; // Adjust the path to the actual location of ContactCard.js

test("renders contact cards with correct names", () => {
  // Sample data for testing
  const contactList = [
    {
      name: { first: "Ryan", last: "Kugler" },
      picture: { large: "https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/40492175_1877133432402459_324735188691058688_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=6dxHrJRYyHcAX_hIX62&_nc_ht=scontent-ord5-1.xx&oh=00_AfCnziunUGN6XmPssnTI6nnHqWzjsMAAF3546uRq3lkTeg&oe=64DD39CB" },
    },
    {
      name: { first: "Oliver", last: "Cat" },
      picture: { large: "https://static.wikia.nocookie.net/disney/images/e/e6/Oliver.jpg/revision/latest?cb=20160822154943" },
    },
  ];

  // Render the ContactCard component with the sample data
  render(<ContactCard contactList={contactList} />);

  // Check if both names are rendered correctly
  const ryanKugler = screen.getByText("Ryan Kugler");
  const oliverCat = screen.getByText("Oliver Cat");

  expect(ryanKugler).toBeInTheDocument();
  expect(oliverCat).toBeInTheDocument();
});

test("calls onCardClick function when a card is clicked", () => {
  // Create a mock onCardClick function
  const mockOnCardClick = jest.fn();

  // Sample data for testing
  const contactList = [
    {
      name: { first: "Ryan", last: "Kugler" },
      picture: { large: "https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/40492175_1877133432402459_324735188691058688_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=6dxHrJRYyHcAX_hIX62&_nc_ht=scontent-ord5-1.xx&oh=00_AfCnziunUGN6XmPssnTI6nnHqWzjsMAAF3546uRq3lkTeg&oe=64DD39CB" },
    },
  ];

  // Render the ContactCard component with the sample data and mock onCardClick function
  render(<ContactCard contactList={contactList} onCardClick={mockOnCardClick} />);

  // Simulate a click on the contact card
  const contactCard = screen.getByText("Ryan Kugler");
  contactCard.click();

  // Verify that the onCardClick function is called with the correct contact data
  expect(mockOnCardClick).toHaveBeenCalledWith(contactList[0]);
});
