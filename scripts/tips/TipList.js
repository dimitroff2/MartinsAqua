import { useTip } from "./TipDataProvider.js"
import { Tip } from "./Tip.js"

export const TipList = () => {

    const contentElement = document.querySelector(".tip-list")
    const Tips = useTip()

    let TipHTMLRepresentations = ""
     for (const singleTipObject of Tips) {

        TipHTMLRepresentations += Tip(singleTipObject)

     }

     contentElement.innerHTML += `
         <article class="tip-list">
             ${TipHTMLRepresentations}
         </article>
     `
 }