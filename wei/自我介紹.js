function nine(){
	for(let i=1;i<=9;i++){
		ans="";
		if(i%2==0){
			for(let j=9;j>=1;j--){
				ans+=(`${i}*${j}=${i*j} `)
			}
		}
		else{
			for(let j=1;j<=9;j++){
				ans+=(`${i}*${j}=${i*j} `)
				
			}
		}
		console.log(ans)
		console.log(`\n`)
	
	}
}