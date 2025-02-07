import Image from "next/image";

Image
export default function Button({src, alt, text}) {
  return (
    <button className="flex flex-row items-center justify-center px-5 py-3 space-x-3">
      <div className="flex flex-row items-center space-x-2 px-4 py-2 justify-center border-2 shadow-sm w-full hover:opacity-30">
        <div className="relative h-4 w-4">
          <Image
            src={`/assets/${src}`}
            layout="fill"
            objectFit="contain"
            priority
            alt={alt}
          />
        </div>
        <p>{text}</p>
      </div>
    </button>
  );
}
