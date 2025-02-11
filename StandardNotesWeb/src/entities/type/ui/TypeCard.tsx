import { JSX } from "react";
import classes from "./TypeCard.module.scss";
import TypeCardProps from "./TypeCard.props";

function TypeCard({ type = { id: "", name: "" }, children = null }: TypeCardProps): JSX.Element {
  return (
    <li className={classes.root}>
      <span className={classes.name}>{type.name}</span>
      <div className={classes.children}>{children}</div>
    </li>
  );
}

export default TypeCard;
