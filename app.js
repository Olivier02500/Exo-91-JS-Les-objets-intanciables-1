const Personne = function (Nom , Prenom, Age , Sexe , ) {
    this.Nom = Nom ;
    this.Prenom = Prenom ;
    this.Age = Age ;
    this.Sexe = Sexe ;



//first method
    this.getIronMan = function () {
        return this.Nom + " " + this.Prenom + " " + this.Age + " "
            + this.Sexe + " ";
    }

//second merhod
    this.getTony = function (Newnom , newPrenom) {
        this.Nom = Newnom ;
        this.Prenom = newPrenom ;
    }

}

let robert = new Personne('Robert' , 'Downey JR.' , '56' , 'homme' );
document.getElementById('propriete1').innerHTML = robert.nom;
document.getElementById('propriete2').innerHTML = robert.Prenom;
document.getElementById('propriete3').innerHTML = robert.Age;
document.getElementById('propriete4').innerHTML = robert.Sexe;
document.getElementById('method1').innerHTML = robert.getIronMan();
robert.getTony('tony' , 'stark');
document.getElementById('method2').innerHTML = robert.getIronMan();

let jean = new Personne(' Jean' , 'dujardin' ,'49' , 'homme');
document.getElementById('propriete5').innerHTML = jean.nom;
document.getElementById('propriete6').innerHTML = jean.Prenom;
document.getElementById('propriete7').innerHTML = jean.Age;
document.getElementById('propriete8').innerHTML = jean.Sexe;
document.getElementById('method3').innerHTML = jean.getIronMan();
robert.getTony(' oss ' , '117');
document.getElementById('method4').innerHTML = jean.getIronMan();

