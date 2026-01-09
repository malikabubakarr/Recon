// app/terms-and-conditions/page.tsx
export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-6">
      
      {/* Page Title */}
      <h1 className="font-thin text-5xl text-center mb-16 text-gray-800">
        Terms & Conditions
      </h1>

      <section className="max-w-4xl mx-auto space-y-14 font-thin text-gray-700 leading-relaxed text-lg">

        <div>
          <h2 className="text-2xl text-gray-800 mb-3">1. Introduction</h2>
          <p>
            Welcome to the official Recon website (the “Website”). By accessing or 
            using this Website, you agree to comply with and be bound by these 
            Terms & Conditions. If you do not agree, please stop using the Website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-gray-800 mb-3">2. Intellectual Property Rights</h2>
          <p>
            All content, including text, graphics, product images, and logos, is 
            the property of Recon and is protected by intellectual property laws. 
            You may not copy, reproduce, or distribute any material without written 
            permission from Recon.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-gray-800 mb-3">3. User Conduct</h2>
          <p>You agree NOT to:</p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>engage in unlawful or fraudulent activity</li>
            <li>upload viruses or harmful code</li>
            <li>interfere with the Website’s security or functionality</li>
            <li>attempt to gain unauthorized access to our systems</li>
            <li>use the Website for spam or unsolicited advertising</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl text-gray-800 mb-3">4. Product Information</h2>
          <p>
            We aim to provide accurate product information. However, pricing, 
            availability, and descriptions may change without notice.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-gray-800 mb-3">5. Limitation of Liability</h2>
          <p>
            Recon is not responsible for any damages arising from the use or 
            inability to use this Website. You use the Website at your own risk.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-gray-800 mb-3">6. Third-Party Links</h2>
          <p>
            The Website may contain links to third-party sites. Recon is not 
            responsible for their content, security, or privacy practices.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-gray-800 mb-3">7. Privacy</h2>
          <p>
            Please review our Privacy Policy to understand how we collect and use 
            your information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-gray-800 mb-3">8. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Pakistan. Any disputes will be 
            handled in the courts of Pakistan.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-gray-800 mb-3">9. Changes to Terms</h2>
          <p>
            Recon may update these Terms at any time. Continued use of the Website 
            means you accept the updated Terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-gray-800 mb-3">10. Contact Us</h2>
          <p className="space-y-1">
            <span className="block">Address: Plot 233, Sabzazar Block F Sabzazar Housing Scheme Phase 1 & 2 Lahore</span>
            <span className="block">Email: info@recon.com</span>
            <span className="block">Phone: +92 339 0554460</span>
          </p>
        </div>

      </section>
    </div>
  );
}
