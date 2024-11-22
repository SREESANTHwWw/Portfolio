import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

    const spanclr = 
    theme === "light" ? "dark":" "

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className="w-full  flex flex-col h-[700px] sm:h-[400px] justify-around  items-center sm:flex sm:flex-row sm:justify-around ">
      <div className={"w-[200px] flex flex-col items-center h-[400px] justify-between "}>
        <span className={spanclr} >Web Technologies</span>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="React.js" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="express.js" />
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Context API" />
      </div>
     
    
      <div className={"w-[200px] flex flex-col items-center h-[200px]  justify-between "}>
      <span>Database Management</span>
        <SkillList src={checkMarkIcon} skill="MySql" />
        <SkillList src={checkMarkIcon} skill="DBMS" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
      </div>
      
     
      <div className={"w-[200px] flex flex-col items-center  h-[200px] justify-between "}>
      <span>Version Control</span>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Git Hub" />
        <SkillList src={checkMarkIcon} skill="Jest" />
      </div>
    
      <div className={"w-[200px] flex flex-col justify-between h-[70px]   items-center"}>
      <span>Testing</span>
        <SkillList src={checkMarkIcon} skill="Jest" />
      </div>
      </div>
    </section>
  );
}

export default Skills;
