/**
	Convertir un caractere unicode ALA en un caractere unicode ISO 9.<b>
	Les formes composees sont preferees pour les caracteres ISO.


	Version pour l'Arabe
*/
// mis e jour le 2018-05-31 par SRY : ajout zone 219

function convertirCaractereAlaVersIso (caract)
{
	switch (caract)
	{
		case "\u0044\u0068" : return "\u1E0E";
        //Dh        : D avec ligne souscrite
        case "\u0064\u0068" : return "\u1E0F";
        //dh        : d avec ligne souscrite
        case "\u0044\u0048" : return "\u1E0E";
        //DH        : D avec ligne souscrite
		//NB / Pas d'autre valeur (recomposee) de DH

		case "\u0047\u0068" : return "\u0120";
        //Gh        : G avec point suscrit
        case "\u0067\u0068" : return "\u0121";
        //gh        : g avec point suscrit
        case "\u0047\u0048" : return "\u0120";
        //GH        : G avec point suscrit

		case "\u004A" : return "\u01E6";
        //J        : G avec caron
        case "\u006A" : return "\u01E7";
        //j        : g avec caron

		case "\u004B\u0068" : return "\u0048\u0331";
        //Kh        : H avec macron souscrit
        case "\u006B\u0068" : return "\u1E96";
        //kh        : h avec ligne souscrite
        case "\u004B\u0048" : return "\u0048\u0331";
        //KH        : H avec macron souscrit

		case "\u0053\u0068" : return "\u0160";
        //Sh        : S avec caron
        case "\u0073\u0068" : return "\u0161";
        //sh        : s avec caron
        case "\u0053\u0048" : return "\u0160";
        //SH        : S avec caron

		case "\u0054\u0068" : return "\u1E6E";
        //Th        : T avec ligne souscrite
        case "\u0074\u0068" : return "\u1E6F";
        //th        : t avec ligne souscrite
        case "\u0054\u0048" : return "\u1E6E";
		//TH        : T avec ligne souscrite

		// ci-dessous, les combinaisons avec ponctuation et espace et saut de ligne choisi par nous (\u0001)

		case "\u0069\u00AF\u0079\u0061\u0068\u002C" : return "\u0069\u0079\u0079\u0061\u1E97\u002C"; // virgule
		case "\u0069\u00AF\u0079\u0061\u0068\u002E" : return "\u0069\u0079\u0079\u0061\u1E97\u002E"; // point
		case "\u0069\u00AF\u0079\u0061\u0068\u003B" : return "\u0069\u0079\u0079\u0061\u1E97\u003B"; // point virgule
		case "\u0069\u00AF\u0079\u0061\u0068\u003A" : return "\u0069\u0079\u0079\u0061\u1E97\u003A"; // deux points
		case "\u0069\u00AF\u0079\u0061\u0068\u0020" : return "\u0069\u0079\u0079\u0061\u1E97\u0020"; // espace
		case "\u0069\u00AF\u0079\u0061\u0068\u0001" : return "\u0069\u0079\u0079\u0061\u1E97"; // fin de ligne
		case "\u0069\u00AF\u0079\u0061\u0068\u0021" : return "\u0069\u0079\u0079\u0061\u1E97\u0021"; // point d'exclamation
		case "\u0069\u00AF\u0079\u0061\u0068\u003F" : return "\u0069\u0079\u0079\u0061\u1E97\u003F" ; // point d'interrogation
		case "\u0069\u00AF\u0079\u0061\u0068\u0022" : return "\u0069\u0079\u0079\u0061\u1E97\u0022"; // guillemet
		case "\u0069\u00AF\u0079\u0061\u0068\u0029" : return "\u0069\u0079\u0079\u0061\u1E97\u0029"; // parenthese fermante
		case "\u0069\u00AF\u0079\u0061\u0068\u005D" : return "\u0069\u0079\u0079\u0061\u1E97\u005D"; // crochet fermant
		case "\u0069\u00AF\u0079\u0061\u0068\u007D" : return "\u0069\u0079\u0079\u0061\u1E97\u007D"; // accolade fermante
		case "\u0069\u00AF\u0079\u0061\u0068\u0024" : return "\u0069\u0079\u0079\u0061\u1E97\u0024"; // dollar
        //i macron y a h                 :       i y y a t+trema

		case "\u0049\u00AF\u0059\u0041\u0048\u002C" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u002C";
		case "\u0049\u00AF\u0059\u0041\u0048\u002E" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u002E";
		case "\u0049\u00AF\u0059\u0041\u0048\u003B" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u003B";
		case "\u0049\u00AF\u0059\u0041\u0048\u003A" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u003A";
		case "\u0049\u00AF\u0059\u0041\u0048\u0020" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0020";
		case "\u0049\u00AF\u0059\u0041\u0048\u0001" : return "\u0049\u0059\u0059\u0041\u0054\u0308";
		case "\u0049\u00AF\u0059\u0041\u0048\u0021" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0021";
		case "\u0049\u00AF\u0059\u0041\u0048\u003F" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u003F";
		case "\u0049\u00AF\u0059\u0041\u0048\u0022" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0022";
		case "\u0049\u00AF\u0059\u0041\u0048\u0029" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0029";
		case "\u0049\u00AF\u0059\u0041\u0048\u005D" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u005D";
		case "\u0049\u00AF\u0059\u0041\u0048\u007D" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u007D";
		case "\u0049\u00AF\u0059\u0041\u0048\u0024" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0024";

        //I macron Y A H                 :       I Y Y A T trema

		case "\u012B\u0079\u0061\u0068\u002C"       : return "\u0069\u0079\u0079\u0061\u1E97\u002C";
		case "\u012B\u0079\u0061\u0068\u002E"       : return "\u0069\u0079\u0079\u0061\u1E97\u002E";
		case "\u012B\u0079\u0061\u0068\u003B"       : return "\u0069\u0079\u0079\u0061\u1E97\u003B";
		case "\u012B\u0079\u0061\u0068\u003A"       : return "\u0069\u0079\u0079\u0061\u1E97\u003A";
		case "\u012B\u0079\u0061\u0068\u0020"       : return "\u0069\u0079\u0079\u0061\u1E97\u0020";
		case "\u012B\u0079\u0061\u0068\u0001"       : return "\u0069\u0079\u0079\u0061\u1E97";
		case "\u012B\u0079\u0061\u0068\u0021"       : return "\u0069\u0079\u0079\u0061\u1E97\u0021";
		case "\u012B\u0079\u0061\u0068\u003F"       : return "\u0069\u0079\u0079\u0061\u1E97\u003F";
		case "\u012B\u0079\u0061\u0068\u0022"       : return "\u0069\u0079\u0079\u0061\u1E97\u0022";
		case "\u012B\u0079\u0061\u0068\u0029"       : return "\u0069\u0079\u0079\u0061\u1E97\u0029";
		case "\u012B\u0079\u0061\u0068\u005D"       : return "\u0069\u0079\u0079\u0061\u1E97\u005D";
		case "\u012B\u0079\u0061\u0068\u007D"       : return "\u0069\u0079\u0079\u0061\u1E97\u007D";
		case "\u012B\u0079\u0061\u0068\u0024"       : return "\u0069\u0079\u0079\u0061\u1E97\u0024";
        //i+macron y a h                 :       i y y a t+trema

		case "\u012A\u0059\u0041\u0048\u002C" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u002C";
		case "\u012A\u0059\u0041\u0048\u002E" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u002E";
		case "\u012A\u0059\u0041\u0048\u003B" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u003B";
		case "\u012A\u0059\u0041\u0048\u003A" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u003A";
		case "\u012A\u0059\u0041\u0048\u0020" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0020";
		case "\u012A\u0059\u0041\u0048\u0001" : return "\u0049\u0059\u0059\u0041\u0054\u0308";
		case "\u012A\u0059\u0041\u0048\u0021" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0021";
		case "\u012A\u0059\u0041\u0048\u003F" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u003F";
		case "\u012A\u0059\u0041\u0048\u0022" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0022";
		case "\u012A\u0059\u0041\u0048\u0029" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0029";
		case "\u012A\u0059\u0041\u0048\u005D" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u005D";
		case "\u012A\u0059\u0041\u0048\u007D" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u007D";
		case "\u012A\u0059\u0041\u0048\u0024" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0024";
        //I+macron Y A H                 :       I Y Y A T trema


		case "\u0069\u00AF\u0079\u0061\u0074\u002C" : return "\u0069\u0079\u0079\u0061\u1E97\u002C";
		case "\u0069\u00AF\u0079\u0061\u0074\u002E" : return "\u0069\u0079\u0079\u0061\u1E97\u002E";
		case "\u0069\u00AF\u0079\u0061\u0074\u003B" : return "\u0069\u0079\u0079\u0061\u1E97\u003B";
		case "\u0069\u00AF\u0079\u0061\u0074\u003A" : return "\u0069\u0079\u0079\u0061\u1E97\u003A";
		case "\u0069\u00AF\u0079\u0061\u0074\u0020" : return "\u0069\u0079\u0079\u0061\u1E97\u0020";
		case "\u0069\u00AF\u0079\u0061\u0074\u0001" : return "\u0069\u0079\u0079\u0061\u1E97";
		case "\u0069\u00AF\u0079\u0061\u0074\u0021" : return "\u0069\u0079\u0079\u0061\u1E97\u0021";
		case "\u0069\u00AF\u0079\u0061\u0074\u003F" : return "\u0069\u0079\u0079\u0061\u1E97\u003F";
		case "\u0069\u00AF\u0079\u0061\u0074\u0022" : return "\u0069\u0079\u0079\u0061\u1E97\u0022";
		case "\u0069\u00AF\u0079\u0061\u0074\u0029" : return "\u0069\u0079\u0079\u0061\u1E97\u0029";
		case "\u0069\u00AF\u0079\u0061\u0074\u005D" : return "\u0069\u0079\u0079\u0061\u1E97\u005D";
		case "\u0069\u00AF\u0079\u0061\u0074\u007D" : return "\u0069\u0079\u0079\u0061\u1E97\u007D";
		case "\u0069\u00AF\u0079\u0061\u0074\u0024" : return "\u0069\u0079\u0079\u0061\u1E97\u0024";
        //i macron y a t                 :       i y y a t+trema

		case "\u0049\u00AF\u0059\u0041\u0054\u002C" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u002C";
		case "\u0049\u00AF\u0059\u0041\u0054\u002E" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u002E";
		case "\u0049\u00AF\u0059\u0041\u0054\u003B" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u003B";
		case "\u0049\u00AF\u0059\u0041\u0054\u003A" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u003A";
		case "\u0049\u00AF\u0059\u0041\u0054\u0020" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0020";
		case "\u0049\u00AF\u0059\u0041\u0054\u0001" : return "\u0049\u0059\u0059\u0041\u0054\u0308";
		case "\u0049\u00AF\u0059\u0041\u0054\u0021" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0021";
		case "\u0049\u00AF\u0059\u0041\u0054\u003F" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u003F";
		case "\u0049\u00AF\u0059\u0041\u0054\u0022" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0022";
		case "\u0049\u00AF\u0059\u0041\u0054\u0029" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0029";
		case "\u0049\u00AF\u0059\u0041\u0054\u005D" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u005D";
		case "\u0049\u00AF\u0059\u0041\u0054\u007D" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u007D";
		case "\u0049\u00AF\u0059\u0041\u0054\u0024" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0024";
        //I macron Y A T                 :       I Y Y A T trema

		case "\u012B\u0079\u0061\u0074\u002C"       : return "\u0069\u0079\u0079\u0061\u1E97\u002C";
		case "\u012B\u0079\u0061\u0074\u002E"       : return "\u0069\u0079\u0079\u0061\u1E97\u002E";
		case "\u012B\u0079\u0061\u0074\u003B"       : return "\u0069\u0079\u0079\u0061\u1E97\u003B";
		case "\u012B\u0079\u0061\u0074\u003A"       : return "\u0069\u0079\u0079\u0061\u1E97\u003A";
		case "\u012B\u0079\u0061\u0074\u0020"       : return "\u0069\u0079\u0079\u0061\u1E97\u0020";
		case "\u012B\u0079\u0061\u0074\u0001"       : return "\u0069\u0079\u0079\u0061\u1E97";
		case "\u012B\u0079\u0061\u0074\u0021"       : return "\u0069\u0079\u0079\u0061\u1E97\u0021";
		case "\u012B\u0079\u0061\u0074\u003F"       : return "\u0069\u0079\u0079\u0061\u1E97\u003F";
		case "\u012B\u0079\u0061\u0074\u0022"       : return "\u0069\u0079\u0079\u0061\u1E97\u0022";
		case "\u012B\u0079\u0061\u0074\u0029"       : return "\u0069\u0079\u0079\u0061\u1E97\u0029";
		case "\u012B\u0079\u0061\u0074\u005D"       : return "\u0069\u0079\u0079\u0061\u1E97\u005D";
		case "\u012B\u0079\u0061\u0074\u007D"       : return "\u0069\u0079\u0079\u0061\u1E97\u007D";
		case "\u012B\u0079\u0061\u0074\u0024"       : return "\u0069\u0079\u0079\u0061\u1E97\u0024";
        //i+macron y a t                 :       i y y a t+trema

		case "\u012A\u0059\u0041\u0054\u002C" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u002C";
		case "\u012A\u0059\u0041\u0054\u002E" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u002E";
		case "\u012A\u0059\u0041\u0054\u003B" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u003B";
		case "\u012A\u0059\u0041\u0054\u003A" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u003A";
		case "\u012A\u0059\u0041\u0054\u0020" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0020";
		case "\u012A\u0059\u0041\u0054\u0001" : return "\u0049\u0059\u0059\u0041\u0054\u0308";
		case "\u012A\u0059\u0041\u0054\u0021" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0021";
		case "\u012A\u0059\u0041\u0054\u003F" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u003F";
		case "\u012A\u0059\u0041\u0054\u0022" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0022";
		case "\u012A\u0059\u0041\u0054\u0029" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0029";
		case "\u012A\u0059\u0041\u0054\u005D" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u005D";
		case "\u012A\u0059\u0041\u0054\u007D" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u007D";
		case "\u012A\u0059\u0041\u0054\u0024" : return "\u0049\u0059\u0059\u0041\u0054\u0308\u0024";
        //I+macron Y A T                 :       I Y Y A T trema


		case "\u0061\u0068\u002C" : return "\u0061\u1E97\u002C";
		case "\u0061\u0068\u002E" : return "\u0061\u1E97\u002E";
		case "\u0061\u0068\u003B" : return "\u0061\u1E97\u003B";
		case "\u0061\u0068\u003A" : return "\u0061\u1E97\u003A";
		case "\u0061\u0068\u0020" : return "\u0061\u1E97\u0020";
		case "\u0061\u0068\u0001" : return "\u0061\u1E97";
		case "\u0061\u0068\u0021" : return "\u0061\u1E97\u0021";
		case "\u0061\u0068\u003F" : return "\u0061\u1E97\u003F";
		case "\u0061\u0068\u0022" : return "\u0061\u1E97\u0022";
		case "\u0061\u0068\u0029" : return "\u0061\u1E97\u0029";
		case "\u0061\u0068\u005D" : return "\u0061\u1E97\u005D";
		case "\u0061\u0068\u007D" : return "\u0061\u1E97\u007D";
		case "\u0061\u0068\u0024" : return "\u0061\u1E97\u0024";
        //a h         :             a t+trema

        case "\u0041\u0048\u002C" : return "\u0061\u0054\u0308\u002C";
		case "\u0041\u0048\u002E" : return "\u0061\u0054\u0308\u002E";
		case "\u0041\u0048\u003B" : return "\u0061\u0054\u0308\u003B";
		case "\u0041\u0048\u003A" : return "\u0061\u0054\u0308\u003A";
		case "\u0041\u0048\u0020" : return "\u0061\u0054\u0308\u0020";
		case "\u0041\u0048\u0001" : return "\u0061\u0054\u0308";
		case "\u0041\u0048\u0021" : return "\u0061\u0054\u0308\u0021";
		case "\u0041\u0048\u003F" : return "\u0061\u0054\u0308\u003F";
		case "\u0041\u0048\u0022" : return "\u0061\u0054\u0308\u0022";
		case "\u0041\u0048\u0029" : return "\u0061\u0054\u0308\u0029";
		case "\u0041\u0048\u005D" : return "\u0061\u0054\u0308\u005D";
		case "\u0041\u0048\u007D" : return "\u0061\u0054\u0308\u007D";
		case "\u0041\u0048\u0024" : return "\u0061\u0054\u0308\u0024";
        //A H         :             A T trema


		case "\u0061\u0074\u002C" : return "\u0061\u1E97\u002C";
		case "\u0061\u0074\u002E" : return "\u0061\u1E97\u002E";
		case "\u0061\u0074\u003B" : return "\u0061\u1E97\u003B";
		case "\u0061\u0074\u003A" : return "\u0061\u1E97\u003A";
		case "\u0061\u0074\u0020" : return "\u0061\u1E97\u0020";
		case "\u0061\u0074\u0001" : return "\u0061\u1E97";
		case "\u0061\u0074\u0021" : return "\u0061\u1E97\u0021";
		case "\u0061\u0074\u003F" : return "\u0061\u1E97\u003F";
		case "\u0061\u0074\u0022" : return "\u0061\u1E97\u0022";
		case "\u0061\u0074\u0029" : return "\u0061\u1E97\u0029";
		case "\u0061\u0074\u005D" : return "\u0061\u1E97\u005D";
		case "\u0061\u0074\u007D" : return "\u0061\u1E97\u007D";
		case "\u0061\u0074\u0024" : return "\u0061\u1E97\u0024";
        //a t         :             a t+trema

        case "\u0041\u0054\u002C" : return "\u0061\u0054\u0308\u002C";
		case "\u0041\u0054\u002E" : return "\u0061\u0054\u0308\u002E";
		case "\u0041\u0054\u003B" : return "\u0061\u0054\u0308\u003B";
		case "\u0041\u0054\u003A" : return "\u0061\u0054\u0308\u003A";
		case "\u0041\u0054\u0020" : return "\u0061\u0054\u0308\u0020";
		case "\u0041\u0054\u0001" : return "\u0061\u0054\u0308";
		case "\u0041\u0054\u0021" : return "\u0061\u0054\u0308\u0021";
		case "\u0041\u0054\u003F" : return "\u0061\u0054\u0308\u003F";
		case "\u0041\u0054\u0022" : return "\u0061\u0054\u0308\u0022";
		case "\u0041\u0054\u0029" : return "\u0061\u0054\u0308\u0029";
		case "\u0041\u0054\u005D" : return "\u0061\u0054\u0308\u005D";
		case "\u0041\u0054\u007D" : return "\u0061\u0054\u0308\u007D";
		case "\u0041\u0054\u0024" : return "\u0061\u0054\u0308\u0024";
        //A T         :             A T trema

		case "\u0001" : return "";
		// supprime le caractere qui sert e reperer la fin de ligne (utilise pour les cas ci-dessus).
		default : return "\u0000";
	}
}
/**
	Renvoie les zones e traiter definies par defaut.
*/
function renvoieZonesATraiterParDefaut ()
{
	var zones = new Array;
	var cz = "200,205,206,207,208,210,214,219,225,327,410,411,412,413";
	cz = cz + ",421,422,423,430,434,435,436,437,440,441,444,445,446";
	cz = cz + ",447,451,452,453,454,455,456,461,463,464,470,481,482,488";
	cz = cz + ",500,501,503,510,512,513,514,515,516,517,518,520,532";
	cz = cz + ",540,541,545,600,601,602,604,605,700,701,702,710";
	cz = cz + ",711,712,716,720,721,722";
	zones = cz.split(",");
	return zones;

}

