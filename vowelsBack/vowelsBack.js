// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

<<<<<<< HEAD
// Provided string will always be lower case, won't be empty and will have no special characters.


var AlphabetList = function() {
  var alphabets = {
  	a: 'a',
  	next: {
  		b: 'b',
  		next: {
  			c: 'c',
  			next: {
	  			d: 'd',
	  			next: {
		  			e: 'e',
		  			next: {
			  			f: 'f',
			  			next: {
				  			g: 'g',
				  			next: {
					  			h: 'h',
					  			next: {
						  			i: 'i',
						  			next: {
							  			j: 'j',
							  			next: {
								  			k: 'k',
								  			next: {
									  			l: 'l',
									  			next: {
										  			c: 'm',
										  			next: {
											  			c: 'n',
											  			next: {
												  			c: 'o',
												  			next: {
													  			c: 'p',
													  			next: {
														  			c: 'q',
														  			next: {
															  			c: 'r',
															  			next: {
																  			c: 's',
																  			next: {
																	  			c: 't',
																	  			next: {
																		  			c: 'u',
																		  			next: {
																			  			c: 'v',
																			  			next: {
																				  			c: 'w',
																				  			next: {
																					  			c: 'x',
																					  			next: {
																						  			c: 'y',
																						  			next: {
																							  			c: 'z',
																							  			next: alphabets.a															  				
																						  			}																					  				
																					  			}																				  				
																				  			}																			  				
																			  			}																		  				
																		  			}																	  				
																	  			}																  				
																  			}															  				
															  			}														  				
														  			}													  				
													  			}												  				
												  			}											  				
											  			}										  				
										  			}									  				
									  			}								  				
								  			}							  				
							  			}						  				
						  			}					  				
					  			}				  				
				  			}			  				
			  			}		  				
		  			}	  				
	  			}
  			}
  		}
  	}
  };
};


// the idea is i did an object as a sircular linked list has all the alphabets and what i need to do is putting all the rules inside objects inside an array,
//  every time i loop through the letters i check what is it, vowel or consonant.
=======
// Provided string will always be lower case, won't be empty and will have no special characters.
>>>>>>> 269a3ee75c6d59550b6ccccaefaa5cb33683dbdd
