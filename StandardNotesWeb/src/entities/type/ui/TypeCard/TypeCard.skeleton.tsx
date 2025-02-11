import { JSX } from "react";
import classes from "./TypeCard.module.scss";
import { Skeleton } from "@mui/material";

function TypeCardSkeleton(): JSX.Element {
  return (
    <li className={classes.root}>
      <Skeleton variant="text" animation="wave" width={150} className={classes.name} />
      <div className={classes.children}>
        <Skeleton animation="wave" height={40} width={100} />
        <Skeleton animation="wave" height={40} width={100} />
      </div>
    </li>
  );
}

export default TypeCardSkeleton;
