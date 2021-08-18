const app = {
    data(){
        return{
            name: 'Fábio',
            lastName: 'Gonçalves',
        }
    }
}

Vue.createApp(app).mount("#app")