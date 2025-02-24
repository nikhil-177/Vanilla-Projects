import { useState, useEffect } from "react";
import "./pokemon.css";

export const Pokemon = () => {
  const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=100";
  const [detailedData, setDetailedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function hello() {
    try {
      let res = await fetch(apiURL);
      let data = await res.json();
      // console.log(data);

      const detailedPokemon = data.results.map(async (result) => {
        let detailedRes = await fetch(result.url);
        let data2 = await detailedRes.json();
        // console.log(data2);
        return data2;
      });
      const detailedResponse = await Promise.all(detailedPokemon);
      // console.log(detailedResponse);
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
    hello();
  }, []);

  //Hidden ability
  const [hiddenAbility, setHiddenAbility] = useState("");
  function getHiddenaAbility() {
    const get = currPokemon.abilities[1].ability.name;
    if(get){
        setHiddenAbility(get)
    }
    else{
        setHiddenAbility("-");
    }
  }


//   search functionality
  const [searchInput, setSearchInput] = useState('')
//   console.log(searchInput);

  const searchedData = detailedData.filter((data) => data.name.toLowerCase().includes(searchInput.toLowerCase()))
//   console.log(searcher);



  
  

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
        <h1>Let's catch Pokemon</h1>
        <input type="text" id="searchinput" value={searchInput} onChange={(e)=> setSearchInput(e.target.value)}/>
        <p>Results: {searchedData.length}</p>
      <ul>
        {searchedData.map((currPokemon) => {
          return (
            <li key={currPokemon.id}>
                <h1>#{currPokemon.id} {currPokemon.name}</h1>
              <img
                src={currPokemon.sprites.other.dream_world.front_default}
                alt={currPokemon.name}
                width={100}
                height={100}
              />

              <div>
                {currPokemon.types
                  .map((currType) => currType.type.name)
                  .join(", ")}
              </div>
              <div className="data">
                <div className="physica l-stats">
                  <h5>Physical Stats :</h5>
                  <span>Height : {currPokemon.height}</span>
                  <span>Weight : {currPokemon.weight}</span>
                </div>
                <div className="ability">
                  <h5>Abilities</h5>
                  <span>Primary : {currPokemon.abilities[0].ability.name}</span>
                  <span>Hidden : {hiddenAbility} </span>
                </div>
                <div className="base-stats">
                  <h5>Base Stats</h5>
                  <span> Hp : {currPokemon.stats[0].base_stat}</span>
                  <span>Attack : {currPokemon.stats[1].base_stat}</span>
                  <span>Defense : {currPokemon.stats[2].base_stat}</span>
                  <span>Sp.Attack: {currPokemon.stats[3].base_stat}</span>
                  <span>Sp.Defense : {currPokemon.stats[4].base_stat}</span>
                  <span>Base Speed : {currPokemon.stats[5].base_stat}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
