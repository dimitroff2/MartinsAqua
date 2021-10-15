const locationCollection = [
    {place: "Atlantic Ocean"},
    {place: "Pacific Ocean"},
    {place:"Lake Superior"},
    {place:"Ohio River"},
    {place:"Kanawha River"},
    {place:"Summersville Lake"}
    ];

    export const useLocation = () => {
        return locationCollection.slice()
    }