// import './App.css'
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <>
      {console.log("working")}
      <Header />
      <div className="flex">
        <Card source ="src\assets\react.svg" />
        <Card source = "public\vite.svg" />
        <Card source ="src\assets\react.svg" />
        <Card source = "public\vite.svg" />
      </div>
      <div className="flex">
        <Card source = "public\vite.svg" />
        <Card source ="src\assets\react.svg" />
        <Card source = "public\vite.svg" />
        <Card source ="src\assets\react.svg" />
      </div>
    </>
  );
}

export default App;
