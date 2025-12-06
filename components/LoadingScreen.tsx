import React from 'react';

const ShimmerBlock: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`shimmer-wrapper rounded ${className}`} />
);

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200">
      {/* Header Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 h-20">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <ShimmerBlock className="w-32 h-8" />
          <div className="hidden md:flex gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <ShimmerBlock key={i} className="w-20 h-4" />
            ))}
            <ShimmerBlock className="w-32 h-10 rounded-full" />
          </div>
        </div>
      </div>

      <main className="pt-20">
        {/* Hero Skeleton */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <ShimmerBlock className="w-40 h-6" />
                <ShimmerBlock className="w-full max-w-lg h-20" />
              </div>
              
              <div className="space-y-3">
                <ShimmerBlock className="w-full max-w-xl h-4" />
                <ShimmerBlock className="w-11/12 max-w-lg h-4" />
                <ShimmerBlock className="w-2/3 max-w-md h-4" />
              </div>

              <div className="flex gap-4 pt-4">
                <ShimmerBlock className="w-40 h-12 rounded-lg" />
                <ShimmerBlock className="w-32 h-12 rounded-lg" />
              </div>

              <div className="flex gap-6 pt-4">
                <ShimmerBlock className="w-8 h-8 rounded-full" />
                <ShimmerBlock className="w-8 h-8 rounded-full" />
                <ShimmerBlock className="w-8 h-8 rounded-full" />
              </div>
            </div>

            {/* Code Block Skeleton */}
            <div className="hidden md:block">
              <ShimmerBlock className="w-full h-96 rounded-xl" />
            </div>
          </div>
        </section>

        {/* Content Preview Skeleton */}
        <div className="container mx-auto px-6 py-12">
           <div className="flex items-center gap-4 mb-12">
             <ShimmerBlock className="w-8 h-8" />
             <ShimmerBlock className="w-64 h-8" />
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[1, 2, 3].map((i) => (
               <div key={i} className="h-96 border border-slate-200 dark:border-slate-800 rounded-xl bg-white/50 dark:bg-slate-900/30 p-4 space-y-4">
                 <ShimmerBlock className="w-full h-48 rounded-lg mb-4" />
                 <ShimmerBlock className="w-3/4 h-6" />
                 <ShimmerBlock className="w-full h-16" />
                 <div className="flex gap-2">
                   <ShimmerBlock className="w-16 h-6 rounded-md" />
                   <ShimmerBlock className="w-16 h-6 rounded-md" />
                   <ShimmerBlock className="w-16 h-6 rounded-md" />
                 </div>
               </div>
             ))}
           </div>
        </div>
      </main>
    </div>
  );
};

export default LoadingScreen;