// preços
const precos = {
    gasolina: 6.40,
    etanol: 5.20,
    diesel: 5.80
};

// função atualizar valor (arrow function)
const atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const litros = parseFloat(document.getElementById("litros").value);

    // validações
    if (!tipo) {
        alert("Selecione um tipo de combustível!");
        return;
    }

    if (isNaN(litros) || litros <= 0) {
        alert("Digite uma quantidade de litros válida!");
        return;
    }

    const precoPorLitro = precos[tipo];

    calcularValorAbastecimento(precoPorLitro, litros);
};

// função calcular (arrow function)
const calcularValorAbastecimento = (precoCombustivel, litros) => {
    const valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent =
        `Valor total: ${formatarMoeda(valorTotal)}`;
};

// função formatar moeda (arrow function)
const formatarMoeda = (valor) => {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
};

// eventos
document.getElementById("combustivel").addEventListener("change", atualizarValor);
document.getElementById("litros").addEventListener("input", atualizarValor);

// função anônima convertida para arrow
document.getElementById("litros").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        atualizarValor();
    }
});

// botão
document.getElementById("btnCalcular").addEventListener("click", atualizarValor);