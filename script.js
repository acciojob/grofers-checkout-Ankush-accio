const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let price = document.querySelectorAll(".prices")
	let total = price.map((item)=>{
		total += item
	})
	let row = document.createElement("tr")
	row.innerText = total
	appendChild(row)
};

getSumBtn.addEventListener("click", getSum);

