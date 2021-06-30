/*************************************************************************************************
 * 
 *	This file contains the standard WinIBW script functions for creating records
 *
 *************************************************************************************************
 *************************************************************************************************
 *	$Header$
 *	
 *	$Log$
  *
 *	Revision 1.10  2005/05/12 13:46:03  bouwmeester
 *	Changes from Mireille
 *	
 *	Revision 1.8  2005/04/11 10:32:33  bouwmeester
 *	Corrected a typo in the list of tags for Monographs
 *	
 *	Revision 1.7  2005/03/18 10:16:40  hofmann
 *	security checks in standard scripts, to make sure title object is non-null
 *	
 *	Revision 1.6  2004/12/13 14:20:22  bouwmeester
 *	Fixed in the create routine:
 *	- no unnecesary switch of Coded Data
 *	- leave Novice Mode off (as in WinIBW2)
 *	- open a new window only when already editing
 *	
 *	Revision 1.5  2004/11/12 16:26:36  hofmann
 *	added missing records
 *	
 *	Revision 1.4  2004/11/12 12:12:56  hofmann
 *	support for printing that also works with script or vice versa; still needs quite some cleanup
 *	
 *	Revision 1.3  2004/11/11 13:19:50  hofmann
 *	fix for UninversalXPConnect privileges
 *	
 *	Revision 1.2  2004/11/11 07:53:38  hofmann
 *	fix for codedData and noviceMode proptery in scritping model
 *	
 *	Revision 1.1  2004/11/11 07:16:33  hofmann
 *	base implementation of standard create scripts
 *      
 *      Revision 2.1 2005/05/03 MTE
 *      add new material : Atlas, Audiovisuel, Electronique, Multimedia
 *      Journal became Periodique
 *      Revision 2.2 2011/05/19 MTE enrichissement des scripts
 *	    tous ces scripts ont ete mis a jour le 20110531 par MTE
 *		selon les suggestions des formateurs relais
 *	
 *	2014-10-09 : mte : mise à jour pour 181/182 et retrait de $b
 *
 *	2015-12-02 : SRY : Suppression de la zone 301 (variable contPeriodique)
 *	2017-01-31 : SRY : Ajout zones 200 $e, 225 $x, 300$a,339 $a $d, 712 02$a@ et suppression de la zone 310 (variable contElectronique)
  *	2017-03-16 : SRY : // 20170316 : modification RDA FR 2017
 **************************************************************************************************	
 */

const typeAtlas =	"Ka";
const contAtlas =	"008 $aKax\n" +

						"010 ##$A\n"  +
						"181 ##$P01$ccri\n" +
						"182 ##$P01$cn   \n" +
						"183 ##$P01$a\n"  +
						"200 1#$a@ $f $g \n" +
						"205 ##$a\n"  +
						"206 ##$a\n"  +
						"215 ##$a $c $d \n"  +
						"219 #[INDICATEUR]$a $b $c $d \n"  +
						"225  #$a@ $v\n"  +
						"300 ##$a\n"  +
						"305 ##$a\n"  +
						"320 ##$a\n"  +
						"410 ##$t@ $v\n"  +
						"607 ##$a $2rameau\n" +
						"700 #1$a $b $4070\n"  +
						"701 #1$a $b $4070\n"  +
						"702 #1$a $b$4\n"  +
						"710   $a $4"
						;



const typeAudiovisuel =	"Ba";
const contAudiovisuel =	"008 $aBax\n" +
						"181 ##$P01$ctdi\n" +
						"182 ##$P01$cv\n" +
						"183 ##$P01$a\n"  +
						"071 01$a\n"  +
						"073 #0$a\n"  +
						"200 1#$a@  $f $g \n" +
						"205 ##$a\n"  +
						"215 ##$a $c \n"  +
						"219 #[INDICATEUR]$a $b $c $d \n"  +
						"225  #$a@ $v\n"  +
						"300 ##$a\n"  +
						"320 ##$a\n"  +
						"306 ##$a\n"  +
						"410 ##$t@ $v\n"  +
						"600 #1$a $x $3035108444$2rameau\n"  +
						"606 ##$a$x $3035108444$2rameau\n"  +
						"607 ##$a$x $3035108444$2rameau\n"  +
						"700 #1$a $b $4300 \n" +
						"702 #1$a $b $4 \n"+
						"702 #1$a $b $4"
						;



const typeElectronique =	"Oa";
const contElectronique =	"008 $aOax\n" +
						"181 ##$P01$ctxt\n" +
						"182 ##$P01$cc\n" +
						"183 ##$P01$a\n"  +
						"010 ##$A\n"  +
						"200 1#$a@ $e $f $g \n" +
						"219 #[INDICATEUR]$a $b $c $d \n"  +
						"225  #$a@ $x $v\n"  +
						"230 ##$a\n"  +
						"300 ##$a\n"  +
						"304 ##$a\n"  +
						"305 ##$a\n"  +
						"320 ##$a\n"  +
						"336 ##$a\n"  +
						"337 ##$a\n"  +
						"339 ##$a $d\n"  +
						"410 ##$t@ $v\n"  +
						"600 #1$a $x $2rameau\n"  +
						"606 ##$a $x $2rameau\n"  +
						"607 ##$a $x $2rameau\n"  +
						"700 #1$a $b $4070\n" +
						"712 02$a@ $4\n"  +
						"856 4#$q $u"
						;
