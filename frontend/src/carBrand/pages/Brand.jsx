import React, { useEffect, useReducer, useState } from "react";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import PopupModel from "../../components/PopupModel";
import Success from "../../components/Success";
import {
  createBrand as createBrandAction,
  getAllBrands,
  deleteBrand as deleteBrandAction,
  updateBrand as updateBrandAction,
} from "../actions/brandAction";
import BrandCard from "../components/BrandCard";
import BrandForm from "../components/BrandForm";
import BrandPanel from "../components/BrandPanel";
import {
  createBrandReducer,
  getAllBrandsReducer,
  deleteBrandReducer,
  updateBrandReducer,
} from "../reducers/brandReducer";
import PopupForm from "../../components/PopupForm";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Brand = () => {
  const axiosPrivate = useAxiosPrivate();

  // useReducers to handle api requests
  const [getBrandState, getDispatch] = useReducer(getAllBrandsReducer, {});
  const [createBrand, createDispatch] = useReducer(createBrandReducer, {});
  const [deleteBrand, deleteDispatch] = useReducer(deleteBrandReducer, {});
  const [updateBrand, updateDispatch] = useReducer(updateBrandReducer, {});

  // useStates to use components visibility
  const [isShowForm, setIsShowForm] = useState(false);
  const [isShowBrandList, setIsShowBrandList] = useState(false);
  const [brandName, setBrandName] = useState("");

  // delete states
  const [deleteState, setDeleteState] = useState();
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  // update states
  const [isUpdateModelOpen, setIsUpdateModelOpen] = useState(false);
  const [updateState, setUpdateState] = useState({});

  // trigger useEffect according to create, delete and update event
  useEffect(() => {
    getDispatch(getAllBrands(getDispatch));
  }, [createBrand, deleteBrand.success, updateBrand.success]);

  const formHandler = () => {
    setIsShowForm((prevState) => !prevState);
  };

  const brandListHandler = () => {
    setIsShowBrandList((prevState) => !prevState);
  };

  const deleteModelHandler = (id) => {
    setIsDeleteModelOpen((prev) => !prev);
    setDeleteState(id);
  };

  // trigger delete dispatch and change delete states to default
  const performBrandDelete = () => {
    deleteDispatch(deleteBrandAction(deleteDispatch, deleteState));
    setDeleteState(null);
    setIsDeleteModelOpen(false);
  };

  const updateModelHandler = (brand) => {
    setIsUpdateModelOpen((prev) => !prev);
    setUpdateState(brand);
  };

  // trigger update dispatch and change update states to default
  const performBrandUpdate = () => {
    updateDispatch(updateBrandAction(updateDispatch, updateState));
    setUpdateState({});
    setIsUpdateModelOpen(false);
  };

  // handle create brand form
  const handleSubmit = (event) => {
    event.preventDefault(); // in order to cancel form submit and follow our own create process
    createDispatch(
      createBrandAction(createDispatch, { name: brandName }, axiosPrivate)
    );
    setBrandName("");
  };

  return (
    <div>
      {getBrandState.loading && <Loader />}

      <PopupModel
        isOpen={isDeleteModelOpen}
        options={["Yes, I'm sure", "No, cancel"]}
        visibilityHandler={deleteModelHandler}
        actionHandler={performBrandDelete}
      >
        <p> Are you sure you want to delete this brand?</p>
      </PopupModel>

      <PopupForm
        isOpen={isUpdateModelOpen}
        options={["Save", "Cancel"]}
        visibilityHandler={updateModelHandler}
        actionHandler={performBrandUpdate}
      >
        <p>Please enter new brand name to update.</p>
        <input
          className="panel-form-input text-black"
          value={updateState.name}
          onChange={(e) =>
            setUpdateState((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </PopupForm>

      <BrandPanel
        panelName={"Create Brand"}
        performPanelHandler={formHandler}
      />

      {createBrand.error && <Error message={createBrand.error} />}

      {createBrand.success && (
        <Success message={"Record succesfully created..."} />
      )}

      {isShowForm && (
        <BrandForm
          isShowForm={isShowForm}
          setBrandName={setBrandName}
          formSubmit={handleSubmit}
          brandName={brandName}
        />
      )}

      <div className=" mt-2">
        <BrandPanel
          panelName={"List of Brands"}
          performPanelHandler={brandListHandler}
        />
      </div>

      {deleteBrand.error && <Error message={deleteBrand.error} />}

      {deleteBrand.success && (
        <Success message={"Record deleted succesfully..."} />
      )}

      {updateBrand.error && <Error message={updateBrand.error} />}

      {updateBrand.success && (
        <Success message={"Record updated succesfully..."} />
      )}

      <div className="px-10 py-4">
        {isShowBrandList &&
          getBrandState.brands !== undefined &&
          getBrandState.brands.map((brand) => {
            return (
              <BrandCard
                key={brand.brandId}
                brand={brand}
                openDeleteModel={deleteModelHandler}
                openUpdateModel={updateModelHandler}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Brand;
