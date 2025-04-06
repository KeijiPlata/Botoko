
export const LoadingOverlay = () => {
    return (
      <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xl flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  };
  