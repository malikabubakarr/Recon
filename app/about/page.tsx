// app/about/page.tsx

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-50 dark:to-white py-20 px-6">
      
      {/* Title */}
      <h1 className="font-light text-5xl text-center mb-16 text-gray-900 dark:text-gray-900 tracking-wide">
        About Us
      </h1>

      {/* COMPANY PROFILE */}
      <section className="max-w-5xl mx-auto mb-16 text-center">
        <p className="font-light text-xl leading-relaxed text-gray-700 dark:text-gray-700">
          Recon is a trusted personal-care brand committed to quality, affordability, and innovation. 
          Founded with a mission to deliver reliable products for everyday beauty and self-care, 
          we have grown to serve customers and retailers nationwide in Pakistan.
        </p>
      </section>

      {/* QUALITY & INNOVATION */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="font-light text-4xl mb-6 text-gray-900 dark:text-gray-900">
          Quality You Can Trust
        </h2>

        <p className="font-light text-lg leading-relaxed text-gray-700 dark:text-gray-700">
          At Recon, safety and performance are paramount. We refine our formulas with premium ingredients 
          for lasting results, ensuring every product meets high standards of comfort and effectiveness.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="mb-20">
        <h2 className="font-light text-4xl mb-10 text-center text-gray-900 dark:text-gray-900">
          Our Product Range
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="p-8 border border-gray-200 dark:border-gray-200 rounded-xl bg-white dark:bg-white shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="font-light text-xl mb-3 text-gray-900 dark:text-gray-900">Hair Color</h3>
            <p className="font-light text-gray-600 dark:text-gray-600">
              Vibrant, long-lasting shades for radiant, confident hair.
            </p>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-200 rounded-xl bg-white dark:bg-white shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="font-light text-xl mb-3 text-gray-900 dark:text-gray-900">Body Wax</h3>
            <p className="font-light text-gray-600 dark:text-gray-600">
              Effective, gentle waxing for smooth, salon-quality skin.
            </p>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-200 rounded-xl bg-white dark:bg-white shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="font-light text-xl mb-3 text-gray-900 dark:text-gray-900">Lotions & Tissues</h3>
            <p className="font-light text-gray-600 dark:text-gray-600">
              Essential care for soft, fresh, and hydrated skin daily.
            </p>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-200 rounded-xl bg-white dark:bg-white shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="font-light text-xl mb-3 text-gray-900 dark:text-gray-900">Amla Oil</h3>
            <p className="font-light text-gray-600 dark:text-gray-600">
              Nourishing oil to strengthen and promote healthy hair growth.
            </p>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-200 rounded-xl bg-white dark:bg-white shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="font-light text-xl mb-3 text-gray-900 dark:text-gray-900">Nail Polish Remover</h3>
            <p className="font-light text-gray-600 dark:text-gray-600">
              Quick, gentle removal without damaging nails.
            </p>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-200 rounded-xl bg-white dark:bg-white shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="font-light text-xl mb-3 text-gray-900 dark:text-gray-900">Razors & Creams</h3>
            <p className="font-light text-gray-600 dark:text-gray-600">
              Comfortable shaving solutions for smooth, irritation-free results.
            </p>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="text-center max-w-5xl mx-auto mb-20">
        <h2 className="font-light text-4xl mb-6 text-gray-900 dark:text-gray-900">
          Our Mission
        </h2>

        <p className="font-light text-lg leading-relaxed mb-12 text-gray-700 dark:text-gray-700">
          To deliver safe, high-quality, and affordable personal-care products that empower customers 
          to feel confident, comfortable, and valued in their daily routines. We prioritize innovation, 
          sustainability, and customer feedback to continuously improve our offerings.
        </p>

        <h2 className="font-light text-4xl mb-6 text-gray-900 dark:text-gray-900">
          Our Vision
        </h2>

        <p className="font-light text-lg leading-relaxed text-gray-700 dark:text-gray-700">
          To establish Recon as Pakistan's leading personal-care brand, recognized globally for excellence 
          in quality, ethical practices, and unwavering commitment to customer satisfaction. We aim to 
          expand our reach while maintaining our core values of trust and reliability.
        </p>
      </section>

      {/* VALUES */}
      <section className="text-center max-w-5xl mx-auto mb-20">
        <h2 className="font-light text-4xl mb-6 text-gray-900 dark:text-gray-900">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 dark:border-gray-200 rounded-xl bg-white dark:bg-white shadow-sm">
            <h3 className="font-light text-xl mb-3 text-gray-900 dark:text-gray-900">Integrity</h3>
            <p className="font-light text-gray-600 dark:text-gray-600">
              We uphold honesty and transparency in all our operations and products.
            </p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-200 rounded-xl bg-white dark:bg-white shadow-sm">
            <h3 className="font-light text-xl mb-3 text-gray-900 dark:text-gray-900">Innovation</h3>
            <p className="font-light text-gray-600 dark:text-gray-600">
              Constantly evolving to meet customer needs with cutting-edge solutions.
            </p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-200 rounded-xl bg-white dark:bg-white shadow-sm">
            <h3 className="font-light text-xl mb-3 text-gray-900 dark:text-gray-900">Sustainability</h3>
            <p className="font-light text-gray-600 dark:text-gray-600">
              Committed to eco-friendly practices and responsible sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="text-center max-w-5xl mx-auto">
        <h2 className="font-light text-4xl mb-6 text-gray-900 dark:text-gray-900">
          Our Commitment
        </h2>

        <p className="font-light text-lg leading-relaxed text-gray-700 dark:text-gray-700">
          Recon is dedicated to ethical business practices, continuous improvement, and building lasting 
          relationships with our customers. We strive for excellence in every aspect, from product development 
          to customer service, ensuring that every interaction reflects our passion for quality and care.
        </p>
      </section>

    </div>
  );
}