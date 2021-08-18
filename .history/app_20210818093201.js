const myApp = {
    data(){
        return{
            name: 'Fábio',
            lastName: 'Gonçalves',
            products:[
                {
                    title:"Filme de ação",
                    description:"Filmes para você assistir com sua familia",
                    image:"./assets/image/avenger.jpg",
                    stars:3,
                },
                {
                    title:"Filme de ação",
                    description:"Filmes para você assistir com sua familia",
                    image:"./assets/image/infiltrado.jpg",
                    stars:0,
                },
            ],
            cart:[],
           
        }
    },
    methods:{
        addProductInCartClassFahther(product){
            this.cart.push(product)
        }
    }
}

const app = Vue.createApp(myApp)

