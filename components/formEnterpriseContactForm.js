// Packages
import { useState } from "react";
import Link from "next/link";

//
import { WP_API_URL } from "../config/constants";

// Data
import dataForm from "../fakeData/formEnterpriseContactUs.json";
import Button from "./templates/button";

export default function FormEnterpriseContactForm({ enterprise, className }) {
  const [stateIsLoading, setStateIsLoading] = useState(false);

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

    if (!enterprise || enterprise == "") {
      errors.push("Please select what will you use Pickup.ph for?");
      document.querySelector(
        `[data-form-message]`,
      ).innerHTML = `<div class="border-red-500 p-3 bg-rose-200 text-red-500">Please select what will you use Pickup.ph for?</div>`;
    }

    // Validate
    if (errors.length > 0) {
      setStateIsLoading(false);
      return false;
    }

    //
    let formData = new FormData();
    formData.append("_wpcf7_unit_tag", "form_id");
    formData.append("fullname", e.target.fullname.value);
    formData.append("brandname", e.target.brandname.value);
    formData.append("businessname", e.target.businessname.value);
    formData.append("mobilephone", e.target.mobilephone.value);
    formData.append("email", e.target.email.value);
    formData.append("message", e.target.message.value);
    formData.append("enterprise", e.target.enterprise.value);

    const options = {
      method: "POST",
      body: formData,
    };

    fetch(`${WP_API_URL}/contact-form-7/v1/contact-forms/70/feedback`, options)
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
      {dataForm.map((fi, i) => {
        if (fi.type == "textarea") {
          return (
            <div key={i} className="mb-4 text-left">
              <textarea
                className=" w-full outline-none border border-[#cccccc] h-[120px]"
                placeholder={fi.label}
                name={fi.name}
              />
              <span className="text-red-500 text-[14px] hidden ml-3">
                {fi.validation["invalid-feedback"]}
              </span>
            </div>
          );
        }

        return (
          <div key={i} className="mb-4 text-left">
            <input
              type={fi.type}
              name={fi.name}
              placeholder={fi.label}
              className="w-full outline-none border border-[#cccccc]"
            />
            <span className="text-red-500 text-[14px] hidden ml-3">
              {fi.validation["invalid-feedback"]}
            </span>
          </div>
        );
      })}

      <div className="text-left text-[14px] flex items-start mb-[20px]">
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
          subject to the terms of our{" "}
          <Link href="/privacy-policy">
            <a target={`_blank`}>Privacy Policy</a>
          </Link>{" "}
          and any{" "}
          <Link href="/terms-of-service">
            <a target={`_blank`}>Terms and Conditions</a>
          </Link>{" "}
          on our website.
        </label>
      </div>

      <div data-form-message></div>

      <div>
        <input type="hidden" name="enterprise" value={enterprise} />
      </div>

      <div className="my-5">
        <Button
          className="text-white border hover:text-primary1 hover:bg-white hover: border-primary1"
          disabled={stateIsLoading}
        >
          {stateIsLoading ? `Sending, please wait... ` : `Contact Us`}
        </Button>
      </div>
    </form>
  );
}
