import React, { useState, useEffect } from "react";
import Home from "./Home/Home";
import Trending from "./TrendingSection/Trending";
import Collections from "./BrowseCollections/Collections";
import Discover from "./Discover/Discover";
import Subscribe from "./Subscribe/Subscribe";
import Work from "./HowItWorks/Work";
import Loader from "../../components/Loader/Loader";

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <Home />
          <Trending />
          <Collections />
          <Discover />
          <Work />
          <Subscribe />
        </main>
      )}
    </>
  );
}
