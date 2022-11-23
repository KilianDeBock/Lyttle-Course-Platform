import React from "react";

const ContactPage = () => {
  const hookL = "{";
  const hookR = "}";

  const toggleIframe = ({ target }) => {
    target.classList.toggle("active");
  };

  const closeIframe = ({ target }) => {
    target.parentNode.classList.remove("active");
  };

  return (
    <section className="container">
      <h2>Portfolio Work</h2>
      <div className="grid grid--2-text grid--center">
        <article className="code">
          <div className="code__line">
            const <span className="code__variable">belgianCityFestival</span>{" "}
            {hookL}
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">Pages</span>:{" "}
            <a
              className="code__value"
              href="https://kiliandebock.github.io/Gentse-Feesten-Clone/"
              target="_blank"
              rel="noreferrer"
            >
              https://kiliandebock.github.io/Gentse-Feesten-Clone/
            </a>
            ,
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">Code</span>:{" "}
            <a
              className="code__value"
              href="https://github.com/KilianDeBock/Gentse-Feesten-Clone"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/KilianDeBock/Gentse-Feesten-Clone
            </a>
          </div>
          <div className="code__line">{hookR}</div>
        </article>
        <div className="code code--fill code--img">
          <button
            className="iframe"
            onMouseLeave={(e) => closeIframe(e)}
            onClick={(e) => toggleIframe(e)}
          >
            <iframe
              title="gent"
              src="https://kiliandebock.github.io/Gentse-Feesten-Clone/"
            ></iframe>
          </button>
        </div>
      </div>
      <div className="grid grid--2-text grid--2-text-reverse grid--center">
        <article className="code">
          <div className="code__line">
            const <span className="code__variable">helpGirlsCode</span> {hookL}
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">Pages</span>:{" "}
            <a
              className="code__value"
              href="https://kiliandebock.github.io/She-Code-Africa"
              target="_blank"
              rel="noreferrer"
            >
              https://kiliandebock.github.io/She-Code-Africa
            </a>
            ,
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">Code</span>:{" "}
            <a
              className="code__value"
              href="https://github.com/KilianDeBock/She-Code-Africa"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/KilianDeBock/She-Code-Africa
            </a>
          </div>
          <div className="code__line">{hookR}</div>
        </article>
        <div className="code code--fill code--img code--img__highlight">
          <button
            className="iframe"
            onMouseLeave={(e) => closeIframe(e)}
            onClick={(e) => toggleIframe(e)}
          >
            <iframe
              title="she"
              src="https://kiliandebock.github.io/She-Code-Africa/"
            ></iframe>
          </button>
        </div>
      </div>
      <div className="grid grid--2-text grid--center">
        <article className="code">
          <div className="code__line">
            const <span className="code__variable">belgianArtist</span> {hookL}
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">Pages</span>:{" "}
            <a
              className="code__value"
              href="https://kiliandebock.github.io/Arne-Quinze-Clone/"
              target="_blank"
              rel="noreferrer"
            >
              https://kiliandebock.github.io/Arne-Quinze-Clone/
            </a>
            ,
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">Code</span>:{" "}
            <a
              className="code__value"
              href="https://github.com/KilianDeBock/Arne-Quinze-Clone"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/KilianDeBock/Arne-Quinze-Clone
            </a>
          </div>
          <div className="code__line">{hookR}</div>
        </article>
        <div className="code code--fill code--img">
          <button
            className="iframe"
            onMouseLeave={(e) => closeIframe(e)}
            onClick={(e) => toggleIframe(e)}
          >
            <iframe
              title="arne"
              src="https://kiliandebock.github.io/Arne-Quinze-Clone/"
            ></iframe>
          </button>
        </div>
      </div>
      <div className="grid grid--2-text-reverse grid--center">
        <article className="code">
          <div className="code__line">
            const <span className="code__variable">posterPresentation</span>{" "}
            {hookL}
          </div>
          <div className="code__line code__tab-1">
            <span className="code__key">Link</span>:{" "}
            <a
              className="code__value"
              href="/media/files/poster-presentation.pdf"
              target="_blank"
              rel="noreferrer"
            >
              https://www.kiliandebock.be/media/files/poster-presentation.pdf
            </a>
            ,
          </div>
          <div className="code__line">{hookR}</div>
        </article>
        <div className="code code--fill code--img">
          <button
            className="iframe"
            onMouseLeave={(e) => closeIframe(e)}
            onClick={(e) => toggleIframe(e)}
          >
            <iframe
              title="arne"
              src="/media/files/poster-presentation.pdf"
            ></iframe>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
