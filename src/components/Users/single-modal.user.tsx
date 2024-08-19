import { TableType } from "@/types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { FC } from "react";

type IProps = {
  open: boolean;
  handleClose: () => void;
  singleUser: TableType | null;
};

const SingleModalUser: FC<IProps> = ({ open, handleClose, singleUser }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: { borderRadius: 12, minHeight: "400px", maxHeight: "80vh" },
        }}
      >
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          {singleUser ? (
            <div className="grid gap-4 grid-cols-3 !w-full">
              <label className="flex flex-col" htmlFor="name">
                Name
                <input
                  id="name"
                  disabled
                  type="text"
                  value={singleUser.firstName}
                  className="border border-stroke rounded-[6px] py-[8px] px-[8px] mt-[6px]"
                />
              </label>
              <label className="flex flex-col" htmlFor="name">
                Surname
                <input
                  id="name"
                  disabled
                  type="text"
                  value={singleUser.lastName}
                  className="border border-stroke rounded-[6px] py-[8px] px-[8px] mt-[6px]"
                />
              </label>
              <label className="flex flex-col" htmlFor="name">
                PNFL
                <input
                  id="name"
                  disabled
                  type="text"
                  value={singleUser.ssn}
                  className="border border-stroke rounded-[6px] py-[8px] px-[8px] mt-[6px]"
                />
              </label>
              <label className="flex flex-col" htmlFor="name">
                Date of bth
                <input
                  id="name"
                  disabled
                  type="text"
                  value={singleUser.birthDate}
                  className="border border-stroke rounded-[6px] py-[8px] px-[8px] mt-[6px]"
                />
              </label>
              <label className="flex flex-col" htmlFor="name">
                Phone number
                <input
                  id="name"
                  disabled
                  type="text"
                  value={singleUser.phone}
                  className="border border-stroke rounded-[6px] py-[8px] px-[8px] mt-[6px]"
                />
              </label>
              <label className="flex flex-col" htmlFor="name">
                Gender
                <input
                  id="name"
                  disabled
                  type="text"
                  value={singleUser.gender}
                  className="border border-stroke rounded-[6px] py-[8px] px-[8px] mt-[6px]"
                />
              </label>
              <label className="flex flex-col" htmlFor="name">
                Address
                <input
                  id="name"
                  disabled
                  type="text"
                  value={singleUser.address.address}
                  className="border border-stroke rounded-[6px] py-[8px] px-[8px] mt-[6px]"
                />
              </label>
              <label className="flex flex-col" htmlFor="name">
                Country
                <input
                  id="name"
                  disabled
                  type="text"
                  value={`${singleUser.address.country}, ${singleUser.address.city}`}
                  className="border border-stroke rounded-[6px] py-[8px] px-[8px] mt-[6px]"
                />
              </label>
              <label className="flex flex-col" htmlFor="name">
                Email
                <input
                  id="name"
                  disabled
                  type="text"
                  value={singleUser.email}
                  className="border border-stroke rounded-[6px] py-[8px] px-[8px] mt-[6px]"
                />
              </label>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </DialogContent>
        <DialogActions className="!px-[20px]">
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SingleModalUser;
