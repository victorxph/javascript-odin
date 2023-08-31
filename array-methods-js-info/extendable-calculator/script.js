function Calculator (str) {

    this.methods = {

        '+': (a, b) => a + b,
        '-': (a, b) => a - b,

    }

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {

            return NaN

        }

        return this.methods[op](a, b);

    }

    this.addMethod = function (name, func) {

        this.methods[name] = func; 

    }

}

let calc1 = new Calculator();

console.log(calc1.calculate('1 + 1'));

calc1.addMethod("*", (a, b) => a * b);

console.log(calc1.calculate('2 * 4'));