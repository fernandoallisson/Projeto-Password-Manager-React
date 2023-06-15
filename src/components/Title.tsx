type TituloProp = {
  titulo: string
};

function Title({ titulo }: TituloProp) {
  return (
    <div>
      <h1>{titulo}</h1>
    </div>
  );
}

export default Title;
