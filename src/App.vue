<script setup>
 import router from "./router/routes"


 import { deviceType,isAndroid } from 'mobile-device-detect';
    if(deviceType=='mobile'){
      let w=window.innerWidth
      if(w<768){
            router.push('/Mobile')
      }
      else{
            router.push('/Desktop')
      }
      
    }
    else{
      router.push('/Desktop')
    }
</script>

<template>
  
      <router-view></router-view>
   
</template>



