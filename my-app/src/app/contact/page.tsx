import { AuroraBackground } from "@/components/AuroraBackground";
import { ContactForm } from "@/components/ContactForm";
import React from "react";

const index = () => {
  return (
    <div className="flex flex-col justify-center  bg-custom-bg">
      <ContactForm />
    </div>
  );
};

export default index;

// pages/index.js
// "use client";
// import { useState } from "react";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import { E164Number } from "libphonenumber-js/types.cjs";

// export default function ContactForm() {
//   const [value, setValue] = useState();

//   return (
//     <div>
//       <h1>Phone Number Input</h1>
//       <PhoneInput
//         placeholder="Enter phone number"
//         defaultCountry="US"
//         value={value}
//         onChange={(value) => setValue(value as E164Number)} // Cast newValue to E164Number
//       />
//     </div>
//   );
// }
