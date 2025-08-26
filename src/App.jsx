import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/login';
import ForgotPassword from './Components/ForgotPassword';
import Dashboard from './Components/Dashboard';
import UploadDocuments from './Components/UploadDocuments';
import ESign from './Components/ESign';
import Review from './Components/Review';
import LoanForm from './Components/Loanform';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/signup' element={<Signup />}/>
      <Route path="/login" element={<Login />} />
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/uploaddocuments' element={<UploadDocuments/>}/>
      <Route path='/esign' element={<ESign/>}/>
      <Route path = '/review' element={<Review/>}/>
      <Route path = '/loanform' element={<LoanForm/>}/>
    </Routes>
  );
}

export default App;
