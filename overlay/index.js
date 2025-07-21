import "./styles.css";
import { useState } from "react";

const DATA = [
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2025/05/02/23/23/australia-9574728_1280.jpg",
    title: "Birds are very Beautiful in the nature"
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2022/08/16/05/50/straw-bales-7389396_1280.jpg",
    title: "Grass is shining like anything..."
  },
  {
    id: 3,
    url: "https://cdn.pixabay.com/photo/2022/11/05/22/11/channel-7572879_1280.jpg",
    title: "River flows nicer than we see"
  }
];

export default function App() {
  const [active, setActive] = useState(0);

  const Handlenext = () => {
    setActive((prev) => (prev === DATA.length - 1 ? 0 : prev + 1));
  };

  const Handleprev = () => {
    if (active > 0) setActive((prev) => prev - 1);
  };

  return (
    <div className="container">
      {DATA.map((item, index) => (
        <img
          key={item.id}
          src={item.url}
          alt={item.title}
          className={active === index ? "show" : "hide"}
        />
      ))}

      <div className="overlay"></div>

      <div className="show-text">
        {DATA.map((item, index) => (
          <span key={item.id} className={active === index ? "show" : "hide"}>
            {item.title}
          </span>
        ))}
      </div>

      <button onClick={Handleprev} className="prev">
        Prev
      </button>
      <button onClick={Handlenext} className="next">
        Next
      </button>

      <div className="dots-container">
        {DATA.map((_, index) => (
          <span
            key={index}
            onClick={() => setActive(index)}
            className={`dots ${active === index ? "bg-dots" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
