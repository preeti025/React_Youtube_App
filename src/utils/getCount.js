export function getCount(number){
    if (number === 0) {
        return 'No views';
    } 
    else if(number <= 999){
        return number;
    }
     else if(number < 1000000){
        return `${Math.round(number/1000, 2)}K`;
    } 
    else if(number < 1000000000){
        return `${Math.round(number/1000000, 2)}M`;
    } 
    else if(number > 1000000000){
        return `${Math.round(number/1000000000, 2)}B`;
    } 
}

// if($number == 0) {
//     $views = 'No views';
// } elseif($number <= 999) {
//     $views = $number.' views';
// } elseif($number < 1000000) {
//     $views = round($number/1000, 2).'K views';
// } elseif($number < 1000000000) {
//     $views =  round($number/1000000, 2).'M views';
// } elseif($number >= 1000000000) {
//     $views = round($number/1000000000, 2).'B views';
// }