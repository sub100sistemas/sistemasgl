<template>
    <div class="about-section pt-5 pb-3" :class="addClassName">
        <div class="container">
            <div class="row align-items-center">
                <div class="col order-2">
                    <div class="about-content max-w-100 text-center">
                        <h1 class="title pt-4">Termos de uso</h1>
                        <h3 class="title fz-24 pt-4">BOAS-VINDAS!</h3>
                        <p class="fz-18 text-justify">O acesso ao conteúdo deste site dependerá de sua prévia e expressa concordância com os Termos de Uso e a Política de Privacidade.<br><br>Os Termos de Uso apresentam as "Condições Gerais" aplicáveis ao uso dos sites disponibilizados pela empresa SUB100 Sistemas LTDA, pessoa jurídica de direito privado, devidamente inscrita no CNPJ/MF: 11.528.518\0001-19 com endereço à Rua Machado de Assis, 621, Zona 06 - CEP 87015-580 - Maringá - PR, doravante denominada SUB100.</p>
                        <h3 class="title fz-24 pt-4">DEFINIÇÕES</h3>
                        <p class="fz-18 text-justify"><b>USUÁRIO</b> são todas as pessoas que acessam os sites da SUB100 Sistemas LTDA, independentemente de se cadastrarem e receberem uma identificação individual e exclusiva, ou não.<br><b>SUB100 Sistemas LTDA:</b> “SUB100”, empresa proprietária e responsável pelos sites: https://www.sub100sistemas.com.br/, https://sub100.com.br/, www.sistemasgl.com.br,  https://subseeon.com/, que se destinam a divulgação de seus produtos para fins de comercialização: Portal de Imóveis SUB100, SUBSEE on, Sistema SGL, Sites & Hotsites e Inteligência imobiliária. </p>
                        <h3 class="title fz-24 pt-4">RESPONSABILIDADES</h3>
                        <p class="fz-18 text-justify">O usuário, ao preencher formulários disponibilizados nos sites da SUB100, reconhece que deverá inserir dados legítimos e autoriza a empresa a utilizar os dados para fins de viabilizar a interação entre o usuário e a SUB100 e viabilizar a prestação de serviços. </p>
                        <h3 class="title fz-24 pt-4">CADASTRO</h3>
                        <p class="fz-18 text-justify">O usuário poderá realizar o cadastro nos sites da SUB100 quando houver interesse da sua parte para: (I) solicitar contato; (II) solicitar demonstração de produtos; (III)  trabalhar com a SUB100; (iv) receber conteúdos exclusivos. Todos os dados serão tratados segundo a Política de Privacidade e poderão ser disponibilizados a SUB100 para eventuais contatos.</p>
                        <h3 class="title fz-24 pt-4">USO DO SITE</h3>
                        <p class="fz-18 text-justify">A SUB100 não assegura operação contínua de seus sites devido a quedas de energia e problemas similares, mas compromete-se, a envidar os melhores esforços no sentido de tomar todas as medidas necessárias para minimizar os transtornos. Também, compromete-se em aprimorar o uso e a navegação do site, razão pela qual poderá solicitar e coletar informações e dados sobre a sua experiência de navegação. Os dados coletados serão utilizados para facilitar a interação no site e poderão permanecer armazenados nos sistemas da empresa.</p>
                        <p class="fz-18 text-justify">Os sites da SUB100 poderão armazenar cookies, que consistem em tecnologias coletadas automaticamente. Esses dados poderão ser utilizados para identificar preferências no site, melhorias na navegação e gerar relatórios para envio aos anunciantes.</p>
                        <h3 class="title fz-24 pt-4">ARMAZENAMENTO E SEGURANÇA</h3>
                        <p class="fz-18 text-justify">Todos os dados pessoais informados pelos usuários serão armazenados na base de dados da SUB100, sob rígidas práticas de segurança de informação, e conservados em seu cadastro ativo até eventual pedido de exclusão. Segundo a legislação vigente, o usuário poderá solicitar a eliminação dos dados vigentes, ou então solicitar a alteração do cadastro e ainda retirar o seu consentimento, especificando qual consentimento pretende retirar. A SUB100 poderá acessar e manter os dados pessoais dos usuários mesmo após pedido de exclusão, caso seja necessário para cumprimento de obrigações legais.</p>
                        <h3 class="title fz-24 pt-4">CONSENTIMENTO</h3>
                        <p class="fz-18 text-justify">O usuário reconhece e aceita todos os termos e condições de uso. A SUB100 poderá alterar tais termos e condições a qualquer momento e, as eventuais modificações realizadas, entrarão em vigor imediatamente. A SUB100 orienta o usuário, que na hipótese da não concordância com o presente documento e a Política de Privacidade, não sejam utilizados os serviços oferecidos pela SUB100 em seus sites.</p>
                        <h3 class="title fz-24 pt-4">CANAL DE DÚVIDAS</h3>
                        <p class="fz-18 text-justify">Caso tenha qualquer dúvida em relação aos Termos de Uso, favor entrar em contato: <a href="mailto:privacidade@sub100.com.br">privacidade@sub100.com.br</a>.</p>
                        <h3 class="title fz-24 pt-4">FORO</h3>
                        <p class="fz-18 text-justify">Fica eleito o Foro Central da Comarca de Maringá - PR para dirimir quaisquer questões decorrentes destes Termos de Uso, que serão regidos pelas leis brasileiras.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['addClassName'],
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    }
</script>