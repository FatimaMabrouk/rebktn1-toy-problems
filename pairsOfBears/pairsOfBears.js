function bears(x, s) {
    let index1 = 0;
    let index2 = 1; 
    let first = s[index1];
    let second = s[index2]; 
    let pairs = "";
    let count = 0; 
    while (second) {
        let pair = first + second; 
        switch (pair) {
            case 'B8':
            case '8B':
                pairs = pairs + pair;
                count++;
                index1 = index1 + 2;
                index2 = index2 + 2;
                first = s[index1];
                second = s[index2];
                break;
            default:
                index1 = index1 + 1;
                index2 = index2 + 1;
                first = s[index1];
                second = s[index2];
        }
    } 
    return [pairs, count > x];
}