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


// export const backendLocation = 'http://localhost:80/livingBackend'
export const backendLocation = 'https://livingwatersglobalministry.org/'


export const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyDkPC8iQ9nU59mvfTLO8dy6vQITXP6RhWY1lZRGMiKj1lpc18Hu1D-GMXGd4AOzOHF/exec"

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
        fr:[
            {
                title: 'Accueil',
                link: '',
                icon: "house-fill"
            },
            {
                title: 'À propos de nous',
                link: 'about-us',
                icon: "globe2",
                sublinks: [
                    {
                        title: 'Qui nous sommes',
                        icon: "people-fill",
                        link: 'about-us/who-we-are',
                    },
                    {
                        title: 'Nos dirigeants',
                        link: 'about-us/our-leaders',
                        icon: "star-fill",
                    },
                ]
            },
            // {
            //     title: 'Centre d’information',
            //     link: 'info',
            //     icon: "envelope-fill",
            //     sublinks: [
            //         {
            //             title: "Annonces",
            //             link: "announcements",
            //             icon: "megaphone-fill",
            //         },
            //         {
            //             title: "Conférences",
            //             link: "conferences",
            //             icon: "calendar-check-fill"
            //         }
            //     ]
            // },
            {
                title: 'Médias',
                link: 'media',
                icon: "camera-reels-fill",
                sublinks: [
                    {
                        title: "Photos",
                        link: "media/pictures",
                        icon: "camera-fill"
                    },
                    {
                        title: "Messages",
                        link: "media/messages",
                        icon: "mic-fill",
                    },
                    // {
                    //     title: "YouTube",
                    //     link: "",
                    //     icon: "youtube"
                    // }
                ]
            },
            {
                title: 'Témoignages',
                link: 'testimonies',
                icon: "chat-left-quote-fill"
            },
            {
                title: 'Partenariat',
                link: 'Partnership',
                icon: "diagram-3-fill"
            },
            {
                title: 'Centres',
                link: 'centers',
                icon: "geo-alt-fill",
                sublinks : [
                    // {
                    //     title: 'Lagos',
                    //     link: 'Lagos',
                    //     icon: "geo-fill",
                    // },
                    {
                        title: 'Ibadan',
                        link: 'centers/ibadan',
                        icon: "geo-fill",
                    },
                    {
                        title: 'République du Bénin',
                        link: 'centers/benin-republic',
                        icon: "geo-fill",
                    },
                    // {
                    //     title: 'En ligne',
                    //     link: 'Online',
                    //     icon: "camera-video-fill",
                    // }
                ]
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
                    desc: "We are to flow to all men in all seasons, carrying the banner of Jesus boldly, affecting and transforming men and bringing them back to Christ"
                }
            ],
            more: [
                "Zechariah 14:9 - The LORD will be King over the whole earth. On that day there will be one LORD, and his name the only name. - And the purpose of that is that all tongues, all nations will cry out Jesus IS Lord over all",
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
            "Nous sommes assurés de qui nous sommes et de ce que nous représentons en Jésus-Christ. Nous croyons, par la foi en notre Seigneur Jésus-Christ, qu’avec le temps votre vie sera positivement transformée pour la gloire de notre Seigneur Jésus-Christ, et qu’à travers vous d’autres vies seront également transformées.",
            
            "Nous croyons et avons confiance que nous parviendrons tous à l’unité et à l’unicité de Christ et de son corps.",
            
            "Jean 7:38 - Celui qui croit en moi, des fleuves d’eau vive couleront de son sein, comme dit l’Écriture."
        ],
    
        vision: {
            desc: [
                {
                    desc: "Living Waters Fellowship (Ministère) est dédiée à élever, transformer et équiper des hommes pour qu’ils deviennent des agents de changement — des hommes totalement consacrés à Dieu, en esprit et en vérité. Ces vies transformées deviennent à leur tour une source de vie pour les peuples du monde entier."
                }
            ],
            more: [
                "Jean 7:38 parle de croire, c’est-à-dire de la foi, et nous comprenons dans Hébreux 11:1 : « Or la foi, c’est l’assurance des choses qu’on espère, la démonstration de celles qu’on ne voit pas. » Cela signifie que nous devons parvenir à l’état où tout ce qui est produit par notre vie DONNE LA VIE, et cela doit être notre réalité."
            ]
        },
    
        mission: {
            pre: "Zacharie 14:8 - En ce jour-là, des eaux vives sortiront de Jérusalem, la moitié vers la mer orientale [la mer Morte], et l’autre moitié vers la mer occidentale [la Méditerranée]; il en sera ainsi été comme hiver. [AMP]",
            desc: [
                {
                    desc: "Nous devons couler vers tous les hommes en toutes saisons, portant avec assurance la bannière de Jésus, touchant et transformant les hommes et les ramenant à Christ."
                }
            ],
            more: [
                "Zacharie 14:9 - L’Éternel sera roi de toute la terre. En ce jour-là, l’Éternel sera le seul Éternel, et son nom sera le seul nom. — Et le but est que toutes les langues, toutes les nations proclament que Jésus est Seigneur sur tout.",
                "Nous sommes appelés à parvenir à l’état où chacun de nous est un représentant du Royaume de Dieu, un canal corporel par lequel la vie de Dieu coule, et une porte par laquelle le Royaume de Dieu vient dans nos foyers, nos quartiers, nos églises, nos écoles, nos rues, nos États, nos pays et le monde entier, afin que le Royaume du Père vienne, que sa volonté soit faite sur toute la terre et que tous les hommes confessent que Jésus est Seigneur."
            ]
        },
    
        core_activities: [
            {
                title: "Intercession",
                img: prayers,
                bg: "red"
            },
            {
                title: "Adoration intense",
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
                title: "Le prophétique",
                img: prophetic,
                bg: "purple"
            },
            {
                title: "Actions extérieures",
                img: outreaches,
                bg: "indigo"
            },
            {
                title: "Croisades",
                img: crusades,
                bg: "gray"
            }
        ],
    
        core_values: [
            "Centré sur le Christ",
            "Sainteté",
            "Foi",
            "Prière",
            "Intégrité",
            "Gestion / intendance",
            "Unité",
            "Service",
            "Excellence",
            "Responsabilité"
        ]
    },
    
    
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
                address: "Police Barracks, Eleyele, Ibadan",
                img: ibadan,
                time: [
                    "Friday (4:00 pm - 7:00pm)",
                    "Sunday (4:00pm - 7:00pm)"
                ]
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
        fr: 
