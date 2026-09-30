import Destination from "./Destination";

export default function Rome() {
  return (
    <Destination
      title="Rom"
      variant="rome"
      colors={{
        color1: "#C39466",
        color2: "#784455"
      }}
      heroImg={{
        src: "./src/assets/rom/rom-1.webp",
        alt: "Rom"
      }}
      img1={{
        src: "./src/assets/rom/rom-4.webp",
        alt: "Italienische Pasta"
      }}
      img2={{
        src: "./src/assets/rom/rom-2.webp",
        alt: "Blick auf den Petersdom"
      }}
      img3={{
        src: "./src/assets/rom/rom-3.webp",
        alt: "Pantheon"
      }}
      text1={[
        "Come 'na Vorta Pasta e Vino Oseteria - Trastevere",
        "Pizza in Trevi",
        "Gelato",
        "Supplì: Reiskroketten mit Mozzarella gefüllt"
      ]}
      text1Title="Essen"
      text2={[
        "Kolosseum",
        "Petersdom",
        "Pantheon",
        "Forum Romanum",
        "Trevi-Brunnen"
      ]}
      text2Title="Sehenswürdigkeiten"
    />   
  )
}
