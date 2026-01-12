fetch("data/challenges.json")
    .then(res => res.json())
    .then(data => {
        if (!data.length) return;

        const today = data[data.length - 1];

        const formatedDate = today.date.split('-').reverse().join('/');
        document.getElementById("data").innerHTML = formatedDate;

        document.getElementById("today").innerHTML = `
            <p><strong>Estilo: </strong> ${today.tecnica}</p>
            <p><strong>Tema: </strong> ${today.tema}</p>
            <p><strong>Elemento: </strong> ${today.elemento}</p>
        `;

        const history = document.getElementById("history");
        data.slice().reverse().forEach(day => { // slice separa os valores do data, reverse troca a ordem pois os mais recentes sao os ultimos do array
            const div = document.createElement("div");
            div.innerHTML = `
                <small>${day.date}</small>
                <p>${day.tecnica} · ${day.tema} · ${day.elemento}</p>
            `;
            history.appendChild(div); // appendChild adiciona sem substituir o que ja existe dentro do elemento
        });
    });
