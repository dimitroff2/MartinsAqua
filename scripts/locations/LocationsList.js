import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {

    const contentElement = document.querySelector(".locations")
    const Locations = useLocation()

    let LocationHTMLRepresentations = ""
     for (const singleLocationObject of Locations) {

        LocationHTMLRepresentations += Location(singleLocationObject)

     }

     contentElement.innerHTML += `
         <article class="main-list locations">
             ${LocationHTMLRepresentations}
         </article>
     `
 }