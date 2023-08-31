import React, { useState, useEffect, useRef, useReducer } from "react";
import VehiclePanel from "../components/VehiclePanel";
import VehicleForm from "../components/VehicleForm";
import { getAllModelsReducer } from "../../carModel/reducers/modelReducer";
import { getAllModelsAction } from "../../carModel/actions/modelAction";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { v4 } from "uuid";
import {
  createVehicleReducer,
  deleteVehicleReducer,
  getAllVehiclesReducer,
} from "../reducers/vehicleReducer";
import {
  createVehicleAction,
  deleteVehicleAction,
  getAllVehiclesAction,
} from "../actions/vehicleAction";
import Success from "../../components/Success";
import Error from "../../components/Error";
import VehicleCard from "../components/VehicleCard";
import { useNavigate } from "react-router-dom";
import PopupModel from "../../components/PopupModel";
import Loader from "../../components/Loader";

const Vehicle = () => {
  const navigate = useNavigate();

  // useReducers to handle api requests
  const [getModelState, getModelDispatch] = useReducer(getAllModelsReducer, {});
  const [createVehicle, createVehicleDispatch] = useReducer(
    createVehicleReducer,
    {}
  );
  const [getVehicleState, getVehicleDispatch] = useReducer(
    getAllVehiclesReducer,
    {}
  );
  const [deleteVehicle, deleteVehicleDispatch] = useReducer(
    deleteVehicleReducer,
    {}
  );

  const [isShowForm, setIsShowForm] = useState(false);
  const [selectModel, setSelectModel] = useState("DEFAULT");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [imageUploadURL, setImageUploadURL] = useState();
  const [imageUpload, setImageUpload] = useState(null);
  const [isShowVehicleList, setIsShowVehicleList] = useState(false);

  // delete states
  const [deleteState, setDeleteState] = useState();
  const [isDeleteVehicleOpen, setIsDeleteVehicleOpen] = useState(false);

  const fileInputRef = useRef(null);

  // trigger useEffect according to create, delete and update event
  useEffect(() => {
    getModelDispatch(getAllModelsAction(getModelDispatch));
    getVehicleDispatch(getAllVehiclesAction(getVehicleDispatch));
  }, []);

  useEffect(() => {
    getVehicleDispatch(getAllVehiclesAction(getVehicleDispatch));
  }, [createVehicle, deleteVehicle.success]);

  useEffect(() => {
    if (imageUploadURL) {
      console.log("imageUploadURL changed:", imageUploadURL);
      createVehicleDispatch(
        createVehicleAction(createVehicleDispatch, {
          plateNr: vehiclePlate,
          modelId: selectModel,
          vehiclePicture: imageUploadURL,
        })
      );

      clearForm();
    }
  }, [imageUploadURL]);

  const formHandler = () => {
    setIsShowForm((prevState) => !prevState);
  };

  const vehicleListHandler = () => {
    setIsShowVehicleList((prevState) => !prevState);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    if (!validateFormInput()) {
      alert("All fields of the form is required.");
      return;
    }

    uploadImage();
  };

  const uploadImage = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `vehicles/${imageUpload.name + v4()}`);
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

  const validateFormInput = () => {
    if (selectModel === "DEFAULT" || !vehiclePlate || !imageUpload) {
      return false;
    }
    return true;
  };

  const deleteVehicleHandler = (id) => {
    setIsDeleteVehicleOpen((prev) => !prev);
    setDeleteState(id);
  };

  // trigger delete dispatch and change delete states to default
  const performVehicleDelete = () => {
    deleteVehicleDispatch(
      deleteVehicleAction(deleteVehicleDispatch, deleteState)
    );
    setDeleteState(null);
    setIsDeleteVehicleOpen(false);
  };

  const clearForm = () => {
    setVehiclePlate("");
    setSelectModel("DEFAULT");
    setImageUpload(null);
    setImageUploadURL();
    fileInputRef.current.value = null;
  };

  const pushToModelUpdatePage = (id) => {
    navigate(`/vehicles/${id}`);
  };

  return (
    <div>
      {getVehicleState.loading && <Loader />}

      <VehiclePanel
        panelName={"Create Vehicle"}
        performPanelHandler={formHandler}
      />

      <PopupModel
        isOpen={isDeleteVehicleOpen}
        options={["Yes, I'm sure", "No, cancel"]}
        visibilityHandler={deleteVehicleHandler}
        actionHandler={performVehicleDelete}
      >
        <p> Are you sure you want to delete this model?</p>
      </PopupModel>

      {createVehicle.error && <Error message={createVehicle.error} />}

      {createVehicle.success && (
        <Success message={"Record succesfully created..."} />
      )}

      {isShowForm && (
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
      )}

      <div className="mt-2">
        <VehiclePanel
          panelName={"List of Vehicles"}
          performPanelHandler={vehicleListHandler}
        />
      </div>

      {deleteVehicle.error && <Error message={deleteVehicle.error} />}

      {deleteVehicle.success && (
        <Success message={"Record deleted succesfully..."} />
      )}

      {isShowVehicleList && (
        <div className="bg-orange-600 flex flex-wrap gap-20 p-10">
          {getVehicleState.vehicles !== undefined &&
            getVehicleState.vehicles.map((vehicle) => {
              return (
                <VehicleCard
                  key={vehicle.vehicleId}
                  vehicle={vehicle}
                  openDeleteVehicle={deleteVehicleHandler}
                  pushToVehicleUpdatePage={pushToModelUpdatePage}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Vehicle;