/**
	Renvoie les zones e traiter choisies par l'utilisateur
*/
function renvoieZonesATraiterChoisies (chaineZones)
{
	var zones = new Array;
	zones = chaineZones.split(",");
	return zones;
}

/**
	Renvoie les zones e traiter
*/
function renvoieZonesATraiter ()
{
	if (document.getElementById("radToutesZones").getAttribute("selected") == "true")
	{
		return renvoieZonesATraiterParDefaut ();
	}
	else if (document.getElementById("radZonesChoisies").getAttribute("selected") == "true")
	{
		return renvoieZonesATraiterChoisies (document.getElementById("txtZones").value);
	}
	else
	{
		return new Array;
	}
}
/**
	Convertir la chaene passee en parametre de l'unicode ALA vers les
	caracteres de l'unicode ISO 9.
*/
function convertirChaineAlaVersIso (chaine)
{

	// tests avec substr
	// tant que chaine.length >0, envoyer toute la chaine , puis toute la chaene -1, puis -2
	// lorsque le res est diff. de rien (a preciser), inserer le caract dans la nouvelle chaine
	// et decaler i d'autant de pos que la longueur du caract (= de la chaine).
	// si chaine.length =0 et res = rien, alors le caract reste le meme.
	// caractPrec permet de ne pas convertir si le caractere precedant celui en cours
	// est un $ (pour exclure la transformation du $c).

	chaineRes = "";
	res = "\u0000";
	caractPrec = "\u0000";
	posFin = chaine.length;
	pos = 0;

	while (pos < chaine.length) // traite toute la chaine
	{
		posFin = chaine.length;

		while (posFin > pos && res == "\u0000")
		{
			res = convertirCaractereAlaVersIso (chaine.substring(pos, posFin));
			if (res == "\u0000")
			{
				posFin --;
			}
		}
		if (res == "\u0000" || caractPrec == "\u0024")
		{
			res = chaine.substring(pos, pos+1);
			pos+=1;
		}
		else
		{
			pos += posFin - pos;
		}
		chaineRes += res;
		caractPrec = res;
		res = "\u0000";
	}
	return chaineRes;
}
/**
	Verifie si la zone passee en parametre doit etre convertie.
	Permet de placer des restrictions.
*/
function aConvertir (res)
{
	if (res != "" && res.indexOf("$7ca") == -1)
	{
		return true;
	}
	return false;
}
/**
	Permet de decouper la chaine res et de choisir la partie
	e convertir : e gauche du choix = non converti, e droite = converti.
*/
function convertirChaine (res)
{
	if ((pos = res.indexOf ("$7ba")) != -1)
	{
		return res.substring(0, pos) + convertirChaineAlaVersIso (res.substring(pos),res.length);
	}
	else
	{
		// toute la chaene est convertie
		return convertirChaineAlaVersIso (res);
	}
}
/** 	Passe en revue toute les zones /zone/ de la notice, et
	teste pour chacune d'elles son contenu avant de le convertir
	ex : - premiere zone 517 (i = 0)
		 - deuxieme zone 517 (i = 1) etc. jusqu'e res == ""
*/
function convertirZone (zone, application)
{
	var i = 0;
	application.activeWindow.title.startOfBuffer (false);
	do
	{
		res = application.activeWindow.title.findTag (zone, i, true, true, false);
		if (aConvertir (res) == true)
		{
			res += "\u0001";// ajout d'un caractere qui sert e identifier la fin de la ligne
			application.activeWindow.title.deleteLine(1);
			application.activeWindow.title.insertText (convertirChaine (res) + "\n");
		}
		i++;
	}
	while (res != "");
}

// couche contrele
//
//


function btnLancer_click ()
{
	application = Components.classes["@oclcpica.nl/kitabapplication;1"].getService(Components.interfaces.IApplication);
	application.activeWindow.command ("mod", false);

	var zones = new Array;
	zones = renvoieZonesATraiter ();

	try
	{
		var i = 0;
		while (i < zones.length)
		{
			convertirZone (zones[i], application);
			i++;
		}
	}
	catch (ex)
	{
		alert("erreur");
	}
}
function radToutesZones_click()
{
document.getElementById("txtZones").disabled = true;
}
function radZonesChoisies_click()
{
document.getElementById("txtZones").disabled = false;
}
function onLoad ()
{
	return true;
}
function onCancel()
{
	return true;
}
