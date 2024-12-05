import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Inquirypages/Home';

//import AdminLogin from './Admin/AdminLogin';
import CreateAccount from './Admin/CreateAccount';
import AdminHome from './Admin/AdminHome';

import CreateInquiry from './Inquirypages/CreateInquiry';
import ShowInquiry from './Inquirypages/ShowInquiry';
import EditInquiry from './Inquirypages/EditInquiry';
import DeleteInquiry from './Inquirypages/DeleteInquiry';

import UserLogin from './User/UserLogin';
import UserHome from './User/UserHome';
import MyInquiries from './User/MyInquiries';
import AboutUs from './User/AboutUs';
import Services from './User/Services';
import ContactUs from './User/ContactUs';
import MyProfile from './User/MyProfile';

import ApproverHome from './Approver/ApproverHome';
import CreateResponse from './Approver/CreateResponse';
import ViewInquiry from './Approver/ViewInquiry';
import RejectedInquiries from './Approver/RejectedInquiries';
import ApprovedInquiries from './Approver/ApprovedInquiries';
import Rejected from './User/Rejected';
import Approved from './User/Approved';



const App = () => {
  return (
    <Routes>
      {/* <Route path='/home' element={<Home />} /> */}

      <Route path='/' element={<Home />} />
      <Route path='/user' element={<CreateAccount />} />
      <Route path='/admin/home' element={<AdminHome />} />


      <Route path='/inquiry/create' element={<CreateInquiry />} />
      <Route path='/inquiry/details/:id' element={<ShowInquiry />} /> 
      <Route path='/inquiry/edit/:id' element={<EditInquiry />} />
      <Route path='/inquiry/delete/:id' element={<DeleteInquiry />} />

      {/* <Route path='/admin/login' element={<AdminLogin />} /> */}
      
      <Route path='/login' element={<UserLogin />} />
      <Route path='/user/home' element={<UserHome />} />
      <Route path='/user/myprofile' element={<MyProfile />} />
      <Route path='/user/myinquiries' element={<MyInquiries />} />
      <Route path='/user/aboutus' element={<AboutUs />} />
      <Route path='/user/services' element={<Services />} />
      <Route path='/user/contactus' element={<ContactUs />} />
      <Route path='/user/myinquiries/resolvedinquiries' element={<Approved />} />
      <Route path='/user/myinquiries/rejectedinquiries' element={<Rejected />} />

      


      <Route path='/approver/home' element={<ApproverHome />} />
      <Route path='/approver/createresponse' element={<CreateResponse />} />
      <Route path='/approver/viewinquiry/:id' element={<ViewInquiry />} />
      <Route path="/approver/resolvedinquiries" element={<ApprovedInquiries />} />
      <Route path="/approver/rejectedinquiries" element={<RejectedInquiries />} />


    </Routes>
  );
};

export default App;