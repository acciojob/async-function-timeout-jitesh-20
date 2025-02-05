
document.getElementById("btn").addEventListener('click',()=>{
	displayData();
})

async function displayData(){
	const value=document.getElementById("text").value;
	const delayVal=parseInt(document.getElementById("delay").value);
	const delay=delayVal*1000;
	let out=document.getElementById("output");
	await new Promise(resolve => setTimeout(resolve, delay));
	out.textContent=`${value} - ${delayVal}`;
}