// You are given a small extract of a catalog:

// s = "<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>
// <prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>
// <prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>
// <prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>
// <prod><name>saw</name><prx>9</prx><qty>10</qty></prod>
// ...

// (prx stands for price, qty for quantity) and an article i.e "saw".

// The function catalog(s, "saw") returns the line(s) corresponding to the article with $ before the prices:
// "table saw > prx: $1099.99 qty: 5\nsaw > prx: $9 qty: 10\n..."
// If the article is not in the catalog return "Nothing".

// Notes
// There is a blank line between two lines of the catalog.
// The same article may appear more than once. If that happens return all the lines concerned by the article (in the same order as in the catalog).
// You can see examples in the "Sample tests".


function catalog(s, article) { // simple enough once i got the regex done, though getting the catalog array filled up was a pita
    const names = s.match(/(?<=name>).+(?=<\/name)/gm)
    const prices = s.match(/(?<=prx>).+(?=<\/prx)/gm)
    const quant = s.match(/(?<=qty>).+(?=<\/qty)/gm)
  
    let cat = new Array(names.length).fill('0')
    cat = cat.map((_,i)=>[names[i],prices[i],quant[i]])
  
    let res = ''
    cat.forEach(e => {
      if (e[0].includes(article)) {
        res += `${e[0]} > prx: $${e[1]} qty: ${e[2]}`
        res += '\r\n'
      }
    })
    
    return res.slice(0,-2) || 'Nothing'
  }


// alternatively...

function catalog(s, article) { // interesting method, just slowly replacing everything in the provided string
    let str = s.replace(/<prod><name>/gi, '/')
                .replace(/<\/name>/gi, '')
                .replace(/<\/qty><\/prod>/gi, '')
                .replace(/<prx>/gi, ' > prx: $')
                .replace(/<\/prx><qty>/gi, ' qty: ')
                .replace(/\n\n/gi, '')
    
    let item = str.split('/')
                  .filter(x => x.includes(article))
                  .join('\r\n')
  
    return (item === '') ? 'Nothing' : item
  }