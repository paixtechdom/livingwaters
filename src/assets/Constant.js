const Logo = 'logo'
const Logo_xl = 'logoxl'
import img1 from "../assets/images/dev/img 1.jpg"
import img2 from "../assets/images/dev/img 2.jpg"
import img3 from "../assets/images/dev/img 3.jpg"
import img4 from "../assets/images/dev/img 4.jpg"
import img5 from "../assets/images/dev/img 5.jpg"
import img6 from "../assets/images/dev/img 6.jpg"
import img7 from "../assets/images/dev/img 7.jpg"
import img8 from "../assets/images/dev/img 8.jpg"
import img9 from "../assets/images/dev/img 9.jpg"


export const navs = [
    {
        title: 'Home',
        link: ''
    },
    {
        title: 'About',
        link: 'about',
    },
    {
        title: 'Media',
        link: 'media',
        sublinks: [
            {
                title: "Images",
                link: "images"
            },
            {
                title: "Messages",
                link: "Messages"
            }
        ]
        
    },
    {
        title: 'Testimonies',
        link: 'testimonies',
        sublinks: [
            {
                title: "Share Testimony",
                link: "share-testimony"
            },
            {
                title: "Read Testimonies",
                link: "read-testimonies"
            }
        ]
        
    },
    // {
    //     title: 'Upload',
    //     link: 'admin/upload'
    // },
]

export const Images = [
    {
        img: img1,
        // location of the image
        program: "a",
        // program should be picked from the db
        date: "",
        // date of program
    },
    // {
    //     img: img2,
    //     program: "",
    //     date: "",
    // },
    {
        img: img3,
        program: "",
        date: "",
    },
    {
        img: img4,
        program: "",
        date: "",
    },
    {
        img: img5,
        program: "",
        date: "",
    },
    {
        img: img6,
        program: "",
        date: "",
    },
    {
        img: img7,
        program: "",
        date: "",
    },
    {
        img: img8,
        program: "",
        date: "",
    },
    {
        img: img9,
        program: "",
        date: "",
    }
]

// const backendLocation = 'http://localhost:80/livingBackend'
const backendLocation = 'https://livingwatersglobalministry.org/'



export const About = {
    vision: {
        title: "",
        desc: "We are based solely on the purpose of raising men who are totally sold out to God (in spirit and in truth) and their reality will be a source of Life to men all over the earth."
    },

    mission: {
        title: "",
        desc: "We are to flow to all men in all seasons carrying the banner of Jeus bodly, affecting men positively whenever we find ourselves to the glory of God"
    },

    core_activities:
    [
        {
            title: "Intercession (Consistent Prayers)",
            image: ""
        },
        {
            title: "Accurate Teaching of The Word",
            image: ""
        },
        {
            title: "Evangelism",
            image: ""
        },
        {
            title: "Intense Worship",
            image: ""
        }

    ]

}


export const Locations = [
    {
        country: "Nigeria",
        centers: [
            {
                name: "Lagos Center",
                address: "33, Fadunsin Avenue, Ogba, Lagos",
                time: "5:00pm - 7:00pm"
            },
            {
                name: "Ibadan Center",
                address: "Ibadan, Ibadan, Ibadan",
                time: "5:00pm - 7:00pm"
            },
        ]
    },
    {
        country: "Benin Republic",
        centers: [
            {
                name: "Agatha",
                address: "Benin, Agatha, Benin",
                time: "5:00pm - 7:00pm"
            }
        ]
    },
    {
        country: "Online Meetings",
        centers: [
            {
                name: "Online Prayer Meeting", 
                address: "Link to the Whatsapp Group",
                time: "9:00pm - 10:00pm",
            },
            {
                name: "Online Bible Study", 
                address: "Link to the Whatsapp Group",
                time: "9:00pm - 10:00pm",
            },
        ]
    }
]




export { Logo, Logo_xl, backendLocation }