import MemoryGallery from '../components/gallery/MemoryGallery';
import SectionDivider from '../components/ui/SectionDivider';

export default function GallerySection() {
  return (
    <>
      <SectionDivider variant="light" />
      <MemoryGallery />
      <SectionDivider variant="light" />
    </>
  );
}
