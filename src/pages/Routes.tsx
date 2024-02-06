import { Route, Routes } from "react-router-dom";
import Frontend from "./Frontend";
import Details from "./Nfts/Details";
import Footer from "../components/Footer/Footer";
import Collection from "./Collections/Collection";
import Header from "../components/Header/Header";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Frontend />} />
          <Route path="/collection/:collection_slug" element={<Collection />} />
          <Route path="/nft" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
