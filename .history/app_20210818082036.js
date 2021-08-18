const app = {
    data(){
        return{
            name: 'Fábio',
            lastName: 'Gonçalves',
            product:{
                title:"Filme de ação",
                description:"Filmes para você assistir com sua familia",
                image:"./assets/image/avenger.jpg",
                stars:3,
            },
            productTwo:{
                title:"Filme de ação",
                description:"Filmes para você assistir com sua familia",
                image:"./assets/image/infiltrado.jpg",
                stars:0,
            }
        }
    }
}

Vue.createApp(app).mount("#app")