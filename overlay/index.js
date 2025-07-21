<div className="App">
  <h3>carousel Image</h3>
  <div className="container-image">
    {DATA.map((item, index) => (
      <img
        key={item.id}
        src={item.url}
        alt={item.title}
        className={index === activeIndex ? "active" : ""}
      />
    ))}
    <div class="overlay"></div>

    <button disabled={activeIndex === 0} className="prev" onClick={handlePrev}>
      Prev
    </button>

    <button
      disabled={activeIndex === DATA.length - 1}
      className="next"
      onClick={handleNext}
    >
      Next
    </button>

    <div className="dots">
      {DATA.map((_, index) => (
        <span
          onClick={() => SetactvieIndex(index)}
          key={index}
          className={`cricle-dots ${index === activeIndex ? "bg-dots" : ""}`}
        ></span>
      ))}
    </div>
  </div>
</div>;
