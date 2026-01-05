
import { useState } from 'react';
import { X } from 'lucide-react';

interface ReadMoreTextProps {
    text?: string;
    limit?: number;
    className?: string;
}

export function ReadMoreText(props: ReadMoreTextProps) {
const [isOpen, setIsOpen] = useState(false);
  
  const text = props.text ?? "";
  const limit = props.limit ?? 200;
  const shouldTruncate = text.length > limit;
  const displayText = shouldTruncate ? text.slice(0, limit) : text;
  
  return (
    <>
      <div className={props.className ?? "min-w-full"}>
        <p className="text-gray-700">
          {displayText}
          {shouldTruncate && (
            <>
              ...{' '}
              <button
                onClick={() => setIsOpen(true)}
                className="text-blue-600 hover:text-blue-800 font-medium underline"
              >
                more
              </button>
            </>
          )}
        </p>
      </div>

      {/* Overlay Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Full Content</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 whitespace-pre-wrap">{text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}