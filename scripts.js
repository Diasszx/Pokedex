document.addEventListener('DOMContentLoaded',() =>{
    const inputPesquisar = document.getElementById('input-pesquisar');
    const btnPesquisar = document.getElementById('btn-pesquisar');
    const btnAnterior = document.getElementById('btn-anterior');
    const btnProximo = document.getElementById('btn-proximo');
    const pokemonInfo = document.getElementById('pokemon-info');
    const btnNavegacao = document.getElementById('.btns-navegacao');
    const pokemonImagem = document.getElementById('pokemon-img');
    const pokemonNome = document.getElementById('pokemon-nome');
    const pokemonDescricao = document.getElementById('pokemon-descricao');
    const mensagemErro = document.getElementById('mensagem-erro');
    const mensagemLoading = document.getElementById('mensagem-loading');
    let idAtualPokemon = 1;

    const fetchPokemon = async (identificadorPokemon) => {
        exibirLoading();
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon${identificadorPokemon}`);
            if(!response.ok) throw new Error('404 NOT FOUND - Pokemon não encontrado!')
        } catch (error) {
            
        } finally{

        }
    }
    const exibirLoading = () => {
        mensagemLoading.classList.remove('hidden');
        pokemonInfo.classList.add('hidden');
        mensagemErro.classList.add('hidden');
        btnNavegacao.classList.add('hidden');
    }
});
