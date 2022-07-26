export function enzymeAmount (sampleMass, percentProtein, percentEznyme, enzymeDensity) {
    const decimalProtein = percentProtein/100;
    const decimalEnzyme = percentEznyme/100;

    const sampleCalc = sampleMass * decimalProtein;
    const sampleTimesEnz = sampleCalc * decimalEnzyme;

    const enzymeMilliliters = sampleTimesEnz/enzymeDensity;
    const enzymeMicroliters = enzymeMilliliters*1000;

    return enzymeMicroliters;
};