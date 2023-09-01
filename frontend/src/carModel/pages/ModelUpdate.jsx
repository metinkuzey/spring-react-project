import React, { useReducer, useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getModelByIdReducer,
  updateModelReducer,
} from "../reducers/modelReducer";
import { getModelByIdAction, updateModelAction } from "../actions/modelAction";
import ModelForm from "../components/ModelForm";
import { getAllBrandsReducer } from "../../carBrand/reducers/brandReducer";
import { getAvailableYears } from "../../utils/Common";
import { getAllBrands } from "../../carBrand/actions/brandAction";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { v4 } from "uuid";
import Error from "../../components/Error";

const ModelUpdate = () => {
  const navigate = useNavigate();
  const { paramId } = useParams();

  const [getBrandState, getBrandDispatch] = useReducer(getAllBrandsReducer, {});
  const [getModel, getModelDispatch] = useReducer(getModelByIdReducer, {});
  const [updateModel, updateModelDispatch] = useReducer(updateModelReducer, {});

  // useStates to use components visibility
  const [modelId, setModelId] = useState("");
  const [modelName, setModelName] = useState("");
  const [modelYear, setModelYear] = useState("DEFAULT");
  const [selectBrand, setSelectBrand] = useState("DEFAULT");
  const [imageUploadURL, setImageUploadURL] = useState();
  const [imageUpload, setImageUpload] = useState(null);

  const fileInputRef = useRef(null);

  const years = getAvailableYears;

  useEffect(() => {
    getModelDispatch(getModelByIdAction(getModelDispatch, paramId));
    getBrandDispatch(getAllBrands(getBrandDispatch));
  }, [paramId]);

  useEffect(() => {
    if (getModel.model && getBrandState.brands) {
      setModelId(getModel.model.modelId);
      setModelName(getModel.model.modelName);
      setModelYear(getModel.model.modelYear);
      setImageUploadURL(getModel.model.modelPicture);
      setSelectBrand(getModel.model.brandId);
    }
  }, [getModel.model, getBrandState.brands]);

  useEffect(() => {
    if (imageUpload) {
      updateModelDispatch(
        updateModelAction(updateModelDispatch, {
          modelId: modelId,
          brandId: selectBrand,
          modelName: modelName,
          modelYear: modelYear,
          modelPicture: imageUploadURL,
        })
      );
    }
  }, [imageUploadURL]);

  useEffect(() => {
    if (updateModel.success) {
      navigate("/models");
    }
  }, [updateModel.success, navigate]);

  const formSubmit = (event) => {
    event.preventDefault();
    if (imageUpload) {
      uploadImage();
    } else {
      updateModelDispatch(
        updateModelAction(updateModelDispatch, {
          modelId: modelId,
          brandId: selectBrand,
          modelName: modelName,
          modelYear: modelYear,
          modelPicture: imageUploadURL,
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
    navigate("/models");
  };

  return (
    <>
      <div className="panel-style">
        <div className="flex justify-between items-center">
          <p className="underline underline-offset-1 decoration-double text-sm font-semibold text-black">
            Model Update Form
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

      {updateModel.error && <Error message={updateModel.error} />}

      <div className="p-10 flex">
        {getModel && !getModel.loading && getModel.model && (
          <>
            <img
              className="w-65 h-52 transition ease-in-out delay-75 hover:scale-110 duration-300 cursor-pointer"
              src={getModel.model.modelPicture}
              alt="car_picture"
            />

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
          </>
        )}
      </div>
    </>
  );
};

export default ModelUpdate;
