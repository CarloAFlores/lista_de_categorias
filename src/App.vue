<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Hola mundo</h1>
  <button @click="algo">xmklmwd</button>
  <ul>
    <li v-for="(categoria, id_categoria) in Informacion" :key="id_categoria" :index="id_categoria">
      <h1>{{categoria.nombre_categoria}}</h1>
         <div v-for="(subcategoria, id_subcategoria) in categoria.subcategorias" :key="id_subcategoria" :index="id_subcategoria">
        <h2>{{subcategoria.nombre_subcategoria}}</h2> 
          <div v-for="(articulo, id_articulo) in subcategoria.articulos" :key="id_articulo" :index="id_articulo">
            <h4>{{articulo.nombre_articulo}}</h4> 
         </div>
        </div>
    </li>
  </ul>



</template>



<script>
import axios from 'axios';

export default {
  name: "App",
  components: {

  },
  data(){
    return{
      Informacion:[]
      }
  },
  methods:{
    async algo(){
    const mainaxios = await axios.post('http://189.161.47.12:8089/api/menu',{id_marca:1, id_sucursal:1})
          .then((res)=>{
            this.Informacion = res.data.categorias
            console.log(this.Informacion)
          })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
