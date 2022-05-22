<template>
<div>
   <p> Drug Name:
      <select v-model="drgName" @change="onChange($event)">
      <option  
          v-for="singleDrug in allDrugs"
          v-bind:key="singleDrug"
          :value="singleDrug.drugName"
          >
          {{ singleDrug.drugName }}
      </option>
  </select>
  </p>
    <p> Weight:
            <input  v-model="weight">
    </p>

<p>{{finalMess}}</p>
</div>
</template>

<script>
import  drugs from '@/drugObj.js'

export default {
  data :()=>({ 
      drgName:'Acetaminophen',
      mess: drugs.drug2dose('Acetaminophen',23),
      weight:23,
      allDrugs: drugs.drugObj.drugs,
    
  }),
  computed:{
    finalMess(){
      return drugs.drug2dose(this.drgName,this.weight)
    }
  },

  methods:{
      onChange(event) {
      console.log(event.target);
    },
  },

}
</script>

<style>

</style>