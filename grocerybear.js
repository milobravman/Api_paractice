fetch("https://grocerybear.com/getitems")
.then(res => res.json())
.then(res => console.log(res))