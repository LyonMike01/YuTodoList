

module.exports.getDate = function (){

const today = new Date();
// let currentDay = today.getDay();

const options = { 
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

return today.toLocaleDateString("en-GB", options);
}



exports.getDay = function (){

    const today = new Date();
    // const currentDay = today.getDay();
    
    const options = { 
        weekday: "long",
    };
    
    return today.toLocaleDateString("en-GB", options);
}
