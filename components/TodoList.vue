<template>
    <div class="wholeList">
        <v-sheet color="#80CBC4">
            <Draggable  :todoList="todoList" group="all">
                <v-text-field v-model="todoList.listCategory"></v-text-field>
                <TodoCard v-for="(el, index) in todoList.cardlist" :card="el" :key="index" :index="index" @remove="remove" @update="update"/>
            </Draggable>
            <v-btn fab small @click="addCard"><v-icon>alarm_add</v-icon></v-btn>
            <!-- v-show랑 비교해보기 !-->
        </v-sheet>
    </div>
</template>
<script>
import TodoCard from '~/components/TodoCard';
import Draggable from 'vuedraggable';
export default {
    components: {
        TodoCard
        ,Draggable
    },
    props: {
        index: {
            type: Number
        },
        todoList:{
           type: Object,
           default: () => {} 
        }
    }, methods: {
        addCard(){
            this.todoList.cardlist.push({text:''});
        },
        remove(index){
            console.log(index);
            this.todoList.cardlist.splice(index, 1);
        },
        update(){
            this.$emit('update');
        }
    }
}
</script>

<style>
    .wholeList {
        width: 270px;
        margin: 10px;
    }
</style>
