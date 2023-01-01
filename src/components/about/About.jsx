import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder2.png";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Zabiha Burger Hut</h4>
          <p>
            We are Zabiha Burger Hut. The place for most tasty burgers on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" height={300} width={200} />
              <h3>Ashraf Khan</h3>
            </div>

            <p>I am Ashraf Khan, the founder of Burger Hut.</p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
