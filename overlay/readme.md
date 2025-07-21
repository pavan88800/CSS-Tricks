## 🖼️ React Image Carousel with Dot Navigation

## This project creates a responsive image carousel with next/prev buttons, image overlay text, and clickable dot navigation using React + CSS.

---

```js
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
```

---

## style.css

```css
.container {
  max-width: 650px;
  margin: 0 auto;
  position: relative;
}

.show {
  display: block;
}

.hide {
  display: none;
}

img {
  width: 100%;
  transition: 0.5s ease-in-out;
  object-fit: contain;
}

.prev,
.next {
  position: absolute;
  top: 50%;
}

.prev {
  left: 0px;
}

.next {
  right: 0px;
}

.overlay {
  position: absolute;
  top: 0%;
  left: 0%;
  bottom: 0%;
  right: 0%;
  background-color: rgba(0, 0, 0, 0.4);
}

.show-text {
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
}

.show-text > span {
  color: #fff;
  text-align: center;
  font-size: 20px;
}

button {
  border: none;
  padding: 10px;
  cursor: pointer;
}

.dots-container {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.dots {
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: #fff;
  border-radius: 50%;
  margin: 10px;
  cursor: pointer;
}

.dots.bg-dots {
  background-color: lightblue;
}
```

---

## 🧠 Important CSS Things to Remember for Carousels

---

1. position: relative on .container
   🔑 Makes sure all absolutely positioned elements (.next, .prev, .overlay, etc.) are positioned inside the image area.

```css
.container {
  position: relative;
}
```

---

2. position: absolute for elements on top of image
   Use it for buttons, text, overlay, and dots to layer them above the image.

```css
.prev,
.next,
.overlay,
.show-text {
  position: absolute;
}
```

---

3. Use .show and .hide classes
   🔁 Toggle elements using display: block and display: none — React will apply these based on active state.

```css
.show {
  display: block;
}
.hide {
  display: none;
}
```

---

4. Responsive image with width: 100%
   🖼️ Makes the image fit the container fully, and object-fit: contain keeps the aspect ratio.

```css
img {
  width: 100%;
  object-fit: contain;
}
```

---

5. Use rgba() for overlays
   To darken the image slightly without hiding it.

```css
.overlay {
  position: absolute;
  top: 0%;
  left: 0%;
  bottom: 0%;
  right: 0%;
background-color: rgba(0, 0, 0, 0.4); /_ semi-transparent black _/
}
```

---

## 🧠 Remember This Logic:

relative on parent → absolute inside

display: none to hide → display: block to show

width: 100% for full image

object-fit: contain to prevent stretch

Use transform to center

Style dots for active/inactive feedback
