// You already have this code. Don't add this
import { Fish } from './Fish.js'
import { useFish } from './FishDataProvider.js'
import { FishList } from './FishList.js'

import {Tip} from "./tips/Tip.js"
import {useTip} from "./tips/TipDataProvider.js"
import { TipList } from './tips/TipList.js'


// import {Location} from "./locations/Location.js"
// import {useLocation} from "./locations/LocationDataProvider.js"
import { LocationList } from './locations/LocationsList.js'



const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()



const allTheTip = useTip()

for (const tip of allTheTip) {
    console.log(tip)
}

TipList()

// const allTheLocation = useLocation()

// for (const location of allTheLocation) {
//     console.log(location)
// }

LocationList()