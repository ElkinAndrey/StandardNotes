import TypeList from "@/widgets/type/TypeList/TypeList";
import classes from "./TypesPage.module.scss";
import { TypeHooks } from "@/entities/type";
import { useEffect } from "react";

const TypesPage = () => {
  const { data, isLoading, isError, refetch, isFetching } = TypeHooks.useGet({
    start: 0,
    length: 10,
  });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className={classes.root}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>Типы</h1>
        {!isLoading && isFetching && <span>Перезагрузка...</span>}
      </div>
      <TypeList types={data ?? []} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default TypesPage;
