import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Styles from "../../components/Styles";
import { API_URL } from "../../constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useParams } from "react-router";
import { AlunosContext } from "../../context";
import Lottie from "react-lottie";
import Box from "@mui/material/Box";
import animationData from "../../lotties/78259-loading.json";

const CadastrarAlunos = () => {
  const { id } = useParams();
  const MySwal = withReactContent(Swal);
  const { alunos, setAlunos } = useContext(AlunosContext);

  const valorInicial = id ? "" : null;
  const [nome, setNome] = useState(valorInicial);
  const [idade, setIdade] = useState(valorInicial);
  const [cidade, setCidade] = useState(valorInicial);

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

  const carregarAluno = (listaAlunos) => {
    listaAlunos.forEach((aluno) => {
      if (aluno.id == id) {
        setNome(aluno.nome);
        setIdade(aluno.idade);
        setCidade(aluno.cidade);
      }
    });
  };

  const getAlunos = () => {
    /*response.data? alunos.forEach((aluno) => {

    //if(alunos.length){o if de baixo}
    if (aluno.id == id) {
      setNome(aluno.nome);
      setIdade(aluno.idade);
      setCidade(aluno.cidade);
    }
    else{axios.get(API_URL).then((response) => {
      setAlunos(response.data);
      // setAlunos(alunosAPI);
      });}*/
    if (alunos.length > 0) {
      carregarAluno(alunos);
    } else {
      axios.get(API_URL).then((response) => {
        setAlunos(response.data);
      });
    }
  };

  const cadastrarAlunos = () => {
    if (id) {
      axios
        .put(API_URL, {
          id,
          nome,
          idade,
          cidade,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            MySwal.fire(<p>{response?.data?.message}</p>);
            limparCampos();
          }
        })
        .catch((error) => {
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
          });
        });
    } else {
      axios
        .post(API_URL, {
          nome,
          idade,
          cidade,
        })
        .then((response) => {
          if (response.status === 201) {
            MySwal.fire(<p>{response?.data?.message}</p>);
            limparCampos();
          }
        })
        .catch((error) => {
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
          });
        });
    }
  };

  const limparCampos = () => {
    setNome("");
    setIdade("");
    setCidade("");
  };

  return (
    <Box sx={{ marginTop: "25px" }}>
      {alunos.length > 0 ? (
        <Styles.Form>
          <Styles.InputCadastro
            label="Nome"
            variant="outlined"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Styles.InputCadastro
            label="Idade"
            variant="outlined"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <Styles.InputCadastro
            label="Cidade"
            variant="outlined"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />

          <Styles.ButtonCadastro onClick={cadastrarAlunos}>
            {id ? "Editar" : "Cadastrar"}
          </Styles.ButtonCadastro>
        </Styles.Form>
      ) : (
        <Styles.Form>
          <Lottie options={defaultOptions} height={500} width={500} />
        </Styles.Form>
      )}
    </Box>
  );
};

export default CadastrarAlunos;
