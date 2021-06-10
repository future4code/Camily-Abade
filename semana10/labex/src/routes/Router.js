import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {AdminHomePage} from "../pages/AdminHomePage";
import {LoginPage} from "../pages/LoginPage";
import {ErrorPage} from "../pages/ErrorPage";
import {ListTripsPage} from "../pages/ListTripsPage"

export const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>

        <Route exact path="/admin-home">
          <AdminHomePage />
        </Route>
{/* 
        <Route exact path="/create-trip"> //////// AQUI
          <CreateTripPage />
        </Route> */}
{/* 
        <Route exact path="/application-form">
          <ApplicationFormPage /> ////////// AQUI
        </Route> */}

        <Route exact path="/list-trips">
          <ListTripsPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        {/* <Route exact path="/detail-trips">
          <TripDetailsPage />
        </Route> */}

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
