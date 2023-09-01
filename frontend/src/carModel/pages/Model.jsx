import React, { useState, useEffect, useReducer, useRef } from "react";
import ModelPanel from "../components/ModelPanel";
import ModelForm from "../components/ModelForm";
import { getAllBrandsReducer } from "../../carBrand/reducers/brandReducer";
import { getAllBrands } from "../../carBrand/actions/brandAction";
import Loader from "../../components/Loader";
import { storage } from "../../config/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import {
  createModelReducer,
  deleteModelReducer,
  getAllModelsReducer,
} from "../reducers/modelReducer";
import {
  createModelAction,
  deleteModelAction,
  getAllModelsAction,
} from "../actions/modelAction";
import Success from "../../components/Success";
import ModelCard from "../components/ModelCard";
import PopupModel from "../../components/PopupModel";
import Error from "../../components/Error";
import { getAvailableYears } from "../../utils/Common";

const Model = () => {
  const navigate = useNavigate();
  const imageListRef = ref(storage, "models/");

  // useReducers to handle api requests
  const [getBrandState, getDispatch] = useReducer(getAllBrandsReducer, {});
  const [createModel, createModelDispatch] = useReducer(createModelReducer, {});
  const [getAllModelState, getAllModelsDispatch] = useReducer(
    getAllModelsReducer,
    {}
  );
  const [deleteModel, deleteModelDispatch] = useReducer(deleteModelReducer, {});

  // useStates to use components visibility
  const [isShowForm, setIsShowForm] = useState(false);
  const [modelName, setModelName] = useState("");
  const [modelYear, setModelYear] = useState("DEFAULT");
  const [selectBrand, setSelectBrand] = useState("DEFAULT");
  const [imageUploadURL, setImageUploadURL] = useState();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [isShowModelList, setIsShowModelList] = useState(false);

  // delete states
  const [deleteState, setDeleteState] = useState();
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);

  const fileInputRef = useRef(null);
  const initialized = useRef(false);

  const years = getAvailableYears;

  // trigger useEffect according to create, delete and update event
  useEffect(() => {
    getDispatch(getAllBrands(getDispatch));
    getAllModelsDispatch(getAllModelsAction(getAllModelsDispatch));
  }, []);

  useEffect(() => {
    getAllModelsDispatch(getAllModelsAction(getAllModelsDispatch));
  }, [createModel, deleteModel.success]);

  useEffect(() => {
    if (!initialized.current) {
      listAll(imageListRef).then((response) =>
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageList((prev) => [...prev, url]);
          });
        })
      );
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    if (imageUploadURL) {
      console.log("imageUploadURL changed:", imageUploadURL);
      createModelDispatch(
        createModelAction(createModelDispatch, {
          brandId: selectBrand,
          modelName: modelName,
          modelYear: modelYear,
          modelPicture: imageUploadURL,
        })
      );

      clearForm();
    }
  }, [imageUploadURL]);

  const modelListHandler = () => {
    setIsShowModelList((prevState) => !prevState);
  };

  const formHandler = () => {
    setIsShowForm((prevState) => !prevState);
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

  const validateFormInput = () => {
    if (!modelName || !selectBrand || !imageUpload || !modelYear) {
      return false;
    }
    return true;
  };

  const clearForm = () => {
    setModelName("");
    setModelYear("DEFAULT");
    setSelectBrand("DEFAULT");
    setImageUpload(null);
    setImageUploadURL();
    fileInputRef.current.value = null;
  };

  const deleteModelHandler = (id) => {
    setIsDeleteModelOpen((prev) => !prev);
    setDeleteState(id);
  };

  // trigger delete dispatch and change delete states to default
  const performModelDelete = () => {
    deleteModelDispatch(deleteModelAction(deleteModelDispatch, deleteState));
    setDeleteState(null);
    setIsDeleteModelOpen(false);
  };

  const pushToModelUpdatePage = (id) => {
    navigate(`/models/${id}`);
  };

  return (
    <div>
      {getAllModelState.loading && <Loader />}

      <PopupModel
        isOpen={isDeleteModelOpen}
        options={["Yes, I'm sure", "No, cancel"]}
        visibilityHandler={deleteModelHandler}
        actionHandler={performModelDelete}
      >
        <p> Are you sure you want to delete this model?</p>
      </PopupModel>

      <ModelPanel
        panelName={"Create Model"}
        performPanelHandler={formHandler}
      />

      {createModel.error && <Error message={createModel.error} />}

      {createModel.success && (
        <Success message={"Record succesfully created..."} />
      )}

      {isShowForm && (
        <ModelForm
          brands={getBrandState.brands}
          selectBrand={selectBrand}
          setSelectBrand={setSelectBrand}
          years={years}
          modelYear={modelYear}
          setModelYear={setModelYear}
          modelName={modelName}
          setModelName={setModelName}
          imageUpload={imageUpload}
          setImageUpload={setImageUpload}
          formSubmit={formSubmit}
          fileInputRef={fileInputRef}
        />
      )}

      <div className=" mt-2">
        <ModelPanel
          panelName={"List of Models"}
          performPanelHandler={modelListHandler}
        />
      </div>

      {deleteModel.error && <Error message={deleteModel.error} />}

      {deleteModel.success && (
        <Success message={"Record deleted succesfully..."} />
      )}

      {isShowModelList && (
        <div className="bg-orange-600 flex flex-wrap gap-20 p-10">
          {getAllModelState.models !== undefined &&
            getAllModelState.models.map((model) => {
              return (
                <ModelCard
                  key={model.modelId}
                  model={model}
                  openDeleteModel={deleteModelHandler}
                  pushToModelUpdatePage={pushToModelUpdatePage}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Model;
