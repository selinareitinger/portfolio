import "./Destination.css";

export default function Destination({title, variant, colors, heroImg, img1, text1, text1Title, img2, img3, text2, text2Title}) {
  return(
        <div 
          className={`grid-destination ${variant}`}
          style={{
            "--color1": colors.color1,
            "--color2": colors.color2
          }}
        >
        <div className="hero">
            <h2 id="heading-hero"> {title}</h2>
            <img src={heroImg.src} alt={heroImg.alt}/>
        </div>
        <div className="img-1">
            <img src={img1.src} alt={img1.alt}/>
        </div>

        <div className="text-1">
            <h3>{text1Title}</h3>
            <ul>
                {text1.map((item, index) => (
                  <p>
                    <li key={index}>{item}</li>
                  </p>
                ))}
            </ul>
        </div>

        <div className="img-2">
            <img src={img2.src} alt={img2.alt}/> 
        </div>

        <div className="img-3">
            <img src={img3.src} alt={img3.alt}/>
        </div>

        <div className="text-2">
            <h3>{text2Title}</h3>
            <ul>
              {text2.map((item, index) => (
                <p>
                    <li key={index}>{item}</li>
                </p>
              ))}
            </ul>
        </div>
  </div>
  )
}