import TypeList from "@/widgets/type/TypeList/TypeList";
import classes from "./TypesPage.module.scss";
import { TypeHooks } from "@/entities/type";
import { useEffect, useState } from "react";
import { TypeCreate } from "@/features/type";

const TypesPage = () => {
  const [isOpenCreate, setIsOpenCreate] = useState<boolean>(false);
  const onCloseCreate = () => setIsOpenCreate(false);

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
        <button onClick={() => setIsOpenCreate(true)}>Добавить</button>
      </div>
      <TypeCreate isOpen={isOpenCreate} onClose={onCloseCreate} />
      <TypeList types={data ?? []} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default TypesPage;
