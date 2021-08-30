import { make_point, draw_connected_full_view_proportional, x_of, y_of } from "curve";

// function s_generator(pt) {
//     const x = x_of(pt);
//     const y = y_of(pt);

//     function drawer(t) {
//         if (t <= 0.5) {
//             if (t <=0.375) {
//                 return make_point(math_cos(4*math_PI*t) + x,
//                             math_sin(4*math_PI*t) + y);
//             } else {
//                 return make_point(math_cos(4*math_PI*0.375) + x,
//                             math_sin(4*math_PI*0.375) + y);
//             }    
//         }
//         else {
//             if (t <=0.375) {
//                 return make_point(- (math_sin(4*math_PI*t) + x),
//                                 - (math_cos(4*math_PI*t) + y));
//             } else {
//                 return make_point(- (math_sin(4*math_PI*0.375) + x),
//                             - (math_cos(4*math_PI*0.375) + y));
//             } 
//         }  
//     }
//     return drawer;
// }

function s_generator(pt) {
    // return function
    const x_point = x_of(pt);
    const upper_y = 1 + y_of(pt);
    const lower_y = y_of(pt) - 1;

    function fn_inner(t) {
        return (t <= 0.5)
            ? make_point(x_point + math_cos(math_PI * t * 3),
                      upper_y + math_sin(math_PI * t * 3))
            : make_point(x_point + math_cos(math_PI * t * 3),
                         lower_y - math_sin(math_PI * t * 3));
    }
    return fn_inner;
}

// Test
draw_connected_full_view_proportional(200)(s_generator(make_point(0, 0)));