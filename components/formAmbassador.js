// Packages
import { useState } from "react";

//
import { WP_API_URL } from "../config/constants";

// Data
import dataForm from "../fakeData/formBrandAmbassador.json";
import Button from "./templates/button";

export default function FormAmbassador({ className }) {
  const [stateIsLoading, setStateIsLoading] = useState(false);
  const [stateHaveUsed, setStateHaveUsed] = useState("No");
  const [statePaidSponsor, setStatePaidSponsor] = useState("No");

  const handleSubmit = (e) => {
    e.preventDefault();

    setStateIsLoading(true);

    // Elements
    const el = document.querySelector("[data-form-message]");
    el.innerHTML = null;

    let errors = [];

    dataForm.forEach((input) => {
      let target = document.querySelector(`[name="${input.name}"]`);
      let mess = document.querySelector(`[name="${input.name}"] + span`);

      if (
        input.validation.required &&
        (target?.value == undefined || target.value == "")
      ) {
        errors.push(`${input.name}`);
        target?.classList.add("bg-red-50", "invalid", "border-red-200");
        mess?.classList.remove("hidden");
      } else {
        target?.classList.remove("bg-red-50", "invalid", "border-red-200");
        mess?.classList.add("hidden");
      }
    });

    if (!e.target.consent.checked) {
      errors.push("Please check consent.");
      document
        .querySelector(`input[name="consent"] + label`)
        .classList.add(`text-red-500`);
    } else {
      document
        .querySelector(`input[name="consent"] + label`)
        .classList.remove(`text-red-500`);
    }

    // Validate
    if (errors.length > 0) {
      setStateIsLoading(false);
      return false;
    }

    //
    let formData = new FormData();
    formData.append("_wpcf7_unit_tag", "form_id");
    formData.append("firstname", e.target.firstname.value);
    formData.append("lastname", e.target.lastname.value);
    formData.append("mobilephone", e.target.mobilephone.value);
    formData.append("email", e.target.email.value);
    formData.append("socialmedia", e.target.socialmedia.value);
    formData.append("location", e.target.location.value);
    formData.append("haveused", e.target.haveused.value);
    formData.append("accounttype", e.target.accounttype.value);
    formData.append("paidsponsor", e.target.paidsponsor.value);
    formData.append("costperpost", e.target.costperpost.value);
    formData.append("appeal", e.target.appeal.value);

    const options = {
      method: "POST",
      body: formData,
    };

    fetch(`${WP_API_URL}/contact-form-7/v1/contact-forms/86/feedback`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "mail_sent") {
          el.innerHTML = `<div class="text-center bg-green-50 text-green-500 py-3 mt-5">"Message sent!"</div>`;
          e.target.reset();
        } else {
          el.innerHTML = `<div class="text-center bg-red-50 text-red-500 py-3">Message failed!</div>`;
        }

        setStateIsLoading(false);
      })
      .catch((err) => console.log("err: ", err));
  };

  return (
    <form className={className} onSubmit={(e) => handleSubmit(e)}>
      {/** --- */}
      <div className="grid grid-cols-2 gap-5">
        <div className="mb-4 text-left">
          <input
            type="text"
            name="firstname"
            placeholder="First name*"
            className="w-full outline-none border border-[#cccccc]"
          />
          <span className="text-red-500 text-[14px] hidden ml-3">
            First name is required.
          </span>
        </div>
        <div className="mb-4 text-left">
          <input
            type="text"
            name="lastname"
            placeholder="Last name*"
            className="w-full outline-none border border-[#cccccc]"
          />
          <span className="text-red-500 text-[14px] hidden ml-3">
            Last name is required.
          </span>
        </div>
      </div>

      {/** --- */}
      <div className="grid grid-cols-2 gap-5">
        <div className="mb-4 text-left">
          <input
            type="text"
            name="email"
            placeholder="Email*"
            className="w-full outline-none border border-[#cccccc]"
          />
          <span className="text-red-500 text-[14px] hidden ml-3">
            Email is required.
          </span>
        </div>
        <div className="mb-4 text-left">
          <input
            type="text"
            name="mobilephone"
            placeholder="Mobile phone*"
            className="w-full outline-none border border-[#cccccc]"
          />
          <span className="text-red-500 text-[14px] hidden ml-3">
            Mobile phone is required.
          </span>
        </div>
      </div>

      {/** --- */}
      <div className="mb-4 text-left">
        <input
          type="text"
          name="location"
          placeholder="Where In the world are you?*"
          className="w-full outline-none border border-[#cccccc]"
        />
        <span className="text-red-500 text-[14px] hidden ml-3">
          Location is required.
        </span>
      </div>

      {/** --- */}
      <p className="mt-5 mb-3">Have you used pickup.ph in the past?</p>
      <div className="flex space-x-5">
        <div className="mb-4 text-left flex items-center">
          <input
            id="haveused_yes"
            type="radio"
            name="haveused"
            value="Yes"
            className=" mr-3 outline-none border border-[#cccccc]"
            checked={stateHaveUsed == "Yes" ? true : false}
            onChange={(e) => setStateHaveUsed(e.target.value)}
          />
          <label htmlFor="haveused_yes">Yes</label>
        </div>
        <div className="mb-4 text-left flex items-center">
          <input
            id="haveused_no"
            type="radio"
            name="haveused"
            value="No"
            className=" mr-3 outline-none border border-[#cccccc]"
            checked={stateHaveUsed == "No" ? true : false}
            onChange={(e) => setStateHaveUsed(e.target.value)}
          />
          <label htmlFor="haveused_no">No</label>
        </div>
        <span className="text-red-500 text-[14px] hidden ml-3">
          Please select an item.
        </span>
      </div>

      {/** --- */}
      {stateHaveUsed == "Yes" ? (
        <>
          <p className="mt-3 mb-3">(if yes) As a Merchant / Customer</p>
          <div className="flex space-x-5">
            <div className="mb-4 text-left flex items-center">
              <input
                id="accounttype_yes"
                type="radio"
                name="accounttype"
                value="Merchant"
                className=" mr-3 outline-none border border-[#cccccc]"
              />
              <label htmlFor="accounttype_yes">Merchant</label>
            </div>
            <div className="mb-4 text-left flex items-center">
              <input
                id="accounttype_no"
                type="radio"
                name="accounttype"
                value="Customer"
                className=" mr-3 outline-none border border-[#cccccc]"
              />
              <label htmlFor="accounttype_no">Customer</label>
            </div>
            <span className="text-red-500 text-[14px] hidden ml-3">
              Please select an item.
            </span>
          </div>
        </>
      ) : null}

      {/** --- */}
      <div className="mb-4 text-left">
        <textarea
          className=" w-full outline-none border border-[#cccccc] h-[120px]"
          placeholder="Which of your social profiles has the most engagement? Add the link below"
          name="socialmedia"
        />
        <span className="text-red-500 text-[14px] hidden ml-3">
          Please add social media link
        </span>
      </div>

      {/** --- */}
      <p className="mt-5 mb-3">
        Do you expect to be paid for promoting Pickup.ph?
      </p>
      <div className="flex space-x-5">
        <div className="mb-4 text-left flex items-center">
          <input
            id="paidsponsor_yes"
            type="radio"
            name="paidsponsor"
            value="Yes"
            className=" mr-3 outline-none border border-[#cccccc]"
            checked={statePaidSponsor == "Yes" ? true : false}
            onChange={(e) => setStatePaidSponsor(e.target.value)}
          />
          <label htmlFor="paidsponsor_yes">Yes</label>
        </div>
        <div className="mb-4 text-left flex items-center">
          <input
            id="paidsponsor_no"
            type="radio"
            name="paidsponsor"
            value="No"
            className=" mr-3 outline-none border border-[#cccccc]"
            checked={statePaidSponsor == "No" ? true : false}
            onChange={(e) => setStatePaidSponsor(e.target.value)}
          />
          <label htmlFor="paidsponsor_no">No</label>
        </div>
        <span className="text-red-500 text-[14px] hidden ml-3">
          Please select an item.
        </span>
      </div>

      {/** --- */}
      {statePaidSponsor == "Yes" ? (
        <>
          <p className="mt-3 mb-3">
            (If Yes…) How much do you expect to be paid per post on your top
            social channel?
          </p>
          <div className="mb-4 text-left">
            <input
              type="text"
              name="costperpost"
              placeholder="Rate of post in pesos"
              className="w-full outline-none border border-[#cccccc]"
            />
            <span className="text-red-500 text-[14px] hidden ml-3">
              Cost per post is required.
            </span>
          </div>
        </>
      ) : null}

      {/** --- */}
      <div className="mb-4 text-left">
        <textarea
          className=" w-full outline-none border border-[#cccccc] h-[120px]"
          placeholder="Tell us what appeals to you most about pickup.ph?"
          name="appeal"
        />
        <span className="text-red-500 text-[14px] hidden ml-3">
          Please add social media link
        </span>
      </div>

      {/** --- */}
      <div className="text-left text-[14px] flex items-start my-10">
        <input
          id="consent"
          type="checkbox"
          name="consent"
          className="mr-2 mt-1"
        />
        <label htmlFor="consent">
          In submitting your expression of interest and providing us with your
          contact details, you are consenting to us contacting you and providing
          you with information and details about the pickup.ph Platforms and
          pickup.ph Services. Any information that you provide to us will be
          subject to the terms of our Privacy Policy and any Terms and
          Conditions on our website.
        </label>
      </div>

      <div data-form-message></div>

      <div className="my-5">
        <Button
          className="text-white border hover:text-primary1 hover:bg-white hover: border-primary1"
          disabled={stateIsLoading}
        >
          {stateIsLoading ? `Sending, please wait... ` : `Submit`}
        </Button>
      </div>
    </form>
  );
}
