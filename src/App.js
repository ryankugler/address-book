import React, { useEffect, useState } from "react"
import useFetch from "react-fetch-hook"
import ContactCard from "./components/ContactCard"
import ContactDetails from "./components/ContactDetails"

const App = () => {
  const API_URL = "https://randomuser.me/api"
  const {error, data } = useFetch(API_URL + "?results=100")
  data? console.log(data) : console.log(error? error: "No data available upon request")
  const [contactList, setContactList] = useState(null)
  const [filterQuery, setFilterQuery] = useState(null)
  const [selectedContact, setSelectedContact] = useState(null)

  useEffect(() => {
    if (filterQuery) {
      const inputString = filterQuery.toLowerCase()
      const filteredData = data?.results?.filter((contact) => {
        const name = `${contact?.name.first} ${contact.name.last}`
        if (inputString.length === 1) {
          const firstLetter = name.charAt(0).toLowerCase()
          return firstLetter === inputString
        } else {
          return name.toLowerCase().includes(inputString)
        }
      })
      setContactList(filteredData)
    } else {
      setContactList(data?.results)
    }
  }, [data, filterQuery])

  const handleCardClick = (contact) => {
    setSelectedContact(contact)
  }

  const handleGoBack = () => {
    setSelectedContact(null)
  }
  return (
    <div className="bg-white">
      <section className=" mt-5 font-extrabold text-4xl text-center">
        <h1>Address Book</h1>
      </section>
      <section>
        {!selectedContact && (<form>
          <input
            onChange={(event) => setFilterQuery(event.target.value)}
            type="text"
            className="ml-20 mt-6 rounded-md border-2 border-gray-200 border-solid p-2"
            placeholder="Type Here to Search"
          />
        </form>)}
        
      </section>

      {selectedContact ? (
        <ContactDetails contact={selectedContact} onGoBack={handleGoBack} />
      ) : (
        <section className="pb-20 px-20 pt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contactList?.length < 1 && (
            <h1 className="text-blue-900 font-extrabold">Oops! Nobody found with that name.</h1>
          )}
          <ContactCard contactList={contactList} onCardClick={handleCardClick} />
        </section>
      )}
    </div>
  )
}

export default App
