'strict'

//Switch

var edad = 26;
var imprime = "";

switch(edad){
	case 18: 
		imprime = "Acabas de cumplir la mayoria de edad";
		break;

	case 25:
		imprime = "Ya eres un adulto";
		break;

	case 40:
		imprime = "Crisis de los 40";
		break;	

	case 70:
		imprime = "Eres un anciano";
		break;

	default:
		imprime = "Edad indeterminada";
		break;
	}

	console.log(imprime);