// With this script we can easily convert from arabic to roman numbers in the range 1 to 3999

function convert2Roman(num) {
	if (num === 0)
    {
      return "ERROR! We cannot convert 0";
    }
 else if (num < 4000) // There is no universal way to write numbers >= 4000
 { 
  var digits = []; 
  for (i=1000; i>9; i/=10) // 3 iterations: for Thousands, Hundreds, Tens
    {
      myFloor = Math.floor(num/i);
      digits.push(myFloor);
      num = num - (myFloor*i);
    }
  digits.push(num); // Here we assign Units.
  
  // The first element (at position [0]) for each array is "", so we do not write any symbol if we do not need it after the conversion.
    rUnits = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]; 
    rTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    rHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    rThousands = ["", "M", "MM", "MMM"];
  
  var romanNumber = rThousands[digits[0]] + rHundreds[digits[1]] + rTens[digits[2]] + rUnits[digits[3]]; // Finally we can build the Roman number string
  
  
 return romanNumber;
    }
  else
    {
      return "ERROR! The number is too big!";
    }
}

convert2Roman(123); // Here we can invoke the function, passing as a parameter the number we want to convert.
