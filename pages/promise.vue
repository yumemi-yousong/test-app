<template>
    <div>
      <h2>Promise</h2>
    </div>

</template>
<script>
export default {
 
 
}
function test(){
  foo(1,2000)
  .then( () => {
    return foo(2,500)
  })
  .then( () => {
    return foo(3,1000)
  })
}

function foo(num, sec){
  return new Promise(function(resolve, reject){
    setTimeout( function(){
      console.log(num);
      resolve("async는 Promise방식을 사용합니다.");
    }, sec);
  });
}
test();
</script>
