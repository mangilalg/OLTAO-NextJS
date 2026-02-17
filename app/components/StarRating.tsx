import React from "react";

export default function StarRating({
  rating,
  count,
}: {
  rating: number;
  count?: number;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={
              star <= Math.floor(rating)
                ? "#D4A843"
                : star - 0.5 <= rating
                  ? "#D4A843"
                  : "none"
            }
            stroke="#D4A843"
            strokeWidth="1.5"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      {count && (
        <span className="text-xs text-text-light">
          ({count.toLocaleString()})
        </span>
      )}
    </div>
  );
}
