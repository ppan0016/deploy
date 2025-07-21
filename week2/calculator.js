// basic addition function
const calc = {
    add: function(num1, num2)
            {
                return num1+num2
            }
}

// it exports the function or variable here named calc so it can be used in other files.

// module.exports is the object that Node.js uses to define what a module exports.

// 
module.exports.calculate = calc