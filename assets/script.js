// Select dice button
const diceBtn = document.querySelector(".diceBtn");
// addEventListener on dice button
diceBtn.addEventListener("click", () => {
    // Select advice & title
    const advice = document.querySelector(".advice");
    const title = document.querySelector(".title");

    // Advice slip api link
    const apiUrl = "https://api.adviceslip.com/advice";
    
    // fetch data and showing on html
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        const adviceText = data.slip.advice; 
        const adviceId = data.slip.id;
        advice.innerHTML = `🙶 ${adviceText} 🙷`;
        title.innerHTML = `Advice #${adviceId}`
    })
});