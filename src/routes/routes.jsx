import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import AllRooms from "../pages/AllRooms/AllRooms";
import ContactUs from "../pages/ContactUs/ContactUs";
import MyBookings from "../pages/MyBookings/MyBookings";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Loader from "../pages/Shared/Loader/Loader";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "aboutUs",
        Component: AboutUs,
      },
      {
        path: "allRooms",
        loader: () => fetch(`${import.meta.env.VITE_serverURL}/rooms`),
        element: <AllRooms></AllRooms>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "myBookings",
        element: (
          <PrivateRoutes>
            <MyBookings></MyBookings>
          </PrivateRoutes>
        ),
      },
      {
        path: "roomDetails/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_serverURL}/rooms/${params.id}`),
        element: <RoomDetails></RoomDetails>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
      {
        path: "contactUs",
        Component: ContactUs,
      },
    ],
  },
]);
