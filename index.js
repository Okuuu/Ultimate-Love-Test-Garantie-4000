var content = new Vue({
    el: '#content',
    data: {
        name1: '',
        name2: '',
        comparator: '',
        options: ['amour', 'amitié'],
        percentage: '',
    },
    methods: {
        compute() {
            const compatibilty = []

            const name1 = this.name1.toLowerCase().split('')
            const name2 = this.name2.toLowerCase().split('')

            const comparator = this.comparator.split('')

            comparator.map(letter => {
                let sum = 0

                if (name1.includes(letter)) {
                    sum++
                }

                if (name2.includes(letter)) {
                    sum++
                }

                compatibilty.push(sum)
            })
            this.computeLoop(compatibilty)
        },
        computeLoop(array) {
            if (array.length === 2) {
                this.percentage = array.join('')
                return
            }
            let newArray = []
            array.map((letter, i) => {
                let newNumber = letter + array[i + 1]
                isNaN(newNumber) ? null : newArray.push(newNumber)
            })

            this.computeLoop(newArray)
        }
    }
})