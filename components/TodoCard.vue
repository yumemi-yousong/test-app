<template>
<div>
  <v-textarea solo class="listcard" v-model="card.text" @focus="setShowdeleteFlag(true)" @blur="setShowdeleteFlag(false)" @change="update"></v-textarea>
    <v-btn v-if="showdelteFlag" @click="remove" class="button"><v-icon>clear</v-icon></v-btn>
    <!-- v-show랑 비교해보기 !-->
</div>
  
</template>

<script>
export default {
    components: {

    },
    props: {
        card: {
            type: Object,
            default: () => {}
        },
        index:{
            type: Number
        }
    },
    data(){
        return {
            showdelteFlag: false,
            text: this.item
        };
    }, 
    methods: {
        setShowdeleteFlag(state){
            if(state){
                this.showdelteFlag = true;
            }else{
                setTimeout(() => {
                    this.showdelteFlag = false;
                },500);
            }
        },
        update(){
            this.$emit('update');
        },
        remove(){
            this.$emit('remove', this.index);
            this.update();
        }
    }
}
</script>
