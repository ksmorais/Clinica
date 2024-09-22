document.getElementById('buscarBtn').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const especialidade = document.getElementById('especialidade').value;


    let url = 'http://localhost:3000/equipe';
    if (nome || especialidade) {
        url += `?${nome ? `nome=${nome}` : ''}${nome && especialidade ? '&' : ''}${especialidade ? `especialidade=${especialidade}` : ''}`;
    }


    fetch(url)
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('listaProfissionais');
            lista.innerHTML = '';  

            data.forEach(profissional => {
                const li = document.createElement('li');
                li.textContent = `${profissional.nome} - Especialidade: ${profissional.especialidade} - Disponibilidade: ${profissional.disponibilidade}`;
                lista.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao buscar os profissionais:', error));
});
