// Packages
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Data
import dataForm from "../fakeData/formSignup.json";
import Button from "./templates/button";
import { WP_API_URL } from "../config/constants";

export default function FormSignup({ className }) {
  const router = useRouter();

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

    // Validate
    if (errors.length > 0) {
      setStateIsLoading(false);
      return false;
    }

    /**
     *
     * Do fetch call here after validation success
     *
     */
    let formData = new FormData();

    formData.append("_wpcf7_unit_tag", "form_id");
    formData.append("fullname", e.target.fullname.value);
    formData.append("businessname", e.target.businessname.value);
    formData.append("mobilephone", e.target.mobilephone.value);
    formData.append("email", e.target.email.value);
    formData.append("message", e.target.message.value);

    const options = {
      method: "POST",
      body: formData,
    };

    fetch(`${WP_API_URL}/contact-form-7/v1/contact-forms/114/feedback`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "mail_sent") {
          el.innerHTML = `<div class="text-center bg-green-50 text-green-500 py-3 mt-5">"Signup success! Please check your email."</div>`;
          e.target.reset();

          setTimeout(() => {
            location.href = "https://app.pickup.ph/auth/sign-up";
          }, 3000);
        } else {
          el.innerHTML = `<div class="text-center bg-red-50 text-red-500 py-3">Signup failed!</div>`;
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

      <div className="text-left text-[14px] flex items-start mb-5 consent-wrap">
        <input
          id="consent"
          type="checkbox"
          name="consent"
          className="mr-2 mt-1"
        />
        <label htmlFor="consent">
          By creating an account you are agreeing to our{" "}
          <Link href="/terms-of-service">
            <a className="underline" target="_blank" rel="noopener noreferrer">
              Terms and Service
            </a>
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy">
            <a className="underline" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </Link>
          .
        </label>
      </div>

      <div data-form-message></div>

      <div className="my-8">
        <Button
          className="text-white border hover:text-primary2 hover:bg-white hover: border-primary2"
          bg="bg-primary2"
          disabled={stateIsLoading}
        >
          {stateIsLoading ? `Sending, please wait... ` : `Sign up with email`}
        </Button>
      </div>
    </form>
  );
}
