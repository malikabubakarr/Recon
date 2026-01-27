"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, Pause, X } from "lucide-react";

type MediaType = "image" | "video";

interface MediaItem {
  id: number;
  type: MediaType;
  title: string;
  src: string | string[]; // image array OR video src
}

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<"all" | MediaType>("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<MediaItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Touch/swipe state
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  const mediaItems: MediaItem[] = [
    { id: 1, type: "image", title: "Recon Shoot", src: ["/ad11.jpg", "/ad12.jpg", "/ad13.jpg"] },
    { id: 2, type: "image", title: "Recon Shoot", src: ["/45-1.jpg", "/45-2.jpg", "/ad13.jpg"] },
    { id: 3, type: "image", title: "Recon Shoot", src: "/all.jpg" },
    { id: 4, type: "video", title: "Recon Ad", src: "/video1.mp4" },
    { id: 5, type: "video", title: "Recon Promo", src: "/video2.mp4" },
    { id: 6, type: "video", title: "Recon Promo", src: "/raju.mp4" },
    { id: 7, type: "video", title: "Recon Promo", src: "/herbalwax.mp4" },
  ];

  const filteredMedia =
    activeTab === "all"
      ? mediaItems
      : mediaItems.filter((m) => m.type === activeTab);

  const openModal = (item: MediaItem, index = 0) => {
    setActiveItem(item);
    setActiveImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveItem(null);
  };

  const nextImage = () => {
    if (!activeItem || activeItem.type !== "image") return;
    const images = Array.isArray(activeItem.src) ? activeItem.src : [activeItem.src];
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (!activeItem || activeItem.type !== "image") return;
    const images = Array.isArray(activeItem.src) ? activeItem.src : [activeItem.src];
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // ------------------- Swipe Handlers -------------------
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].screenX;
    touchStartY.current = e.touches[0].screenY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].screenX;
    touchEndY.current = e.touches[0].screenY;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;

    // Horizontal swipe (left/right)
    if (Math.abs(diffX) > 50 && Math.abs(diffY) < 50) {
      if (diffX > 0) nextImage(); // swipe left → next
      else prevImage(); // swipe right → prev
    }

    // Vertical swipe down → close modal
    if (diffY < -50 && Math.abs(diffX) < 50) {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-16 px-6" style={{ colorScheme: 'light' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-3">Recon Media</h1>
          <p className="text-gray-500 font-light">Photos & videos from our latest drops</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          {["all", "image", "video"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-full text-sm transition ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              {tab === "all" ? "All" : tab === "image" ? "Images" : "Videos"}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredMedia.map((item) =>
            item.type === "image" ? (
              <ImageCard key={item.id} item={item} openModal={openModal} />
            ) : (
              <VideoCard key={item.id} item={item} openModal={openModal} />
            )
          )}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {modalOpen && activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition"
          >
            <X size={24} />
          </button>

          {activeItem.type === "image" ? (
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const images = Array.isArray(activeItem.src) ? activeItem.src : [activeItem.src];
                return (
                  <>
                    <img
                      src={images[activeImageIndex]}
                      alt={activeItem.title}
                      className="w-full h-auto rounded-lg object-contain"
                    />

                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-3 bg-black/50 rounded-full hover:bg-black/70 transition z-10"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-3 bg-black/50 rounded-full hover:bg-black/70 transition z-10"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                  </>
                );
              })()}
            </div>
          ) : (
            <VideoModal src={activeItem.src as string} />
          )}
        </div>
      )}
    </div>
  );
}

/* ================= IMAGE CARD ================= */
function ImageCard({
  item,
  openModal,
}: {
  item: MediaItem;
  openModal: (item: MediaItem, index?: number) => void;
}) {
  const images = Array.isArray(item.src) ? item.src : [item.src];
  const [index, setIndex] = useState(0);

  return (
    <div className="relative aspect-square overflow-hidden rounded-xl bg-black group cursor-pointer">
      <img
        src={images[index]}
        className="w-full h-full object-cover transition duration-500"
        alt={item.title}
        onClick={() => openModal(item, index)}
      />

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  );
}

/* ================= VIDEO CARD ================= */
function VideoCard({
  item,
  openModal,
}: {
  item: MediaItem;
  openModal: (item: MediaItem) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div
      className="relative aspect-square overflow-hidden rounded-xl bg-black group cursor-pointer"
      onClick={() => openModal(item)}
    >
      <video
        ref={videoRef}
        src={item.src as string}
        muted={muted}
        loop
        className="w-full h-full object-cover"
      />

      {/* Hover controls */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 md:opacity-100 transition md:group-hover:opacity-100">
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="bg-black/60 p-3 rounded-full text-white hover:bg-black/80 transition"
        >
          {playing ? <Pause size={20} /> : <Play size={20} />}
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          className="bg-black/60 p-3 rounded-full text-white hover:bg-black/80 transition"
        >
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
}

/* ================= VIDEO MODAL ================= */
function VideoModal({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
      <video
        ref={videoRef}
        src={src}
        controls={false}
        autoPlay
        muted={muted}
        className="w-full h-auto rounded-lg object-contain"
      />

      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button
          onClick={togglePlay}
          className="bg-black/60 p-2 rounded-full text-white hover:bg-black/80 transition"
        >
          {playing ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={toggleMute}
          className="bg-black/60 p-2 rounded-full text-white hover:bg-black/80 transition"
        >
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
}