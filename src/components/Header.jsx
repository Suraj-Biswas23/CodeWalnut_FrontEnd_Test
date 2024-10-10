import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <Image
        src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png"
        alt="Pokemon Logo"
        width={250}
        height={100}
        className="pokemon-logo"
      />

      <div className="title flex items-center">
        <Image
          src="https://www.pngkey.com/png/full/144-1446994_pokeball-clipart-transparent-background-pokeball-png.png"
          alt="Pokeball"
          width={50}
          height={50}
          className="pokeball"
        />
        <h1 className="text-4xl font-bold ml-1">Pokedex</h1>
      </div>
    </header>
  );
}
