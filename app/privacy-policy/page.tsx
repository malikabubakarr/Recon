// app/privacy-policy/page.tsx
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-6">
      {/* Page Title */}
      <h1 className="font-thin text-5xl text-center mb-16 text-gray-800">
        Privacy Policy
      </h1>

      <div className="max-w-4xl mx-auto space-y-12 text-gray-700 font-thin leading-relaxed">

        {/* Intro */}
        <section>
          <p className="text-xl">
            At <strong>Recon</strong>, your privacy matters to us.  
            This Privacy Policy explains how we collect, use, and protect your
            personal information when you visit our website or place an order.
            By using our website, you agree to the practices described below.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-3xl text-gray-800 mb-4">1. Information We Collect</h2>

          <p className="mb-4">
            We may collect the following information when you use our website:
          </p>

          <h3 className="text-xl text-gray-800 mb-2">Personal Information</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Shipping address</li>
            <li>Billing details</li>
            <li>Order history</li>
          </ul>

          <h3 className="text-xl text-gray-800 mt-6 mb-2">Non-Personal Information</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Browser type</li>
            <li>IP address</li>
            <li>Device information</li>
            <li>Pages visited and time spent on the website</li>
            <li>Cookies and usage data</li>
          </ul>
        </section>

        {/* How We Use */}
        <section>
          <h2 className="text-3xl text-gray-800 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Process and deliver your orders</li>
            <li>Respond to inquiries and support requests</li>
            <li>Improve our website and user experience</li>
            <li>Send updates and promotional messages (only with consent)</li>
            <li>Prevent fraud and ensure security</li>
            <li>Comply with legal requirements</li>
          </ul>
        </section>

        {/* Sharing */}
        <section>
          <h2 className="text-3xl text-gray-800 mb-4">3. Sharing Your Information</h2>
          <p className="mb-3">
            We do <strong>not</strong> sell or trade your personal data.
          </p>

          <p className="mb-2">We may share information only with:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Service providers (delivery, hosting, payment processing)</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners in case of merger or transfer of ownership</li>
          </ul>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-3xl text-gray-800 mb-4">4. Cookies</h2>
          <p>
            We use cookies to remember preferences, improve performance, and
            analyze traffic. You can disable cookies through your browser
            settings, but some features may not work correctly.
          </p>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-3xl text-gray-800 mb-4">5. Data Security</h2>
          <p>
            We use reasonable technical and organizational safeguards to protect
            your data. However, no online system can be guaranteed 100% secure.
          </p>
        </section>

        {/* Rights */}
        <section>
          <h2 className="text-3xl text-gray-800 mb-4">6. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Request access to your data</li>
            <li>Update inaccurate information</li>
            <li>Request deletion (where legally allowed)</li>
            <li>Unsubscribe from marketing anytime</li>
          </ul>
        </section>

        {/* Third party */}
        <section>
          <h2 className="text-3xl text-gray-800 mb-4">7. Third-Party Links</h2>
          <p>
            Our website may contain links to other websites. We are not
            responsible for their privacy policies or content.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-3xl text-gray-800 mb-4">8. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted here with an updated date.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl text-gray-800 mb-4">9. Contact Us</h2>
          <p className="mb-2">
            If you have questions about this Privacy Policy, contact us:
          </p>

          <p>Email: info@recon.com</p>
          <p>Phone: +92 339 0554460</p>
          <p>Address: Plot 233, Sabzazar Block F Sabzazar Housing Scheme Phase 1 & 2 Lahore</p>
        </section>

      </div>
    </div>
  );
}
