/*
================================== 많이 쓰인다고 함 ==================================
    매개변수 기본값 : 
    - 함수 호출시 매개변수를 전달하지 않으면 사용할 기본값을 지정할 수 있음
*/
const add = (a = 5, b = 10) => a + b ;
console.log(add());
console.log(add(50, 99));

console.log('========================================');

/*
    rest 매개변수 : 
    - 함수 선언시 매개변수 앞에 ...을 붙여서 정의한 매개변수
    - 함수에 전달받은 매개변수의 배열을 전달받음
    - 다른 매개변수와 같이 rest 매개변수를 사용할 땐 rest 매개변수를 제일 마지막에 선언해야함
*/
const restFunction = (...arg) => {
    console.log(arg); // 배열로 받음
};
restFunction(1, 2, 3, 4, 5);

// 왠만하면 사용하지 않는것이 좋다.
const restFunction2 = (arg1, ...args) => {
    console.log(arg1);
    console.log(args);
};
restFunction2(1, 2, 4, 5, 7, 8);


console.log('========================================');

/*
    spread 연산자 : 
    - ...을 사용하여 대상의 요소를 하나씩 분리
    - 연산자의 피연산자는 반드시 반복 가능한 객체(배열, 객체, 문자열, ...)이어야 함
*/
const numbers = [1, 2, 3, 4];
console.log(numbers);
console.log(...numbers); // spread 연산자 사용하여 출력하면 하나씩 분리해서 나옴
// == 위와동일 ==
console.log(1, 2, 3, 4);

console.log('========================================');

// 배열 복사에 사용 // 깊은 복사가 됨
const newNumbers = [...numbers]; // ==>  [1, 2, 3, 4] 동일한 작업
console.log(newNumbers);

newNumbers[0] = 20;
console.log(numbers);
console.log(newNumbers);

console.log('========================================');

// 배열 연결에 사용
const numbers2 = [5, 6, 7, 8];
let newNumbers2 = [...numbers,...numbers2]; // => [1, 2, 3, 4, 5, 6, 7, 8]
console.log(newNumbers2);
newNumbers2 = [...numbers2, ...numbers]; // => [5, 6, 7, 8, 1, 2, 3, 4]
console.log(newNumbers2);

console.log('========================================');

// 배열 요소 추가에 사용
newNumbers2 = [...newNumbers2, 9, 10];
console.log(newNumbers2);

console.log('========================================');

// 객체 복사, 연결, 요소 추가에 사용

// 객체 복사(깊은)
const king = {
    name: '이성계',
    tombName: '태조'
};

let newKing = { ...king };
newKing.name = '이방과';
console.log(king);
console.log(newKing); // 깊은 복사가 되어서 이방과라는 이름값을 변경함

// 연결
const kingInfo = {
    address: '서울특별시',
    country: '고려'
};

newKing = { ...king, ...kingInfo };
console.log(newKing);
newKing = { ...kingInfo, ...king };
console.log(newKing);

// 요소 추가
newKing = {...king, birth: '1335-11-04'};
console.log(newKing);

// 동일한 key가 존재하면 값을 바꾸고 없는 요소만 추가함
newKing = { ...king, name: '이단', birth: '1335-11-04'};
console.log(newKing);

// 순서를 바꾸면 값이 바뀌지않고 들어가지도 않는다.
newKing = { name: '이단', ...king , birth: '1335-11-04'};
console.log(newKing);