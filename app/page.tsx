import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row items-center h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
      <div className="absolute right-10 md:right-40 bottom-0 z-[10]">
        <Image
          src="/assets/MoustacheMan.png"
          alt="MoustacheMan"
          width={560}
          height={560}
          className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]"
        />
      </div>
      <Image
        src="/assets/top-left-img.png"
        alt="paint"
        width={230}
        height={230}
        className="absolute left-0 top-0"
      />

      <div className="flex flex-col gap-3 z-[10] pl-6 sm:pl-40 pt-20">
        <h1 className="text-[35px] sm:text-[50px] text-white sm:max-w-[500px] max-w-[300px] mt-20">
          Transforming ideas into{" "}
          <span className="text-red-500">Digital Reality</span>
        </h1>
        <p className="text-[14px] sm:text-[16px] text-gray-200 sm:text-gray-400 mb-5 sm:mb-10 sm:pb-2 max-w-[400px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          voluptatum quia itaque impedit quos quis ab tenetur, aperiam hic
          dolore.
        </p>
        <div className="relative w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] mt-5">
          <Image
            src="/assets/rounded-text.png"
            alt="projects"
            width={160}
            height={160}
            className="slow-spin"
          />
        </div>
      </div>
    </main>
  );
}
