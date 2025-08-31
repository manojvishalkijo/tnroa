import { ChevronDown } from 'lucide-react';

interface DropdownMenuProps {
  title: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
}

export default function DropdownMenu({ title, items, isOpen, onToggle }: DropdownMenuProps) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-1 hover:bg-white/10 px-4 py-2 rounded transition-all duration-300 font-medium"
      >
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 backdrop-blur-md bg-white/95 text-gray-800 shadow-xl rounded-lg py-2 z-50 border border-white/20">
          {items.map((item, index) => (
            <a 
              key={index} 
              href="#" 
              className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-700 transition-colors border-b border-gray-100 last:border-b-0 font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}