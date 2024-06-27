"use client";

const index = () => {
  const handleGoBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col min-h-[100vh]  bg-custom-bg container">
      <div className="w-full h-full bg-gray-50 text-bg-custom-bg my-10 rounded-xl  mx-auto p-10 max-w-screen-sm">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          We are committed to protecting your privacy. This Privacy Policy
          outlines the types of personal information we collect, how we use and
          protect that information, and your rights regarding your personal
          data.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We collect personal information that you provide to us directly, such
          as your name, email address, phone number, and any other details you
          provide when filling out forms on our website. We also collect
          information about your interactions with our website, such as your IP
          address, browser type, and pages visited.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          We use the personal information we collect to provide and improve our
          services, communicate with you, process your requests, and enhance
          your experience with our website. We may also use your information for
          marketing purposes, such as sending you promotional emails or
          newsletters, with your consent.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Sharing Your Information
        </h2>
        <p className="mb-4">
          We do not sell or rent your personal information to third parties. We
          may share your information with trusted service providers who assist
          us in operating our website and conducting our business, as long as
          those parties agree to keep this information confidential. We may also
          disclose your information if required by law or to protect our rights.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal
          information. You can also object to or restrict the processing of your
          data. If you wish to exercise any of these rights, please contact us
          at the contact information provided on our website.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Security</h2>
        <p className="mb-4">
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or electronic storage is completely
          secure, so we cannot guarantee absolute security.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on our website.
          You are advised to review this Privacy Policy periodically for any
          changes.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at the contact information provided on our website.
        </p>
        <div className="flex flex-col items-center">
          <button
            className="bg-customColor1 text-white rounded-md py-2 px-4 hover:bg-customColor3 transition duration-300"
            onClick={handleGoBack}
          >
            Go Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
