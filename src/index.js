// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    let solution = {};

    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        if (currency <= 0){
            return {};
        }else{
            let half = Math.floor(currency/50);
            if (half != 0) {
                solution.H = half;
            }
            currency = currency%50;

            if (currency >= 0){
                let quarter = Math.floor(currency/25);
                if (quarter != 0){
                    solution.Q = quarter;
                }
                currency = currency%25;

                if (currency >= 0){
                    let dime = Math.floor(currency/10);
                    if (dime != 0) {
                        solution.D = dime;
                    }
                    currency = currency%10;

                    if (currency >= 0){
                        let nickel = Math.floor(currency/5);
                        if (nickel != 0){
                            solution.N = nickel;
                        }
                        currency = currency%5;
                    }
                }
            }
        }
    }
    if (currency != 0){
        solution.P = currency;
    }
    return solution;
}
