import Header from "./components/client/Header";
import Container from "./components/client/Container";
import Footer from "./components/client/Footer";

function App() {
  return (
    <div className="flex flex-col w-full h-screen bg-backgroundColor">
      <Header />
      <div className="flex-1 pt-[120px]">
        <Container />
      </div>
      <Footer />
    </div>
  );
}

export default App;
