import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
  Navigate,
  // Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import {
  QueryClient,
  QueryClientProvider
  
} from '@tanstack/react-query'
import TicTacToe from "./pages/tictactoe/TicTacToe.jsx"
import QRCode from "./pages/QRCode/QrCodeGenerator.jsx"
import Music from "./components/Music/Music.js";
// import SelectSize from './screens/SelectSize.js'
// import FoundationLayout from './components/layout/FoundationLayout.js';
// import GameScreen from "./screens/GameScreen.js";
import Date from "./components/Date/DateTime.jsx"
import Courses from "./pages/Courses/Box.jsx"

function App() {
  const {currentUser} = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>

     
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate   to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        
        
        
        
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/music",
      element: <Music />
    },
    {
      path: "/tictactoe",
      element: <TicTacToe />,
    },
    {
      path: "/qrcode",
      element: <QRCode />
    },
    {
      path: "/date",
      element: <Date />
    },
    {
      path: "/courses",
      element: <Courses />
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
