import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const ContactDetails = ({ contact, onGoBack }) => {
  const dob = new Date(contact.dob.date).toLocaleDateString()

  return (
    <div className="bg-white p-8">
      <Button variant='contained' startIcon={<ArrowBackIcon/>}
        className='px-8'
        // className="bg-blue-600 px-3 py-2 hover:ease-linear duration-300 rounded-md text-white font-semibold mb-4 cursor-pointer"
        onClick={onGoBack}
      >
        Back
      </Button>
      <div className="bg-blue-100 h-80 rounded-md shadow-md mt-6 py-7">
        <img
          src={contact?.picture?.large}
          alt="user"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <figcaption className="mt-5 text-center">
          <p className="text-gray-700 font-semibold text-xl mb-2">
            {contact?.name?.first} {contact?.name?.last}
          </p>
          <p className="text-gray-500">
            <span className="font-medium">Email: </span>
            {contact?.email}
          </p>
          <p className="text-gray-500">
            <span className="font-medium">Phone: </span>
            {contact?.phone}
          </p>
          <p className="text-gray-500">
            <span className="font-medium">Location: </span>
            {contact?.location?.city}, {contact?.location?.state}
          </p>
          <p className="text-gray-500">
            <span className="font-medium">Birthday: </span>
                {dob}

          </p>
        </figcaption>
      </div>
    </div>
  )
}

export default ContactDetails
