"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/utils/cn";
import PhoneInput from "react-phone-number-input"; // Ensure correct import
import { E164Number } from "libphonenumber-js/types.cjs";
import "react-phone-number-input/style.css"; // Ensure correct path to CSS

import "../../custom-styles.css";
import { TextArea } from "./textarea";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: E164Number | undefined;
  website: string;
  instagram: string;
  goals: string;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [value, setValue] = useState<E164Number | undefined>(undefined);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("data before send", data);
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("API Response:", responseData);
      // Handle success, such as showing a success message or navigating to another page
    } catch (error) {
      console.error("API Error:", error);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-16">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Let's Grow Together
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Fill out the form below, and we'll be in touch soon.
      </p>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">
              First name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              {...register("firstname", { required: true })}
            />
            {errors.firstname && (
              <span className="text-red-500">First name is required</span>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">
              Last name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              {...register("lastname", { required: true })}
            />
            {errors.lastname && (
              <span className="text-red-500">Last name is required</span>
            )}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">
            Email<span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phoneNumber">
            Phone Number<span className="text-red-500">*</span>
          </Label>
          <div className="flex items-center">
            <PhoneInput
              className={`input1 flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent 
      file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
      focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
      disabled:cursor-not-allowed disabled:opacity-50
      dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
      group-hover/input:shadow-none transition duration-400`}
              id="phone"
              international
              defaultCountry="US"
              placeholder="Enter phone number"
              {...register("phoneNumber", { required: true })} // Register phoneNumber with react-hook-form
              onChange={(value) => setValue(value as E164Number)} // Cast newValue to E164Number
              value={value} // Ensure PhoneInput gets the correct value
            />
          </div>
          {errors.email && (
            <span className="text-red-500">Phone Number is required</span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="website">Current Website</Label>
          <Input
            id="website"
            placeholder="www.davidanuson.com"
            type="url"
            {...register("website")}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="instagram">Instagram Handle</Label>
          <Input
            id="instagram"
            placeholder="@davidanuson"
            type="text"
            {...register("instagram")}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="goals">What are your website goals?</Label>
          <TextArea
            id="goals"
            placeholder="Tell us what you hope to achieve with your website."
            {...register("goals")}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ContactForm;
