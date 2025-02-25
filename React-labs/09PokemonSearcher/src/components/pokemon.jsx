import { useState, useEffect } from "react";
import { PokemonCard } from "./PokemonCard";
import "./pokemon.css";

export const Pokemon = () => {
  const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=649";
  const [detailedData, setDetailedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function FetchAPI() {
    try {
      let res = await fetch(apiURL);
      let data = await res.json();
      // console.log(data);

      const detailedPokemon = data.results.map(async (result) => {
        let detailedRes = await fetch(result.url);
        let data2 = await detailedRes.json();
        return data2;
      });
      const detailedResponse = await Promise.all(detailedPokemon);
      setDetailedData(detailedResponse);
      setLoading(false);
    } catch (error) {
      alert(error.message);
      setLoading(false);
      setError(error.message);
    }
  }
  console.log(detailedData);

  useEffect(() => {
    FetchAPI();
  }, []);


  //   search functionality
  const [searchInput, setSearchInput] = useState("");
  const searchedData = detailedData.filter((data) =>
    data.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <section>
        <h1>Let's catch Pokemon</h1>
        <input
          type="text"
          id="searchinput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <p>Results: {searchedData.length}</p>
        <ul>
          {searchedData.map((currPokemon) => {
            return (
             <PokemonCard Pokemon={currPokemon} key={currPokemon.id}/>
            );
          })}
        </ul>
      </section>
    </>
  );
};
