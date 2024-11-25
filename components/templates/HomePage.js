import styles from "@/components/templates/HomePage.module.css";

import Banner from "../modules/Baner";
import Attributes from "../modules/Atrributes";
import Definition from "../modules/Definition";
import Companies from "../modules/Companies";
import Instruction from "../modules/Instruction";
import Guide from "../modules/Guide";
import Restrictions from "../modules/Restriction";

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
}

export default HomePage;
