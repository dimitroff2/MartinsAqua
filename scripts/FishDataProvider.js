const fishCollection = [
    {
        name: "Bart",        
        species: "angelfish",
        length: "two inches",
        food: "crustaceans",
        location: "Atlantic Ocean"
    },

    {
        name: "Bob",
        species: "shark",
        length: "two feet",
        food: "burgers",
        location: "Pacific Ocean"

    },

    {
        name: "George",
        species: "neon",
        length: "1 inch",
        food: "bread crumbs",
        location: "Lake superior",
    },

    {
        name: "Wednesday",
        species: "Whale Shark",
        length: "30 feet",
        food: "krill",
        location: "Pacific Ocean"
    },

    {
        name: "Slimy",
        species: "Moray Eel",
        length: "two feet",
        food: "Anything",
        location: "Pacific Ocean"
    },
];


export const useFish = () => {
    return fishCollection.slice()
}