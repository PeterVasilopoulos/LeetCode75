const test = {a: 1, b: 2}

for(const [key, value] of Object.entries(test)) {
    console.log(`${key}${value}`)
}
