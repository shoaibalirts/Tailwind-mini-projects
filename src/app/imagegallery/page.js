import Footer from "@/components/Footer";
import ImageGalleryComp from "@/components/imagegallery/imagegalleryComp";

export const metadata = {
  title: "Images Gallery",
  description: "Images are to be moved back and forth",
};
export default function ImageGalleryPage() {
  return (
    <>
    {/* Global Container */}
      <main className="flex items-center justify-center min-h-screen bg-cyan-50">
        <ImageGalleryComp />
      </main>
      <Footer />
    </>
  );
}
