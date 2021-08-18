const app = {
    data(){
        return{
            name: 'Fábio',
            lastName: 'Gonçalves',
            product:{
                title:"Filme de ação",
                description:"Filmes para você assistir com sua familia",
                image:"./assets/image/avenger.jpg",
            }
        }
    }
}

Vue.createApp(app).mount("#app")