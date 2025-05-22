// DetalleNegocio.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DetalleEmprendimiento = ({ nombreEmprendimiento, imagenes = [] }) => {
  return (
    <div style={{ maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h2>{nombreEmprendimiento}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        style={{ borderRadius: "10px" }}
      >
        {imagenes.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Producto ${index + 1}`}
              style={{
                width: "100%",
                borderRadius: "10px",
                height: "20em",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DetalleEmprendimiento;
