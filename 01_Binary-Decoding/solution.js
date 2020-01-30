function solve() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("resultOutput");
    
    let sum = calculateSum(input);
    input = splitInput(input, sum);
    input = convertToDecimal(input);

    function convertToDecimal(input) {
        return input
            .map(x => parseInt(x, 2));
    }
    function splitInput(input, sum) {
        let result = input.substring(sum);
        result = result.substring(0, result.length - sum);

        return result.match(/.{1,8}/g);
    }

    function spreadSum(num) {
        return Array.from(num.toString())
            .map(Number)
            .reduce((a, b) => a + b, 0);
    }

    function calculateSum(input) {
        let sum = spreadSum(input);
        while (sum.toString().length > 1) {
            sum = spreadSum(sum);
        }
        return sum;
    }

    return output.innerHTML = input
        .map(x => String.fromCharCode(x))
        .filter(x => x.match(/[A-Za-z ]+/gim))
        .join("");
}