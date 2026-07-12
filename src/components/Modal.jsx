import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload } from 'react-icons/fi';

const Modal = ({ isOpen, onClose, pdfUrl }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen (optional: use for extra handling)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close with Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal content */}
          <motion.div
            className="relative w-full max-w-4xl h-[90vh] sm:h-[80vh] rounded-2xl overflow-hidden shadow-2xl z-10"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div
              className="flex items-center justify-between px-4 py-2 border-b"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <h2
                className="text-lg font-semibold truncate"
                style={{ color: 'var(--text-primary)' }}
              >
                Resume / CV
              </h2>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                  style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
                >
                  <FiDownload />
                  <span className="hidden sm:inline">Download</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                  aria-label="Close modal"
                >
                  <FiX className="text-xl" />
                </button>
              </div>
            </div>

            {/* PDF display area */}
            <div className="w-full h-[calc(100%-3rem)]">
              {/* Try object first (works well on most modern browsers) */}
              <object
                data={pdfUrl}
                type="application/pdf"
                className="w-full h-full"
                style={{ border: 'none' }}
              >
                {/* Fallback: if object fails, show this message */}
                <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                  <p
                    className="mb-3"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Unable to display PDF directly. You can view or download it using the button below.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
                    >
                      View in New Tab
                    </a>
                    <button
                      onClick={handleDownload}
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      style={{ backgroundColor: 'var(--hover-bg)', color: 'var(--text-primary)' }}
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
              </object>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;