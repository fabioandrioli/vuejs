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
           
        }
    },
    methods:{
       
    }
}

const productDetail = {
    template: `
        <p>Sou um component que esta carregando as imagens</p>
        <img :src="product.image" :alt="product.description"/>
        <a href="#" v-on:click.prevent="addProductInCart(product)">Adicionar</a>
    `,
    props:['product'],
    data(){
        return{
            exemple:123,
            cart:[]
        }
    },
    methods:{
        addProductInCart(product){
            this.cart.push(product)
        }
    }
}

const app = Vue.createApp(myApp)

app.component('product-detail',productDetail)

app.mount("#app")