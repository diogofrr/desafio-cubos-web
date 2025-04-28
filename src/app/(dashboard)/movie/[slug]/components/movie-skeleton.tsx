const MovieSkeleton = () => {
  return (
    <section className="relative m-4 p-4 md:m-8 md:p-8 flex flex-col gap-6 animate-pulse">
      <div className="flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center">
        <div className="order-2 lg:order-1 w-full">
          <div className="h-8 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md w-3/4 mb-2"></div>
          <div className="h-5 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md w-1/2"></div>
        </div>
        <div className="order-1 lg:order-2 flex flex-row gap-2 lg:gap-4">
          <div className="h-10 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md w-24 flex-1 lg:flex-auto"></div>
          <div className="h-10 bg-mauve-5 dark:bg-mauve-dark-5 rounded-md w-32 flex-[2] lg:flex-auto"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:hidden flex justify-center">
          <div className="bg-mauve-4 dark:bg-mauve-dark-4 rounded-sm w-[300px] h-[450px]"></div>
        </div>

        <div className="hidden lg:block flex-shrink-0 relative z-10">
          <div className="bg-mauve-4 dark:bg-mauve-dark-4 rounded-sm shadow-lg w-[365px] h-[540px]"></div>
        </div>

        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            <div className="h-6 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md w-3/4 lg:w-1/3"></div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="h-16 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md w-24 flex-1"></div>
              <div className="h-16 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md w-24 flex-1"></div>
              <div className="h-20 w-20 rounded-full bg-mauve-5 dark:bg-mauve-dark-5"></div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-6">
            <div className="flex flex-col gap-4 w-full lg:min-w-[400px] lg:max-w-[500px]">
              <div className="h-[300px] bg-mauve-4 dark:bg-mauve-dark-4 rounded-md w-full"></div>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md w-20"></div>
                <div className="h-8 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md w-24"></div>
                <div className="h-8 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md w-16"></div>
                <div className="h-8 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md w-28"></div>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full xl:max-w-[420px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                  <div className="h-16 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md flex-1 md:flex-none md:w-[calc(50%-8px)] xl:w-[200px]"></div>
                  <div className="h-16 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md flex-1 md:flex-none md:w-[calc(50%-8px)] xl:w-[200px]"></div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="h-16 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md flex-1 md:flex-none md:w-[calc(50%-8px)] xl:w-[200px]"></div>
                  <div className="h-16 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md flex-1 md:flex-none md:w-[calc(50%-8px)] xl:w-[200px]"></div>
                </div>
              </div>

              <div className="flex flex-row flex-wrap gap-4">
                <div className="h-16 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md flex-1 md:flex-none md:w-[calc(33.33%-11px)] xl:w-[128px]"></div>
                <div className="h-16 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md flex-1 md:flex-none md:w-[calc(33.33%-11px)] xl:w-[128px]"></div>
                <div className="h-16 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md flex-1 md:flex-none md:w-[calc(33.33%-11px)] xl:w-[128px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="h-8 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md w-36 mb-4"></div>
        <div className="w-full relative pt-[56.25%]">
          <div className="absolute inset-0 bg-mauve-4 dark:bg-mauve-dark-4 rounded-md"></div>
        </div>
      </div>
    </section>
  );
};

export { MovieSkeleton };
