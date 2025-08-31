    
import React from "react";

interface TestimonialCardProps {
  name: string;
  position: string;
  image?: string;
  testimonial: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  image,
  testimonial,
  rating = 5,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gov-green/10 max-w-sm mx-auto">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-4">
        <div className="w-20 h-20 rounded-full bg-gov-green/20 border-4 border-gov-green flex items-center justify-center mb-3 overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gov-green text-2xl font-bold font-tamil">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <h3 className="font-bold text-gov-green text-lg font-tamil text-center">
          {name}
        </h3>
        <p className="text-gov-green/70 text-sm font-tamil text-center">
          {position}
        </p>
      </div>

      {/* Rating */}
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl ${
              i < rating ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            ⭐
          </span>
        ))}
      </div>

      {/* Testimonial */}
      <blockquote className="text-gray-700 text-center italic font-tamil leading-relaxed">
        "{testimonial}"
      </blockquote>
    </div>
  );
};

export default TestimonialCard;