import Link from "next/link";

export default function ImageGalleryComp() {
  return (
    
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
    </div>
  );
}
