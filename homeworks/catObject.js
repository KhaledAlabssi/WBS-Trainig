const cat = {
    
    tiredness : 3,
    hunger : 6,
    loneliness : 2,
    happiness : 7,

    sleep () {
        this.tiredness --
        this.hunger ++
        this.loneliness ++

    },

    play () {
        this.tiredness ++
        this.happiness ++
        this.loneliness --

    },

    feed () {
       
        
        this.hunger -= 1
        console.log(this.hunger)
        

    },

    pet () {
        this.loneliness --
        this.happiness ++
    },

    wasup () {
        let result = ''
        if (this.tiredness < 3) {
            result += `Cat is super tired (${this.tiredness}) \n`
        } else if (this.tiredness < 7) {
            result += `Cat is normal tired (${this.tiredness}) \n`

        } else {
            result += `Cat is not tired (${this.tiredness})`, '\n'
        }

        if (this.hunger < 3) {
            result += `Cat is not hungry (${this.hunger})`, '\n'

        } else if (this.hunger < 7) {
            result += `Cat is normal hunger (${this.hunger})`, '\n'

        } else {
            result += `Cat is super hungry (${this.hunger})`, '\n'
        }

        if (this.happiness < 3) {
            result += `Cat is not happy at all (${this.happiness})`, '\n'

        } else if (this.happiness < 7) {
            result += `Cat is normal happy (${this.happiness})`, '\n'

        } else {
            result += `Cat is super happy (${this.happiness})`, '\n'
        }

        console.log(result)

    }

    


}


cat.feed()

console.log(cat.hunger)
cat.wasup()
