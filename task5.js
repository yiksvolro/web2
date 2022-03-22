const dates = [];
dates.push(new Date("2020/06/25"))
dates.push(new Date("2021/06/26"))
dates.push(new Date("2022/06/27"))
dates.push(new Date("2019/06/28"))
console.log(new Date(Math.max(...dates)));