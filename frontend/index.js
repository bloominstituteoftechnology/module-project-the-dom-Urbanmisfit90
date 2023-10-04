function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section>div')
  widgets.forEach((widget, idx) => {
    widget.classList.add('widget')
    widget.setAttribute('tabindex', idx + 1 + "")
  })
  

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  // need to select a quote from the array
  const randomIdx = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIdx] // eslist-disable-line
  // flesh out quote
  const quote = document.createElement('div')
  const quoteText = randomQuote.quote
  quote.textContent = quoteText
  const widget1 = document.querySelector('.quoteoftheday')
  widget1.appendChild(quote)
  // flesh out author & date
  const authorDate = document.createElement('div')
  const { author, date} = randomQuote
  authorDate.textContent = `${author} in ${date || "an unknown date"}`
  widget1.appendChild(authorDate)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
 //We need to <!-- random verb --> our <!-- random noun --> <!-- random adverb -->
  //in order to <!-- random verb --> our <!-- random noun --> <!-- random adverb -->.
  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)]
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)]
  const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)]
  const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)]
  const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)]
  const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)]
  
  const mumboJumbo = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomAdverb2} our ${randomNoun2} ${randomAdverb2}.`
  const paragraph = document.createElement('p')
  paragraph.textContent = mumboJumbo
  document.querySelector('.corporatespeak').appendChild(paragraph)

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdownWidget = document.querySelector('.countdown')
  let count = 5
  const countdown = document.createElement('p')
  countdown.textContent = `T-minus ${count}`
  countdownWidget.appendChild(countdown)

  const id = setInterval(() => {
    if (count === 1) {
      countdown.textContent = "Liftoff! 🚀"
      clearInterval(id)
    } else {
    countdown.textContent = `T-minus ${--count}...`
    }
  }, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
    // <p>Michael Chen was born in 1995 and is friends with Carlos Garcia, Mohammed Ali and Jason Wong.</p>
    const personIndex = Math.floor(Math.random() * people.length);
    console.log(people);
    console.log(personIndex);
    const person = people[personIndex];
    const p2 = document.createElement('p');
    let friends = '';
    for (let friend of person.friends) {
      const friendObj = people.find(person => person.id === friend);
      friends += `${friendObj.fname} ${friendObj.lname},`;
    }
    p2.textContent = `${person.fname} ${person.lname} was born in ${person.dateOfBirth} and is friends with ${friends}.`;
    const section3 = document.querySelector('.friends');
    section3.append(p2);

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
