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
            cart:[]
        }
    },
    methods:{
        addProductInCart(product){
            this.cart.push(product)
        }
    }
}

const productDetail = {
    template: `
        <p>Sou o detalhe do produto</p>
    `,
    data(){
        return{
            exemple:123,
        }
    }
}

const app = Vue.createApp(myApp)

app.component('product-detail')

app.mount("#app")