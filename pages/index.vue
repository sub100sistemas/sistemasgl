<template>
    <div class="pageHome">
        <LazyHydrate when-visible>
            <Header />
        </LazyHydrate>
        <LazyHydrate when-visible>
            <MobileHeader />
        </LazyHydrate>
        <LazyHydrate when-visible>
            <HeroSistemas />
        </LazyHydrate>
        <LazyHydrate when-visible>
            <HeroLote />
        </LazyHydrate>
        <LazyHydrate when-visible>
            <HeroModule addClassName="bg-f8f8f8" :mostrarTitulo="true" />
        </LazyHydrate>
        <LazyHydrate when-visible>
            <HeroIntegration />
        </LazyHydrate>
        <LazyHydrate when-visible>
            <HeroCliente />
        </LazyHydrate>
        <LazyHydrate when-visible>
            <HeroStatistics />
        </LazyHydrate>
        <LazyHydrate when-visible>
            <HeroDepositions /> 
        </LazyHydrate>
        <LazyHydrate when-visible>
            <Inscreva addClassName="pb-0" />
        </LazyHydrate>
        <LazyHydrate when-visible>
            <Publicity />
        </LazyHydrate>
        <LazyHydrate when-visible>
            <Footer />
        </LazyHydrate>
    </div>
</template>
<script>
    import LazyHydrate from 'vue-lazy-hydration';
    export default {
        components: {
            LazyHydrate,
            Header: () => import('@/components/sub100/Header'),
            MobileHeader: () => import('@/components/sub100/MobileHeader'),
            HeroSistemas: () => import('@/components/sub100/HeroSistemas'),
            HeroLote: () => import('@/components/sub100/HeroLote'),
            HeroModule: () => import('@/components/sub100/HeroModule'),
            HeroCliente: () => import('@/components/sub100/HeroCliente'),
            HeroIntegration: () => import('@/components/sub100/HeroIntegration'),
            HeroStatistics: () => import('@/components/sub100/HeroStatistics'),
            HeroDepositions: () => import('@/components/sub100/HeroDepositions'),
            Inscreva: () => import('@/components/sub100/Inscreva'),
            Publicity: () => import('@/components/sub100/Publicity'),
            Footer: () => import('@/components/sub100/Footer'),
        },
        data() {
            let url = 'https://sistemasgl.com.br/';
           //if(process.client) {
            //    url = "window.location.href";
           //}
                //if(url[url.length -1] === '/') {
            //  url = url.slice(0,  -1)
            //  }
            // }
            const name = "Sistema para loteadora e incorporadora, Gestão de Loteamento";
            const description =  "O Sistema SGL possui soluções inovadoras para quem incorpora loteamentos e outros empreendimentos.";
            return {
                url: url,
                name: name,
                description: description,
                structuredData: {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": url,
                            "url": url,
                            "name": name,
                            "description": description,
                            "isPartOf": {
                            "@id": "https://sistemasgl.com.br/#website"
                            },
                            "about": {
                            "@id": "https://sistemasgl.com.br/#organization"
                            },
                            "datePublished": "2023-10-10T11:29:34+00:00",
                            "dateModified": "2023-10-15T20:44:30+00:00",
                            "breadcrumb": {
                            "@id": "https://sistemasgl.com.br/#breadcrumb"
                            },
                            "inLanguage": "pt-BR",
                            "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": [
                                    url
                                ]
                            }
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": "https://sistemasgl.com.br/#breadcrumb",
                            "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home"
                            }
                            ]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://sistemasgl.com.br/#website",
                            "url": "https://sistemasgl.com.br/",
                            "name": name,
                            "description": "",
                            "publisher": {
                            "@id": "https://sistemasgl.com.br/#organization"
                            },
                            "potentialAction": [
                            {
                                "@type": "SearchAction",
                                "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": "https://sistemasgl.com.br/?s={search_term_string}"
                                },
                                "query-input": "required name=search_term_string"
                            }
                            ],
                            "inLanguage": "pt-BR"
                        },
                        {
                            "@type": "Organization",
                            "@id": "https://sistemasgl.com.br/#organization",
                            "name": name,
                            "url": "https://sistemasgl.com.br/",
                            "logo": {
                            "@type": "ImageObject",
                            "inLanguage": "pt-BR",
                            "@id": "https://sistemasgl.com.br/#/schema/logo/image/",
                            "url": "https://sistemasgl.com.br/images/logo/dark-logo.svg",
                            "contentUrl": "https://sistemasgl.com.br/images/logo/dark-logo.svg",
                            "width": 160,
                            "height": 44,
                            "caption": "SUB100 Loteamentos"
                            },
                            "image": {
                            "@id": "https://sistemasgl.com.br/#/schema/logo/image/"
                            },
                            "sameAs": [
                            "https://www.linkedin.com/company/sub100/",
                            "https://www.instagram.com/sub100brasil/",
                            "https://www.facebook.com/sub100brasil/"
                            ]
                        }
                    ]
                }
            }
        },
        head() {
            return {
                __dangerouslyDisableSanitizers: ['script'],
                script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }],
                title: this.name,
                link:[
                    {
                        rel:    'canonical', 
                        href:   this.url
                    }
                ],
                meta:[
                    {
                        hid:      'description',
                        name:     'description',
                        content:  this.description
                        },
                        {
                        hid:       'og:url',
                        property:  'og:url',
                        content:    this.url
                        },
                        {
                        hid:       'og:type',
                        property:   'og:type',
                        content:    "website"
                        },
                        {
                        hid:       'og:title',
                        property:  'og:title',
                        content:   this.name
                        },
                        {
                        hid:       'og:description',
                        property:   'og:description',
                        content:    this.description
                        },
                        {
                        hid:       'og:image',
                        property:  'og:image',
                        content:   "https://sistemasgl.com.br/images/sub100/sub100loteamentos.png"
                        },
                        {
                        hid:       'twitter:site',
                        name:      'twitter:site',
                        content:   '@sub100brasil'
                        },
                        {
                        hid:       'twitter:card',
                        name:      'twitter:card',
                        content:   'summary'
                        },
                        { hid: 'googlebot', name: 'googlebot', content: 'index, follow' }
                    ]
                }
        },
    };
</script>