let allServicePrices = function (){
    return servicePrice + serviceSecond
}

allServicePrices = getAllServicePrices()
//console.log(allServicePrices,'вызвали функцию с суммой всех доп.услуг')ж;

function getFullPrice() {
    return screenPrice + allServicePrices
}
fullPrice = getFullPrice();

let newTitle = '';

const getTitle = function () {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLocaleLowerCase()
}
newTitle = getTitle();

const getServicePercentPrices = function (){
    return fullPrice - servicePercentPrice
}

servicePercentPrice = getAllServicePrices();