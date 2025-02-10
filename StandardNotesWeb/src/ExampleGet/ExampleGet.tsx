import { TypeHooks } from "@/entities/type";
import { useEffect, useState } from "react";

const ExampleGet = () => {
  const [paramses, setParamses] = useState<any[]>([]);
  const params = TypeHooks.useGet({ start: 0, length: 10 });

  useEffect(() => {
    setParamses((state) => [...state, params]);
  }, [params]);

  return (
    <div>
      <button onClick={params.refetch}>123</button>
      <table>
        <thead>
          <tr>
            <th>isError</th>
            <th>isFetching</th>
            <th>isLoading</th>
            <th>isSuccess</th>
            <th>isUninitialized</th>
            <th>status</th>
            <th>endpointName</th>
            <th>fulfilledTimeStamp</th>
            <th>requestId</th>
            <th>startedTimeStamp</th>
            <th>originalArgs</th>
            <th>currentData</th>
            <th>data</th>
          </tr>
        </thead>
        <tbody>
          {paramses.map((p, index) => (
            <tr key={index}>
              <td>{`${p.isError}`}</td>
              <td>{`${p.isFetching}`}</td>
              <td>{`${p.isLoading}`}</td>
              <td>{`${p.isSuccess}`}</td>
              <td>{`${p.isUninitialized}`}</td>
              <td>{`${p.status}`}</td>
              <td>{`${p.endpointName}`}</td>
              <td>{`${p.fulfilledTimeStamp}`}</td>
              <td>{`${p.requestId}`}</td>
              <td>{`${p.startedTimeStamp}`}</td>
              <td>{`${JSON.stringify(p.originalArgs)}`}</td>
              <td>{`${JSON.stringify(p.currentData)}`}</td>
              <td>{`${JSON.stringify(p.data)}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExampleGet;
