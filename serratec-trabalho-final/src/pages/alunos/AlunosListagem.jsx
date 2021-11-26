import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { StyledTableCell, StyledTableRow } from "./styles";
import Styles from "../../components/Styles";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../lotties/78259-loading.json";
import { TemaContext, AlunosContext } from "../../context";
import tema from "../../tema";



const AlunosListagem = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  //const [alunosAPI, setAlunosAPI] = useState([]);
  const { alunos, setAlunos } = useContext(AlunosContext);
  const { temaSelecionado, setTemaSelecionado } = useContext(TemaContext);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    getAlunos();
  }, []);

  /*Funcionando
  const getAlunos = () => {
    axios.get(API_URL).then((response) => {
      setAlunos(response.data);
    });
  };*/

  //TENTATIVA

  const getAlunos = () => {
    axios.get(API_URL).then((response) => {
      setAlunos(response.data);
      // setAlunos(alunosAPI);
    });
  };

  //FIM DA TENTATIVA

  const deletarAluno = (alunoExcluir) => {
    axios
      .delete(API_URL, { data: alunoExcluir })
      .then((response) => {
        MySwal.fire(<p>{response?.data?.message}</p>);

        const alunoIndex = alunos.findIndex(
          (elemento) => elemento.id === alunoExcluir.id
        );
        let newAlunos = [...alunos];
        newAlunos.splice(alunoIndex, 1);
        setAlunos(newAlunos);
      })
      .catch((error) => {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };

  const editarAluno = (alunos) => {
    navigate(`/editar-alunos/${alunos.id}`);
  };
  

  // SE FOSSE USAR A ABSTRAÇÃO (aula 4)
  // const listaCampos = [
  //   "nome",
  //   "idade",
  //   "cidade"
  // ];

  // return (
  //   <Box sx={{ marginTop: "25px" }}>
  //     <TabelaSerratec listaCampos={listaCampos} listaValores={alunos} />
  //   </Box>
  // );

  return (
    <Box sx={{ marginTop: "25px" }}>
      {alunos.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Nome</StyledTableCell>
                <StyledTableCell>Idade</StyledTableCell>
                <StyledTableCell>Cidade</StyledTableCell>
                <StyledTableCell>Ações</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alunos.map((alunoApresentado) => (
                <StyledTableRow>
                  <StyledTableCell>{alunoApresentado.nome}</StyledTableCell>
                  <StyledTableCell>{alunoApresentado.idade}</StyledTableCell>
                  <StyledTableCell>{alunoApresentado.cidade}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      onClick={() => editarAluno(alunoApresentado)}
                      variant="text"
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      onClick={() => deletarAluno(alunoApresentado)}
                      variant="text"
                    >
                      <DeleteIcon />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Styles.Form>
          <Lottie options={defaultOptions} height={500} width={500} />
        </Styles.Form>
      )}
    </Box>
  );
};

export default AlunosListagem;
