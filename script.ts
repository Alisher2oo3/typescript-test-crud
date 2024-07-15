// // Array
// const colors: string[] = ["black", "green", "grey"];
// const number: number[] = [1, 2, 3, 65];

// // any
// let a: any = 1;
// console.log(a);

// a = "sd";
// console.log(a);

// a = ["dsfv", "scdsvf"]
// console.log(a);

// a = {
//     name: "skdjvn",
//     as: "asdcfvf"
// }
// console.log(a);

// function test(a: number | string): void {
//     if (typeof a === "number") {
//         console.log(a.toFixed());
//     } else if (typeof a === "string") {
//         console.log(a.toLowerCase());
//     }
// }
// test("ALISHER");

// let number: number[] = [1, 2, 8, 6, 72, 54];
// number.map((num: number) => {
//     console.log(num);
// })

// interface CarType {
//     name: string;
//     year?: number;
// }

// interface OneType extends CarType {
//     km: number;
//     price: number;
// }

// const logCar = (car: CarType): string => {
//     return `name of car - ${car.name}, created at - ${car.year}`
// }

// const OneCarType = (obj: OneType): void => {
//     console.log(obj.price + 'sd');
// }

// console.log(logCar({name: 'defrgt'}))


interface ICar {
    name: string;
    color: string;
    isBallon: boolean;
    speed: ICarSpeed;
    price: ICarPrice;
}

interface ICarSpeed {
    max: number;
    min: number;
}

interface ICarPrice {
    total: number;
    cridet: number;
    discount: number;
}
