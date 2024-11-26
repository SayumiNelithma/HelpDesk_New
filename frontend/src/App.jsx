import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Inquirypages/Home';
import CreateInquiry from './Inquirypages/CreateInquiry';
import ShowInquiry from './Inquirypages/ShowInquiry';
import EditInquiry from './Inquirypages/EditInquiry';
import DeleteInquiry from './Inquirypages/DeleteInquiry';

import AdminLogin from './Admin/AdminLogin';
import CreateAccount from './Admin/CreateAccount';

const App = () => {
  return (
    <Routes>
      {/* <Route path='/home' element={<Home />} /> */}

      <Route path='/' element={<AdminLogin />} />
      <Route path='/inquiry/create' element={<CreateInquiry />} />
      <Route path='/inquiry/details/:id' element={<ShowInquiry />} />
      <Route path='/inquiry/edit/:id' element={<EditInquiry />} />
      <Route path='/inquiry/delete/:id' element={<DeleteInquiry />} />

      <Route path='/admin/login' element={<AdminLogin />} />
      <Route path='/account/create' element={<CreateAccount />} />

    </Routes>
  );
};

export default App;