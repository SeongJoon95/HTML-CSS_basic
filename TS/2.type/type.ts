/*
    타입선언 : 
    - 변수 및 함수에 타입을 지정하여 타입에 대한 제한을 추가할 수 있음
*/
let variable : string;
variable='문자열';
// variable=1234; //'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)

function func (arg1: string, arg2: number): string {
    return '문자열';
}

const arrowFunc = (arg1: string, arg2: number):string => {
    return '문자열';
}

/*
    typescript의 타입
    - string: 문자열
    - number: 숫자
    - boolean: 논리
    - null: null
    - undefined: 정의되지 않음
    - object: 객체
    - array: 배열
    - enum: 열거형
    - void: 함수에서 반환값이 없음
    - any: 모든 타입
*/
const numbers1: number[] =[1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

let string1: string =''; // 기본형 타입
let string2: String =''; // 인터페이스 타입
// 인터페이스를 기본형에 넣는건 되지만 기본형을 인터페이스에 넣을수는 없다.
string2=string1;
// string1=string2;

enum Color {
    RED = '#ff0000', GREEN ='#00ff00', BLUE='#0000ff'
}
const color: Color = Color.RED;
console.log(color);

// typescript에서는 왠만하면 안쓰는것이 좋다
let anyType: any = 10;
anyType='10';

const voidFunc = (): void => {
    return; // 리턴은 되지만 리턴에 값을 넣는 행위는 안된다.
}

const func2 = (arg:string): string => {
    return '';
}

// funcType변수는 string 매개변수를 할당받고 함수리턴타입로 strig으로 받는다.
let funcType: (arg:string) => string;
funcType = func2;
// funcType = voidFunc; // void타입인 voidFunc를 담을 수 없다.

/*
    타입추론 :
    - 타입을 선언하지 않고 변수에 값이 초기화되는 순간에 할당된 값에 따라서 변수의 타입이 결정 
*/
let stringVariable ='';
// stringVariable = 10; 이렇게 할수 x

const func3 = (arg:number) => {
    if(arg === 1) return 1;
    return '';
}


/*
    타입 변환 :
    - as 키워드로 형변환 가능 (객체일때 자주 사용), <> 연산자로 형변환 가능
*/
const PI: any = '3.14';
let piNumber: number = PI as number;
piNumber = Number(PI);

piNumber = <number>PI;


/*
    유니온 타입
    - 복수의 타입을 지정하는 방법, '|' 사용
*/
// union변수는 숫자 혹은 문자가 들어갈 수 있다는 뜻
let union: number | string ;
union = 10;
union = '10';
// union = false; // 지정하지 않은 타입이라 X
// const number1: number = union as number;

/*
    리터럴 타입
    - 지정한 리터럴 값만 가질수 있는 타입
*/
let day: '낮' | '밤';
day = '낮';
day = '밤';
// day = '아침';
