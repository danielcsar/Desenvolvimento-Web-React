const Botao = (props) => {
  const showMessage = () => {
    alert('clicou');
  }

  const divStyle = {
    backgroundColor: "red",
    color: "white",
    width: "250px",
    height: "80px",
  };

  return (
    <button
      style={divStyle}
      onClick={showMessage}
    >
      {props.children}
    </button>
  );
};

export default Botao;
