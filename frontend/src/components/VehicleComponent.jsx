import React, { useEffect, useReducer } from "react";
import Card from "../components/Card";
import { getAllModelsReducer } from "../carModel/reducers/modelReducer";
import { getAllModelsAction } from "../carModel/actions/modelAction";
import Loader from "./Loader";

const VehicleComponent = () => {
  const [getAllModelState, getAllModelsDispatch] = useReducer(
    getAllModelsReducer,
    {}
  );

  useEffect(() => {
    getAllModelsDispatch(getAllModelsAction(getAllModelsDispatch));
  }, []);

  return (
    <>
      {getAllModelState.loading && <Loader />}

      {getAllModelState.models !== undefined &&
        getAllModelState.models.map((model) => {
          return <Card key={model.modelId} model={model} />;
        })}
    </>
  );
};

export default VehicleComponent;
