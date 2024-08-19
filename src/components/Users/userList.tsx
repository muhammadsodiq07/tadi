import { Turniket_StatusType } from "@/types";
import { useState } from "react";
import { className } from "../../utils/className";
import { Swiper, SwiperSlide } from "swiper/react";
import turniket_image from "../../assets/turniket.jpg";
import { Box, Button, Modal, Switch } from "@mui/material";
import { turniket_status } from "../../constants/tuniket_status";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { TURNIKET_RULES, TURNIKET_STATUS_COLOR } from "../../constants/enum";
import MyTable from "./user-table";

const UserList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [turnikets, setTurnikets] =
    useState<Turniket_StatusType[]>(turniket_status);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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
    <div>
      <div>
        <h2 className="text-[32px] text-red-primary font-[600]">
          List of users
        </h2>
        <div className="mt-[16px] pb-[24px]">
          <MyTable />
        </div>
      </div>
      <Button
        variant="contained"
        className="!fixed !right-[24px] !bottom-[10px]"
        onClick={handleOpenModal}
      >
        Status Turniket
      </Button>

      <Modal open={openModal} onClose={handleCloseModal} className="">
        <Box className="absolute bottom-0 left-0 w-full bg-white h-[300px] p-[16px]">
          <h2 className="font-[600] text-[24px] text-blue-primary">
            Turnikets Status
          </h2>
          <Swiper
            freeMode={true}
            spaceBetween={10}
            slidesPerView={10}
            className="mt-[24px]"
            scrollbar={{ draggable: true }}
          >
            {turnikets.map((elem) => (
              <SwiperSlide key={elem.id} className="">
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
        </Box>
      </Modal>
    </div>
  );
};

export default UserList;
