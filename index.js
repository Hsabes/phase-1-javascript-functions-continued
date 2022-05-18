function saturdayFun(defaultActivity = 'roller-skate'){
    return `This Saturday, I want to ${defaultActivity}!`;
}

let mondayWork = function (defaultActivity = 'go to the office'){
    return `This Monday, I will ${defaultActivity}.`;
}

let wrapAdjective = function (wrap = '*'){
    return function (message = 'a hard worker'){
        return `You are ${wrap}${message}${wrap}!`
    }
}