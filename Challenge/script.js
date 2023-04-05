const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leoAccess_id='47afb389-8014-4d0b-aff3-e40203d2107f'
const sarahAccess_id=' 6b279ae5-5657-4240-80e9-23f6b635f7a8'
const rands='R'

const leo = {
	Leoname : `${leoName}`,
	balance :`${rands} ${parseFloat ((-1 * leoBalance).toFixed(2))}`,
	access : `${(leoAccess_id)}`,
	age : 24,
	address: {
	number:parseFloat (leoNumber),
	street : (leoStreet),
	postal_code :parseFloat (leoPostal),
	}
}

const sarah= {
	Sname : `${(sarahName).trim()}  ${sarahSurname}`,
	age : 62,
	access : (sarahAccess_id),
	balance :`${rands} ${parseFloat ((-1 * sarahBalance).toFixed(2))}`,
	address : {
	number : parseFloat (sarahNumber),
	street : (sarahStreet),
	postal_code :parseFloat (sarahPostal)
	}
}	

console.log(leo)
console.log(sarah)