const typeMonograph =	"Aa";
const contMonograph =	"008 $aAax\n" +
						"181 ##$P01$ctxt\n" +
						"182 ##$P01$c \n" +
						"183 ##$P01$a\n"  +
						"010 ##$A\n"  +
						"200 1#$a@ $f $g \n" +
						"205 ##$a\n"  +
						"215 ##$a $c $d \n"  +
						"219 #[INDICATEUR]$a $b $c $d \n"  +
						"225  #$a@ $v\n"  +
						"320 ##$a\n"  +
						"410 ##$t@ $v\n"  +
						"600 #1$a $x $2rameau\n"  +
						"606 ##$a $x $2rameau\n"  +
						"607 ##$a $x $2rameau\n"  +
						"700 #1$a $b $4070\n"  +
						"702 #1$a $b$4";


const typeMultimedia =	"Za";
const contMultimedia =	"008 $aZax\n" +
						"181 ##$P01$c \n" +
						"182 ##$P01$c \n" +
						"183 ##$P01$a\n"  +
						"010 ##$A\n"  +
						"073 #0$a\n"  +
						"200 1#$a@ $f $g \n" +
						"205 ##$a\n"  +
						"215 ##$a $c $d \n"  +
						"215 ##$a $c $d \n"  +
						"219 #[INDICATEUR]$a $b $c $d \n"  +
						"225  #$a@ $v\n"  +
						"320 ##$a\n"  +
						"336 ##$a \n"  +
						"337 ##$a \n"  +
						"410 ##$t@ $v\n"  +
						"600 #1$a $x $2rameau\n"  +
						"606 ##$a $x $2rameau\n"  +
						"607 ##$a $x $2rameau\n"  +
						"700 #1$a $b $4070\n"  +
						"702 #1$a $b $4";



const typePartition	=	"Ma";
const contPartition =	"008 $aMax\n"	+
						"181 ##$P01$cntm\n"	+
						"182 ##$P01$cn\n"	+
						"183 ##$P01$a\n"  +
						"010 ##$A\n"	+
						"013 ##$aM-\n"	+
						"071 3#$a\n"	+
						"200 1#$a@ $f $g \n"	+
						"205 ##$a\n"	+
						"208 ##$a\n"	+
						"215 ##$a $c $d \n"	+
						"219 #[INDICATEUR]$a $b $c $d \n"  +
						"225  #$a@ $v\n"	+
						"410 ##$t@ $v\n"	+
						"500 ##$a@\n"	+
						"700 #1$a $b $4230\n"	+
						"702 #1$a $b $4\n";
						
const typePeriodique	=	"Ab";
const contPeriodique   =	"008 $aAbx\n"	+
						"181 ##$P01$ctxt\n" +
						"182 ##$P01$c\n" +
						"183 ##$P01$a\n"  +
						"200 1#$a@ $f $g\n"	+
						"207 #0$a\n"	+
						"210 ##$a $c $d \n"	+
						"215 ##$a $c $d \n"	+
						"326 ##$a\n"	+
						"421 ##$t@\n"	+
						"422 ##$t@\n"	+
						"430 ##$t@\n"	+
						"440 ##$t@\n"	+
						"451 ##$t@\n"	+
						"452 ##$t@\n"	+
						"517 ##$a@\n"	+
						"675 ##$a\n"	+
						"676 ##$a\n"	+
						"710   $a@ $4070\n"	+	
						"711   $a@ $4070\n"	+
						"712   $a@ $4\n";

const typeSonore	=	"Na";
const contSonore	=	"008 $aNax\n"	+
						"181 ##$P01$csnd\n"	+
						"182 ##$P01$cs\n"	+
						"183 ##$P01$a\n"  +
						"071 0#$a\n"	+
						"200 1#$a@ $bEnregistrement sonore $f $g\n"	+
						"205 ##$a\n"	+
						"215 ##$a\n"	+
						"219 #[INDICATEUR]$a $b $c $d \n"  +
						"225  #$a@ $v\n"	+
						"300 ##$a\n"	+
						"305 ##$a\n"	+
						"322 ##$a\n"	+
						"323 ##$a\n"	+
						"410 ##$t@ $v \n"	+
						"700 #1$a $b $4070\n"	+
						"702 #1$a $b $4\n";


function doCreate(type, content) {
	var bCodedData = application.activeWindow.codedData;
	var bNoviceMode = application.activeWindow.noviceMode;
	var bEditing = application.activeWindow.title;
	
	application.activeWindow.codedData = false;
	application.activeWindow.noviceMode = false;
	
	// Open a new window when already editing
	application.activeWindow.command("\\inv 1", bEditing);

	if ((application.activeWindow.status == "OK") && (application.activeWindow.title != null)) {
		application.activeWindow.title.insertText(content);
		// switch CodedData on once to force docType
		application.activeWindow.materialCode = type;
		// application.activeWindow.codedData = true;
		if (bCodedData) {
			application.activeWindow.codedData = true;
		}
		// application.activeWindow.noviceMode = bNoviceMode;
		application.activeWindow.title.endOfField(false);
	}
}

function picaCreateAtlas() {
	doCreate(typeAtlas, contAtlas);
}

function picaCreateAudiovisuel() {
	doCreate(typeAudiovisuel, contAudiovisuel);
}

function picaCreateElectronique() {
	doCreate(typeElectronique, contElectronique);
}

function picaCreateMonograph() {
	doCreate(typeMonograph, contMonograph);
}

function picaCreateMultimedia() {
	doCreate(typeMultimedia, contMultimedia);
}

function picaCreatePartition() {
	doCreate(typePartition, contPartition);
}

function picaCreatePeriodique() {
	doCreate(typePeriodique, contPeriodique);
}

function picaCreateSonore() {
	doCreate(typeSonore, contSonore);
}