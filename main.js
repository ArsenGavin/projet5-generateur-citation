//tableaux du premier générateur
		var mot1 = ['Avec ','Considérant ','Où que nous mène ','Vu ']
 		var mot2 = ['la restriction ',"l'orientation ",'la crise ',"l'inertie "]
 		var mot3 = ["il convient d'",'il faut ',"on se doit d'",'induite ']
 		var mot4 = ['étudier ','examiner ','anticiper ','imaginer ']
 		var mot5 = ['toutes les ','chacune des ','la majorité des ',"l'ensemble des "]
 		var mot6 = ['solutions ','issues ','problématiques ','alternatives ']
 		var mot7 = ['imaginables ','possibles ',"s'offrant à nous ",'rapidement ']
 		var mot8 = ['à long terme.','pour longtemps.',"à l'avenir."]


//tableaux du deuxieme générateur
		var mot9 = ['Si vous voulez mon avis concernant ','Dans le but de pallier à ','Afin de circonvenir à ','Pour réagir face à ']
 		var mot10 = ['cette inflexion ',"l'inconstance ",'la complexité ',"la fragilité "]
 		var mot11 = ["que nous constatons ",'intrinsèque ',"de l'époque actuelle ",'de ces derniers temps ']
 		var mot12 = ["je vous demande d'","je n'exclus pas d'","je suggère fortement d'","nous sommes contraints d'"]
 		var mot13 = ['inventorier ','éssayer ','expérimenter ',"arrêter de stigmatiser "]
 		var mot14 = ['précisément les ','systématiquement les ','les principales ','la plus grande partie des ']
 		var mot15 = ['stratégies ','hypothèses ',"modalités ",'décisions ']
 		var mot16 = ['parceque nous le valons bien.',"parcequ'il est temps d'agir.","même si se n'est pas facile."]


$('document').ready(function() {

//action button générer
	$('#generer').click(function() {

//checkbox NBR
		var valeur = 1;
		if (document.getElementById('nbr-citation2').checked) {
 			valeur = document.getElementById('nbr-citation2').value;
		}
		if (document.getElementById('nbr-citation3').checked) {
 			valeur = document.getElementById('nbr-citation3').value;
		}
		if (document.getElementById('nbr-citation4').checked) {
 			valeur = document.getElementById('nbr-citation4').value;
		}
		if (document.getElementById('nbr-citation5').checked) {
 			valeur = document.getElementById('nbr-citation5').value;
		}

//clean paragraphe citation
		$('.citation-random1, .citation-random2, .citation-random3,.citation-random4').html("");

//boucle valeur=nombre de citations
		while (valeur != 0) {

//random tableau
 			var numRandom1 = Math.floor(Math.random()*mot1.length);
			var motRandom1 = mot1[numRandom1];

			var numRandom2 = Math.floor(Math.random()*mot2.length);
			var motRandom2 = mot2[numRandom2];

			var numRandom3 = Math.floor(Math.random()*mot3.length);
			var motRandom3 = mot3[numRandom3];
				
			var numRandom4 = Math.floor(Math.random()*mot4.length);
			var motRandom4 = mot4[numRandom4];
				
			var numRandom5 = Math.floor(Math.random()*mot5.length);
			var motRandom5 = mot5[numRandom5];
				
			var numRandom6 = Math.floor(Math.random()*mot6.length);
			var motRandom6 = mot6[numRandom6];
				
			var numRandom7 = Math.floor(Math.random()*mot7.length);
			var motRandom7 = mot7[numRandom7];
				
			var numRandom8 = Math.floor(Math.random()*mot8.length);
			var motRandom8 = mot8[numRandom8];

// ajout des mots random les un apres les autres dans une variable
			var citation = (motRandom1+motRandom2+motRandom3+
			motRandom4+motRandom5+motRandom6+motRandom7+motRandom8);

//affichage
			console.log(citation);

			if (valeur >= 2) {
				$('.citation-random1').html(citation);
			}
			if (valeur >= 3) {
				$('.citation-random2').html(citation);
			}
			if (valeur >= 4){
				$('.citation-random3').html(citation);
			}
			if (valeur >= 5) {
				$('.citation-random4').html(citation);
			}

			$('.citation-random').html(citation);

//décrémentation pour la boucle
			valeur--;
		};
	});

//action button générer 
	$('#generer2').click(function() {

//checkbox NBR
		var valeur = 1;
		if (document.getElementById('nbr-citation2').checked) {
 			valeur = document.getElementById('nbr-citation2').value;
		}
		if (document.getElementById('nbr-citation3').checked) {
 			valeur = document.getElementById('nbr-citation3').value;
		}
		if (document.getElementById('nbr-citation4').checked) {
 			valeur = document.getElementById('nbr-citation4').value;
		}
		if (document.getElementById('nbr-citation5').checked) {
 			valeur = document.getElementById('nbr-citation5').value;
		}

//clean paragraphe citation
		$('.citation-random6, .citation-random7, .citation-random8,.citation-random9').html("");

//boucle valeur=nombre de citations
		while (valeur != 0) {

			//random tableau
 			var numRandom1 = Math.floor(Math.random()*mot9.length);
			var motRandom9 = mot9[numRandom1];

			var numRandom2 = Math.floor(Math.random()*mot10.length);
			var motRandom10 = mot10[numRandom2];

			var numRandom3 = Math.floor(Math.random()*mot11.length);
			var motRandom11 = mot11[numRandom3];
				
			var numRandom4 = Math.floor(Math.random()*mot12.length);
			var motRandom12 = mot12[numRandom4];
				
			var numRandom5 = Math.floor(Math.random()*mot13.length);
			var motRandom13 = mot13[numRandom5];
				
			var numRandom6 = Math.floor(Math.random()*mot14.length);
			var motRandom14 = mot14[numRandom6];
				
			var numRandom7 = Math.floor(Math.random()*mot15.length);
			var motRandom15 = mot15[numRandom7];
				
			var numRandom8 = Math.floor(Math.random()*mot16.length);
			var motRandom16 = mot16[numRandom8];

// ajout des mots random les un apres les autres dans une variable
			var citation2 = (motRandom9+motRandom10+motRandom11+
			motRandom12+motRandom13+motRandom14+motRandom15+motRandom16);

//affichage
			console.log(citation2);

			if (valeur >= 2) {
				$('.citation-random6').html(citation2);
			}
			if (valeur >= 3) {
				$('.citation-random7').html(citation2);
			}
			if (valeur >= 4){
				$('.citation-random8').html(citation2);
			}
			if (valeur >= 5) {
				$('.citation-random9').html(citation2);
			}

			$('.citation-random5').html(citation2);

//décrémentation pour la boucle
			valeur--;
		};
	});
});