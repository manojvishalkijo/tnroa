export default function UtilityBar() {
  return (
    <div className="backdrop-blur-md bg-white/10 border-b border-white/20 text-white py-2 px-4">
      <div className="w-full flex justify-between items-center text-sm">
        
        {/* Left - Accessibility */}
        <div className="flex items-center">
          <div className="hover:bg-white/10 px-3 py-1 rounded transition-colors cursor-pointer">
            உண்மை!
          </div>
        </div>

        {/* Center - English */}
        <div className="flex items-center">
          <div className="hover:bg-white/10 px-3 py-1 rounded transition-colors cursor-pointer flex items-center space-x-1">
            <span>உழைப்பு!!</span>
            
          </div>
        </div>

        {/* Right - Search */}
        <div className="flex items-center">
          <div className="hover:bg-white/10 px-3 py-1 rounded transition-colors cursor-pointer">
            உயிர்!!!
          </div>
        </div>
      </div>
    </div>
  );
}
