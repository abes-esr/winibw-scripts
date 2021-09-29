// 2014-10-09 mte : v�rifi� pour 181/182
function AFF_S()
{
	// affiche les exemplaires de mon ILN (en cliquant sur l'exemplaire, on peut le modifier).
	application.activeWindow.command("aff s", false);
}
function AFF_OJ()
{
// affiche les exemplaires class�s par date (tout le r�seau)
	application.activeWindow.command("aff oj", false);
}
function AFF_OB()
{
	// affiche les exemplaires class�s par n�RCR (tout le r�seau)
	application.activeWindow.command("aff ob", false);
}
function AFF_KZone()
{
	// affiche les zones demand�es de la ou les notices en format Unimarc
	application.activeWindow.commandLine = "aff K:";
}
function AFF_I()
{
	// affiche les notices sous la forme normalis�e ISBD 
	application.activeWindow.command("aff i", false);
}
function AFF_Unma()
{
	// affiche les notices en format Unimarc avec tous les exemplaires
	application.activeWindow.command("aff unma", false);
}
function AFF_Unm()
{
	// affiche les notices en format Unimarc avec les exemplaires de mon ILN
	application.activeWindow.command("aff unm", false);
}
function AFF_U()
{
	// affiche les notices sous la forme libell�e
	application.activeWindow.command("aff u", false);
}
function hackSystemVariables() 
{
	var i, j, varName, varValue,
	report = "",
	alpha = "!0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (i = 0; i <= alpha.length; i++) {
		for (j = 0; j <= alpha.length; j++) {
		//	P3G for global, P3L for local, P3V for field variables
			varName = "P3V" + alpha.charAt(i) + alpha.charAt(j);
			varValue = application.activeWindow.variable(varName);
			if (varValue) report = report + varName + "\r\n" + varValue + "\r\n\r\n";
		}
	}
	// Output to clipboard
     ;
}
