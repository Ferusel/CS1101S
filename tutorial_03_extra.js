function compose(f, g){
    return x => f(g(x));
}

// Q1
// compose(math_sqrt, math_log)(math_E); 1
// compose(math_log, math_sqrt)(math_E * math_E); 1

function thrice(f) {
    return compose(compose(f, f), f);
}

// Q2
// thrice(math_sqrt)(256); 2 // Sqrt 256 3 times

// Q3
// thrice(thrice)(x => x + 1)(0);
// 27

// T(T)(F)
// (TTT)(F)
// (TT)(FFF)
// (T)(FFF FFF FFF)
// (FFF FFF FFF)(FFF FFF FFF)(FFF FFF FFF)

// Q4
// (a) 33
// (b) compose is returned as a HOF
// (c) 1 
// (d) Square 2 27 times, so 2^2^2^...^2 repeated 27 times
const square = x => x * x;
const add1 = x => x + 1;
const add2 = x => x+2;
((thrice(thrice))(add1))(6);
((thrice(thrice))(x => x))(compose)(add1, add2)(1);
((thrice(thrice))(square))(1);
((thrice(thrice))(square))(2);
