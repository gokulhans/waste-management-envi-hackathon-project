import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import ForgotPassword from "./pages/Shared/ForgotPassword/ForgotPassword";
import SignIn from "./pages/Shared/SignIn/SignIn";
import SignUp from "./pages/Shared/SignUp/SignUp";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserHome from "./pages/User/UserHome/UserHome";
import Subscription from "./pages/User/Subscription/Subscription";
import BasketLocation from "./pages/User/BasketLocation/BasketLocation";
import SingleBasket from "./pages/User/SingleBasket/SingleBasket";
import RequestBasket from "./pages/User/RequestBasket/RequestBasket";
import BookWMS from "./pages/User/BookWMS/BookWMS";
import EventList from "./pages/User/EventList/EventList";
import MyProfile from "./pages/User/MyProfile/MyProfile";
import Footer from "./components/Footer/Footer";

function App() {
  // const [isUser, setIsUser] = useState(localStorage.getItem("isUser"));
  const [isUser, setIsUser] = useState(true);
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin"));
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className=" dark:bg-gray-900 dark:text-gray-50">
        {/* {
        
        isAdmin ? (
          <>
            <AdminNavbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
          </>
        ) : ( */}
        <>
          <Navbar isUser={isUser} setIsUser={setIsUser} />
        </>
        {/* )} */}
        <div className="pt-16 min-h-screen flex flex-col items-center justify-center">
          <Routes>
            {!isUser ? (
              <>
                <Route
                  path="/"
                  element={
                    isAdmin ? (
                      <Navigate to={"/admin"} />
                    ) : (
                      <Navigate to={"/signup"} />
                    )
                  }
                />
                <Route
                  path="/signin"
                  element={<SignIn setIsUser={setIsUser} />}
                />
                <Route
                  path="/signup"
                  element={<SignUp setIsUser={setIsUser} />}
                />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
              </>
            ) : (
              <>
                <Route exact path="/" element={<UserHome isUser={isUser} />} />
                <Route
                  exact
                  path="/subscribe"
                  element={<Subscription isUser={isUser} />}
                />
                <Route
                  exact
                  path="/baskets"
                  element={<BasketLocation isUser={isUser} />}
                />
                <Route
                  exact
                  path="/basket/:id"
                  element={<SingleBasket isUser={isUser} />}
                />
                <Route
                  exact
                  path="/request-basket"
                  element={<RequestBasket isUser={isUser} />}
                />
                <Route
                  exact
                  path="/book-wm-service"
                  element={<BookWMS isUser={isUser} />}
                />
                <Route
                  exact
                  path="/events"
                  element={<EventList isUser={isUser} />}
                />
                <Route
                  exact
                  path="/profile"
                  element={<MyProfile isUser={isUser} />}
                />
                <Route path="*" element={<Error isUser={isUser} />} />
              </>
            )}
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
