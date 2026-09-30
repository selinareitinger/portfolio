import Destination from "./Destination";

export default function Amsterdam() {
  return (
    <Destination
      title="Amsterdam"
      variant="amsterdam"
      colors={{
        color1: "#C39466",
        color2: "#725446"
      }}
      heroImg={{
        src: "./src/assets/amsterdam/amsterdam-1.webp",
        alt: "Amsterdam"
      }}
      img1={{
        src: "./src/assets/amsterdam/amsterdam-2.webp",
        alt: "Amsterdam bei Nacht"
      }}
      img2={{
        src: "./src/assets/amsterdam/amsterdam-4.webp",
        alt: "Haus in Amsterdam"
      }}
      img3={{
        src: "./src/assets/amsterdam/amsterdam-3.webp",
        alt: "Windmühlen"
      }}
      text1={[
        "dicke Pommes Frites", 
        "frittierte Snacks",
        "süße Waffeln"
      ]}
      text1Title="Essen"
      text2={[
        "In Amsterdam: fabrique des lumières, Grachtenfahrt",
        "Ausflug zum Strand in Zandvoort",
        "Ausflug nach Zaanse Schans",
        "Ausflug nach Haarlem"
      ]}
      text2Title="Sehenswürdigkeiten"
    /> 
  )
}