import { useContext } from "react";
import { TemaContext, UsuarioContext } from "../context";
import tema from "../tema";

const DefaultPage = (props) => {
  const { temaSelecionado, setTemaSelecionado } = useContext(TemaContext);
  const { usuario } = useContext(UsuarioContext);
  return (
    <div style={tema[temaSelecionado]}>
      {props.children}
      <div
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "#1976D2",
          color: "#fff",
          display: "flex",
          position: "fixed",
          bottom: 0,
        }}
      >
        <div style={{
          alignSelf: "center",
          marginLeft: "10px"
        }}>{usuario}</div>
      </div>
    </div>
  );
};

export default DefaultPage;
