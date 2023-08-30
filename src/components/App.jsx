import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/actions";
import { Home } from "pages/Home/Home";
import { ContactPage } from "pages/ContactPage/ContactPage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { RegisterPage } from "pages/RegisterPage/RegisterPage";
import { NotFound } from "pages/NotFound/NotFound";
import { useAuth } from "hooks/useAuth";
import { RestrictRoute } from "layoutRoutes/RestrictRoute";
import { PrivateRoute } from "layoutRoutes/PrivateRoute";


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isRefreshing) {
    return <div>Loading....</div>;
  }


  return (

     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={<RestrictRoute redirectTo="/" component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
         <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};