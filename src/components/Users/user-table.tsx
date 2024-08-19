import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { TableType } from "@/types";
import SingleModalUser from "./single-modal.user";
import { getUsers, getUserSingle } from "../../services/users/users.service";

const MyTable: React.FC = () => {
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [users, setUsers] = useState<TableType[]>([]);
  const [singleUser, setSingleUser] = useState<TableType | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { users } = await getUsers();
        setUsers(users);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    fetchUsers();
  }, []);

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredRows = users.filter((row) =>
    row.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = async (id: number) => {
    try {
      const user = await getUserSingle(id);
      setSingleUser(user);
      setOpen(true);
    } catch (error) {
      console.error("Failed to fetch user details", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSingleUser(null);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search name"
        className="w-full px-[12px] py-[10px] rounded-[8px] border-[1px] border-stroke"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TableContainer component={Paper} className="mt-[24px]">
        <Table>
          <TableHead>
            <TableRow>
              {["№", "Name", "PNFL", "Date of birth", "Gender", "Age"].map(
                (header) => (
                  <TableCell key={header} className="!font-[600]">
                    {header}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => handleRowClick(row.id)}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.ssn}</TableCell>
                  <TableCell>{row.birthDate}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.age}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[7, 10, 25]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      {/* Modal */}
      <SingleModalUser
        open={open}
        singleUser={singleUser}
        handleClose={handleClose}
      />
    </>
  );
};

export default MyTable;
