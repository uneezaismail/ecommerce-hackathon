import React from 'react'

const PrivacyPolicy = () => {
  return (
   <section>
      <div className="min-h-screen text-custom-green py-16 md:py-20 px-6 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto ">
          <h1 className="text-3xl font-bold  mb-6">Privacy Policy</h1>
          <p className=" mb-6">
            At OAK&TEAK, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website or services.
          </p>
  
          <h2 className="text-2xl font-semibold  mb-2">Information We Collect</h2>
          <p className=" mb-6">
            We may collect the following types of information from you:
          </p>
          <ul className="list-disc list-inside  mb-6">
            <li>Personal information such as your name, email address, phone number, and shipping address when you place an order.</li>
            <li>Payment details, such as your credit or debit card information (processed securely).</li>
            <li>Data about your interactions with our website, such as IP address, browser type, and browsing behavior (collected via cookies and analytics tools).</li>
          </ul>
  
          <h2 className="text-2xl font-semibold  mb-2">How We Use Your Information</h2>
          <p className=" mb-6">
            The information we collect is used for the following purposes:
          </p>
          <ul className="list-disc list-inside  mb-6">
            <li>To process and fulfill your orders, including delivery and payment processing.</li>
            <li>To improve our website and services by analyzing user behavior.</li>
            <li>To communicate with you about your orders, promotions, and updates.</li>
            <li>To ensure website security and prevent fraud.</li>
          </ul>
  
          <h2 className="text-2xl font-semibold  mb-2">How We Protect Your Information</h2>
          <p className=" mb-6">
            We take the following steps to protect your personal information:
          </p>
          <ul className="list-disc list-inside  mb-6">
            <li>Encrypting sensitive data using SSL technology.</li>
            <li>Restricting access to your information to authorized personnel only.</li>
            <li>Regularly monitoring our systems for vulnerabilities and potential breaches.</li>
          </ul>
  
          <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
          <p className="text-gray-700 mb-6">
            Our website uses cookies to enhance your experience. Cookies are small files stored on your device that help us remember your preferences and analyze website traffic. You can disable cookies in your browser settings, but this may affect your experience on our site.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
          <p className="mb-6">
            We may share your information with trusted third-party services to process payments, ship orders, or analyze website usage. These services are required to protect your information and use it only for the purposes outlined in this policy.
          </p>
  
          <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
          <p className=" mb-6">
            You have the right to:
          </p>
          <ul className="list-disc list-inside 0 mb-6">
            <li>Access the personal data we hold about you.</li>
            <li>Request corrections to your personal information.</li>
            <li>Request the deletion of your data, subject to legal or contractual obligations.</li>
          </ul>
  
          <h2 className="text-2xl font-semibold  mb-2">Changes to This Policy</h2>
          <p className=" mb-6">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
          </p>
  
          <h2 className="text-2xl font-semibold  mb-2">Contact Us</h2>
          <p className=" mb-6">
            If you have any questions or concerns about our Privacy Policy, please contact us at:
          </p>
          <ul className="list-inside ">
            <li>Email: <a href="mailto:support@oakandteak.com" className="text-black hover:underline">support@oakandteak.com</a></li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 OAK&TEAK Lane, Furniture City, FC 45678</li>
          </ul>
        </div>
      </div>
   </section>
  )
}

export default PrivacyPolicy