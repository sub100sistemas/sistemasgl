<template>
    <div class="mobile-navigation">
        <nav class="offcanvas-navigation" id="offcanvas-navigation">
            <ul>
                <li class="menu-item-has-children menu-expand">
                    <n-link to="" aria-label="Módulos">Módulos</n-link>
                    <ul class="sub-menu">
                        <li>
                            <ul>
                               <li>
                                    <a href="/modulos/controle-de-atendimentos/" aria-label="Controle de atendimentos">
                                        <span class="menu-text">Controle de atendimentos</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/modulos/simulador-de-vendas/" aria-label="Simulador de vendas">
                                        <span class="menu-text">Simulador de vendas</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/modulos/mapa-interativo/" aria-label="Mapa interativo">
                                        <span class="menu-text">Mapa interativo</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/modulos/administrativo/" aria-label="Administrativo">
                                        <span class="menu-text">Administrativo</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/modulos/financeiro/" aria-label="Financeiro">
                                        <span class="menu-text">Financeiro</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/modulos/gestao-de-inadimplencia/" aria-label="Gestão de Inadimplência">
                                        <span class="menu-text">Gestão de Inadimplência</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/modulos/fiscal/" aria-label="Fiscal">
                                        <span class="menu-text">Fiscal</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/modulos/integrador/" aria-label="Integrador">
                                        <span class="menu-text">Integrador</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/modulos/portal-de-cliente/" aria-label="Portal de cliente">
                                        <span class="menu-text">Portal de cliente</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children">
                    <n-link to="" aria-label="Conteúdo">Conteúdo</n-link >
                    <ul class="sub-menu">
                        <li>
                            <a href="/conteudo/eventos-online/" aria-label="Eventos online">
                                <span class="menu-text">Eventos online</span>
                            </a>
                        </li>
                        <li>
                            <a href="/conteudo/base-de-conhecimento/" aria-label="Base de conhecimento">
                                <span class="menu-text">Base de conhecimento</span>
                            </a>
                        </li>
                    </ul>
                </li>
                 <li class="menu-item-has-children">
                    <a href="/planos/" aria-label="Planos">Planos</a>
                </li> 
                <li class="has-children">
                    <a href="https://blog.sub100sistemas.com.br/" aria-label="Blog" target="_blank">
                        Blog
                    </a>
                </li>
                <li class="menu-item-has-children">
                    <n-link to="" aria-label="Sobre a SUB100">Sobre a SUB100</n-link >
                   <ul class="sub-menu">
                        <li>
                            <a href="https://sub100sistemas.com.br/sub100-sistemas/" aria-label="Sobre nós" target="_blank">
                                <span class="menu-text">Sobre nós</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://sub100.com.br/" aria-label="Portal Imobiliário" target="_blank">
                                <span class="menu-text" target="_blank">Portal Imobiliário</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://subseeon.com/" aria-label="CRM Imobiliário" target="_blank">
                                <span class="menu-text">CRM Imobiliário</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://sub100sistemas.com.br/trabalhe-conosco/" aria-label="Trabalhe conosco" target="_blank">
                                <span class="menu-text">Trabalhe conosco</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://sub100sistemas.com.br/fale-conosco/" aria-label="Fale conosco" target="_blank">
                                <span class="menu-text">Fale conosco</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default{
        name: 'MobileNavMenu',
        mounted() {
            const offCanvasNav = document.querySelector('#offcanvas-navigation');
            const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
            const anchorLinks = offCanvasNav.querySelectorAll('a');
        
            for (let i = 0; i < offCanvasNavSubMenu.length; i++){
                offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
            }

            const children = offCanvasNav.querySelectorAll('.menu-item-has-children');
            children.forEach(item => {
                item.addEventListener("click", (e) => {sideMenuExpand(e)});
            })
        
            const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
            const numMenuExpand = menuExpand.length;
    
        
            for (let i = 0; i < anchorLinks.length; i++) {
                anchorLinks[i].addEventListener("click", () => {closeMobileMenu()});
            }

            const sideMenuExpand = (e) => {

                const actives = offCanvasNav.querySelectorAll('.active');
                actives.forEach(item => {
                    if(item !== e.currentTarget) {
                        item.classList.remove('active');
                    }
                });
                e.currentTarget.classList.toggle('active');
            }
            const closeMobileMenu = () => {
                const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
                offcanvasMobileMenu?.classList.remove('active');
            }
        }
    };
</script>
<style lang="scss">
    .offcanvas-navigation {
        ul {
            padding-left: 0;
            li {
                border-bottom: 2px solid rgba(255, 255, 255, 0.15);
                &.menu-item-has-children {
                    &.mega--title > {
                        a {
                            font-weight: 500;
                        }
                    }
                    .sub-menu {
                        height: 0;
                        opacity: 0;
                        transition: 0.3s;
                        visibility: hidden;
                    }
                    &.active > {
                        .sub-menu {
                            height: 100%;
                            opacity: 1;
                            visibility: visible;
                            padding-left: 0;
                        }
                    }
                }
                a {
                    color: $white;
                    font-size: 16px;
                    font-weight: 500;
                    padding: 10px 0;
                    display: block;
                    &:hover {
                        color: $primary;
                        font-weight: 900;
                    }
                    .badge {
                        background-image: linear-gradient(45deg, #fe378c 0%, #fe5b34 100%);
                    }
                }
            }
        }

        ul {
            &.sub-menu {
                margin-left: 15px;
                transition: 0.4s;
                li {
                    list-style: none;
                    border: none;
                    a {
                        color: $white;
                        font-weight: lighter;
                        &:hover {
                            color: $primary;
                        }
                    }
                    .sub-menu {
                        li {
                            a {
                                font-size: 13px;
                                padding: 5px 0;
                            }
                        }
                    }
                }
            }
            
            li {
                &.menu-item-has-children {
                    position: relative;
                    display: block;
                    a {
                        display: inline-block;
                    }

                    &.active > {
                        .menu-expand {
                            background-color: rgba($white, 0.2);
                            i {
                                &:before {
                                    transform: rotate(0);
                                }
                            }
                        }
                    }

                    .menu-expand {
                        top: 5px;
                        right: 0;
                        width: 35px;
                        height: 35px;
                        cursor: pointer;
                        line-height: 35px;
                        position: absolute;
                        text-align: center;
                        background-color: rgba($white, 0.1);
                        &:hover {
                            background-color: rgba($white, 0.2);
                        }

                        i {
                            display: block;
                            border-bottom: 2px solid $white;
                            position: relative;
                            width: 10px;
                            text-align: center;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            &:before {
                                width: 100%;
                                content: "";
                                border-bottom: 2px solid $white;
                                display: block;
                                position: absolute;
                                top: 0;
                                transform: rotate(90deg);
                                transition: 0.4s;
                            }
                        }
                    }
                }
            }
        }
    }
</style>