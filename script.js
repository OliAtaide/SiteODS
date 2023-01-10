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
        desc: 'Erradicar a pobreza em todas as formas e em todos os lugares.',
        cor: '#E5243B',
        left: 0,
        top: '30px'
    },
    {
        texto: 'Fome zero',
        icone: 'rice_bowl',
        desc: 'Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável.',
        cor: '#DDA53A',
        top: '0',
        left: '235px'
    },
    {
        texto: 'Boa saúde e bem-estar',
        icone: 'vital_signs',
        desc: 'Garantir o acesso à saúde de qualidade e promover o bem-estar para todos, em todas as idades.',
        cor: '#4C9F38',
        top: '140px',
        left: '140px'
    },
    {
        texto: 'Educação de qualidade',
        icone: 'school',
        desc: 'Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos.',
        cor: '#C6192D',
        left: 0,
        top: '240px'
    },
    {
        texto: 'Igualdade de gênero',
        icone: 'wc',
        desc: 'Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.',
        cor: '#FF3921',
        top: '320px',
        left: '150px'
    },
    {
        texto: 'Água limpa e saneamento',
        icone: 'local_drink',
        desc: 'Garantir a disponibilidade e a gestão sustentável da água potável e do saneamento para todos.',
        cor: '#22BDE2',
        top: '450px',
        left: 0
    },
    {
        texto: 'Energia acessível e limpa',
        icone: 'energy_program_saving',
        desc: 'Garantir o acesso a fontes de energia fiáveis, sustentáveis e modernas para todos.',
        cor: '#FCC30A',
        top: '480px',
        left: '160px'
    },
    {
        texto: 'Emprego digno e crescimento econômico',
        icone: 'local_drink',
        desc: 'Promover o crescimento econômico inclusivo e sustentável, o emprego pleno e produtivo e o trabalho digno para todos.',
        cor: '#A11942',
        top: '640px',
        left: '30px'
    },
    {
        texto: 'Indústria, inovação e infraestrutura',
        icone: 'monitoring',
        desc: 'Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.',
        cor: '#FD6924',
        top: '625px',
        left: '215px'
    },
    {
        texto: 'Redução das desigualdades',
        icone: 'graphic_eq',
        desc: 'Reduzir as desigualdades no interior dos países e entre países.',
        cor: '#DD1367',
        top: 0,
        right: '235px'
    },
    {
        texto: 'Cidades e comuni- dades sustentáveis',
        icone: 'apartment',
        desc: 'Tornar as cidades e comunidades mais inclusivas, seguras, resilientes e sustentáveis.',
        cor: '#FD9D23',
        top: '30px',
        right: 0,
    },
    {
        texto: 'Consumo e produção responsáveis',
        icone: 'all_inclusive',
        desc: 'Garantir padrões de consumo e de produção sustentáveis.',
        cor: '#BF8B2E',
        top: '140px',
        right: '140px'
    },
    {
        texto: 'Combate às alterações climáticas',
        icone: 'visibility',
        desc: 'Adotar medidas urgentes para combater as alterações climáticas e os seus impactos.',
        cor: '#3E7E44',
        top: '240px',
        right: 0
    },
    {
        texto: 'Vida debaixo d’água',
        icone: 'waves',
        desc: 'Conservar e usar de forma sustentável os oceanos, mares e os recursos marinhos para o desenvolvimento sustentável.',
        cor: '#0397D9',
        top: '320px',
        right: '150px',
    },
    {
        texto: 'Vida sobre a terra',
        icone: 'nature',
        desc: 'Proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, travar e reverter a degradação dos solos e travar a perda da biodiversidade.',
        cor: '#55C02B',
        top: '450px',
        right: 0,
    },
    {
        texto: 'Paz, justiça e instituições fortes',
        icone: 'local_drink',
        cor: '#02689D',
        desC: 'Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas a todos os níveis.',
        top: '480px',
        right: '160px'
    },
    {
        texto: 'Parcerias em prol das metas',
        icone: 'monitoring',
        desc: 'Reforçar os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.',
        cor: '#1A476A',
        top: '640px',
        right: '30px'
    }
]

var main_title = $('.main-title');

