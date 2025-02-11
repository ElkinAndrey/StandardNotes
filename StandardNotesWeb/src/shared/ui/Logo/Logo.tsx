import classes from "./Logo.module.scss";
import logo from "@/assets/minilogo.svg";

const Logo = () => {
  return (
    <div className={classes.root}>
      <img className={classes.image} src={logo} alt="Логотип" />
      <span className={classes.text}>Заметки</span>
    </div>
  );
};

export default Logo;
