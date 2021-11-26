import styled from "styled-components";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { TemaContext } from "../context";
import tema from "../tema";

const Form = styled.form`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  min-height: calc(100vh - 114px);
`;

const InputCadastro = styled(TextField)`
  width: 500px;
  margin: 15px auto;
  background-color: #fff;
  border-radius: 4px;
`;

const ButtonCadastro = styled(Button)`
  width: 500px;
  margin: 10px auto;
`;

export default { Form, InputCadastro, ButtonCadastro };
