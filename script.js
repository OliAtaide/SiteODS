let cores = [
    '#E5243B', '#DDA53A', '#4C9F38',
    '#C6192D', '#FF3921', '#22BDE2',
    '#FCC30A', '#A11942', '#FD6924',
    '#DD1367', '#FD9D23', '#BF8B2E',
    '#3E7E44', '#0397D9', '#55C02B',
    '#02689D', '#1A476A'
]

let botoes = [
    {
        texto: 'Erradicação da pobreza',
        icone: 'family_restroom',
        cor: '#E5243B',
        left: 0,
        top: '30px'
    },
    {
        texto: 'Fome zero',
        icone: 'rice_bowl',
        cor: '#DDA53A',
        top: '0',
        left: '235px'
    },
    {
        texto: 'Boa saúde e bem-estar',
        icone: 'vital_signs',
        cor: '#4C9F38',
        top: '140px',
        left: '140px'
    },
    {
        texto: 'Educação de qualidade',
        icone: 'school',
        cor: '#C6192D',
        left: 0,
        top: '240px'
    },
    {
        texto: 'Igualdade de gênero',
        icone: 'wc',
        cor: '#FF3921',
        top: '320px',
        left: '150px'
    },
    {
        texto: 'Água limpa e saneamento',
        icone: 'local_drink',
        cor: '#22BDE2',
        top: '450px',
        left: 0
    },
    {
        texto: 'Energia acessível e limpa',
        icone: 'energy_program_saving',
        cor: '#FCC30A',
        top: '480px',
        left: '160px'
    },
    {
        texto: 'Emprego digno e crescimento econômico',
        icone: 'local_drink',
        cor: '#A11942',
        top: '640px',
        left: '30px'
    },
    {
        texto: 'Indústria, inovação e infraestrutura',
        icone: 'monitoring',
        cor: '#FD6924',
        top: '625px',
        left: '215px'
    },
    {
        texto: 'Redução das desigualdades',
        icone: 'graphic_eq',
        cor: '#DD1367',
        top: 0,
        right: '235px'
    },
    {
        texto: 'Cidades e comuni- dades sustentáveis',
        icone: 'apartment',
        cor: '#FD9D23',
        top: '30px',
        right: 0,
    },
    {
        texto: 'Consumo e produção responsáveis',
        icone: 'all_inclusive',
        cor: '#BF8B2E',
        top: '140px',
        right: '140px'
    },
    {
        texto: 'Combate às alterações climáticas',
        icone: 'visibility',
        cor: '#3E7E44',
        top:'240px',
        right:0
    },
    {
        texto: 'Vida debaixo d’água',
        icone: 'waves',
        cor: '#0397D9',
        top:'320px',
        right:'150px',
    },
    {
        texto: 'Vida sobre a terra',
        icone: 'nature',
        cor: '#55C02B',
        top:'450px',
        right:0, 
    },
    {
        texto: 'Paz, justiça e instituições fortes',
        icone: 'local_drink',
        cor: '#02689D',
        top: '480px',
        right: '160px'
    },
    {
        texto: 'Parcerias em prol das metas',
        icone: 'monitoring',
        cor: '#1A476A',
        top: '640px',
        right: '30px'
    }
]

function addLeadingZeros(num) {
    if (num < 10) {
        return String(num).padStart(2, '0');
    }
    return num;
}

botoes.forEach(
    function (value, index) {
        console.log(value, index);
        $('.buttons').append(
            "<button class='btn rounded-circle' style='border: 2px solid "
            + value.cor + "; color:" + value.cor + "; left:" + value.left +"; top:"+ value.top +"; right:"+ value.right +"'>" +
            addLeadingZeros(index + 1) + ".<br>" + value.texto + "<br>" +
            "<span class='material-symbols-outlined'>"
            + value.icone + "</span>" + "</button>"
        )
    }
);


var len = 100 / cores.length
var grad = ''

for (let i = 0; i < cores.length; i++) {
    grad += cores[i] + ' ' + (len * i) + '%, '
    grad += cores[i] + ' ' + (len * (i + 1) - 1) + '%, '
    grad += '#fff ' + (len * (i + 1) - 1) + '%, '
    grad += '#fff ' + (len * (i + 1)) + '%, '
}

$('.navbar').css({
    'border-image': 'linear-gradient(to right, ' + grad + ')'
})
