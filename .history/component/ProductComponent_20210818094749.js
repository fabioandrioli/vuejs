
const productDetail = {
    template: `
        <h2>Carrinho: {{cart.length}}</h2>
        <p>Sou um component que esta carregando as imagens</p>
        <img :src="product.image" :alt="product.description"/>
        <a href="#" v-on:click.prevent="addProductInCart(product)">Adicionar</a>
    `,
    //props:['product'],
    propos:{
        product:{
            type:Object,
            required:true,
        }
    },
    data(){
        return{
            exemple:123,
            cart:[]
        }
    },
    methods:{
        addProductInCart(product){
            this.cart.push(product)
            this.$emit('add-product-cart',product)
        }
    }
}

app.component('product-detail',productDetail)

