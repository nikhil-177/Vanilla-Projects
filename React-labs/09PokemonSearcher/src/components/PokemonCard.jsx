export const PokemonCard = ({ Pokemon, key }) => {

  return (
    <li key={key}>
      <h1>
        #{Pokemon.id} {Pokemon.name}
      </h1>
      <div className="mover">
        <img
          src={Pokemon.sprites.other.dream_world.front_default}
          alt={Pokemon.name}
          width={100}
          height={100}
        />
      </div>
      <div className="type">
        {Pokemon.types.map((currType) => currType.type.name).join(", ")}
      </div>
      <div className="data">
        <div className="physical-stats">
          <h5>Physical Stats :</h5>
          <span>
            Height : {Pokemon.height} | Weight : {Pokemon.weight}
          </span>
        </div>
        <div className="ability">
          <h5>Abilities</h5>
          <span>
            Primary : {Pokemon.abilities[0].ability.name} | Hidden :{" "}
            {Pokemon.abilities[1]
              ? Pokemon.abilities[1].ability.name
              : "-"}
          </span>
        </div>
        <div className="base-stats">
          <h5>Base Stats</h5>
          <div className="stats">
            <span> Hp : {Pokemon.stats[0].base_stat}</span>
            <span>Attack : {Pokemon.stats[1].base_stat}</span>
            <span>Defense : {Pokemon.stats[2].base_stat}</span>
            <span>Sp.Attack: {Pokemon.stats[3].base_stat}</span>
            <span>Sp.Defense : {Pokemon.stats[4].base_stat}</span>
            <span>Base Speed : {Pokemon.stats[5].base_stat}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
