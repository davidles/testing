const text = "Hola mundo"

const fruits = ['manzana', 'banana',  'pera']


test('Debe contener un text', () => {
    expect(text).toMatch(/mundo/)
})

test('Buscar dentro de un array la palabra', () => {
    expect(fruits).toContain('banana')
})

test('Mayor que...', () =>{
    expect(10).toBeGreaterThan(9)
})

test('verdadero?', () =>{
    expect(true).toBeTruthy()
})

// Callbacks
const reverseString = (str, callback) =>{
    callback(str.split("").reverse().join(""))
}

test('Probar callback', () =>{
    reverseString('Hola', (str) =>{
        expect(str).toBe('aloH')
    })
})

// Promises
const reverseString2 = str =>{
    return new Promise((resolve, reject) =>{
        if(!str){
            reject(Error("Error"))
        }else{
            resolve(str.split("").reverse().join(""))
        }
    })
}

test( 'Probar una Promise', () =>{
    return reverseString2('Hola')
            .then(string => {
                expect(string).toBe('aloH')
            })
})

test(' Probar asyn/await', async () =>{
    const string = await reverseString2("Hola")
    expect(string).toBe('aloH')
})

//Probar código que funcione antes de cada prueba
