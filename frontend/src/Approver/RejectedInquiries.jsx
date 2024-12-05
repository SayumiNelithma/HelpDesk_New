import React from 'react'

const RejectedInquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:5555/inquiry/status/rejected')
          .then((response) => setInquiries(response.data))
          .catch((error) => console.error(error));
  }, []);

  return (
      <div>
          <h1>Rejected Inquiries</h1>
          <InquiryTable inquiries={inquiries} />
      </div>
  );
};

export default RejectedInquiries;

