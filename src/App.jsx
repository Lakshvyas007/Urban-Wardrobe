import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";

const Home = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );  
};

const AppRouter = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error />},
  { path: "/about", element: <About /> },
]);

function App() {
  return <RouterProvider router={AppRouter} />;
}

export default App;
