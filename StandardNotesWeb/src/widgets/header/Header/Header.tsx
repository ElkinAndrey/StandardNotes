import classes from "./Header.module.scss";
import { LinkButton, Logo } from "@/shared/ui";

const Header = () => {
  return (
    <header className={classes.root}>
      <Logo />
      <div className={classes.buttons}>
        <LinkButton variant="contained" to="/">
          Заметки
        </LinkButton>
        <LinkButton variant="contained" to="/types">
          Типы
        </LinkButton>
      </div>
    </header>
  );
};

export default Header;
