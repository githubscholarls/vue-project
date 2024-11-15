
const state = {
    storename:'teststore',
    wshilist:null,
    testcount:1

}

const getters = {
    testcountgetter(state){
        return state.testcount;
    }
}

const mutations = {
    increment(state){
        state.testcount++
    },
    resetwshilist(state){
        state.wshilist=''
    },
    setwshilist(state,data){
        console.log('teststore 中 setwshilist',data)
        state.wshilist = data
        console.log('teststore 中 wshilist',state.wshilist)
    }
}
const actions = {

}

export const teststore = {
    namespace:true,
    state,
    getters,
    mutations,
    actions
}