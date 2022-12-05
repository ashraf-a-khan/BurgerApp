import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpg";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={300} width={200} />
        <h3>Ashraf Khan</h3>
        <p>
          Hey everyone.
          <br />
          Best Zabiha Grassfed burgers on the planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
