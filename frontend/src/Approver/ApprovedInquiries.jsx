import React, { useEffect, useState } from "react";
import axios from "axios";

const ApprovedInquiries = () => {
    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5555/inquiry?status=Approved")
            .then((response) => setInquiries(response.data.data))
            .catch((error) => console.error("Error fetching inquiries:", error));
    }, []);

    return (
        <div>
            <h1>Approved Inquiries</h1>
            <table className="w-full border-separate border-spacing-2">
                <thead>
                    <tr>
                        <th className="border border-slate-600 rounded-md">No</th>
                        <th className="border border-slate-600 rounded-md">Request Type</th>
                        <th className="border border-slate-600 rounded-md">Request Date</th>
                        <th className="border border-slate-600 rounded-md">Priority</th>
                        <th className="border border-slate-600 rounded-md">Subject</th>
                        <th className="border border-slate-600 rounded-md">Description</th>
                        <th className="border border-slate-600 rounded-md">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {inquiries.map((inquiry, index) => (
                        <tr key={inquiry._id} className="h-8">
                            <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
                            <td className="border border-slate-700 rounded-md text-center">{inquiry.requestType}</td>
                            <td className="border border-slate-700 rounded-md text-center">{inquiry.requestDate}</td>
                            <td className="border border-slate-700 rounded-md text-center">{inquiry.priority}</td>
                            <td className="border border-slate-700 rounded-md text-center">{inquiry.subject}</td>
                            <td className="border border-slate-700 rounded-md text-center">{inquiry.description}</td>
                            <td className="border border-slate-700 rounded-md text-center">{inquiry.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApprovedInquiries;
