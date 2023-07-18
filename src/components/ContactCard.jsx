const ContactCard = ({ contactList, onCardClick }) => {
  return (
    <>
      {contactList?.map((contact, index) => (
        <figure
          key={index}
          className="hover:bg-blue-100 bg-gray-100 h-56 rounded-md shadow-md pt-7"
          onClick={() => onCardClick(contact)}
        >
          <img
            src={contact?.picture?.large}
            alt="user"
            className="w-32 h-32 rounded-full mx-auto"
          />
          <figcaption className=" mt-5 text-center">
            <p className="text-gray-700 font-semibold text-xl">
              {contact?.name?.first} {contact?.name?.last}
            </p>
          </figcaption>
        </figure>
      ))}
    </>
  )
}

export default ContactCard
