module.exports = {
    "metadata": {
        "name": "Yonisfy",
        "short_name": "Yonisfy",
        "description": "mohammed elzanaty",
        "language": "en",
        "url": "https://mohammedelzanaty.github.io/yonisfy/",
        "pathPrefix": "/yonisfy",
        "gaTrackingId": null,
        "siteImage": null,
        "favicon": "/assets/favicon.png",
        "themeColor": "#0066cc"
    },
    "header": {
        "logo": "/assets/logo.png",
        "logoLink": "/",
        "helpUrl": "",
        "links": [],
        "enabled": true
    },
    "sidebar": {
        "enabled": true,
        "ignoreIndex": false,
        "forcedNavOrder": [],
        "expanded": [],
        "groups": [
            {
                "order": 1,
                "path": "/gettingstarted",
                "title": ":rocket: Getting Started"
            },
            {
                "order": 2,
                "path": "/configuration",
                "title": ":wrench: Configuration"
            },
            {
                "order": 3,
                "path": "/editing",
                "title": ":writing_hand: Editing Content"
            },
            {
                "order": 4,
                "path": "/deployment",
                "title": ":rocket: Deployment"
            },
            {
                "order": 5,
                "path": "/developing",
                "title": ":computer: Developing"
            }
        ],
        "links": [],
        "poweredBy": {
            "trademark": "/assets/gatsby.png",
            "name": "GatsbyJS",
            "link": "https://www.gatsbyjs.org"
        }
    },
    "pwa": {
        "manifest": {
            "name": "BooGi",
            "short_name": "BooGi",
            "start_url": "/",
            "background_color": "#6b37bf",
            "theme_color": "#6b37bf",
            "display": "minimal-ui",
            "crossOrigin": "anonymous",
            "icon": "static/assets/logo-dark.png",
            "description": "mohammed elzanaty",
            "cache_busting_mode": "none",
            "include_favicon": false,
            "lang": "en"
        },
        "enabled": true
    },
    "social": {
        "facebook": "",
        "github": "https://github.com/mohammedelzanaty",
        "gitlab": "",
        "instagram": "",
        "linkedin": "https://www.linkedin.com/in/mohammedelzanaty129/",
        "mail": "mohammedelzanaty129@gmail.com",
        "gmail": "",
        "slack": "",
        "twich": "",
        "twitter": "https://twitter.com/mohammdelzanaty",
        "youtube": "https://www.youtube.com/c/mohammedelzanatyacademy"
    },
    "features": {
        "editOnRepo": {
            "editable": true,
            "location": "https://github.com/mohammedelzanaty/yonisfy.git",
            "type": "github"
        },
        "search": {
            "enabled": true,
            "algoliaAppId": null,
            "algoliaSearchKey": null,
            "algoliaAdminKey": null,
            "excerptSize": 20000,
            "engine": "localsearch",
            "placeholder": "Search here...",
            "startComponent": "icon",
            "debounceTime": 380,
            "snippetLength": 23,
            "hitsPerPage": 10,
            "showStats": true,
            "localSearchEngine": {},
            "pagination": {
                "enabled": true,
                "totalPages": 10,
                "showNext": true,
                "showPrevious": true
            }
        },
        "toc": {
            "show": true,
            "depth": 4
        },
        "previousNext": {
            "enabled": true,
            "arrowKeyNavigation": true
        },
        "scrollTop": true,
        "showMetadata": true,
        "propagateNetlifyEnv": true,
        "pageProgress": {
            "enabled": false,
            "excludePaths": [
                "/"
            ],
            "height": 3,
            "prependToBody": false,
            "color": "#A05EB5"
        },
        "mermaid": {
            "language": "mermaid",
            "theme": "dark",
            "options": {},
            "width": 300,
            "height": 300
        },
        "rss": {
            "enabled": false,
            "showIcon": true,
            "title": "My RSS feed",
            "copyright": "",
            "webMaster": "M",
            "managingEditor": "",
            "categories": [
                "GatsbyJS",
                "Docs"
            ],
            "ttl": "60",
            "matchRegex": "^/",
            "outputPath": "/rss.xml",
            "generator": "gidocs"
        },
        "darkMode": {
            "enabled": true,
            "default": false
        },
        "publishDraft": false,
        "fullScreenMode": {
            "enabled": true,
            "hideHeader": true,
            "hideToc": true,
            "hideSidebar": true
        }
    }
};