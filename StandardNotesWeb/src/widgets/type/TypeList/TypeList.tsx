import classes from "./TypeList.module.scss";
import React, { FC } from "react";
import TypeListSkeleton from "./TypeList.skeleton";
import TypeListProps from "./TypeList.props";

const TypeList: FC<TypeListProps> = ({ types = [], isLoading = false, isError = false }) => {
  if (isLoading) return <TypeListSkeleton />;
  if (isError) return <h2>Ошибка</h2>;
  if ((types ?? []).length === 0) return <h2>Список пуст</h2>;

  return (
    <React.Fragment>
      <div className={classes.root}>
        {(types ?? []).map((type) => (
          <div key={type.id} style={{ margin: "10px", border: "1px solid red" }}>
            <div>{type.id}</div>
            <div>{type.name}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default TypeList;
