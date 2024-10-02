import './index.css';

for(let i=1;i<=9;i++){
  let SumResult = ''; 
  for(let j=1;j<=i;j++){

    // SumResult = j + " × " + i + " = " + (i * j);
    SumResult+=`${i} * ${j} = ${i * j}; `//appends the string 
  }
  console.log( "九九乘法表: "+SumResult);

}
