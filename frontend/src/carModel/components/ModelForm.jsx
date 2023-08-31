import React from "react";

const ModelForm = (props) => {
  const {
    brands,
    selectBrand,
    setSelectBrand,
    modelName,
    setModelName,
    years,
    modelYear,
    setModelYear,
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
                Model Form
              </h1>
              <hr className="bg-black mt-2 h-px" />
              <div className="flex gap-3">
                <select
                  name="brands"
                  id="brands"
                  className="panel-form-dropdown"
                  onChange={(e) => setSelectBrand(e.target.value)}
                  value={selectBrand}
                >
                  <option value="DEFAULT" disabled>
                    Choose a brand ...
                  </option>
                  {brands &&
                    brands.map((brand) => {
                      return (
                        <option key={brand.brandId} value={brand.brandId}>
                          {brand.name}
                        </option>
                      );
                    })}
                </select>
                <input
                  className="panel-form-input required:border-red-500"
                  type="text"
                  value={modelName}
                  onChange={(e) => setModelName(e.target.value)}
                  placeholder="Type your model name..."
                />
              </div>
              <div className="flex gap-5 mt-2 text-start">
                <select
                  name="modelYear"
                  id="modelYear"
                  className="panel-form-dropdown-year"
                  onChange={(e) => setModelYear(e.target.value)}
                  value={modelYear}
                >
                  <option value="DEFAULT" disabled>
                    Choose a year...
                  </option>
                  {years.map((year) => {
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
                <div className="flex gap-5 mt-3 items-center">
                  <p className="text-sm  text-orange-800 ml-2">
                    Upload Model Image
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
              </div>
            </label>
            <hr className="bg-black mt-3 h-px" />
            <div className="block text-end">
              <button className="btn-panel-form-submit" type="submit">
                Submit Model
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModelForm;
