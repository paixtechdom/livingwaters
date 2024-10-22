import logo from "../assets/images/logo.png"


import prayers from "../assets/images/dev/prayers.jpg"
import teaching from "../assets/images/dev/teaching.jpg"
import evangelism from "../assets/images/dev/evangelism.jpg"
import worship from "../assets/images/dev/worship.jpg"
import { FaFacebook } from "react-icons/fa"
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"



export const Logo = logo
export const Logo_xl = 'logoxl'


export const navs = [
    {
        title: 'Home',
        link: ''
    },
    {
        title: 'Who we are',
        link: 'who-we-are',
    },
    {
        title: 'Media',
        link: 'media',
        sublinks: [
            {
                title: "Pictures",
                link: "pictures"
            },
            {
                title: "Messages",
                link: "Messages"
            }
        ]
        
    },
    // {
    //     title: 'Testimonies',
    //     link: 'testimonies',
    //     sublinks: [
    //         {
    //             title: "Share Testimony",
    //             link: "share-testimony"
    //         },
    //         {
    //             title: "Read Testimonies",
    //             link: "read-testimonies"
    //         }
    //     ]
        
    // },
    // {
    //     title: 'Upload',
    //     link: 'admin/upload'
    // },
]



// export const backendLocation = 'http://localhost:80/livingBackend'
export const backendLocation = 'https://livingwatersglobalministry.org/'



export const About = {
    who_we_are: [
        "We are sure of who we are and what we represent in Christ Jesus, and we are certain through faith in our Lord Jesus Christ that within the space of time your life will be transformed positively to the Glory of our Lord Jesus Christ, and through you more lives wlll be transformed too.",

        "We trust and believe that we shall all come to the unity and oneness of Christ and His body",

        "John. 7:38 - Whoever believes in me, as the Scripture has said, streams of living water will flow from within him",
    ],
    vision: {
        desc: [
            {
                desc: "Living Waters Fellowship based solely on the purpose of raising men who are totally sold out to God (in spirit and in truth) and their reality will be a source of Life to men all over the earth."
            }
        ],
        more: [
            `John 7:3S speaks about believing which is Faith and we're made to understand in Hebrews 11:1, "Now faith is being sure of what we hope for and certain of what we do not see." This means we must come to the state where all that is produced from our life GIVES LIFE, and that must be our reality`
        ]

    },

    mission: {
        pre: "Zechariah 14:8 - And it shall be in that day that living waters shall go out from Jemsalem, half of them to the Eastern [Dead] Sea and half of them to the Western [Mediterranean] Sea; m summer and in winter shall it be [AMP]",
        desc: [
            {
                desc: "We are to flow to all men in all seasons, carrying the banner of Jeus bodly, affecting men positively where ever we find, ourselves to the glory of God."
            }
        ],
        more: [
            // "Zechariah 14:9 - The LORD will be King over the whole earth. On that day there will be one LORD, and his name the only name. - And the purpose of that is that all tongues, all nations will cry out Jesus IS Lord over all",
            "We are called to come to the state whereby each and everyone of us are representatives of God's Kingdom, bodily channels through which the life of God flows, and portals through which the Kingdom of God will come to our home, neighbourhood, churches, schools, street, states, countries and the world at large, that the Kingdom of the Father come, His will be done all over the face of the Earth and all men confess that Jesus is Lord"
        ]
    },

    core_activities:
    [
        {
            title: "Intercession",
            img: prayers,
            bg: "bg-red-500"
        },
        {
            title: "Intense Worship",
            img: worship,
            bg: "bg-blue-500"
        },
        {
            title: "Teaching of The Word",
            img: teaching,
            bg: "bg-green-500"
        },
        {
            title: "Evangelism",
            img: evangelism,
            bg: "bg-yellow-500"
        },

    ]

}


export const Locations = [
    {
        country: "Nigeria",
        centers: [
            {
                name: "Lagos Chapter",
                address: "33, Fadunsin Avenue, Ogba, Lagos",
                time: "5:00pm - 7:00pm"
            },
        ]
    },
    {
        country: "Benin Republic",
        centers: [
            {
                name: "Porto-Novo Chapter",
                address: "RCCG, Agatha, Porto-Novo",
                time: "5:00pm - 7:00pm"
            }
        ]
    },
    {
        country: "Online Meetings",
        centers: [
            {
                name: "Online Prayer Meeting", 
                address: "https://chat.whatsapp.com/HqGToFhXIkY7NIVhHkAqiY",
                time: "9:00pm - 10:00pm",
            },
            {
                name: "Online Bible Study", 
                address: "https://chat.whatsapp.com/HqGToFhXIkY7NIVhHkAqiY",
                time: "9:00pm - 10:00pm",
            },
        ]
    }
]


export const Contacts = {
    social_media: [
        {
            title: "Facebook",
            link: "",
            icon: "facebook text-blue-700"
        },
        {
            title: "X - (Twitter)",
            link: "",
            icon: "twitter"
        },
        {
            title: "Instagram",
            link: "",
            icon: "instagram "
        },
        {
            title: "Youtube",
            link: "",
            icon: "youtube text-red-700"
        }
    ],
    contacts: [
        {
            title: "",
            link: "",
            icon: ""
        },
        {
            title: "",
            link: "",
            icon: ""
        },
    ]
}


