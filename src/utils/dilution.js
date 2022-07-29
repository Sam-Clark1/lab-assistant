export function dilutionAmount(C1, V1, C2, V2) {
let answer = '';

if (C1.length === 0) {
    answer = (C2*V2)/V1;
} else if (V1.length === 0) {
    answer = (C2*V2)/C1;
} else if (C2.length === 0) {
    answer = (C1*V1)/V2;
} else if (V2.length === 0) {
    answer = (C1*V1)/C2;
}

return answer.toString();
};