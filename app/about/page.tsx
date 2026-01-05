// app/about/page.tsx

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      
      {/* Title */}
      <h1 className="font-light text-5xl text-center mb-16 text-gray-900">
        About Us
      </h1>

      {/* COMPANY PROFILE */}
      <section className="max-w-5xl mx-auto mb-16 text-center">
        <p className="font-light text-xl leading-relaxed text-gray-700">
          Recon is a growing personal-care brand built on trust, consistency, 
          and quality. Our journey began with a simple mission — to provide 
          reliable, affordable, and high-performing products that support 
          everyday beauty and self-care needs.
          <br /><br />
          Today, Recon proudly offers a wide range of personal-care essentials 
          trusted by customers and retailers across Pakistan.
        </p>
      </section>

      {/* QUALITY & INNOVATION */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="font-light text-4xl mb-6 text-gray-900">
          Quality You Can Trust
        </h2>

        <p className="font-light text-lg leading-relaxed text-gray-700">
          Every Recon product is created with attention to safety, comfort, 
          and performance. We constantly work to improve our formulas, 
          focusing on better ingredients, consistency, and long-lasting results.
          <br /><br />
          Our commitment is simple: deliver value, reliability, and satisfaction 
          in every product that reaches our customers.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="mb-20">
        <h2 className="font-light text-4xl mb-10 text-center text-gray-900">
          Our Product Range
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="p-8 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="font-light text-xl mb-3 text-gray-900">Hair Color</h3>
            <p className="font-light text-gray-600">
              Long-lasting shades designed for shine, depth, and confidence.
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="font-light text-xl mb-3 text-gray-900">Body Wax</h3>
            <p className="font-light text-gray-600">
              Smooth, effective waxing solutions for salon-like results at home.
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="font-light text-xl mb-3 text-gray-900">Lotions & Tissues</h3>
            <p className="font-light text-gray-600">
              Everyday essentials that keep your skin soft, fresh, and cared for.
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="font-light text-xl mb-3 text-gray-900">Amla Oil</h3>
            <p className="font-light text-gray-600">
              Strengthening hair oil crafted to support growth and nourishment.
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="font-light text-xl mb-3 text-gray-900">Nail Polish Remover</h3>
            <p className="font-light text-gray-600">
              Gentle yet powerful formulas for quick and clean removal.
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="font-light text-xl mb-3 text-gray-900">Razors & Creams</h3>
            <p className="font-light text-gray-600">
              Smooth-finish products designed for comfort and care.
            </p>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="text-center max-w-5xl mx-auto mb-20">
        <h2 className="font-light text-4xl mb-6 text-gray-900">
          Our Mission
        </h2>

        <p className="font-light text-lg leading-relaxed mb-12 text-gray-700">
          To provide safe, high-quality, and affordable personal-care products 
          that help customers feel confident, comfortable, and valued.
        </p>

        <h2 className="font-light text-4xl mb-6 text-gray-900">
          Our Vision
        </h2>

        <p className="font-light text-lg leading-relaxed text-gray-700">
          To grow Recon into a trusted national brand — known for quality, 
          innovation, and customer satisfaction across Pakistan and beyond.
        </p>
      </section>

      {/* COMMITMENT */}
      <section className="text-center max-w-5xl mx-auto">
        <h2 className="font-light text-4xl mb-6 text-gray-900">
          Our Commitment
        </h2>

        <p className="font-light text-lg leading-relaxed text-gray-700">
          We are committed to continuous improvement, ethical practices, 
          and building long-term customer trust through honesty, reliability, 
          and quality performance in every product we create.
        </p>
      </section>

    </div>
  );
}