[
    {
        name: "Sanctuaire principal",
        address: "24, Fadunsin Avenue, Ogba, Lagos",
        time: [
            "Vendredi (17h00 - 19h00)"
        ],
        img: lagos
    },
    {
        name: "Branche d’Ibadan",
        address: "Police Barracks, Eleyele, Ibadan",
        img: ibadan,
        time: [
            "Vendredi (16h00 - 19h00)",
            "Dimanche (16h00 - 19h00)"
        ]
    },
    {
        name: "Branche du Bénin",
        address: "Adjara Sokenjebu, Porto-Novo, Bénin",
        img: benin
        // time: ""
    },
    {
        name: "Réunions en ligne",
        address: "https://chat.whatsapp.com/HqGToFhXIkY7NIVhHkAqiY",
        time: [
            "Réunion de prière du mercredi (21h00 - 22h00)",
            "Étude biblique du vendredi (21h00 - 22h00)"
        ],
        img: online
    }
]

          
        

    }


export const ImageFolders = [
    {
        title: ["100 Men Evangelism", "Évangélisation des hommes 100"],
        folderName: "2025-100-men-evangelism",   
        year: ["November 2025", "Novembre 12 2025"],
        tag: '100menevangelism ibadan 2025',
    },
    {
        title: ["Sunday Service", "Culte du Dimanche"],
        folderName: "sunday-service-12-10-2025",   
        year: ["October 12 2025", "Octombre 12 2025"],
        tag: 'sunday service ibadan october 12',
    },
    {
        title: ["Sunday Service", "Culte du Dimanche"],
        folderName: "sunday-service-05-10-2025",   
        year: ["October 05 2025", "Octombre 05 2025"],
        tag: 'sunday service ibadan october 05',
    },
    {
        title: ["worker's meeting", "Réunion de travailleurs"],
        folderName: "workers-meeting-aug-2025",   
        year: ["Aug. 2025", "Aout 2025"],
        tag: 'workersmeeting august ibadan',
    },
    {
        title: ["worker's meeting", "Réunion de travailleurs"],
        folderName: "workers-meeting-july-2025",   
        year: ["July 2025", "Juillet 2025"],
        tag: 'workersmeeting july ibadan',
    },
    {
        title: ["let us pray, ibadan", "Prions, Ibadan"],
        folderName: "2025-let-us-pray-ibadan",   
        year: [2025, 2025],
        tag: 'letuspray ibadan',
    },
    {
        title: ["Anazao (benin republic retreat)", "Anazao (Retraite de la Republic du Bénin)"],
        folderName: "2025-benin-retreat",   
        year: [2025, 2025],
        tag: 'retreat benin',
    },
    {
        title: ["let us pray, benin republic", "Prions, Republic du Bénin"],
        folderName: "2025-let-us-pray-benin",   
        year: [2025, 2025],
        tag: 'letuspray benin',
    },
    {
        title: ["benin republic retreat", "Retraite de la Republic du Bénin"],
        folderName: "2024-retreat-benin",   
        year: [2024, 2024],
        tag: 'retreat benin',
    },
    {
        title: ["let us pray, benin republic", "Prions, Republic du Bénin"],
        folderName: "2024-let-us-pray-benin",   
        year: [2024, 2024],
        tag: 'letuspray benin',
    },
    {
        title: ["The cry for more, ibadan", "Le Cri pour plus, Ibadan"],
        folderName: "2023-The-cry-for-more-ibadan",   
        year: [2023, 2023],
        tag: 'thecryformore ibadan',
    },
    {
        title: ["benin republic retreat", "Retraite de la Republic du Bénin"],
        folderName: "2023-retreat-benin",   
        year: [2023, 2023],
        tag: 'retreat benin',
    },
    {
        title: ["let us pray, benin republic", "Prions, Republic du Bénin"],
        folderName: "2023-let-us-pray-benin",   
        year: [2023, 2023],
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
            link: "https://www.facebook.com/profile.php?id=61581670743128",
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


export const testimonies = {
    eng: [
        {
            name: "Moronkola Tomiwa",
            title: "Delivered from a Costly Surgery",
            content: [
            "I want to sincerely appreciate the name of the Lord for this beautiful testimony. Around May this year, after going back and forth to different hospitals without a definite diagnosis or solution, my health situation remained unresolved. However, this month took a different turn. I decided to try one more hospital, where they conducted a full scan. After the tests, the doctor informed me that I was diagnosed with intestinal congestion, a condition that, according to him, could only be resolved through surgery.",
            "I was immediately admitted and placed on IV medication. I was not allowed to eat any food, as the doctor explained that the food I had been eating was not passing through my system properly, which had caused persistent vomiting. To summarize, on a Wednesday while lying weak in bed and gaining a little consciousness, I decided to reach out to Papa Onido Innocent. I prayed for me and spoke against the spirit of death off my life. I also connected to the Living Water online prayer by faith. I placed my phone next to my ear and joined the session in faith. The next morning during devotion, a word came forth: \"The Holy Spirit has taken over.\"",
            "I was scheduled for another test and scan before the surgery would proceed. By then, a pipe had already been passed through my nose in preparation. But after the new scan, the doctor was shocked. He looked at the result and said, \"You are gracefully special.\" He confirmed that my intestines had returned to their normal condition, something he admitted was medically impossible. I give all the glory to GOD, who delivered me from a surgery that could have cost me my life and so much money. Hallelujah!"
        ]
        },
        {
            name: "Mr. Oluwaferanmi Morakinyo",
            title: "The Hand of God at Work",
            content: [
            "I want to bless the Lord for His great mercy towards me. This year has been a year of abundant grace and lifting for me. I do not want to go into too many details, but the end note is that God has been faithful to His word over my life. He has been lifting me supernaturally and exponentially. His word through our grandfather, Prophet Emmanuel Jimoh, last year October, has been my reality till date. My testimony this time around is about the hand of God that lifted me and performed His word through His servant, my spiritual Father, Onido Innocent. A. I have been praying concerning a vacant position at work and asking God that He would by His mercy make me fill that position as it will reduce the burdens on my finances.",
            "God assured me that it is settled, but I have been awaiting the manifestation since then. I became anxious when no word was spoken about it by the management. Then, an instruction from the Lord came for me to sow a seed that was sacrificial to my father. I didn’t want to do it at first, but I had to follow it through. After obeying, my father said a prayer \"Next time, you will have more to give.\" I knelt down and received it. Some days after, the position I was expecting was given to me, and for this, I am grateful to God."
        ]
        },
        {
            name: "Mr Adekola Eninlaloluwa",
            title: "Souls Saved and Spirits Imparted",
            content: [
            "11 Saved Souls, All in tears and broken spirits, 8 imparted with the evidence of speaking in tounges. All Glory to Jesus."
        ]
        },
        {
            name: "Miss Omodasola Olayiwola",
            title: "Divine Healing from Drug Reaction",
            content: [
            "On Sunday (23rd August), I felt sick and bought malaria drugs. After using them, my body started itching me seriously, so that I couldn’t sleep until Monday. I went to the nurse and was told that my body system had reacted wrongly to the drugs I took. Drugs were prescribed, but there were no changes. I couldn’t sleep even with sedatives, so I proceeded to injections, yet there were no changes. I called and prayed messaged Papa Onido Innocent at midnight; he called and prayed for me in the morning. To my surprise, there was great relief, and for me in the morning. I’m healed. I didn’t even later take the remaining injections finally, because there was no need for them. I give all glory to God."
        ]
        },
        {
            name: "Oghenetega O.",
            title: "God’s Unexpected Surprise",
            content: [
            "Praised be God! It so happened that I decided to scroll through the messages. I saw a message for \"Semilore\" and logged in to it. Then I got to this one. I’d been feeling disappointed but I mustered up faith and claimed this declaration.",
            "I could just resonate with the Ebenezer theme as I’ve been coming across Scriptural instances and indeed, TOBECHUKWU! God surprised us with a portion today(September 1st)! Deut (4:7). I decided I must share my testimony! Hallowed be to Jesus! Papa Onido Innocent A. God bless you, sir. To God be the Glory."
        ]
        },
        {
            name: "Miss Deborah Agboola",
            title: "God’s Faithfulness Beyond Expectations",
            content: [
            "It happened that I was posted to Kwara state for a post graduate program which I went But on getting there I was worried about the church to go because we all know Ilorin to be a Muslim state. The first time I went I didn’t go to church that Sunday because I always want to make sure I go where God is preached. Then I came home and went back again. So the the following Sunday I was in my room hearing a church praying from my sleep I was so disturbed and even the holy spirit asked me to go and I got up and went on getting there they were acting a drama which was a answer to what have been praying and asking God.",
            "To the glory of God after praying with the direction I had from the drama throughout that week and even the next, I had series of revelation of what was going on and God through his servant MR ONIDO INNOCENT A. directed me also even though the devil was attacking every member of my family right and left with sickness and accident during the course of my prayer, I actually want to bless God for his faithfulness I had peace after the prayer and even evidence and testimony came in. where I thought there was no way he opened a new way with decorations for me. On the 31st of August I was Praying and God told me September will be the month where he will help me giving me illustrations sef and I woke up with another direction and on opening my Whatsapp I saw the confirmation as EBENEZER. Brethren God is always faithful. To God be all the glory."
        ]
        },
        {
            name: "Omodolapo Odesola",
            title: "Protected from an Accident",
            content: [
            "I want to bless the name of God because last week, a man who was sleeping and driving hit my dad’s car so badly that the bumper, bonnet, and even the front tire of the car were damaged. But to God be the glory, my dad was not hurt as badly as the situation warranted; he came out hale and hearty. Again, the person accepted that he was at fault, even at the police station, and he agreed to pay and has paid 556 thousand naira for the repair of the car. I appreciate the name of God because I didn’t lose my dad because of someone else’s carelessness."
        ]
        },
        {
            name: "Noah Anuoluwapo Oyewale",
            title: "A Family’s Double Testimony",
            content: [
            "My testimony is on behalf of my family for safety and most especially my grandmother that the Lord added another year to her year this very September, there was a point in time she was seriously ill that she gave up the ghost, I had to call my Spiritual Father ( Prophet Innocent Anomi Onido ) and he prayed for her and bless be God she is still healthy and sound as ever.",
            "Second Testimony Last year my junior brother decided not to start his admission process and stayed back home, this very year he wrote his jamb and he did well When it was time for admission, he had Issues with course offered, he nearly gave up on the admission process but I told him not too, if it was not had for me and your sister, all will turn out good, And he believed it and continued Now he was offered admission with the course he had in mind initially Glory be to God"
        ]
        }
    ],
    fr: [
        {
          name: "Moronkola Tomiwa",
          title: "Délivrée d’une Chirurgie Coûteuse",
          content: [
            "Je veux sincèrement apprécier le nom du Seigneur pour ce magnifique témoignage. Vers mai de cette année, après avoir fait plusieurs allers-retours dans différents hôpitaux sans diagnostic ni solution définitive, ma situation de santé restait non résolue. Cependant, ce mois-ci a pris une autre tournure. J’ai décidé d’essayer un dernier hôpital, où ils ont effectué un examen complet. Après les tests, le médecin m’a informé que j’étais diagnostiquée d’une congestion intestinale, une condition qui, selon lui, ne pouvait être résolue que par une chirurgie.",
            "J’ai immédiatement été hospitalisée et placée sous perfusion intraveineuse. On m’a interdit de manger, car le médecin expliquait que la nourriture que je mangeais ne passait pas correctement dans mon système, ce qui avait causé des vomissements persistants. Pour résumer, un mercredi, alors que j’étais faible dans mon lit et que je reprenais un peu de conscience, j’ai décidé de contacter Papa Onido Innocent. Il a prié pour moi et a rejeté l’esprit de mort sur ma vie. Je me suis aussi connectée par la foi à la prière en ligne de Living Water. J’ai placé mon téléphone près de mon oreille et j’ai suivi la session avec foi. Le lendemain matin, pendant la dévotion, une parole est venue : « Le Saint-Esprit a pris le contrôle. »",
            "J’étais programmée pour un autre test et un autre examen avant l’opération. Un tuyau avait déjà été inséré par mon nez en préparation. Mais après le nouvel examen, le médecin était choqué. Il a regardé le résultat et a dit : « Vous êtes gracieusement spéciale. » Il a confirmé que mes intestins étaient revenus à leur état normal, ce qu’il a admis comme étant médicalement impossible. Je rends toute la gloire à DIEU, qui m’a délivrée d’une opération qui aurait pu me coûter la vie et beaucoup d’argent. Alléluia !"
          ]
        },
        {
          name: "Mr. Oluwaferanmi Morakinyo",
          title: "La Main de Dieu à l’Œuvre",
          content: [
            "Je veux bénir le Seigneur pour sa grande miséricorde envers moi. Cette année a été une année de grâce abondante et d’élévation pour moi. Je ne veux pas entrer trop dans les détails, mais la conclusion est que Dieu a été fidèle à Sa parole sur ma vie. Il m’a élevé surnaturellement et de façon exponentielle. Sa parole donnée par notre grand-père, le Prophète Emmanuel Jimoh, en octobre dernier, est restée ma réalité jusqu’à présent. Mon témoignage cette fois-ci concerne la main de Dieu qui m’a élevé et a accompli Sa parole à travers Son serviteur, mon père spirituel, Onido Innocent A. Je priais à propos d’un poste vacant au travail et je demandais à Dieu, dans Sa miséricorde, de me le donner afin d’alléger mes charges financières.",
            "Dieu m’a assuré que c’était réglé, mais j’attendais encore la manifestation. Je suis devenu anxieux quand aucune annonce n’a été faite par la direction. Puis, une instruction du Seigneur m’est venue de semer une graine sacrificielle à mon père. Je ne voulais pas le faire au début, mais j’ai dû obéir. Après avoir obéi, mon père a prié en disant : « La prochaine fois, tu auras plus à donner. » Je me suis agenouillé et j’ai reçu cette parole. Quelques jours plus tard, le poste que j’attendais m’a été attribué, et pour cela je rends grâce à Dieu."
          ]
        },
        {
          name: "Mr Adekola Eninlaloluwa",
          title: "Des Âmes Sauvées et des Esprits Impactés",
          content: [
            "11 âmes sauvées, toutes en larmes et au cœur brisé, 8 impactées avec l’évidence du parler en langues. Toute gloire à Jésus."
          ]
        },
        {
          name: "Miss Omodasola Olayiwola",
          title: "Guérison Divine d’une Réaction Médicamenteuse",
          content: [
            "Le dimanche (23 août), je me suis sentie malade et j’ai acheté des médicaments contre le paludisme. Après les avoir pris, mon corps a commencé à me démanger terriblement, au point que je n’ai pas pu dormir jusqu’au lundi. Je suis allée voir une infirmière qui m’a dit que mon organisme avait mal réagi aux médicaments. D’autres médicaments ont été prescrits, mais il n’y a eu aucun changement. Je ne pouvais pas dormir, même avec des sédatifs, alors je suis passée aux injections, mais sans résultat. J’ai envoyé un message de prière à Papa Onido Innocent à minuit ; il m’a appelée et a prié pour moi le matin. À ma grande surprise, j’ai ressenti un grand soulagement, et j’étais guérie. Je n’ai même pas utilisé le reste des injections, car il n’y en avait plus besoin. Je rends toute la gloire à Dieu."
          ]
        },
        {
          name: "Oghenetega O.",
          title: "La Surprise Inattendue de Dieu",
          content: [
            "Loué soit Dieu ! Il s’est trouvé que je faisais défiler les messages et j’en ai vu un pour « Semilore » et je m’y suis connecté. Puis je suis tombé sur celui-ci. Je me sentais découragé, mais j’ai rassemblé ma foi et j’ai réclamé cette déclaration.",
            "Je pouvais résonner avec le thème Ebenezer, car je tombais souvent sur des passages bibliques qui confirmaient cela, et en effet, TOBECHUKWU ! Dieu nous a surpris aujourd’hui (1er septembre) avec une portion ! Deut (4:7). J’ai décidé que je devais partager mon témoignage ! Gloire à Jésus ! Papa Onido Innocent A. Que Dieu vous bénisse, monsieur. À Dieu soit la gloire."
          ]
        },
        {
          name: "Miss Deborah Agboola",
          title: "La Fidélité de Dieu au-delà des Attentes",
          content: [
            "Il se trouve que j’ai été affectée à l’État de Kwara pour un programme de troisième cycle. À mon arrivée, j’étais préoccupée par l’église où aller, car nous savons tous qu’Ilorin est majoritairement musulmane. Le premier dimanche, je n’ai pas assisté à un culte parce que je voulais être sûre d’aller dans une église où Christ est prêché. Ensuite, je suis rentrée à la maison et revenue. Le dimanche suivant, j’étais dans ma chambre, dérangée par des prières venant d’une église voisine, et même le Saint-Esprit m’a poussé à y aller. J’y suis allée et ils jouaient une pièce de théâtre qui répondait exactement à mes prières.",
            "À la gloire de Dieu, après avoir prié avec la direction reçue de cette pièce, j’ai eu plusieurs révélations de ce qui se passait. Dieu, à travers son serviteur, M. Onido Innocent A., m’a également dirigée. Même si le diable attaquait les membres de ma famille avec des maladies et des accidents, je veux bénir Dieu pour Sa fidélité. J’ai eu la paix après la prière et même des preuves et témoignages sont arrivés. Là où je pensais qu’il n’y avait pas de chemin, Il en a ouvert un nouveau avec des bénédictions. Le 31 août, pendant que je priais, Dieu m’a dit que septembre serait le mois où Il m’aiderait. Quand je me suis réveillée, j’ai reçu une autre confirmation et, en ouvrant mon WhatsApp, j’ai vu encore la confirmation : EBENEZER. Frères et sœurs, Dieu est toujours fidèle. À Lui soit toute la gloire."
          ]
        },
        {
          name: "Omodolapo Odesola",
          title: "Protégée d’un Accident",
          content: [
            "Je veux bénir le nom de Dieu parce que la semaine dernière, un homme qui s’était endormi au volant a percuté violemment la voiture de mon père, endommageant le pare-chocs, le capot et même le pneu avant. Mais à la gloire de Dieu, mon père n’a pas été blessé comme la situation l’aurait suggéré ; il est sorti indemne. De plus, le conducteur a reconnu sa faute, même au poste de police, et il a accepté de payer et a effectivement payé 556 000 nairas pour les réparations. J’apprécie le nom de Dieu, car je n’ai pas perdu mon père à cause de la négligence de quelqu’un d’autre."
          ]
        },
        {
          name: "Noah Anuoluwapo Oyewale",
          title: "Un Double Témoignage Familial",
          content: [
            "Mon témoignage est au nom de ma famille pour la sécurité et surtout pour ma grand-mère à qui le Seigneur a ajouté une nouvelle année ce mois de septembre. À un moment donné, elle était gravement malade et avait rendu l’âme. J’ai dû appeler mon Père Spirituel (le Prophète Innocent Anomi Onido), et il a prié pour elle. Béni soit Dieu, elle est encore en bonne santé et pleine de vie.",
            "Deuxième témoignage : l’année dernière, mon jeune frère a décidé de ne pas commencer son processus d’admission et est resté à la maison. Cette année, il a passé le JAMB et a réussi. Quand il était temps pour l’admission, il a eu des problèmes avec le cours proposé et a failli abandonner, mais je lui ai dit de continuer, que si ce n’avait pas été difficile pour moi et ma sœur, tout irait bien. Il a cru et a continué. Maintenant, il a été admis dans le cours qu’il avait en tête au départ. Gloire soit rendue à Dieu."
          ]
        }
      ]     

}
  