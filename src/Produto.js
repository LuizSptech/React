import './App.css'

function Produto() {
  const nome = "Notebook";
  const preco = 3500;
    const desconto = 10
  // Calcule o preço com desconto aqui

  const descontoValor = preco * (desconto / 100)

  preco -= descontoValor


  return (
    // Monte o JSX aqui
    <div>
        <h1>{nome}</h1>
        <p>Preço original: R$ {preco}</p>
        <p>Preço com desconto: R$ {preco}</p>
    </div>
  );
}

export default Produto;