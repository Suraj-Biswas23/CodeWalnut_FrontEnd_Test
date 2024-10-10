import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center p-4">
      <div className="flex items-center">
        <span>Source: </span>
        <a href="https://pokeapi.co/" className="ml-2">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="PokeAPI"
            width={120}
            height={40}
          />
        </a>
      </div>
      <span className="mt-2 text-sm">All rights reserved © Suraj Biswas</span>
    </footer>
  );
}
