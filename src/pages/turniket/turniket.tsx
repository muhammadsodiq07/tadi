import { className } from "../../utils/className";
import { Swiper, SwiperSlide } from "swiper/react";
import { Switch } from "@mui/material";
import { useState } from "react";
import { Turniket_StatusType } from "@/types";
import turniket_image from "../../assets/turniket.jpg";
import { turniket_status } from "../../constants/tuniket_status";
import { TURNIKET_RULES, TURNIKET_STATUS_COLOR } from "../../constants/enum";

const Turniket = () => {
  const [turnikets, setTurnikets] =
    useState<Turniket_StatusType[]>(turniket_status);

  const handleToggle = (id: number) => {
    setTurnikets((prevTurnikets) =>
      prevTurnikets.map((turniket) => {
        if (turniket.id !== id) return turniket;
        let newStatus, newColor;
        switch (turniket.status) {
          case TURNIKET_RULES.OPEN:
            newStatus = TURNIKET_RULES.CLOSE;
            newColor = TURNIKET_STATUS_COLOR.RED;
            break;
          case TURNIKET_RULES.CLOSE:
            newStatus = TURNIKET_RULES.OPEN;
            newColor = TURNIKET_STATUS_COLOR.GREEN;
            break;
          default:
            newStatus = turniket.status;
            newColor = turniket.color;
        }
        return {
          ...turniket,
          status: newStatus,
          color: newColor,
        };
      })
    );
  };

  return (
    <>
      <Swiper
        freeMode={true}
        spaceBetween={10}
        slidesPerView={8}
        className="mt-[24px]"
        scrollbar={{ draggable: true }}
      >
        {turnikets.map((elem) => (
          <SwiperSlide key={elem.id} className="!w-[150px]">
            <div
              className={className({
                "border-[2px] rounded-[8px] p-[12px]": true,
                "border-green": elem.status === TURNIKET_RULES.OPEN,
                "border-red-primary": elem.status === TURNIKET_RULES.CLOSE,
              })}
            >
              <p>Turniket {elem.id}</p>
              <img
                className="w-[100px] h-[100px] object-cover"
                src={turniket_image}
                alt="logo"
              />
              <p style={{ color: elem.color }}>{elem.status}</p>
              <Switch
                className="ml-[-12px]"
                checked={elem.status === TURNIKET_RULES.OPEN}
                onChange={() => handleToggle(elem.id)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Turniket;
