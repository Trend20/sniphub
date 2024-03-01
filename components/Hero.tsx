import React from "react";

const Hero = async () => {
  return (
    <div className="flex w-dull">
      <section className="py-12 md:py-24">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Store your code snippets
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-900/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-100/60">
              The best place to save and share your most useful code snippets
              with the world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
