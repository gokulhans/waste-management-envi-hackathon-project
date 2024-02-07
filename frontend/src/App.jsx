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
import AdminLogin from "./pages/SuperAdmin/AdminLogin/AdminLogin";
import AdminHome from "./pages/SuperAdmin/AdminHome/AdminHome";
import NewBin from "./pages/SuperAdmin/AdminHome/NewBin";
import AdminNavbar from "./components/Navbar/AdminNavbar";
import NewRegionalAdmin from "./pages/SuperAdmin/AdminHome/NewRegionalAdmin";
import LandingPage from "./components/LandingPages/LandingPage";
import SubscribePage from "./components/Subscribe/SubscribePage";
import RegionalAdminLogin from "./pages/RegionalAdmin/RegionalAdminLogin/RegionalAdminLogin";
import RegionalAdminHome from "./pages/RegionalAdmin/RegionalAdminHome/RegionalAdminHome";

function App() {
  const [isUser, setIsUser] = useState(localStorage.getItem("isUser"));
  // const [isUser, setIsUser] = useState(true);
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin"));
  const [isRegionalAdmin, setIsRegionalAdmin] = useState(
    localStorage.getItem("isRegionalAdmin")
  );
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className=" dark:bg-gray-900 dark:text-gray-50">
        {isAdmin || isRegionalAdmin ? (
          <>
            <AdminNavbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
          </>
        ) : (
          <>
            <Navbar isUser={isUser} setIsUser={setIsUser} />
          </>
        )}
        <div className="pt-16 min-h-screen flex flex-col items-center justify-center">
          <Routes>
            {!isUser ? (
              <>
                <Route
                  path="/"
                  element={
                    isAdmin ? <Navigate to={"/admin-home"} /> : <LandingPage />
                  }
                />
                <Route
                  path="/signin"
                  element={<SignIn setIsUser={setIsUser} />}
                />
                <Route
                  path="/admin"
                  element={
                    isAdmin ? (
                      <Navigate to={"/admin-home"} />
                    ) : (
                      <AdminLogin setIsAdmin={setIsAdmin} />
                    )
                  }
                />
                <Route
                  path="/admin-home"
                  element={
                    isAdmin ? (
                      <AdminHome />
                    ) : (
                      <AdminLogin setIsAdmin={setIsAdmin} />
                    )
                  }
                />
                <Route
                  path="/regional-admin"
                  element={
                    isRegionalAdmin ? (
                      <Navigate to={"/regional-admin-home"} />
                    ) : (
                      <RegionalAdminLogin setIsRegionalAdmin={setIsRegionalAdmin} />
                    )
                  }
                />
                <Route
                  path="/regional-admin-home"
                  element={
                    isRegionalAdmin ? (
                      <RegionalAdminHome />
                    ) : (
                      <RegionalAdminLogin setIsRegionalAdmin={setIsRegionalAdmin} />
                    )
                  }
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
                  path="/profile"
                  element={<MyProfile setIsUser={setIsUser} isUser={isUser} />}
                />
                {/* <Route path="*" element={<Error isUser={isUser} />} /> */}
              </>
            )}

            <Route path="/plans" element={<SubscribePage />} />
            <Route
              exact
              path="/events"
              element={<EventList isUser={isUser} />}
            />
            {isAdmin ? (
              <>
                <Route exact path="/new-bin" element={<NewBin />} />
                <Route
                  exact
                  path="/new-regional-admin"
                  element={<NewRegionalAdmin />}
                />
              </>
            ) : null}
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
