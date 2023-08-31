import React from "react";

const VehicleForm = (props) => {
  const {
    models,
    selectModel,
    setSelectModel,
    vehiclePlate,
    setVehiclePlate,
    fileInputRef,
    setImageUpload,
    formSubmit,
  } = props;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageUpload(file);
  };

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 p-10">
        <div className="col-start-2 col-span-4">
          <form onSubmit={formSubmit}>
            <label className="block">
              <h1 className="block text-md font-medium text-slate-700">
                Vehicle Form
              </h1>
              <hr className="bg-black mt-2 h-px" />
              <div className="flex gap-3">
                <select
                  name="models"
                  id="models"
                  className="panel-form-dropdown"
                  onChange={(e) => setSelectModel(e.target.value)}
                  value={selectModel}
                >
                  <option value="DEFAULT" disabled>
                    Choose a model ...
                  </option>
                  {models &&
                    models.map((model) => {
                      return (
                        <option key={model.modelId} value={model.modelId}>
                          {model.modelName}
                        </option>
                      );
                    })}
                </select>
                <input
                  className="panel-form-input required:border-red-500"
                  type="text"
                  value={vehiclePlate}
                  onChange={(e) => setVehiclePlate(e.target.value)}
                  placeholder="Type your vehicle plate..."
                />
              </div>
              <div className="flex gap-5 mt-3 items-center">
                <p className="text-sm  text-orange-800 ml-2">
                  Upload Vehicle Image
                </p>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="text-sm text-slate-500 text-right file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 
                  file:text-sm file:font-semibold
                file:bg-orange-50 file:text-orange-700
                hover:file:bg-orange-100"
                  ref={fileInputRef}
                />
              </div>
            </label>
            <hr className="bg-black mt-3 h-px" />
            <div className="block text-end">
              <button className="btn-panel-form-submit" type="submit">
                Submit Vehicle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VehicleForm;
