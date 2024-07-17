import { analyticsMiddleware } from 'vue-analytics'

const webpack = require('webpack')

export default {
    buildDir: 'dist',
    
    //target: 'static',
    ssr: true,

    generate: {
        fallback: true
    },

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'SUB100 Loteamentos',
        titleTemplate: '%s',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'google-site-verification', content: 'cmtFEPH16LOxgUMi4dE44ZsSvXXBl48XHW-Kw6g1Xqg' },
            { hid: 'description', name: 'description', content: '' },
            { 'http-equiv':  'Content-Security-Policy', content:'upgrade-insecure-requests' },
            { hid: 'fb:app_id', property: 'fb:app_id', content: '2744542915835221' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            //{ rel: 'preconnect', href: 'https://www.google-analytics.com' },
           //{ rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
            { rel: 'preconnect', href: 'https://connect.facebook.net' },
            { rel: 'dns-prefetch', href: 'https://connect.facebook.net' },
            { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
            { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' }
        ],
        htmlAttrs: {
            lang: 'pt-br'
        },
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'assets/scss/style.scss',
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
       '~/plugins/vue-awesome-swiper.js',
        '~/plugins/silentbox.js',
        '~/plugins/vue2-google-maps.js',
       // '~/plugins/vuejs-paginate.js',
       // '~/plugins/vue-select.js',
        '~/plugins/vue-inline-svg.js',
        {
            src: "~/plugins/vue-carousel.js",
            ssr: false
        },
       /* {
            src: "~/plugins/aos",
            ssr: false
        },
        {
            src: "~/plugins/typed.js",
            ssr: true
        },*/
        {
            src: '~plugins/vue-backtotop.js',
            ssr: false
        },
        {
            src: '~plugins/mascara.js',
            ssr: false
        },
        {
            src: '~plugins/gtag.js',
            ssr: false
        }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        'nuxt-purgecss'
    ],

    purgeCSS: {
        mode: 'postcss',
        enabled: false, // or `false` when in dev/debug mode
        paths: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js'
        ],
        styleExtensions: ['.css','.scss'],
        whitelist: ['body', 'html', 'nuxt-progress'],
        extractors: [
            {
            extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
            extensions: ['html', 'vue', 'js']
            }
        ]
     },

    
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [       
        '@nuxtjs/robots',
        'nuxt-speedkit',
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
        '@nuxtjs/color-mode',
        '@nuxtjs/sitemap',
        '@nuxtjs/recaptcha',
        ['nuxt-cookie-control',
            {
                barPosition: 'bottom-right',
                controlButton: false,
            }
        ],
        '@nuxtjs/gtm',
        [
            "nuxt-compress",
            {
                gzip: {
                    cache: true
                },
                brotli: {
                    threshold: 10240
                }
            }
        ]
    ],

    recaptcha: {
        hideBadge: true,
        siteKey: '6LfZmUwpAAAAAG02xnkW5C4naYptCxypNjZV66CS',
        version: 3
    },

    cookies: {
        
        colors: {
            barTextColor: '#333',
            modalOverlay: '#fff',
            barBackground: 'none',
            barButtonColor: '#fff',
            modalTextColor: 'blue',
            modalBackground: '#fff',
            modalOverlayOpacity: 0.8,
            modalButtonColor: '#000',
            modalUnsavedColor: '#000',
            barButtonHoverColor: '#ffff',
            barButtonBackground: '#5d5fef',
            modalButtonHoverColor: '#000',
            modalButtonBackground: '#fff',
            controlButtonIconColor: '#fff',
            controlButtonBackground: '#000',
            barButtonHoverBackground: '#4447ed',
            checkboxActiveBackground: '#fff',
            checkboxInactiveBackground: '#fff',
            modalButtonHoverBackground: '#333',
            checkboxDisabledBackground: '#ddd',
            controlButtonIconHoverColor: '#fff',
            controlButtonHoverBackground: '#fff',
            checkboxActiveCircleBackground: '#000',
            checkboxInactiveCircleBackground: '#000',
            checkboxDisabledCircleBackground: '#000',
        }
      },

    gtm: {
        id: 'GTM-MZK3BN5'
      },

    robots: {
       UserAgent: '*',
       Disallow: '/_nuxt/*',
       Sitemap: "https://sistemasgl.com.br/sitemap.xml"
    },

    router: {
        trailingSlash: true
      },

    speedkit: {

        detection: {
          performance: true,
          browserSupport: true
        },
    
        performanceMetrics: {
          device: {
            hardwareConcurrency: { min: 2, max: 48 },
            deviceMemory: { min: 2 }
          },
          timing: {
            fcp: 800,
            dcl: 1200
          }
        },
    
        componentAutoImport: false,
        componentPrefix: undefined,
    
        /**
         * IntersectionObserver rootMargin for Compoennts and Assets
         */
        lazyOffset: {
          component: '0%',
          asset: '0%'
        },
    
        loader: {
          dataUri: null,
          size: '100px',
          backgroundColor: 'grey'
        }
        
      },
    
      image: {
        screens: {
          default: 320,
          xxs: 480,
          xs: 576,
          sm: 768,
          md: 996,
          lg: 1200,
          xl: 1367,
          xxl: 1600,
          '4k': 1921
        },
    
        domains: ['img.youtube.com', 'i.vimeocdn.com'],
    
        alias: {
          youtube: 'https://img.youtube.com',
          vimeo: 'https://i.vimeocdn.com',
        }
    },

    sitemap: {
        hostname: 'https://sistemasgl.com.br',
        path: '/sitemap.xml',
        cacheTime: 1000 * 60 * 60 * 2,
        trailingSlash: true,
        gzip: true,
        defaults: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
          }
    },


    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss'
        ]
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extend (config, ctx) {
        },
        babel: {
            compact: true
        },
        analyze: process.env.APP_BUILD_ANALYZE,
        plugins: [
            new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /pt-br/)
        ],
        /*optimization: {
            splitChunks: {
                chunks: 'async',
            }
        },*/
        optimization: {
            minimize: true,
            splitChunks: {
                chunks: 'async',
                automaticNameDelimiter: '.',
                name: true,
                maxSize: 120000,
                cacheGroups: {
                    vendor: {
                        name: 'node_vendors',
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'async',
                        maxSize: 120000
                    }
                }
            }
        },
       /*splitChunks: {
            pages: false,
            vendor: false,
            commons: false,
            runtime: false,
            layouts: false
        },*/
        splitChunks: {
            pages: false,
            vendor: false,
            commons: false,
            runtime: false,
            layouts: false
        },
        transpile: [/^vue2-google-maps($|\/)/],
       
    },
    render: {
        static: {
            maxAge: 3600,
        }
    }
}
