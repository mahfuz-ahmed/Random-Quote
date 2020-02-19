     function currencyConverter(valNum){
	 
	     if(converter.taka.value <= 0)
		 window.alert("Enter Value Greater Than 0");
		 
		   else{
		   
		     document.getElementById("dollar").value=(valNum/84.96).toFixed(2);
			 document.getElementById("euro").value=(valNum/91.70).toFixed(2);
			 document.getElementById("gbp").value=(valNum/110.45).toFixed(2);
			 document.getElementById("riyal").value=(valNum/22.65).toFixed(2);
			 document.getElementById("yuan").value=(valNum/12.14).toFixed(2);
		   
		   }
		 
	 
	 }