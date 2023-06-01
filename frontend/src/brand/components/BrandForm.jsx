import React from "react";

const BrandForm = (props) => {
  const { brandName, setBrandName, formSubmit } = props;

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 p-10">
        <div className="col-start-2 col-span-4">
          <form onSubmit={formSubmit}>
            <label className="block">
              <h1 class="block text-lg font-medium text-slate-700">
                Brand name
              </h1>
              <hr className="h-0.5 bg-black mt-2" />
              <input
                className="brand-form-input"
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Type your brand name..."
              />
            </label>
            <button className="btn-brand-form-submit" type="submit">
              Submit Brand
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrandForm;
