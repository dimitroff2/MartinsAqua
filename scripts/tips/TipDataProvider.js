const TipCollection = [
{Tip: "Dont put bleach in the water"},
{Tip: "Dont put a toaster in the water"},
{Tip:"Dont empty water with fish in it"},
{Tip:"No fishing allowed"},
{Tip:"Sushi Chefs not allowed"},
{Tip:"Fish and blenders do not mix"}
];


export const useTip = () => {
    return TipCollection.slice()
}