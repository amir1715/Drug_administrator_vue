var drugs={
drugObj:{
    "drugs":[
    {"drugName":"Acetaminophen", "dosePerkg":12.5,"message":"every 6 hours"},
    {"drugName":"Amoxicillin (1 month-18 yrs)", "dosePerkg":30,"message":"every 8 hours"},
    {"drugName":"Co-Amoxiclav", "dosePerkg":30,"message":"every 8 hours"},
    {"drugName":"Azithromycin (<15 Kg)", "dosePerkg":10,"message":"Once daily for 3 days"},
    {"drugName":"Cefalexin (1 month-18 yrs)", "dosePerkg":19,"message":"every 6 hours"},
    {"drugName":"Ciprofloxacin (1 month-18 yrs)", "dosePerkg":15,"message":"every 12 hours"},
    {"drugName":"Erythromycin (1 month-18 yrs)", "dosePerkg":19,"message":"every 6 hours"},
    {"drugName":"Metronidazole (1 month-18 yrs)", "dosePerkg":7.5,"message":"every 8 hours"},
    {"drugName":"Nitrofurantoin (3 month-18 yrs) ", "dosePerkg":1,"message":"every 6 hours"},	
    {"drugName":"Metocloperamide ", "dosePerkg":.1,"message":"every 8 hours"},			
    {"drugName":"Vancomycin (1-18 yrs)", "dosePerkg":15,"message":"every 8 hours"}
    ]
    },  
drug2dose(drug,weight){
        var index = -1;
        this.drugObj.drugs.find((value,i)=> {
        if (value["drugName"] == drug){
        index=i}});
        var msg=this.drugObj.drugs[index]["message"];
        var fdose=this.drugObj.drugs[index]["dosePerkg"]* parseFloat(weight);
        var result=`Administer ${fdose} mg of ${drug} ${msg}`;
        return(result)
}
}

export default drugs