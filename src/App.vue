<template>
  <div class="encabezado">
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Mostrar Menu</h1>
  <button @click="algo">click</button>
  </div>

  <div class="inicio">
    <div v-for="(categoria, id_categoria) in Informacion" :key="id_categoria" :index="id_categoria">
      <h1>{{categoria.nombre_categoria}}</h1>
         <div v-for="(subcategoria, id_subcategoria) in categoria.subcategorias" :key="id_subcategoria" :index="id_subcategoria">
        <h2>{{subcategoria.nombre_subcategoria}}</h2> 
          <div v-for="(articulo, id_articulo) in subcategoria.articulos" :key="id_articulo" :index="id_articulo">
            <h4 class="articulo">{{articulo.nombre_articulo}}</h4> 
         </div>
        </div>
    </div>
 
  </div>
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

<style scoped>

.inicio{
  width: 4400px;
  background-image: url('@/assets/Fondo.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 0 px;
}
.inicio h1{
    font-family: 'Alfa Slab One', cursive;
  }
.inicio h2{
  font-family: 'Zen Dots', cursive;
}
.inicio h4{
  font-family: 'Space Grotesk', sans-serif;
}

.encabezado{
  margin: auto;
}

.encabezado img{ 
  margin: 0 auto;
  display: block;
}

.encabezado h1{
  text-align: center;
}
.encabezado button{
 margin: 0 auto;
  display: block;
}

body{
  background-color: blue;
}

</style>
