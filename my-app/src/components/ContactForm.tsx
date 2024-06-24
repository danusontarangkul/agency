"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/types.cjs";
import "react-phone-number-input/style.css";
import axios from "axios";

export interface FormValues {
  name: string;
  email: string;
  phoneNumber: E164Number | undefined;
  website: string;
  instagram: string;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [value, setValue] = useState<E164Number | undefined>(undefined);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateWebsite = (value: string) => {
    if (!value) return true;
    const urlRegex =
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/\S*)?$/;
    if (!urlRegex.test(value)) {
      return false;
    }

    return true;
  };

  const validatePhoneNumber = () => {
    return value ? isValidPhoneNumber(value as string) : false;
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmitting(true);

    data.phoneNumber = value;

    try {
      const response = await axios.post("/api/form", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      setSubmitSuccess(true);
      setSubmitError(null);
    } catch (error) {
      console.error("API Error:", error);
      setSubmitError(
        "There was an error submitting your form. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="max-w-md w-90 mx-auto rounded-2xl p-6 md:p-8 shadow-input bg-white dark:bg-black my-16 ">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Let's Grow Together
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Fill out the form below, and we'll be in touch soon.
      </p>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        {!submitSuccess && (
          <>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="name"
                  className="font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  Full name<span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  placeholder="David Anuson"
                  type="text"
                  {...register("name", { required: true })}
                  className="input1 w-full h-10 px-3 mt-1 rounded-md shadow-input focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 dark:bg-zinc-800"
                />
                {errors.name && (
                  <span className="text-red-500 pt-1">Name is required</span>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full mb-4">
              <label
                htmlFor="email"
                className="font-semibold text-neutral-700 dark:text-neutral-300"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                placeholder="david.anuson@gmail.com"
                type="email"
                {...register("email", { required: true })}
                className="input1 w-full h-10 px-3 mt-1 rounded-md shadow-input focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 dark:bg-zinc-800"
              />
              {errors.email && (
                <span className="text-red-500 pt-1">Email is required</span>
              )}
            </div>
            <div className="flex flex-col w-full mb-4">
              <label
                htmlFor="phoneNumber"
                className="font-semibold text-neutral-700 dark:text-neutral-300"
              >
                Phone Number<span className="text-red-500">*</span>
              </label>
              <PhoneInput
                className="input1 w-full h-10 pl-3 mt-1 rounded-md shadow-input focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 dark:bg-zinc-800"
                id="phone"
                international
                defaultCountry="US"
                placeholder="Enter phone number"
                {...register("phoneNumber", {
                  required: true,
                  validate: validatePhoneNumber,
                })}
                onChange={(value) => {
                  setValue(value as E164Number);
                }}
                value={value}
                onBlur={() => setValue(value as E164Number)}
              />
              {errors.phoneNumber && (
                <span className="text-red-500 pt-1">
                  Valid phone number is required
                </span>
              )}
            </div>
            <div className="flex flex-col w-full mb-4">
              <label
                htmlFor="website"
                className="font-semibold text-neutral-700 dark:text-neutral-300"
              >
                Current Website
              </label>
              <input
                id="website"
                placeholder="www.davidanuson.com"
                type="string"
                {...register("website", {
                  validate: validateWebsite,
                })}
                className="input1 w-full h-10 px-3 mt-1 rounded-md shadow-input focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 dark:bg-zinc-800"
              />
              {errors.website && (
                <span className="text-red-500 pt-1">
                  Please enter valid website
                </span>
              )}
            </div>
            <div className="flex flex-col w-full mb-4">
              <label
                htmlFor="instagram"
                className="font-semibold text-neutral-700 dark:text-neutral-300"
              >
                Business Instagram Handle
              </label>
              <input
                id="instagram"
                placeholder="@davidanuson"
                type="text"
                {...register("instagram")}
                className="input1 w-full h-10 px-3 mt-1 rounded-md shadow-input focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 dark:bg-zinc-800"
              />
            </div>

            {submitError && (
              <div className="text-red-500 mb-4">{submitError}</div>
            )}

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit →"}
            </button>
          </>
        )}

        {submitSuccess && (
          <div className="flex flex-col items-center">
            <p className="text-customColor1 font-semibold mt-4 mb-2">
              Submission successful!
            </p>
            <p className="text-neutral-600 text-sm mt-2 mb-2 dark:text-neutral-300">
              Schedule a meeting with us:
            </p>
            <iframe
              src="https://calendly.com/david-anuson"
              width="100%"
              height="410px"
              title="Schedule Meeting"
              className="mb-4 border border-gray-300"
            ></iframe>
            <button
              className="bg-customColor1 text-white rounded-md py-2 px-4 hover:bg-customColor3 transition duration-300"
              onClick={handleGoBack}
            >
              Go Back to Home
            </button>
          </div>
        )}

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}
