import Asian from '../assets/Images/asian.jpeg'
import Beverage from '../assets/Images/beverages.jpeg'
import Chinese from '../assets/Images/chinese.jpeg'
import Dessert from '../assets/Images/dessert.jpeg'
import Fastfood from '../assets/Images/fastfood.jpeg'
import Halal from '../assets/Images/halal.jpeg'
import Indian from '../assets/Images/indian.jpeg'
import Japanese from '../assets/Images/japanese.jpeg'
import Local from '../assets/Images/local.jpeg'
import Seafood from '../assets/Images/seafood.jpeg'
import Snack from '../assets/Images/snack.jpeg'
import Western from '../assets/Images/western.jpeg'

const LOCATIONS_LIST = {
    MTA: {
        code: 'MTA',
        name: 'Mapletree Anson'
    },
    RFL: {
        code: 'RFL',
        name: 'Raffles Link'
    }
}

const CUISINE_LIST = [
    {
        id: 1,
        title: "Asian",
        image: Asian,
        link: "/cuisine/Asian"
    },
    {   
        id: 2,
        title: "Beverage",
        image: Beverage,
        link: "/cuisine/Beverage"
    },
    {   
        id: 3,
        title: "Chinese",
        image: Chinese,
        link: "/cuisine/Chinese"
    },
    {   
        id: 4,
        title: "Dessert",
        image: Dessert,
        link: "/cuisine/Dessert"
    },
    {   
        id: 5,
        title: "Fast Food",
        image: Fastfood,
        link: "/cuisine/Fastfood"
    },
    {   
        id: 6,
        title: "Halal",
        image: Halal,
        link: "/cuisine/Halal"
    },
    {   
        id: 7,
        title: "Indian",
        image: Indian,
        link: "/cuisine/Indian"
    },
    {   
        id: 8,
        title: "Japanese",
        image: Japanese,
        link: "/cuisine/Japanese"
    },
    {   
        id: 9,
        title: "Local",
        image: Local,
        link: "/cuisine/Local"
    },
    {   
        id: 10,
        title: "Seafood",
        image: Seafood,
        link: "/cuisine/Seafood"
    },
    {   
        id: 11,
        title: "Snack",
        image: Snack,
        link: "/cuisine/Snack"
    },
    {
        id: 12,
        title: "Western",
        image: Western,
        link: "/cuisine/Western"
    }
]


export {LOCATIONS_LIST, CUISINE_LIST}