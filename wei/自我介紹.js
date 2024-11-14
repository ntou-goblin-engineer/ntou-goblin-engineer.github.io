function nine(){
	for(let i=1;i<=9;i++){
		if(i%2==0){
			for(let j=9;j>=1;j--){
				console.log(`${i}*${j}=${i*j}`)
				console.log(`\n`)
			}
		}
		else{
			for(let j=1;j<=9;j++){
				console.log(`${i}*${j}=${i*j}`)
				console.log(`\n`)

			}
		}
	
	}
	
}