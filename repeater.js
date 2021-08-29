// const pair = (x, y) => f => f(x, y);
		
// const head = p => p((x, y) => x);   // complete lambda expression
// const tail = p => p((x, y) => y);  // complete lambda expression
// const increment_repeater =
//     r => f => x => f(r(f)(x));
    
// const zero_repeater = f => x => x;
// const decrement_repeater =
//     repeater =>
//         head(
//             repeater(p => pair(tail(p), increment_repeater(tail(p))))(pair(zero_repeater, zero_repeater))
//         );
// const twice = f => x => f(f(x));
// const thrice = increment_repeater(twice);
// const also_twice = decrement_repeater(thrice);

const zero_repeater = f => x => x;
const one_repeater = f => x => f(zero_repeater, () => zero_repeater(f)(x));
// const two_repeater = f => x => f(one_repeater, () => one_repeater(f)(x));
// const three_repeater = f => x => f(two_repeater, () => two_repeater(f)(x));

const to_int = repeater => repeater((iter_count, x) => x() + 1)(0);
display(to_int(one_repeater)); // displays 3

const warn = one_repeater((iter_count, x) => display(x()));
warn("ALERT"); // displays "ALERT" 3 times