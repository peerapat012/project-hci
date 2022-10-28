import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

// componetn
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer';
import Sidebar from './assets/components/Sidebar';
import Usernavbar from './assets/components/Usernavbar';

// pages
import Home from './assets/pages/Home';
import Login from './assets/pages/Login'
import User from './assets/pages/User';
import UserBooking from './assets/pages/Userbooking';
import Package from './assets/pages/Package';
import Payment from './assets/pages/Payment';





const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer />
    </>
  )
}

const Users = () => {
  return (
    <>
      <Usernavbar/>
      <section className='flex gap-6 '>
        {/* sidebar right side */}
        <Sidebar/>

        {/* content left side */}
        <Outlet/>
      </section>
      {/* footer */}
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      }

    ]
  },
  {
    path: "/users",
    element: <Users/>,
    children: [
      {
        path: "/users",
        element: <User/>
      },
      {
        path: "userbooking",
        element: <UserBooking/>
      },
      {
        path: "package",
        element: <Package/>
      },
      {
        path: "userbooking/payment",
        element: <Payment/>
      },
    ]
  },


]);

function App() {


  return (
    <div className="App font-NotoThai">
        <RouterProvider router={router} />
    </div>
  )
}

export default App
