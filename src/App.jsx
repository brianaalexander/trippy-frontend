import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { TripsNew } from "./TripsNew";
import { PlacesNew } from "./PlacesNew";
import { TripsShow } from "./TripsShow";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trips" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/trips/new" element={<TripsNew />} />
            <Route path="/places/new" element={<PlacesNew />} />
            <Route path="/trips/:id" element={<TripsShow />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
