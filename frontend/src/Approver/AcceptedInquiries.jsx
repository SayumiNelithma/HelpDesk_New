import React from 'react'

const AcceptedInquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:5555/inquiry/status/accepted')
          .then((response) => setInquiries(response.data))
          .catch((error) => console.error(error));
  }, []);

  return (
      <div>
          <h1>Accepted Inquiries</h1>
          <InquiryTable inquiries={inquiries} />
      </div>
  );
};

export default AcceptedInquiries;



