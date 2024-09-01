const vm = Vue.createApp({
   data() {
    return {
        correcto: false,
        nombre: "",
        clave:"",
        claveCorrecta: "31890777",
        styles: {
            background: "#f00"
        }
    }

   },

   watch: {
    correcto(label) {
        if (label) {
            this.styles.background = "green";
        } else {
            this.styles.background = "red";
        }
    }
   },

   methods: {
        verificar() {
            if (this.clave === this.claveCorrecta) {
                this.correcto = true;
            } else {
                this.correcto = false;
            }
        },
   },

   template: `

   <div>
   <i class="bi bi-cpu-fill"></i>
   </div>
   

    <div class="correcto" v-if="correcto">
    <p :style="styles">Datos Correctos</p>
    <h2>Hola, {{ nombre }}</h2>
    <button @click="correcto = !correcto"> {{ correcto ? "Salir" : "Enviar" }}</button>
    </div>

    <div v-else>
    <article>
   <div><i class="bi bi-person-fill"></i> <input type="text" placeholder="Nombre" v-model="nombre"></div>
   <div><i class="bi bi-lock-fill"></i><input type="password" placeholder="Clave" v-model="clave"></div>

        <button @click="verificar">Enviar</button>
    </article>
    <p :style="styles">Datos Inorrectos</p>
    </div>

   `
  }).mount("#app");