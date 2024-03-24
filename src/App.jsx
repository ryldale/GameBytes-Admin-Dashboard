import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./app/pages/Dashboard";
import News from "./app/pages/News";
import Help from "./app/pages/Help";
import Contact from "./app/pages/Contact";
import Transaction from "./app/pages/Transaction";
import Customers from "./app/pages/Customers";
import Payment from "./app/pages/Payment";
import User from "./app/pages/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
          <Route path="/news-management" exact element={<News />}></Route>
          <Route path="/help" exact element={<Help />}></Route>
          <Route path="/contacts" exact element={<Contact />}></Route>
          <Route path="/transactions" exact element={<Transaction />}></Route>
          <Route path="/customers" exact element={<Customers />}></Route>
          <Route path="/payment-channel" exact element={<Payment />}></Route>
          <Route path="/user-management" exact element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
