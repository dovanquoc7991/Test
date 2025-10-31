import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import ảnh từ thư mục assets
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.jpg";
import image7 from "../../assets/images/7.jpg";
import image8 from "../../assets/images/8.jpg";
import image9 from "../../assets/images/9.jpg";
import image10 from "../../assets/images/10.jpg";
import image11 from "../../assets/images/11.jpg";
import image12 from "../../assets/images/12.jpg";

// Khai báo mảng ảnh với các ảnh đã import
const photos = [
    { src: image1, width: 800, height: 600 },
    { src: image2, width: 1600, height: 900 },
    { src: image3, width: 800, height: 1200 },
    { src: image4, width: 1200, height: 800 },
    { src: image5, width: 1600, height: 900 },
    { src: image6, width: 800, height: 1200 },
    { src: image7, width: 1600, height: 900 },
    { src: image8, width: 800, height: 1200 },
    { src: image9, width: 800, height: 1200 },
    { src: image10, width: 800, height: 1200 },
    { src: image11, width: 1600, height: 900 },
    { src: image12, width: 800, height: 1200 },
];

const Gallery = () => {
    const [index, setIndex] = useState(-1);

    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-serif text-gray-800 mb-4">Album Ảnh</h2>
                <p className="text-gray-600 mb-12">Lưu giữ những khoảnh khắc quý giá trong hành trình của chúng mình</p>
                
                {/* Lưới ảnh thumbnail đơn giản */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {photos.map((photo, idx) => (
                        <div key={idx} className="aspect-square cursor-pointer" onClick={() => setIndex(idx)}>
                            <img src={photo.src} alt="" className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform" />
                        </div>
                    ))}
                </div>

                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={photos}
                />
            </div>
        </section>
    );
};

export default Gallery;