import { TypeCardSkeleton } from "@/entities/type";
import classes from "./TypeList.module.scss";

const TypeListSkeleton = () => {
  return (
    <div className={classes.root}>
      <TypeCardSkeleton />
      <TypeCardSkeleton />
      <TypeCardSkeleton />
    </div>
  );
};

export default TypeListSkeleton;
