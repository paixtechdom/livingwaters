// import logo from "../assets/images/logo.png"
import logo from "../src/assets/images/logo.png"
import prayers from "../src/assets/images/dev/prayers.jpg"
import teaching from "../src/assets/images/dev/teaching.jpg"
import evangelism from "../src/assets/images/dev/evangelism.jpg"
import prophetic from "../src/assets/images/dev/prophetic.jpg"
import worship from "../src/assets/images/dev/worship.jpg"
import outreaches from "../src/assets/images/dev/outreaches.jpg"
import crusades from "../src/assets/images/dev/crusades.jpg"
import lagos from "../src/assets/images/dev/lagos.jpg"
import ibadan from "../src/assets/images/dev/ibadan.jpg"
import benin from "../src/assets/images/dev/benin.jpg"
import online from "../src/assets/images/dev/online.jpg"
import upcoming_program_eng from "/next eng.jpg";
import upcoming_program_fr from "/next fr.jpg";
import event_eng from "../src/assets/images/events/prophet wedding anniversary eng.jpg";
import event_fr from "../src/assets/images/events/prophet wedding anniversary fr.jpg";




export const Logo = logo


export const backendLocation = 'http://localhost:80/livingBackend'
// export const backendLocation = 'https://livingwatersglobalministry.org/'


export const BEST_SHEET_CONNECTION_URL = ""

export const Navigation =
    {
        eng:[
            {
                title: 'Home',
                link: '',
                icon: "house-fill"
            },
            

            {
                title: 'About Us',
                link: 'about-us',
                icon: "globe2",
                sublinks: [
                    {
                        title: 'Who we are',
                        icon: "people-fill",
                        link: 'about-us/who-we-are',
                    },
                    {
                        title: 'Our Leaders',
                        link: 'about-us/our-leaders',
                        icon: "star-fill",
                    },

                ]
            },
            // {
            //     title: 'Info Center',
            //     link: 'info',
            //     icon: "envelope-fill",
            //     sublinks: [
            //         {
            //             title: "Announcements",
            //             link: "announcements",
            //             icon: "megaphone-fill",
            //         },
            //         {
            //             title: "Conferences",
            //             link: "conferences",
            //             icon: "calendar-check-fill"
            //         }
            //     ]
                
            // },
            {
                title: 'Media',
                link: 'media',
                icon: "camera-reels-fill",
                sublinks: [
                    {
                        title: "Pictures",
                        link: "media/pictures",
                        icon: "camera-fill"
                    },
                    {
                        title: "Messages",
                        link: "media/messages",
                        icon: "mic-fill",
                    },
                    // {
                    //     title: "Youtube",
                    //     link: "",
                    //     icon: "youtube"
                    // }
                ]
                
            },
            {
                title: 'Testimonies',
                link: 'testimonies',
                icon: "chat-left-quote-fill"
            },
            {
                title: 'Partnership',
                link: 'Partnership',
                icon: "diagram-3-fill"
            },
            {
                title: 'Centers',
                link: 'centers',
                icon: "geo-alt-fill",
                sublinks : [
            //         {
            //             title: 'Lagos',
            //             link: 'Lagos',
            //             icon: "geo-fill",
            //         },
                    {
                        title: 'Ibadan',
                        link: 'centers/ibadan',
                        icon: "geo-fill",
                    },
                    {
                        title: 'Benin Republic',
                        link: 'centers/benin-republic',
                        icon: "geo-fill",
                    },
            //         {
            //             title: 'Online',
            //             link: 'Online',
            //             icon: "camera-video-fill",
            //         }
                ]
            },
         
        ],
        fr: [
            {
                title: 'Accueil',
                link: ''
            },
            {
                title: 'A Propos',
                link: 'about-us',
                sublinks: [
                    {
                        title: 'Qui nous sommes',
                        link: 'about-us/who-we-are'
                    },
                    {
                        title: 'Nos Leaders',
                        link: 'about-us/our-leaders',
                    },

                ]
            },
            {
                title: 'Média',
                link: 'media',
                sublinks: [
                    {
                        title: "Photos",
                        link: "pictures"
                    },
                    {
                        title: "Messages",
                        link: "audio-messages"
                    }
                ]
            },
            // {
            //     title: 'Télécharger',
            //     link: 'admin/upload'
            // },
            {
                title: 'Donner',
                link: 'give',
            },
        ]
        
}


