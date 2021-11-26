import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";
import { TemaContext } from "../../context";
import { useContext } from "react";

const GetTema = () => {
  const { temaSelecionado } = useContext(TemaContext);
  return temaSelecionado;
};

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#2c2d31",
  },
  // hide last border

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: GetTema() === "claro" ? "#fff" : "#202124",
  color:
    GetTema() === "claro"
      ? theme.palette.common.black
      : theme.palette.common.white,

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: GetTema() === "claro" ? "#1976D2" : "#151618",
    color:
      GetTema() === "claro"
        ? theme.palette.common.white
        : theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
