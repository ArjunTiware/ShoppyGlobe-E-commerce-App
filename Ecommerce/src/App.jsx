import { Home, Header, ProductList } from "./components/index";

function App() {
  return (
    <>
      <div className="App text-red-400">
        <Header />
        <Home />
        <ProductList />
      </div>
    </>
  );
}

export default App;
