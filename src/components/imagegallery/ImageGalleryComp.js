import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

export default function ImageGalleryComp() {
  return (
    <>
      <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-4xl md:p-40">
        {/* Menu Container */}
        <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24">
          {/* Menu Items */}
          <div className="group">
            <Link href="#">Vector</Link>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <Link href="#">Illustrations</Link>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <Link href="#">Images</Link>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <Link href="#">Icons</Link>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
        </div>
        {/* Search Container */}
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
          <div className="flex justify-between border-b">
            <input
              type="text"
              placeholder="Search"
              className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
            />
            <button className="text-gray-200 active:text-red-500">
              <CiSearch className="w-20 h-20" />
            </button>
          </div>
          <button className="border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black bg-black px-14 py-3 text-lg text-white">
            Upload
          </button>
        </div>
        {/* Gallery Container */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* Image 1 */}
          <div className="relative group h-72 w-72">
            <Image
              src="/assets/image1.jpg"
              layout="fill"
              objectFit="cover"
              priority
              alt="image1"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center hover:text-red-500">
                  <CiBookmark />
                </div>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group h-72 w-72">
            <Image
              src="/assets/image2.jpg"
              layout="fill"
              objectFit="cover"
              priority
              alt="image2"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center hover:text-red-500">
                  <CiBookmark />
                </div>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group h-72 w-72">
            <Image
              src="/assets/image3.jpg"
              layout="fill"
              objectFit="cover"
              priority
              alt="image3"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center hover:text-red-500">
                  <CiBookmark />
                </div>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group h-72 w-72">
            <Image
              src="/assets/image4.jpg"
              layout="fill"
              objectFit="cover"
              priority
              alt="image4"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center hover:text-red-500">
                  <CiBookmark />
                </div>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group h-72 w-72">
            <Image
              src="/assets/image5.jpg"
              layout="fill"
              objectFit="cover"
              priority
              alt="image5"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center hover:text-red-500">
                  <CiBookmark />
                </div>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group h-72 w-72">
            <Image
              src="/assets/image5.jpg"
              layout="fill"
              objectFit="cover"
              priority
              alt="image5"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center hover:text-red-500">
                  <CiBookmark />
                </div>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group h-72 w-72">
            <Image
              src="/assets/image6.jpg"
              layout="fill"
              objectFit="cover"
              priority
              alt="image6"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center hover:text-red-500">
                  <CiBookmark />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
