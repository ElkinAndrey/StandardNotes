import classes from "./TypeList.module.scss";

const TypeListSkeleton = () => {
  return (
    <div className={classes.root}>
      <div style={{ margin: "10px", padding: "20px", background: "gray" }}></div>
      <div style={{ margin: "10px", padding: "20px", background: "gray" }}></div>
      <div style={{ margin: "10px", padding: "20px", background: "gray" }}></div>
    </div>
  );
};

export default TypeListSkeleton;
