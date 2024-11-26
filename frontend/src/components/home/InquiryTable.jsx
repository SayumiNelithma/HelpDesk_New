import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const InquiryTable = ({ inquiry }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Request Type</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>Request Date</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>Priority</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>Subject</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>Description</th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {inquiry.map((inquiry, index) => (
          <tr key={inquiry._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {inquiry.requestType}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {inquiry.requestDate}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {inquiry.priority}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {inquiry.subject}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {inquiry.description}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/inquiry/details/${inquiry._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/inquiry/edit/${inquiry._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/inquiry/delete/${inquiry._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InquiryTable;