import { Star } from "lucide-react";
import { FaStar } from "react-icons/fa6";

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-4">
      <p className="text-sm text-gray-400">{rating}</p>
      <div className="flex items-center justify-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={index}
            width={12}
            className={`${
              index < rating ? "text-yellow-500" : "text-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;
