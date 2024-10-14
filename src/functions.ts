const sum = (a: number, b: number): string | Number => {
    return (a + b).toString();
}

const log = (message: string): void => {
    console.log(message);
}   

interface MathFunc {
    (): number
    (x: number, y: number): number;
}