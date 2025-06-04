function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            img.setAttribute('src', 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Homem');
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            img.setAttribute('src', 'https://via.placeholder.com/150/FF69B4/000000?text=Mulher');
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`;
        res.appendChild(img);
    }
}