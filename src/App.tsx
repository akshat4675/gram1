import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";

import RootLayout from "./_root/RootLayout";
import {Routes,Route} from 'react-router-dom';
import Home from "./_root/pages/Home";
import {SignupForm} from "./_auth/forms";
import "./globals.css";
import ForgotPass from "./_auth/forms/ForgotPass";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes*/}
        <Route element={<AuthLayout/>}>
        <Route path="/sign-in" element={<SigninForm/>}/>
        <Route index element={<SignupForm/>}/>
        <Route path="/forgot-password" element={<ForgotPass/>}/>
        </Route>
        {/* Private Routes*/}
        <Route element={<RootLayout/>}>
        <Route element={<Home/>}/>
        </Route>
      </Routes>

    </main>
  )
}

export default App
