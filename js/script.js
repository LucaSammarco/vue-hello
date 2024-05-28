const { createApp } = Vue; 

createApp({
    data() {
        return {
            message: "Ciao Gatto",
            // car: "bla",
            
            immagine: "https://www.ilverdemondo.it/public/blog/thumbs/gatto-del-bengala-carattere-alimentazione-cure-it-000.jpg"


        }
    }
}).mount("#app")
