import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const ListagemAlunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [clicou, setClicou] = useState(0);

  useEffect(() => {
    axios
      .get("https://secret-headland-69654.herokuapp.com/alunos")
      .then((response) => {
        setAlunos(response.data);
      });
  }, []);

  useEffect(() => {
    if (clicou > 0) alert("O usuário clicou no botão");
  }, [clicou]);

  return (
    <>
      <TableContainer sx={{ maxWidth: "650px" }} component={Paper}>
        <Table aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Idade</TableCell>
              <TableCell align="right">Cidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alunos.map((aluno) => (
              <TableRow key={aluno.nome}>
                <TableCell align="right">{aluno.nome}</TableCell>
                <TableCell align="right">{aluno.idade}</TableCell>
                <TableCell align="right">{aluno.cidade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => {
          setClicou(clicou + 1);
        }}
        variant="contained"
      >
        Disparar efeito
      </Button>
    </>
  );
};

export default ListagemAlunos;
