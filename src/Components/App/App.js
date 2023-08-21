import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Pages/Header/Header";
import Users from "../Pages/Users/Users";
import RouterPost from "../Pages/Posts/RouterPost";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Create from "../Pages/Dashboard/Create";
import Delete from "../Pages/Dashboard/Delete";
import Edit from "../Pages/Dashboard/Edit";
import Login from "../Pages/Dashboard/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/" element={<Dashboard />}/>
        <Route path="/dashboard/delete" element={<Delete />} />
        <Route path="/dashboard/edit" element={<Edit />} />
        <Route path="/dashboard/create" element={<Create />} />
        <Route path="/Posts/*" element={<RouterPost />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
