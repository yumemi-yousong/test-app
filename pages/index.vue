<template>
  <div class="title">
      <h1>LETS BUILD PROJECT ON MY OWN</h1>
        <div>
          <h1>LOGIN FORM</h1>
          <p>please login with your account</p>
          <div class="login_box">
              <P><img src="../assets/image/mario.png" class="imgBox"> <input type="text" class="idBox" placeholder="ID"></P>
              <P><img src="../assets/image/mushroom.png" class="imgBox"> <input type="text" class="pwBox" placeholder="Password"></P>
              <v-btn color="red" @click="signIn">login</v-btn>
          </div>
          
        </div>
  </div>
</template>

<script>
import firebase from '~/utilities/firebase';

export default {
  components: {
  
  }, 
  methods: {
    signIn(){
     const authProvider = new firebase.auth.GoogleAuthProvider();
     
     firebase.auth().signInWithPopup(authProvider).then((result) => {
        //result 전에 function을 적으면 안된다. 
        console.log(result);//어떠한 정보를 갖고 오는지 확인해보자 
          this.$router.push('/mypage'); //mypage로 경로를 변경해주는 
          //this.$toasted.success('hoges'); 이게 왜 안되는지 확인이 필요한데...
          this.$store.dispatch('setAuth', {uid: result.user.uid, userName: result.user.displayName});

          localStorage.auth = JSON.stringify({uid: result.user.uid, userName: result.user.displayName});
          console.log(result);

      });
     

    }
  }
}
</script>
<style scoped>
h1{
  text-align: center;
}
.login_box{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .imgBox{
    width: 10%;
    height: 10%;
  }
  p{
    text-align: center;
  }
  
</style>

