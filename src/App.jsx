// import './App.css'
import Card from "./components/Card";
import Header from "./components/Header";



function App() {
  const data = [
    {
      id: 1,
      image: "src/assets/download.jpeg",
      brandname: "Nike",
      description: "Nike Sportswear Men's T-Shirt (Black)",
      category: "tshirt",
      rating: "★★★★",
      price: "499/$",
    },
    {
      id: 2,
      image: "src/assets/download.jpeg",
      brandname: "Adidas",
      description: "Adidas Women's Hoodie (Grey)",
      category: "hoodie",
      rating: "★★★",
      price: "799/$",
    },
    {
      id: 3,
      image: "src/assets/download.jpeg",
      brandname: "Nike",
      description: "Nike Air Men's Shoes (Black/White)",
      category: "shoes",
      rating: "★★★★★",
      price: "129/$",
    },
    {
      id: 4,
      image: "src/assets/download.jpeg",
      brandname: "Levi's",
      description: "Levi's Fit Jeans (Blue)",
      category: "jeans",
      rating: "★★★★★",
      price: "89/$",
    },
    {
      id: 5,
      image: "src/assets/download.jpeg",
      brandname: "Puma",
      description: "Puma Graphic Men's T-Shirt (White)",
      category: "tshirt",
      rating: "★★★★",
      price: "349/$",
    },
    {
      id: 6,
      image: "src/assets/download.jpeg",
      brandname: "Nike",
      description: "Nike Sportswear Hoodie (Navy)",
      category: "hoodie",
      rating: "★★★★★",
      price: "699/$",
    },
    {
      id: 7,
      image: "src/assets/download.jpeg",
      brandname: "Converse",
      description: "Converse Chuck Taylor All Star High-Top Sneakers (Black)",
      category: "shoes",
      rating: "★★★★",
      price: "59/$",
    },
    {
      id: 8,
      image: "src/assets/download.jpeg",
      brandname: "Wrangler",
      description: "Wrangler Slim Fit Stretch Jeans (Dark Wash)",
      category: "jeans",
      rating: "★★★",
      price: "79/$",
    },
    {
      id: 9,
      image: "src/assets/download.jpeg",
      brandname: "Puma",
      description: "Puma Essential Logo Women's T-Shirt (Pink)",
      category: "tshirt",
      rating: "★★★★★",
      price: "299/$",
    },
    {
      id: 10,
      image: "src/assets/download.jpeg",
      brandname: "Adidas",
      description: "Adidas Essentials 3-Stripes Hoodie (Black)",
      category: "hoodie",
      rating: "★★★★",
      price: "599/$",
    },
    {
      id: 11,
      image: "src/assets/download.jpeg",
      brandname: "Nike",
      description: "Nike Renew Run Women's Running Shoes (Pink/White)",
      category: "shoes",
      rating: "★★★★",
      price: "109/$",
    },
    {
      id: 12,
      image: "src/assets/download.jpeg",
      brandname: "Levi's",
      description: "Levi's 511 Slim Fit Jeans (Black)",
      category: "jeans",
      rating: "★★★★★",
      price: "99/$",
    },
  ];

  return (
    <>
      {console.log("working")}
      <Header />
      <div className="flex flex-wrap justify-evenly ">
        <Card  {...data[0]}/>
        <Card  {...data[1]}/>
        <Card  {...data[2]}/>
        <Card  {...data[3]}/>
      </div>
    </>
  );
}

export default App;
