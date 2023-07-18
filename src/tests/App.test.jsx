import React from "react";
import { render , screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App.js";
import ContactCard from "../components/ContactCard.jsx";
import userEvent from "@testing-library/user-event";

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
test("renders App component without crashing", () => {
  render(<App />);
});

test("renders search input", () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText("Type Here to Search");
    expect(searchInput).toBeInTheDocument();
  });
  
  test("filters contacts based on search input", () => {
    render(<App />);
  
    const searchInput = screen.getByPlaceholderText("Type Here to Search")
    fireEvent.change(searchInput, { target: { value: "Ryan" } })
    render(<ContactCard contactList={contactList}/>)
    const contactCard = screen.getByText("Ryan Kugler")
    expect(contactCard).toBeInTheDocument()
  })
  
  test("displays error message for no search results", async () => {
    
    render(<App/>)
    const searchInput = screen.getByPlaceholderText("Type Here to Search")
    
    userEvent.type(searchInput, "1234")
    await waitFor(() => {
        const errorMessage = screen.getByText("Oops! Nobody found with that name.")
        expect(errorMessage).toBeInTheDocument()
      })
  })
  
  test("displays contact details when a contact card is clicked", async () => {
    const mockOnCardClick = jest.fn()
    render(<App/>)
    render(<ContactCard contactList={contactList} onCardClick={mockOnCardClick} />)
  
    const contactCard = screen.getByText("Ryan Kugler")
    fireEvent.click(contactCard)
    await waitFor( () => {
        const contactDetails = screen.getByText("Ryan Kugler")
        expect(contactDetails).toBeInTheDocument()
    })
    
  })