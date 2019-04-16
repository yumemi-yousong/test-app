<template>
    <div>
        <v-btn @click="goToMethodDetails">Promise</v-btn>
        <h1 class="top-level">{{auth.userName}}のTo-Do-list</h1>
        <div class="todolistArray">
            <TodoList v-for="(el, index) in copiedWholeList" :todo-list="el" :key="index" :index="index" @update="updateTodoList"></TodoList>
        </div>
         <v-btn fab small @click="add"><v-icon>edit</v-icon></v-btn>
    </div>

</template>
<script>
import { mapState } from 'vuex';
import TodoList from '~/components/TodoList';
import Clonedeep from 'lodash.clonedeep';
import firebase from '~/utilities/firebase';

export default {
    computed: {
        ...mapState(['auth', 'wholeList'])
    },
    props:{
        copiedWholeList:{
            type:Array,
            default: () => []
        }
    },
    components: {
        TodoList
    },
    data() {
        return {
           copiedWholeList : []//이래야 에러가 안난다. 카라모노니까? 
        };
    },
    methods: {
        add(){
            console.log(this.copiedWholeList);
            this.copiedWholeList.push({  
                listCategory: '',
                cardlist: [
                
                ]
            });
        },
        updateTodoList(){
            this.$store.dispatch('updateTodoList', Clonedeep(this.wholeList));
        },
        goToMethodDetails(){
            this.$router.push('/promise');
        }
    },
    beforeMount(){
       this.copiedWholeList =  Clonedeep(this.wholeList);
    },
    props: {
        
    },
    async fetch({store}){
        const val = await firebase.app().functions('asia-northeast1').httpsCallable('getData')();
        if(val.data){
            store.dispatch('updateTodoList', val.data);
        } 
    }
}
</script>
<style scoped>
.todolistArray {
  display: flex;
}
</style>