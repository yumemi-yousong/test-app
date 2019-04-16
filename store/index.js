import Vuex from 'vuex'
import firebase from '~/utilities/firebase'

const createStore = () => {
    return new Vuex.Store({
        strict: process.env.NODE_ENV !== 'production',//콜스가 아니라 정확하게 dispatch-> actions-> mutations 순서대로 제대로 진행되고 있는지 엄밀하게 체크해주는거
        state: () => ({//넘겨줄 데이터 부분 
            auth: {},
            wholeList: [
                {
                    listCategory: 'undefined',
                    cardlist: [
                        {text: 'list1'},
                        {text: 'list2'}
                    ]
                },
            ]
        }),
        mutations: { //The only way to actually change state in a Vuex store is by committing a mutation
            setAuth(state, payload){
                state.auth = {
                    uid: payload.uid,
                    userName: payload.userName
                }
            },
            updateTodoList(state, payload){
                state.todoList = payload;
             }
        },
        actions: {
            setAuth(store, payload){
                store.commit('setAuth',payload);
            },
            async updateTodoList(store, payload){
                console.log(payload);
                store.commit('updateTodoList', payload);
                await firebase.app().functions('asia-northeast1').httpsCallable('setData')(payload);
             }
        }
    })
}
export default createStore;