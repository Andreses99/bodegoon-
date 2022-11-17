import "./App.css";
import Header from "./Client/components/header/header";
import Router from "./Routes/routes";
import { CartProvider } from "./context/CartContext";
import { useEffect, useState } from "react";
import Loading from "./Client/components/loading/loading";
import { ModalProductProvider } from "./context/ModalProductContext";
import Footer from "./Client/components/footer/footer";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{setLoading(false)}, 3000);
  }, []);
  return (
    <>
      <CartProvider>
        <ModalProductProvider>
        {loading ? (
          <Loading />
        ) : (
          <div className="App">
            <header id="header" className="App-header">
              <Header />
            </header>

            <section>{<Router />}</section>

            <footer id="footer" className="footer">
              <Footer/>
            </footer>
          </div>
        )}
        </ModalProductProvider>
      </CartProvider>
    </>
  );
}

export default App;
