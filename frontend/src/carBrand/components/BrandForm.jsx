import React from "react";

const BrandForm = (props) => {
  const { brandName, setBrandName, formSubmit } = props;

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 p-10">
        <div className="col-start-2 col-span-4">
          <form onSubmit={formSubmit}>
            <label className="block">
              <h1 className="block text-md font-medium text-slate-700">
                Brand name
              </h1>
              <hr className="bg-black mt-2 h-px" />
              <input
                className="panel-form-input"
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Type your brand name..."
              />
            </label>
            <hr className="bg-black mt-2 h-px" />
            <div className="block text-end">
              <button className="btn-panel-form-submit" type="submit">
                Submit Brand
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrandForm;
