import React from "react";
import { ScrollArea } from "./ui/scroll-area";

interface InfoItem {
  title?: string;
  content: string;
  date?: string;
  time?: string;
  location?: string;
}

interface ScrollableInfoBoxProps {
  title: string;
  items: InfoItem[];
  className?: string;
}

const ScrollableInfoBox: React.FC<ScrollableInfoBoxProps> = ({
  title,
  items,
  className = "",
}) => {
  return (
    <div
      className={`bg-white border-2 border-gov-green rounded-lg shadow-lg max-w-sm ${className}`}
    >
      {/* Header */}
      <div className="bg-gov-green text-white text-center p-3 rounded-t-md">
        <h3 className="text-xl font-bold font-tamil">{title}</h3>
      </div>

      {/* Scrollable Content */}
      <ScrollArea className="h-64 p-4">
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-b border-gov-green/20 pb-3 last:border-b-0"
            >
              {item.title && (
                <h4 className="font-semibold text-gov-green mb-2 font-tamil">
                  {item.title}
                </h4>
              )}
              <p className="text-gov-green text-sm leading-relaxed font-tamil">
                {item.content}
              </p>
              {item.date && (
                <p className="text-gov-green/70 text-xs mt-1 font-tamil">
                  நாள்: {item.date}
                </p>
              )}
              {item.time && (
                <p className="text-gov-green/70 text-xs font-tamil">
                  நேரம்: {item.time}
                </p>
              )}
              {item.location && (
                <p className="text-gov-green/70 text-xs font-tamil">
                  இடம்: {item.location}
                </p>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ScrollableInfoBox;