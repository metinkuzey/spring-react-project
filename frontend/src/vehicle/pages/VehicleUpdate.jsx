import React, { useReducer, useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllModelsReducer } from "../../carModel/reducers/modelReducer";
import {
  getVehicleByIdReducer,
  updateVehicleReducer,
} from "../reducers/vehicleReducer";
import {
  getVehicleByIdAction,
  updateVehicleAction,
} from "../actions/vehicleAction";
import { getAllModelsAction } from "../../carModel/actions/modelAction";
import Error from "../../components/Error";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { v4 } from "uuid";
import VehicleForm from "../components/VehicleForm";

const VehicleUpdate = () => {
  const navigate = useNavigate();
  const { paramId } = useParams();

  const [getModelState, getModelDispatch] = useReducer(getAllModelsReducer, {});
  const [getVehicle, getVehicleDispatch] = useReducer(
    getVehicleByIdReducer,
    {}
  );
  const [updateVehicle, updateVehicleDispatch] = useReducer(
    updateVehicleReducer,
    {}
  );

  const [vehicleId, setVehicleId] = useState("");
  const [selectModel, setSelectModel] = useState("DEFAULT");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [imageUploadURL, setImageUploadURL] = useState();
  const [imageUpload, setImageUpload] = useState(null);

  const fileInputRef = useRef(null);

  useEffect(() => {
    getVehicleDispatch(getVehicleByIdAction(getVehicleDispatch, paramId));
    getModelDispatch(getAllModelsAction(getModelDispatch));
  }, [paramId]);

  useEffect(() => {
    if (getVehicle.vehicle && getModelState.models) {
      setVehicleId(getVehicle.vehicle.vehicleId);
      setSelectModel(getVehicle.vehicle.modelId);
      setVehiclePlate(getVehicle.vehicle.plateNr);
      setImageUploadURL(getVehicle.vehicle.vehiclePicture);
    }
  }, [getVehicle.vehicle, getModelState.models]);

  useEffect(() => {
    if (imageUpload) {
      updateVehicleDispatch(
        updateVehicleAction(updateVehicleAction, {
          vehicleId: vehicleId,
          plateNr: vehiclePlate,
          modelId: selectModel,
          modelPicture: imageUploadURL,
        })
      );
    }
  }, [imageUploadURL]);

  useEffect(() => {
    if (updateVehicle.success) {
      navigate("/vehicles");
    }
  }, [updateVehicle.success, navigate]);

  const formSubmit = (event) => {
    event.preventDefault();
    if (imageUpload) {
      uploadImage();
    } else {
      updateVehicleDispatch(
        updateVehicleAction(updateVehicleDispatch, {
          vehicleId: vehicleId,
          plateNr: vehiclePlate,
          modelId: selectModel,
          vehiclePicture: imageUploadURL,
        })
      );
    }
  };

  const uploadImage = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `models/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      downloadImageURL(snapshot);
    });
  };

  const downloadImageURL = async (snapshot) => {
    try {
      const url = await getDownloadURL(snapshot.ref);
      setImageUploadURL(url);
    } catch (error) {
      // Handle any errors that may occur during the process
      console.error("Error getting download URL:", error);
    }
  };

  const performBack = () => {
    navigate("/vehicles");
  };

  return (
    <>
      <div className="panel-style">
        <div className="flex justify-between items-center">
          <p className="underline underline-offset-1 decoration-double text-sm font-semibold text-black">
            Vehicle Update Form
          </p>
          <button
            className=" hover:text-orange-600 px-3 py-1"
            onClick={performBack}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </button>
        </div>
      </div>

      {updateVehicle.error && <Error message={updateVehicle.error} />}

      <div className="p-10 flex">
        {getVehicle && !getVehicle.loading && getVehicle.vehicle && (
          <>
            <img
              className="w-65 h-52 transition ease-in-out delay-75 hover:scale-110 duration-300 cursor-pointer"
              src={getVehicle.vehicle.vehiclePicture}
              alt="car_picture"
            />

            <VehicleForm
              models={getModelState.models}
              selectModel={selectModel}
              setSelectModel={setSelectModel}
              vehiclePlate={vehiclePlate}
              setVehiclePlate={setVehiclePlate}
              fileInputRef={fileInputRef}
              setImageUpload={setImageUpload}
              formSubmit={formSubmit}
            />
          </>
        )}
      </div>
    </>
  );
};

export default VehicleUpdate;
