export class Hasher {

    private static defCardinality = 100000000;
    private static defPrimeNum = 104395303;
    private static defMultiplier = 13;
    private static defSumand = 7321;

    static hashInteger(intToBe: number): number {

        if (!Number.isInteger(intToBe)) throw Error("The number passed wasn't an integer, I can't hash it");

        const hashedInt = (((this.defMultiplier * intToBe) + this.defSumand) % this.defPrimeNum) % this.defCardinality;

        return hashedInt;

    }

    static hashString(strToBe: string): number {

        const asciiString: number[] = strToBe.split('').map((value) => value.charCodeAt(0));

        let hashedStrng = 0;
        for (let i = asciiString.length - 1; i > 0; i--) {

            hashedStrng = (hashedStrng * this.defMultiplier + asciiString[i]) % this.defPrimeNum;

        }

        return hashedStrng;

    }

}