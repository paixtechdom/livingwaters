// import logo from "../assets/images/logo.png"
import logo from "../src/assets/images/logo.png"
import prayers from "../src/assets/images/dev/prayers.jpg"
import teaching from "../src/assets/images/dev/teaching.jpg"
import evangelism from "../src/assets/images/dev/evangelism.jpg"
import prophetic from "../src/assets/images/dev/prophetic.jpg"
import worship from "../src/assets/images/dev/worship.jpg"
import upcoming_program_eng from "/next eng.jpg";
import upcoming_program_fr from "/next fr.jpg";
import event_eng from "../src/assets/images/events/prophet wedding anniversary eng.jpg";
import event_fr from "../src/assets/images/events/prophet wedding anniversary fr.jpg";




export const Logo = logo


// export const backendLocation = 'http://localhost:80/livingBackend'
export const backendLocation = 'https://livingwatersglobalministry.org/'

export const Navigation =
    {
        eng:[
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
                        link: "media/pictures"
                    },
                    {
                        title: "Videos",
                        link: "media/videos"
                    },
                    // {
                    //     title: "Messages",
                    //     link: "audio-messages"
                    // }
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
        ],
        fr: [
            {
                title: 'Accueil',
                link: ''
            },
            {
                title: 'Qui nous sommes',
                link: 'who-we-are'
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
            //     title: 'Témoignages',
            //     link: 'testimonies',
            //     sublinks: [
            //         {
            //             title: "Partager un témoignage",
            //             link: "share-testimony"
            //         },
            //         {
            //             title: "Lire les témoignages",
            //             link: "read-testimonies"
            //         }
            //     ]
            // },
            // {
            //     title: 'Télécharger',
            //     link: 'admin/upload'
            // },
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
        header: "Upcoming Program",
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
            "We are sure of who we are and what we represent in Christ Jesus, and we are certain through faith in our Lord Jesus Christ that within the space of time your life will be transformed positively to the Glory of our Lord Jesus Christ, and through you more lives wlll be transformed too.",
    
            "We trust and believe that we shall all come to the unity and oneness of Christ and His body",
    
            "John. 7:38 - Whoever believes in me, as the Scripture has said, streams of living water will flow from within him",
        ],
        vision: {
            desc: [
                {
                    desc: "Living Waters Global Ministry is called to save, raise and equip men who are totally sold out to God, and their reality will be a source of light and life to all men all over the earth."
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
            {
                title: "The Prophetic",
                img: prophetic,
                bg: "bg-purple-500"
            },
    
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
                bg: "bg-red-500"
            },
            {
                title: "Adoration Intense",
                img: worship,
                bg: "bg-blue-500"
            },
            {
                title: "Enseignement de la Parole",
                img: teaching,
                bg: "bg-green-500"
            },
            {
                title: "Évangélisation",
                img: evangelism,
                bg: "bg-yellow-500"
            },
            {
                title: "The Prophetic",
                img: prophetic,
                bg: "bg-purple-500"
            }
        ]
    }
    
}


export const Locations = {
    eng: 
        [
            {
                country: "Nigeria",
                centers: [
                    {
                        name: "Lagos Chapter",
                        address: "33, Fadunsin Avenue, Ogba, Lagos",
                        time: "5:00pm - 7:00pm"
                    },
                    {
                        name: "Ibadan Chapter",
                        address: "Coming Soon",
                        // time: ""
                    },
                ]
            },
            {
                country: "Benin Republic",
                centers: [
                    {
                        name: "Benin Republic Chapter",
                        address: "Coming Soon",
                        // time: ""
                    }
                ]
            },
            {
                country: "Online Meetings",
                centers: [
                    {
                        name: "Online Prayer Meeting (Wednesdays)", 
                        address: "https://chat.whatsapp.com/HqGToFhXIkY7NIVhHkAqiY",
                        time: "9:00pm - 10:00pm",
                    },
                    {
                        name: "Online Bible Study (Fridays)", 
                        address: "https://chat.whatsapp.com/HqGToFhXIkY7NIVhHkAqiY",
                        time: "9:00pm - 10:00pm",
                    },
                ]
            }
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
            title: "+234 706 373 0930",
            link: "tel:+234 706 373 0930"
        },
        {
            title: "+234 807 540 8149",
            link: "tel:+234 807 540 8149"
        },
        {
            title: "+229 481 294 56",
            link: "tel:+229 481 294 56"
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


