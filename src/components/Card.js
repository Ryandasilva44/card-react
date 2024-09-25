import Avatar from "../assets/Avatar.svg";
import "../App.scss";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";

function Cards() {
  const nome = '"Desenvolvedor Frontend"';
  const nome2 = "Ryan da Silva";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const props = useSpring({
    to: { transform: isVisible ? "scale(1)" : "scale(0.5)" },
    from: { transform: "scale(0.5)" },
    config: { tension: 30, friction: 20 },
  });

  return (
    <animated.div style={props}>
      <div className="card p-2 bg-dark" style={{ width: "25rem" }}>
        <img
          src={Avatar}
          alt="imagem de um cad com um avatar"
          className="card-img-top"
        />
        <div className="card-body text-light text-center">
          <h4 className="cad-tittle fw-bold">{nome2}</h4>
          <p
            className="card-text"
            style={{ fontSize: "1.2em", letterSpacing: ".1em" }}
          >
            <em>{nome}</em>
          </p>
          <a
            href="http://www.linkedin.com/in/ryan-front-end"
            target="_black"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Linkedin
          </a>
        </div>
      </div>
    </animated.div>
  );
}

export default Cards;
