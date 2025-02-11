import classes from "./TypesPage.module.scss";
import { Skeleton } from "@mui/material";
import { TypeListSkeleton } from "@/widgets/type";

const TypesPageSkeleton = () => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Skeleton variant="text" animation="wave" width={70} className={classes.title} />
        <Skeleton variant="rounded" animation="wave" width={100} height={30} />
      </div>
      <TypeListSkeleton />
    </div>
  );
};

export default TypesPageSkeleton;
