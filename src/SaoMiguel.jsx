import Destination from "./Destination";

export default function SaoMiguel() {
  return(
    <Destination
      title="São Miguel"
      variant="sao-miguel"
      colors={{
            color1: "#2A5965",
            color2: "#739C77"
          }}
          heroImg={{
            src: "./src/assets/sao-miguel/sao-miguel-1.webp",
            alt: "São Miguel"
          }}
          img1={{
            src: "./src/assets/sao-miguel/sao-miguel-4.webp",
            alt: "Wasserfall"
          }}
          img2={{
            src: "./src/assets/sao-miguel/sao-miguel-2.webp",
            alt: "Delfine"
          }}
          img3={{
            src: "./src/assets/sao-miguel/sao-miguel-3.webp",
            alt: "Meer und Klippen"
          }}
          text1={[
            "Mietwagen nehmen",
            "Kleidung für jedes Wetter, da sehr wechselhaft",
            "Mindestens eine Woche einplanen",
            "Hortensienblüte: Juni bis September"
          ]}
          text1Title="Tipps"
          text2={[
            "Wanderung: Salto do Prego",
            "Heiße Quellen zum Baden",
            "Viele Seen",
            "Delfin- und Walbeobachtung"
          ]}
          text2Title="Sehenswürdigkeiten"
        />
  )
}