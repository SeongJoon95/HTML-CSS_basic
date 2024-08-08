/*
    let
*/

/*
    블록 레벨 스코프 : 
    - 코드 블럭 내부에서 선언되어서 해당 코드 블럭에서만 사용 가능
*/
{
    var x = 10; 
}
console.log(x);

// {
//     let y = 10;
// }
// console.log(y);

/*
    변수 중복 선언 불가 : 
    - 변수를 동일한 이름으로 여러 개 선언 불가능
*/
var x = 10;
var x = 20;

// let y = 10;
// let y = 20;


/*
    호이스팅 : var, function 선언문을 최상단에 선언한것 처럼 동작하는 것
    - let 키워드로 선언된 변수는 최상단에 선언은 되지만 실제로 선언한 위치 이전까지는 일시적 사각지대로 빠트림
    - let은 block 내에서만 해당하기에 최상단역시 block 내부에서의 최상단을 의미함
*/
console.log(z);
var z=10;

// ReferenceError: Cannot access 'y' before initialization -> 선언은 했지만 초기화 하기 전 위치에서는 사용불가능 하다는 뜻
// console.log(y);
// let y = 10;

// console.log(y2); // ReferenceError: y2 is not defined : 선언 자체가 안되었다는 말

/*
    const
*/

/*
    선언과 초기화 : 
    - const 키워드로 선언된 변수는 재할당 불가능
    - 선언과 동시에 반드시 초기화가 이루어져야함
*/
const ASSIGNMENT = 10;

// TypeError: Assignment to constant variable. == 재할당 X
// ASSIGNMENT = 20;

// SyntaxError: Missing initializer in const declaration == 상수에서 초기화 작업이 필요하다는 뜻
// const INITIAL;

/*
    상수와 객체 : 
    - 코드의 가독성 향상을 위해 많이 사용됨
    - 객체를 사용할때 변수에 할당 후 변경하지 못하도록하고 속성만 접근 가능하게 함
    - 일반적으로 object 타입들은 상수형 변수에 할당
*/
const king = {name: '이성계'};
// TypeError: Assignment to constant variable.
// king = {name: '이방과'};
// 속성에 접근해서 값을 바꿔주면 됨
king.name = '이방과';

console.log(king);
/*
    var, let, const
    - ES6 이상 버전에서는 var을 사용하지 않음
    - 재할당이 이뤄지는 변수에는 let을 사용
    - 대부분의 변수에서 const를 사용
*/