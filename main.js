// vue-todolist
// Istruzioni:
// Create una todo list usando VueJS. Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS. Se non sapere che fare, di seguito trovate uno screenshot.
// Funzionalitá:
// La nostra todo list avrá alcune tasks di default predefinite
// L'utente puó inserire nuove tasks
// Cliccando sulla "X" l'utente puó cancellare una task
// Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"


// Inoltre L'utente vuole poter modificare una task giá inserita
// ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile) 
// COMPLETATO

// Quando l'utente inserisce una task ha due modi per salvarla: 
// o preme il pulsante add o preme il taso Enter della tastiera. 
// COMPLETATO 

// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.

// Bonus (opzionale)
// Quando una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"
// ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
// se una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"
// se una task é stata marcata come completa per sbaglio allora vuole poterla rimettere nella todo list (cliccando su un altra icona)
// ah non é finita, dice che quando cancella una task non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
// si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"
// Il nostro utente per ora sembra non avere altre richieste ... ma chissá se dopo gli viene in mente che vuole anche poter rimettere una task cancellata nella lista di tasks da fare, magari l'ha cancellata per sbaglio.


const app = new Vue ({
    el: "#app",
    data: {
        logo: "./assets/img/logo.png",
        newTask: "", 
        tasks: [
            "ciao",
            "vai",
            "bo",
        ],
        tasksComplete: [
            

        ],

        key: "",
    },

    methods: {
        addTask(){
            // push new task in tasks
            this.tasks.push(this.newTask)
            this.newTask = ""
        },

        removeTask(index){
            // remove task
            console.log("remove task n." + index);
            // usare splice()
            this.tasks.splice(index, 1)

        },


        taskComplete(task){
            console.log(task);
            console.log(this.tasksComplete.push(task))
            console.log(this.tasksComplete);
        },

        

    },

    mounted() {
        document.addEventListener("keyup", (e) => {
            console.log(e.key);
            if(e.key === "Enter"){
                this.addTask()
            }
        
        });

        // document.addEventListener("text", (e) => {
        //     console.log(e.text);
        //     if(e.text === ""){
        //         alert("non valido");
        //     }

        // });
    }


});


