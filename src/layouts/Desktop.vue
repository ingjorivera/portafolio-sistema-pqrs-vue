<script setup>
    import "../css/main.css"
    import router from "../router/routes"

    router.push('inicio')
</script>
<template>
    <q-layout class="centrar">
    <div class="contenedor">
        <div class="cabecera">
            <p class="titulo-pqr">PETICIONES, QUEJAS, RECLAMOS, SUGERENCIAS Y FELICITACIONES</p>
            
            <div class="logo">
                <img src="../img/logo.svg" alt="">
            </div>
        </div>
        <div class="contenido">
        <q-page-container>
            <router-view></router-view>
        </q-page-container>
        </div>
    </div>
</q-layout>
</template>