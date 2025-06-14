import React from "react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="bg-base-200 pt-28 pb-20 px-4 lg:px-20 text-gray-800">
      <Helmet>
        <title>Hoteleo - About Us</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-5 lg:px-0">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10 text-yellow-600">
          About Hoteleo
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://i.ibb.co/XrgNNSQ1/rural-hotel-2814697-1280.jpg"
              alt="About Hoteleo"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="mb-4">
              Hoteleo is a modern hotel booking platform, built to make your
              travel experience smooth, smart, and satisfying. Since 2010, we’ve
              helped thousands of guests find their perfect stay—whether it’s a
              luxurious resort or a cozy studio.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              To deliver seamless, reliable, and personalized hotel booking
              experiences—anytime, anywhere.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Verified hotels with real reviews</li>
              <li>Secure payments & 24/7 customer support</li>
              <li>Instant booking confirmations</li>
              <li>Best price guarantee</li>
              <li>AI-based room recommendation</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
          <p className="max-w-3xl mx-auto">
            From humble beginnings in 2010 to a global hotel booking platform,
            Hoteleo is proud to serve millions of happy customers across 50+
            countries. We believe every trip begins with a good stay—and we’re
            here to make that happen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
