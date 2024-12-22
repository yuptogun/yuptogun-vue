import { faBandcamp, faBluesky, faCodepen, faEllo, faFacebookF, faFlickr, faGithub, faGoogle, faInstagram, faKeybase, faKickstarterK, faLastfm, faLinkedinIn, faMastodon, faPaypal, faPhp, faRedditAlien, faSkype, faSoundcloud, faStackOverflow, faTelegram, faThreads, faTumblr, faTwitter, faWeibo, faWhatsapp, faWikipediaW, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBomb, faBookBible } from "@fortawesome/free-solid-svg-icons";

export let contactsData = [
    {
        "id": "twitter",
        "name": "Twitter",
        "alias": ["x.com", "트위터"],
        "contact": "yuptogun",
        "url": "https://twitter.com/yuptogun",
        "attributes": ["socialnetwork"],
        "icon": {
            "type": "icon",
            "content": faTwitter
        }
    },
    {
        "id": "facebook",
        "name": "Facebook",
        "alias": ["meta", "페이스북"],
        "contact": "yuptogun",
        "url": "https://facebook.com/yuptogun",
        "attributes": ["socialnetwork"],
        "icon": {
            "type": "icon",
            "content": faFacebookF
        }
    },
    {
        "id": "youtube",
        "name": "YouTube",
        "alias": ["유튜브"],
        "contact": "김어진",
        "url": "https://youtube.com/c/김어진",
        "attributes": ["content"],
        "icon": {
            "type": "icon",
            "content": faYoutube
        }
    },
    {
        "id": "instagram",
        "name": "Instagram",
        "alias": ["인스타그램"],
        "contact": "yuptogun",
        "url": "https://instagram.com/yuptogun",
        "attributes": ["socialnetwork"],
        "icon": {
            "type": "icon",
            "content": faInstagram
        }
    },
    {
        "id": "mastodon",
        "name": "mastodon.social",
        "alias": ["맛돈", "마스토돈"],
        "contact": "yuptogun",
        "url": "https://mastodon.social/@yuptogun",
        "attributes": ["socialnetwork"],
        "rel": true,
        "icon": {
            "type": "icon",
            "content": faMastodon
        }
    },
    {
        "id": "github",
        "name": "GitHub",
        "alias": ["깃헙", "기트헙"],
        "contact": "yuptogun",
        "url": "https://github.com/yuptogun/",
        "attributes": ["content", "dev"],
        "icon": {
            "type": "icon",
            "content": faGithub
        }
    },
    {
        "id": "velog",
        "name": "velog",
        "alias": ["벨로그"],
        "contact": "@eojin",
        "url": "https://velog.io/@eojin",
        "attributes": ["content", "dev"],
        "icon": {
            "type": "text",
            "content": null
        }
    },
    {
        "id": "so",
        "name": "StackOverflow",
        "alias": ["so"],
        "contact": "yuptogun",
        "url": "https://stackoverflow.com/users/8680764/",
        "attributes": ["dev"],
        "icon": {
            "type": "icon",
            "content": faStackOverflow
        }
    },
    {
        "id": "codepen",
        "name": "Codepen",
        "alias": [],
        "contact": "yuptogun",
        "url": "https://codepen.io/yuptogun/",
        "attributes": ["dev", "content"],
        "icon": {
            "type": "icon",
            "content": faCodepen
        }
    },
    {
        "id": "tistory",
        "name": "Tistory",
        "alias": ["티스토리", "블로그", "blog"],
        "contact": "yuptogun",
        "url": "https://yuptogun.tistory.com",
        "attributes": ["content"],
        "icon": {
            "type": "text",
            "content": null
        }
    },
    {
        "id": "tumblr",
        "name": "Tumblr",
        "alias": [],
        "contact": "yuptogun",
        "url": "https://yuptogun.tumblr.com",
        "attributes": ["content"],
        "icon": {
            "type": "icon",
            "content": faTumblr
        }
    },
    {
        "id": "ghost",
        "name": "ghost",
        "alias": [],
        "contact": "yuptogun",
        "url": "https://ghost.yuptogun.com",
        "attributes": ["content"],
        "icon": {
            "type": "text",
            "content": null
        }
    },
    {
        "id": "animeta",
        "name": "animeta",
        "alias": ["애니메타"],
        "contact": "eojin",
        "url": "https://animeta.net/users/eojin/",
        "attributes": ["socialnetwork", "content"],
        "icon": {
            "type": "text",
            "content": null
        }
    },
    {
        "id": "wikipedia",
        "name": "Wikipedia",
        "alias": ["위키백과", "위키피디아"],
        "contact": "김어진",
        "url": "https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9A%A9%EC%9E%90:%EA%B9%80%EC%96%B4%EC%A7%84",
        "attributes": ["content"],
        "icon": {
            "type": "icon",
            "content": faWikipediaW
        }
    },
    {
        "id": "threads",
        "name": "Threads",
        "alias": ["쓰레드", "스레드"],
        "contact": "yuptogun",
        "url": "https://threads.net/@yuptogun",
        "attributes": ["socialnetwork"],
        "icon": {
            "type": "icon",
            "content": faThreads
        }
    },
    {
        "id": "bsky",
        "name": "BlueSky",
        "alias": ["블스", "블루스카이"],
        "contact": "eojin",
        "url": "https://bsky.app/profile/eojin.bsky.social",
        "attributes": ["socialnetwork"],
        "icon": {
            "type": "icon",
            "content": faBluesky
        }
    },
    {
        "id": "reddit",
        "name": "Reddit",
        "alias": [],
        "contact": "yuptogun",
        "url": "https://reddit.com/user/yuptogun/",
        "attributes": ["socialnetwork"],
        "icon": {
            "type": "icon",
            "content": faRedditAlien
        }
    },
    {
        "id": "biblecom",
        "name": "Bible.com",
        "alias": ["성경"],
        "contact": "yuptogun",
        "url": "https://my.bible.com/users/yuptogun",
        "attributes": ["socialnetwork", "content"],
        "icon": {
            "type": "icon",
            "content": faBookBible
        }
    },
    {
        "id": "tobe",
        "name": "투비컨티뉴드",
        "alias": ["알라딘 투비로그", "aladin to be continued", "tobelog"],
        "contact": "eojin",
        "url": "https://tobe.aladin.co.kr/t/eojin",
        "attributes": ["content"],
        "icon": {
            "type": "text",
            "content": null
        }
    },
    {
        "id": "lastfm",
        "name": "last.fm",
        "alias": [],
        "contact": "yuptogun",
        "url": "https://www.last.fm/user/yuptogun/",
        "attributes": ["socialnetwork"],
        "icon": {
            "type": "icon",
            "content": faLastfm
        }
    },
    {
        "id": "snippet",
        "name": "Snippet",
        "alias": [],
        "contact": "@eojin",
        "url": "https://snippet.cloudmt.co.kr/@eojin",
        "attributes": ["dev"],
        "icon": {
            "type": "text",
            "content": null
        }
    },
    {
        "id": "programmers",
        "name": "Programmers",
        "alias": ["프로그래머스", "해시코드", "hashcode"],
        "contact": "엽토군",
        "url": "https://qna.programmers.co.kr/users/81197/",
        "attributes": ["dev"],
        "icon": {
            "type": "text",
            "content": null
        }
    },
    {
        "id": "packagist",
        "name": "Packagist",
        "alias": ["php"],
        "contact": "yuptogun",
        "url": "https://packagist.org/packages/yuptogun/",
        "attributes": ["dev"],
        "icon": {
            "type": "icon",
            "content": faPhp
        }
    },
    {
        "id": "linkedin",
        "name": "LinkedIn",
        "alias": ["링크드인"],
        "contact": "eojin",
        "url": "https://www.linkedin.com/in/eojin/",
        "attributes": ["contact"],
        "icon": {
            "type": "icon",
            "content": faLinkedinIn
        }
    },
    {
        "id": "soundcloud",
        "name": "SoundCloud",
        "alias": ["사운드클라우드", "사클"],
        "contact": "yuptogun",
        "url": "https://soundcloud.com/yuptogun/",
        "attributes": ["content"],
        "icon": {
            "type": "icon",
            "content": faSoundcloud
        }
    },
    {
        "id": "flickr",
        "name": "Flickr",
        "alias": ["플리커"],
        "contact": "yuptogun",
        "url": "https://flickr.com/yuptogun/",
        "attributes": ["content"],
        "icon": {
            "type": "icon",
            "content": faFlickr
        }
    },
    {
        "id": "weibo",
        "name": "Weibo",
        "alias": ["웨이보"],
        "contact": "yuptogun",
        "url": "https://weibo.com/yuptogun/",
        "attributes": ["socialnetwork"],
        "icon": {
            "type": "icon",
            "content": faWeibo
        }
    },
    {
        "id": "ello",
        "name": "Ello",
        "alias": [],
        "contact": "eojin",
        "url": "https://ello.co/eojin/",
        "attributes": ["content"],
        "icon": {
            "type": "icon",
            "content": faEllo
        }
    },
    {
        "id": "minesweeper",
        "name": "Minesweeper Online",
        "alias": ["지뢰찾기", "마인스위퍼"],
        "contact": "yuptogun",
        "url": "https://minesweeper.online/player/21964601",
        "attributes": ["socialnetwork"],
        "icon": {
            "type": "icon",
            "content": faBomb
        }
    },
    {
        "id": "aboutme",
        "name": "about.me",
        "alias": [],
        "contact": "eojin",
        "url": "https://about.me/eojin",
        "attributes": ["contact"],
        "rel": true,
        "icon": {
            "type": "text",
            "content": null
        }
    },
    {
        "id": "gravatar",
        "name": "Gravatar",
        "alias": [],
        "contact": "yuptogun",
        "url": "https://gravatar.com/yuptogun",
        "attributes": ["contact"],
        "rel": true,
        "icon": {
            "type": "text",
            "content": null
        }
    },
    {
        "id": "kickstarter",
        "name": "Kickstarter",
        "alias": [],
        "contact": "eojin",
        "url": "https://www.kickstarter.com/profile/eojin",
        "attributes": ["financial"],
        "icon": {
            "type": "icon",
            "content": faKickstarterK
        }
    },
    {
        "id": "bandcamp",
        "name": "Bandcamp",
        "alias": [],
        "contact": "yuptogun",
        "url": "https://bandcamp.com/yuptogun/",
        "attributes": ["financial"],
        "icon": {
            "type": "icon",
            "content": faBandcamp
        }
    },
    {
        "id": "tumblbug",
        "name": "Tumblbug",
        "alias": ["텀블벅"],
        "contact": "eojin",
        "url": "https://tumblbug.com/u/eojin/backed",
        "attributes": ["financial"],
        "icon": {
            "type": "text",
            "content": null
        }
    },
    {
        "id": "paypal",
        "name": "PayPal",
        "alias": [],
        "contact": "yuptogun",
        "url": "https://paypal.me/yuptogun/",
        "attributes": ["financial", "contact"],
        "icon": {
            "type": "icon",
            "content": faPaypal
        }
    },
    {
        "id": "telegram",
        "name": "Telegram",
        "alias": [],
        "contact": "yuptogun",
        "url": "https://t.me/yuptogun/",
        "attributes": ["contact"],
        "icon": {
            "type": "icon",
            "content": faTelegram
        }
    },
    {
        "id": "keybase",
        "name": "Keybase",
        "alias": [],
        "contact": "eojin",
        "url": "https://keybase.io/eojin",
        "attributes": ["contact"],
        "icon": {
            "type": "icon",
            "content": faKeybase
        }
    },
    {
        "id": "skype",
        "name": "Skype",
        "alias": [],
        "contact": "yuptogun",
        "url": null,
        "attributes": ["contact"],
        "icon": {
            "type": "icon",
            "content": faSkype
        }
    },
    {
        "id": "whatsapp",
        "name": "WhatsApp",
        "alias": ["wa", "왓츠앱", "와츠앱", "왓앱"],
        "contact": "89014568",
        "url": "https://wa.me/6589014568",
        "attributes": ["contact"],
        "icon": {
            "type": "icon",
            "content": faWhatsapp
        }
    },
    {
        "id": "gmail",
        "name": "Gmail",
        "alias": ["email", "지메일"],
        "contact": "yuptogun",
        "url": "mailto:yuptogun@gmail.com",
        "attributes": ["contact"],
        "icon": {
            "type": "icon",
            "content": faGoogle
        }
    }
];