function addLeadingZeros(num) {
    if (num < 10) {
        return String(num).padStart(2, '0');
    }
    return num;
}

botoes.forEach(
    function (value, index) {
        $('.buttons-bg').append(
            "<button class='btn btn-bg btn-bg-" + index + " rounded-circle position-absolute' value='" + index + "' >" +
            addLeadingZeros(index + 1) + ".<br>" + value.texto + "<br>" +
            "<span class='material-symbols-outlined'>"
            + value.icone + "</span>" + "</button>"
        )

        $('style').append(
            ".btn-bg-" + index + ", .btn-mini-" + index + " {\n" +
            "   color: " + value.cor + " !important;\n" +
            "   border:  2px solid" + value.cor + " !important;\n" +
            "}\n" +
            ".btn-bg-" + index + " {\n" +
            "   top: " + value.top + ";\n" +
            "   left: " + value.left + ";\n" +
            "   right: " + value.right + ";\n" +
            "}\n" +
            ".btn-bg-" + index + ":hover , .btn-mini-" + index + ":hover {\n" +
            "   background-color: " + value.cor + "80 ;\n" +
            "}\n" +
            ".btn-sel-" + index + " {\n" +
            "   background-color: " + value.cor + ";\n" +
            "   color: white;" +
            "}\n"
        )

        $('style').append(
            ".button-title-" + index + ", .btn-mini-" + index + " {\n" +
            "   color: " + value.cor + " !important;\n" +
            "}\n" +
            ".button-title-" + index + " .logo, " +
            ".button-title-" + index + " .hr, " +
            ".button-title-" + index + " .projetos{\n" +
            "   border-color: " + value.cor + ";\n" +
            "}\n" +
            ".button-title:has(.button-title-" + index + ")::before{\n" +
            "background: repeating-conic-gradient("+ value.cor + " 0deg 18deg, transparent 18deg 21.17647058823529deg);"
            + "}\n" +
            ".button-title:has(.button-title-" + index + ") .btn-title-main{\n" +
                "color:"+ value.cor + ";"
            + "}\n"
        )
    }
);

$('body').on('click', '.btn-bg, .btn-mini', function () {
    $('.buttons-mini-col, .button-selected').html('');
    var cls = '.buttons-mini-l';
    var i = $(this).val();
    botoes.forEach(
        function (value, index) {
            if (cls == '.buttons-mini-l' & $('.btn-mini').length == 8) {
                cls = '.buttons-mini-r';
            }
            if (i != index) {
                $(cls).append(
                    "<button class='btn btn-mini btn-mini-" + index +
                    " rounded-circle' value='" + index + "'><span class='material-symbols-outlined'>"
                    + value.icone + "</span>" + "</button>"
                )
            }
            else {
                $('.button-selected').append(
                    "<button class='btn btn-bg btn-sel-" + index + " rounded-circle' value='" + index + "'>" +
                    addLeadingZeros(index + 1) + ".<br>" + value.texto + "<br>" +
                    "<span class='material-symbols-outlined'>"
                    + value.icone + "</span>" + "</button>"
                )
                $('.button-title').css('border-color', value.cor);
                $('.button-title').html(
                    "<h3 class='btn-title-main'>" + addLeadingZeros(index + 1) + '. ' + value.texto + "</h3><div class='text button-title-" + index + "'><div class='p'><p class='text-black'>" +
                            value.desc
                            +
                            `</p><div class='hr my-3'></div><h3>Nossos projetos</h3>
                        <div class="d-grid my-4">
                            <div class="logo">
                                <img  class="img-fluid" src="v1_logo-lais-azul-1.svg" alt="">
                            </div>
                            <div class="logo">
                                <img class="img-fluid" src="ufrn-logo.png" alt="">
                            </div>
                        </div>
                        <div class="projetos my-3" >
        
                        </div>
                    </div>
                </div>
                `
                )
                //$('.button-title').append(

                //)
            }
        }
    );
    $('.buttons').hide();
    $('.buttons-mini').show();
})

$('body').on('click', '.button-voltar', function () {
    $('.buttons').show();
    $('.buttons-mini').hide();
})

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