export const Event = {
    eng: {
        header: "We celebrate our Father",
        img: event_eng
    },
    fr: {
        header: "Nous célébrons notre Père",
        img: event_fr
    }
}

export const Upcoming_program_content = {
    eng: {
        header: "Our upcoming events",
        img: upcoming_program_eng
    },
    fr: {
        header: "Programme à venir",
        img: upcoming_program_fr
    },

}


export const About =  {
    eng:
    {
        who_we_are: [
            "We are sure of who we are and what we represent in Christ Jesus, we are certain through faith in our Lord Jesus Christ that within the space of time your life will be transformed positively to the Glory of our Lord Jesus Christ, and through you more lives wlll be transformed too.",
    
            "We trust and believe that we shall all come to the unity and oneness of Christ and His body",
    
            "John. 7:38 - Whoever believes in me, as the Scripture has said, streams of living water will flow from within him",
        ],
        vision: {
            desc: [
                {
                    desc: "Living Waters Fellowship (Ministry) is dedicated to raising, transforming, and equipping men to be agents of change - men who are totally sold out to God both in spirit and in truth. These transformed lives, in turn, become a source of life to people all over the world."
                }
            ],
            more: [
                `John 7:38 speaks about believing which is Faith and we're made to understand in Hebrews 11:1, "Now faith is being sure of what we hope for and certain of what we do not see." This means we must come to the state where all that is produced from our life GIVES LIFE, and that must be our reality`
            ]
    
        },
    
        mission: {
            pre: "Zechariah 14:8 - And it shall be in that day, that living waters shall go out from Jemsalem, half of them to the Eastern [Dead] Sea and half of them to the Western [Mediterranean] Sea; in summer and in winter shall it be [AMP]",
            desc: [
                {
                    desc: "We are to flow to all men in all seasons, carrying the banner of Jesus boldly, affecting men positively where ever we find, ourselves to the glory of God."
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
                bg: "red"
            },
            {
                title: "Intense Worship",
                img: worship,
                bg: "blue"
            },
            {
                title: "Teaching of The Word",
                img: teaching,
                bg: "green"
            },
            {
                title: "Evangelism",
                img: evangelism,
                bg: "yellow"
            },
            {
                title: "The Prophetic",
                img: prophetic,
                bg: "purple"
            },
            {
                title: "Outreaches",
                img: outreaches,
                bg: "indigo"
            },
            {
                title: "Crusades",
                img: crusades,
                bg: "gray"
            },
    
        ],
        core_values: [
            "Christ centeredness",
            "Holiness",
            "Faith",
            "Prayer",
            "Integrity",
            "Stewardship",
            "Unity",
            "Service",
            "Excellence",
            "Accountability"
        ]
        
    },
    fr: {
        who_we_are: [
            "Nous sommes sûrs de qui nous sommes et de ce que nous représentons en Christ Jésus, et nous sommes certains, par la foi en notre Seigneur Jésus-Christ, qu'au fil du temps, votre vie sera transformée positivement pour la gloire de notre Seigneur Jésus-Christ, et à travers vous, d'autres vies seront également transformées.",
            
            "Nous avons confiance et croyons que nous parviendrons tous à l'unité et à l'unité de Christ et de Son corps.",
            
            "Jean 7:38 - Celui qui croit en moi, comme le dit l'Écriture, des fleuves d'eau vive couleront de son sein."
        ],
        vision: {
            desc: [
                {
                    desc: "Living Waters Global Ministry est appelée à sauver, former et équiper des hommes entièrement dévoués à Dieu, dont la réalité sera une source de lumière et de vie pour tous les hommes à travers le monde."
                }
            ],
            more: [
                "Jean 7:38 parle de croire, qui est la foi, et nous comprenons dans Hébreux 11:1, \"Or la foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas.\" Cela signifie que nous devons parvenir à l'état où tout ce qui est produit de notre vie DONNE LA VIE, et cela doit être notre réalité."
            ]
        },
        
        mission: {
            pre: "Zacharie 14:8 - Et il arrivera en ce jour-là que des eaux vives sortiront de Jérusalem, la moitié vers la mer Orientale [Morte] et la moitié vers la mer Occidentale [Méditerranée] ; en été et en hiver cela sera [AMP].",
            desc: [
                {
                    desc: "Nous devons couler vers tous les hommes en toutes saisons, portant le drapeau de Jésus avec audace, affectant positivement les hommes où que nous soyons, pour la gloire de Dieu."
                }
            ],
            more: [
                // "Zacharie 14:9 - L'ÉTERNEL sera roi sur toute la terre. En ce jour-là, il y aura un seul ÉTERNEL, et son nom sera le seul nom. - Et le but de cela est que toutes les langues, toutes les nations crieront Jésus EST Seigneur sur tout.",
                "Nous sommes appelés à parvenir à l'état où chacun d'entre nous est un représentant du Royaume de Dieu, des canaux corporels par lesquels la vie de Dieu coule, et des portails par lesquels le Royaume de Dieu viendra dans nos maisons, quartiers, églises, écoles, rues, États, pays et le monde entier, que le Royaume du Père vienne, que Sa volonté soit faite sur toute la face de la terre et que tous les hommes confessent que Jésus est Seigneur."
            ]
        },
        
        core_activities: [
            {
                title: "Intercession",
                img: prayers,
                bg: "red"
            },
            {
                title: "Adoration Intense",
                img: worship,
                bg: "blue"
            },
            {
                title: "Enseignement de la Parole",
                img: teaching,
                bg: "green"
            },
            {
                title: "Évangélisation",
                img: evangelism,
                bg: "yellow"
            },
            {
                title: "The Prophetic",
                img: prophetic,
                bg: "purple"
            },
            {
                title: "Activités de Mission",
                img: outreaches,
                bg: "indigo"
            },
            {
                title: "Croisades",
                img: crusades,
                bg: "gray"
            },
        ]
    }
    
}


export const Locations = {
    eng: 
        [
            {
                name: "Main Sanctuary",
                address: "24, Fadunsin Avenue, Ogba, Lagos",
                time: [
                    "Friday (5:00pm - 7:00pm)"
                ],
                img: lagos
            },
            {
                name: "Ibadan Branch",
                address: "Federal Cooperative College, Eleyele, Ibadan",
                img: ibadan
                // time: ""
            },
            
            {
                name: "Benin Republic Branch",
                address: "Adjara Sokenjebu, Porto Nove, Benin Republic",
                img: benin
                // time: ""
            },
            {
                name: "Online Meetings", 
                address: "https://chat.whatsapp.com/HqGToFhXIkY7NIVhHkAqiY",
                time: [
                    "Wednesday Prayer Meeting (9:00pm - 10:00pm)",
                    " Friday Bible Study (9:00pm - 10:00pm)"
                ],
                img: online
            },
        ],
        fr: [
            {
                country: "Nigeria",
                centers: [
                    {
                        name: "Chapitre de Lagos",
                        address: "33, Fadunsin Avenue, Ogba, Lagos",
                        time: "17h00 - 19h00"
                    },
                    {
                        name: "Chapitre d’Ibadan",
                        address: "À venir bientôt",
                        // time: ""
                    },
                ]
            },
            {
                country: "Republic du Bénin",
                centers: [
                    {
                        name: "Chapitre de la République du Bénin",
                        address: "À venir bientôt",
                        // time: ""
                    }
                ]
            },
            {
                country: "Réunions en ligne",
                centers: [
                    {
                        name: "Réunion de prière en ligne (Les Mercredis)", 
                        address: "https://chat.whatsapp.com/HqGToFhXIkY7NIVhHkAqiY",
                        time: "21h00 - 22h00"
                    },
                    {
                        name: "Étude biblique en ligne (Les Vendredis)", 
                        address: "https://chat.whatsapp.com/HqGToFhXIkY7NIVhHkAqiY",
                        time: "21h00 - 22h00"
                    }
                ]
            }
        ],
        

    }


export const ImageFolders = [
    {
        title: ["worker's meeting", ""],
        folderName: "workers-meeting-aug-2025",   
        year: "Aug. 2025",
        tag: 'workersmeeting august ibadan',
    },
    {
        title: ["worker's meeting", ""],
        folderName: "workers-meeting-july-2025",   
        year: "July 2025",
        tag: 'workersmeeting july ibadan',
    },
    {
        title: ["let us pray, ibadan", "Prions, Ibadan"],
        folderName: "2025-let-us-pray-ibadan",   
        year: 2025,
        tag: 'letuspray ibadan',
    },
    {
        title: ["Anazao (benin republic retreat)", "Anazao (Retraite de la Republic du Bénin)"],
        folderName: "2025-benin-retreat",   
        year: 2025,
        tag: 'retreat benin',
    },
    {
        title: ["let us pray, benin republic", "Prions, Republic du Bénin"],
        folderName: "2025-let-us-pray-benin",   
        year: 2025,
        tag: 'letuspray benin',
    },
    {
        title: ["benin republic retreat", "Retraite de la Republic du Bénin"],
        folderName: "2024-retreat-benin",   
        year: 2024,
        tag: 'retreat benin',
    },
    {
        title: ["let us pray, benin republic", "Prions, Republic du Bénin"],
        folderName: "2024-let-us-pray-benin",   
        year: 2024,
        tag: 'letuspray benin',
    },
    {
        title: ["The cry for more, ibadan", "Le Cri pour plus, Ibadan"],
        folderName: "2023-The-cry-for-more-ibadan",   
        year: 2023,
        tag: 'thecryformore ibadan',
    },
    {
        title: ["benin republic retreat", "Retraite de la Republic du Bénin"],
        folderName: "2023-retreat-benin",   
        year: 2023,
        tag: 'retreat benin',
    },
    {
        title: ["let us pray, benin republic", "Prions, Republic du Bénin"],
        folderName: "2023-let-us-pray-benin",   
        year: 2023,
        tag: 'letuspray benin',
    },
]


export const bankaccounts = {
    fr: [
        
        {
            type: "Compte en devise étrangère",
            accounts: [
                {
                    number: "3004701234",
                    bank: 'UBA',
                    type: "Compte USD"
                },
                {
                    number: "300470186",
                    bank: "UBA",
                    type: "Compte EURO"
                }
            ]
        },
        {
            type: "Compte Naira",
            accounts: [
                {
                    number: "1027870340",
                    bank: "UBA",
                    type: "COMPTE NAIRA"
                },
                {
                    number: "0126225833",
                    bank: "WEMA BANK",
                    type: "COMPTE NAIRA"
                }
            ]
        }
    ],
    eng: [
        {
            type: "Foreign Account",
            accounts: [
                {
                    number: "3004701234",
                    bank: 'UBA',
                    type: "USD DOLLAR ACCOUNT"
                },
                {
                    number: "300470186",
                    bank: "UBA",
                    type: "EURO ACCOUNT"
                }
            ]
        },
        {
            type: "Naira Account",
            accounts: [
                {
                    number: "1027870340",
                    bank: "UBA",
                    type: "NAIRA ACCOUNT"
                },
                {
                    number: "0126225833",
                    bank: "WEMA BANK",
                    type: "NAIRA ACCOUNT"
                }
            ]
        }
    ]

}

export const Contacts = {
    social_media: [
        {
            title: "Living Waters",
            link: "https://www.facebook.com/profile.php?id=100094922293903",
            icon: "facebook"
        },
        {
            title: "Livingwatersg",
            link: "https://x.com/livingwatersg",
            icon: "twitter"
        },
        {
            title: "Living_waters_global_ministry",
            link: "https://www.instagram.com/living_waters_global_ministry/profilecard/?igsh=dDg5N3gyYm80eGc1",
            icon: "instagram"
        },
        {
            title: "Living_waters_global",
            link: "https://vm.tiktok.com/ZMhSkGqQ5/",
            icon: "tiktok"
        }
    ],
    numbers: [
        {
            title: "+229 577 969 63",
            link: "tel:+229 577 969 63"
        },
        {
            title: "+229 577 969 63",
            link: "tel:+229 577 969 63"
        },
        {
            title: "+234 706 373 0930",
            link: "tel:+234 706 373 0930"
        },
        {
            title: "+234 807 540 8149",
            link: "tel:+234 807 540 8149"
        },
    ],
    email: [
        {
            title: "livingwatersglobalministry4@gmail.com",
            link: "mailto:livingwatersglobalministry4@gmail.com"
        },
        {
            title: "admin@livingwatersglobalministry.org",
            link: "mailto:admin@livingwatersglobalministry.org"
        }
    ]
}

export const countries = [
    { country: "Afghanistan" },
    { country: "Albania" },
    { country: "Algeria" },
    { country: "Andorra" },
    { country: "Angola" },
    { country: "Argentina" },
    { country: "Armenia" },
    { country: "Australia" },
    { country: "Austria" },
    { country: "Azerbaijan" },
    { country: "Bahamas" },
    { country: "Bahrain" },
    { country: "Bangladesh" },
    { country: "Barbados" },
    { country: "Belarus" },
    { country: "Belgium" },
    { country: "Belize" },
    { country: "Benin" },
    { country: "Bhutan" },
    { country: "Bolivia" },
    { country: "Botswana" },
    { country: "Brazil" },
    { country: "Brunei" },
    { country: "Bulgaria" },
    { country: "Burkina" },
    { country: "Burundi" },
    { country: "Cambodia" },
    { country: "Cameroon" },
    { country: "Canada" },
    { country: "Cape Verde" },
    { country: "Chad" },
    { country: "Chile" },
    { country: "China" },
    { country: "Colombia" },
    { country: "Comoros" },
    { country: "Costa Rica" },
    { country: "Croatia" },
    { country: "Cuba" },
    { country: "Cyprus" },
    { country: "Czech Republic" },
    { country: "Denmark" },
    { country: "Djibouti" },
    { country: "Dominica" },
    { country: "Dominican Republic" },
    { country: "Ecuador" },
    { country: "Egypt" },
    { country: "El Salvador" },
    { country: "Equatorial Guinea" },
    { country: "Eritrea" },
    { country: "Estonia" },
    { country: "Ethiopia" },
    { country: "Fiji" },
    { country: "Finland" },
    { country: "France" },
    { country: "Gabon" },
    { country: "Gambia" },
    { country: "Georgia" },
    { country: "Germany" },
    { country: "Ghana" },
    { country: "Greece" },
    { country: "Grenada" },
    { country: "Guatemala" },
    { country: "Guinea" },
    { country: "Guinea-Bissau" },
    { country: "Guyana" },
    { country: "Haiti" },
    { country: "Honduras" },
    { country: "Hungary" },
    { country: "Iceland" },
    { country: "India" },
    { country: "Indonesia" },
    { country: "Iran" },
    { country: "Iraq" },
    { country: "Ireland" },
    { country: "Israel" },
    { country: "Italy" },
    { country: "Ivory Coast" },
    { country: "Jamaica" },
    { country: "Japan" },
    { country: "Jordan" },
    { country: "Kazakhstan" },
    { country: "Kenya" },
    { country: "Kiribati" },
    { country: "Kuwait" },
    { country: "Kyrgyzstan" },
    { country: "Laos" },
    { country: "Latvia" },
    { country: "Lebanon" },
    { country: "Lesotho" },
    { country: "Liberia" },
    { country: "Libya" },
    { country: "Liechtenstein" },
    { country: "Lithuania" },
    { country: "Luxembourg" },
    { country: "Macedonia" },
    { country: "Madagascar" },
    { country: "Malawi" },
    { country: "Malaysia" },
    { country: "Maldives" },
    { country: "Mali" },
    { country: "Malta" },
    { country: "Marshall Islands" },
    { country: "Mauritania" },
    { country: "Mauritius" },
    { country: "Mexico" },
    { country: "Micronesia" },
    { country: "Moldova" },
    { country: "Monaco" },
    { country: "Mongolia" },
    { country: "Montenegro" },
    { country: "Morocco" },
    { country: "Mozambique" },
    { country: "Myanmar" },
    { country: "Namibia" },
    { country: "Nauru" },
    { country: "Nepal" },
    { country: "Netherlands" },
    { country: "New Zealand" },
    { country: "Nicaragua" },
    { country: "Niger" },
    { country: "Nigeria" },
    { country: "North Korea" },
    { country: "Norway" },
    { country: "Pakistan" },
    { country: "Palau" },
    { country: "Panama" },
    { country: "Papua New Guinea" },
    { country: "Paraguay" },
    { country: "Peru" },
    { country: "Philippines" },
    { country: "Poland" },
    { country: "Portugal" },
    { country: "Romania" },
    { country: "Russia" },
    { country: "Rwanda" },
    { country: "Saint Kitts and Nevis" },
    { country: "Saint Lucia" },
    { country: "Saint Vincent and the Grenadines" },
    { country: "Samoa" },
    { country: "San Marino" },
    { country: "Sao Tome and Principe" },
    { country: "Saudi Arabia" },
    { country: "Senegal" },
    { country: "Serbia" },
    { country: "Seychelles" },
    { country: "Sierra Leone" },
    { country: "Singapore" },
    { country: "Slovakia" },
    { country: "Solomon Islands" },
    { country: "Somalia" },
    { country: "South Africa" },
    { country: "South Korea" },
    { country: "South Sudan" },
    { country: "Spain" },
    { country: "Sri Lanka" },
    { country: "Sudan" },
    { country: "Suriname" },
    { country: "Swaziland" },
    { country: "Sweden" },
    { country: "Switzerland" },
    { country: "Syria" },
    { country: "Taiwan" },
    { country: "Tajikistan" },
    { country: "Tanzania" },
    { country: "Thailand" },
    { country: "Togo" },
    { country: "Tonga" },
    { country: "Trinidad and Tobago" },
    { country: "Tunisia" },
    { country: "Turkey" },
    { country: "Turkmenistan" },
    { country: "Tuvalu" },
    { country: "Uganda" },
    { country: "Ukraine" },
    { country: "United Arab Emirates" },
    { country: "United Kingdom" },
    { country: "United States" },
    { country: "Uruguay" },
    { country: "Uzbekistan" },
    { country: "Vanuatu" },
    { country: "Vatican City" },
    { country: "Venezuela" },
    { country: "Vietnam" },
    { country: "Yemen" },
    { country: "Zambia" },
    { country: "Zimbabwe"  }
];


export const testimonies = [
    {
        id: "",
        name: "Moronkola Tomiwa",
        title: "Delivered from a Costly Surgery",
        content: [
        "I want to sincerely appreciate the name of the Lord for this beautiful testimony. Around May this year, after going back and forth to different hospitals without a definite diagnosis or solution, my health situation remained unresolved. However, this month took a different turn. I decided to try one more hospital, where they conducted a full scan. After the tests, the doctor informed me that I was diagnosed with intestinal congestion, a condition that, according to him, could only be resolved through surgery.",
        "I was immediately admitted and placed on IV medication. I was not allowed to eat any food, as the doctor explained that the food I had been eating was not passing through my system properly, which had caused persistent vomiting. To summarize, on a Wednesday while lying weak in bed and gaining a little consciousness, I decided to reach out to Papa Onido Innocent. I prayed for me and spoke against the spirit of death off my life. I also connected to the Living Water online prayer by faith. I placed my phone next to my ear and joined the session in faith. The next morning during devotion, a word came forth: \"The Holy Spirit has taken over.\"",
        "I was scheduled for another test and scan before the surgery would proceed. By then, a pipe had already been passed through my nose in preparation. But after the new scan, the doctor was shocked. He looked at the result and said, \"You are gracefully special.\" He confirmed that my intestines had returned to their normal condition, something he admitted was medically impossible. I give all the glory to GOD, who delivered me from a surgery that could have cost me my life and so much money. Hallelujah!"
      ]
    },
    {
        id: "",
        name: "Mr. Oluwaferanmi Morakinyo",
        title: "The Hand of God at Work",
        content: [
        "I want to bless the Lord for His great mercy towards me. This year has been a year of abundant grace and lifting for me. I do not want to go into too many details, but the end note is that God has been faithful to His word over my life. He has been lifting me supernaturally and exponentially. His word through our grandfather, Prophet Emmanuel Jimoh, last year October, has been my reality till date. My testimony this time around is about the hand of God that lifted me and performed His word through His servant, my spiritual Father, Onido Innocent. A. I have been praying concerning a vacant position at work and asking God that He would by His mercy make me fill that position as it will reduce the burdens on my finances.",
        "God assured me that it is settled, but I have been awaiting the manifestation since then. I became anxious when no word was spoken about it by the management. Then, an instruction from the Lord came for me to sow a seed that was sacrificial to my father. I didn’t want to do it at first, but I had to follow it through. After obeying, my father said a prayer \"Next time, you will have more to give.\" I knelt down and received it. Some days after, the position I was expecting was given to me, and for this, I am grateful to God."
      ]
    },
    {
        id: "",
        name: "Mr Adekola Eninlaloluwa",
        title: "Souls Saved and Spirits Imparted",
        content: [
        "11 Saved Souls, All in tears and broken spirits, 8 imparted with the evidence of speaking in tounges. All Glory to Jesus."
      ]
    },
    {
        id: "",
        name: "Miss Omodasola Olayiwola",
        title: "Divine Healing from Drug Reaction",
        content: [
        "On Sunday (23rd August), I felt sick and bought malaria drugs. After using them, my body started itching me seriously, so that I couldn’t sleep until Monday. I went to the nurse and was told that my body system had reacted wrongly to the drugs I took. Drugs were prescribed, but there were no changes. I couldn’t sleep even with sedatives, so I proceeded to injections, yet there were no changes. I called and prayed messaged Papa Onido Innocent at midnight; he called and prayed for me in the morning. To my surprise, there was great relief, and for me in the morning. I’m healed. I didn’t even later take the remaining injections finally, because there was no need for them. I give all glory to God."
      ]
    },
    {
        id: "",
        name: "Oghenetega O.",
        title: "God’s Unexpected Surprise",
        content: [
        "Praised be God! It so happened that I decided to scroll through the messages. I saw a message for \"Semilore\" and logged in to it. Then I got to this one. I’d been feeling disappointed but I mustered up faith and claimed this declaration.",
        "I could just resonate with the Ebenezer theme as I’ve been coming across Scriptural instances and indeed, TOBECHUKWU! God surprised us with a portion today(September 1st)! Deut (4:7). I decided I must share my testimony! Hallowed be to Jesus! Papa Onido Innocent A. God bless you, sir. To God be the Glory."
      ]
    },
    {
        id: "",
        name: "Miss Deborah Agboola",
        title: "God’s Faithfulness Beyond Expectations",
        content: [
        "It happened that I was posted to Kwara state for a post graduate program which I went But on getting there I was worried about the church to go because we all know Ilorin to be a Muslim state. The first time I went I didn’t go to church that Sunday because I always want to make sure I go where God is preached. Then I came home and went back again. So the the following Sunday I was in my room hearing a church praying from my sleep I was so disturbed and even the holy spirit asked me to go and I got up and went on getting there they were acting a drama which was a answer to what have been praying and asking God.",
        "To the glory of God after praying with the direction I had from the drama throughout that week and even the next, I had series of revelation of what was going on and God through his servant MR ONIDO INNOCENT A. directed me also even though the devil was attacking every member of my family right and left with sickness and accident during the course of my prayer, I actually want to bless God for his faithfulness I had peace after the prayer and even evidence and testimony came in. where I thought there was no way he opened a new way with decorations for me. On the 31st of August I was Praying and God told me September will be the month where he will help me giving me illustrations sef and I woke up with another direction and on opening my Whatsapp I saw the confirmation as EBENEZER. Brethren God is always faithful. To God be all the glory."
      ]
    },
    {
        id: "",
        name: "Omodolapo Odesola",
        title: "Protected from an Accident",
        content: [
        "I want to bless the name of God because last week, a man who was sleeping and driving hit my dad’s car so badly that the bumper, bonnet, and even the front tire of the car were damaged. But to God be the glory, my dad was not hurt as badly as the situation warranted; he came out hale and hearty. Again, the person accepted that he was at fault, even at the police station, and he agreed to pay and has paid 556 thousand naira for the repair of the car. I appreciate the name of God because I didn’t lose my dad because of someone else’s carelessness."
      ]
    },
    {
        id: "",
        name: "Noah Anuoluwapo Oyewale",
        title: "A Family’s Double Testimony",
        content: [
        "My testimony is on behalf of my family for safety and most especially my grandmother that the Lord added another year to her year this very September, there was a point in time she was seriously ill that she gave up the ghost, I had to call my Spiritual Father ( Prophet Innocent Anomi Onido ) and he prayed for her and bless be God she is still healthy and sound as ever.",
        "Second Testimony Last year my junior brother decided not to start his admission process and stayed back home, this very year he wrote his jamb and he did well When it was time for admission, he had Issues with course offered, he nearly gave up on the admission process but I told him not too, if it was not had for me and your sister, all will turn out good, And he believed it and continued Now he was offered admission with the course he had in mind initially Glory be to God"
      ]
    }
  ];
  
  