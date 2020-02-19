
let quotes= [

	{
		"quote":"If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
		"author":"Stephen King"
			
	},
	
	{
		"quote":"We write to taste life twice, in the moment and in retrospect.",
		"author":"Anaïs Nin"
			
	},
	{
		"quote":Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
		"author": "Mark Twain"
			
	},
	{
		"quote":"If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
		"author":"Toni Morrison"
			
	},
	{
		"quote":"One day I will find the right words, and they will be simple.",
		"author":"ack Kerouac"
			
	},
	{
		"quote":"Either write something worth reading or do something worth writing.",
		"author":"Benjamin Franklin"
			
	},
	{
		"quote":"You never have to change anything you got up in the middle of the night to write.",
		"author":"Saul Bellow"
			
	},
	
	]
	
	
	const btn= document.getElementById("btn");
	const quote= document.getElementById("quote");
	const author= document.getElementById("author");
	
	
	btn.addEventListener('click',getQuote);
	
	
	function getQuote(){
		
		let number=Math.floor(Math.random()* quotes.length);
		
		quote.innerHTML='<span>"</span>'+ quotes[number].quote+'<span>"</span>';
		author.innerHTML='<span>--</span>'+ quotes[number].author;
	}
	






]