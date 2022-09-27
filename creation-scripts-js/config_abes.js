/*************************************************************************************************
 * 
 *	This file contains ABES specific configuration for the standard WinIBW script functions
 *
 *  !!! Please do not modify this file, because the standard scripts depend on it !!!
 *
 *  !!! If you need modifications, please provide your own file with the appropriate settings !!!
 *
 *************************************************************************************************
 *************************************************************************************************
 *	$Header$
 *	
 *
 *	$Log$
 *	Revision 1.10  2005/02/10 08:55:37  hofmann
 *	*** empty log message ***
 *	
 *	Revision 1.9  2005/02/09 19:47:32  hofmann
 *	updated syntax colouring regex;
 *	made hebrew shit work in title edit control
 *	
 *	Revision 1.8  2005/01/03 14:40:42  hofmann
 *	fix for #1157 and #1145
 *	
 *	Revision 1.7  2004/11/10 11:05:31  hofmann
 *	implemented "picaCopyRecord" standard scripts; made WinIBW aware of current "systeem" and "bestand" (via "P3VSY" and "P3VBE")
 *	
 *	Revision 1.6  2004/11/09 15:07:39  hofmann
 *	some more standard scripts
 *	
 *	Revision 1.5  2004/11/08 10:59:08  pica
 *	Now taking care that HTML remains valid despite added font tags.
 *	
 *	Revision 1.4  2004/10/22 10:10:04  bouwmeester
 *	Added a font preview screen object in the preferences dialog
 *	
 *	Revision 1.3  2004/10/08 09:25:45  hofmann
 *	added missing syntax colouring related stuff
 *	
 *	Revision 1.2  2004/07/15 11:41:59  hofmann
 *	all kind of script related stuff
 *	
 *	Revision 1.1  2004/07/13 09:55:22  hofmann
 *	some more script related stuff
 *	
 *	2014-10-09 : mte : juste changement de date
 **********************************************************************************************
 */
 
const gConfig = 
{
	// standard presentation format
	format: "UNM",

	// tag containing material code in case of authorities
	tagMaterialAuthority: "008",

	// tag containing material code in case of titles
	tagMaterialTitle: "008",

	// regular expression to get the required positions from the material type from the content
	// of the tag containing the material Type
	regExpMatCode: /\$a(..)/,

	// url of string bundle containing messages
	messageURL: "resource:/scripts/messages_fr.properties",

	// command for full presentation
	cmdShowFull: "\\too unm",
	
	// regular expression which is matched against the tag for pasting links
	// if the regex matches, the link is appended, otherwise the content is overwritten	
	regExpAddToTag: /^~ $/,
	
	// text that is inserted before links in title records
	titleLinkPrefix: "$0",
	
	// text that is inserted before links in authority records
	authorityLinkPrefix: "$3",
	
	// text that is inserted after links in records
	linkSuffix: "",
	
	// tag and subfield/interpunction used for kill requests
	killString: "023 $a",

	// insert required tags to be present to pass record validation
	insertRequiredTags: function() {
		// nothing to do
		return;
	},
	
	// function specifies if we need a system switch, for copying the record
	needSystemSwitch: function() {
		var curSystem = application.activeWindow.getVariable("system");
		return (curSystem != "SU");
	},
	
	// syntax colouring settings
	setSyntaxColour:	function() {
							application.removeSyntaxColor("", "");
							application.addSyntaxColor("UNM", "(?:[^\\$]|^)(?:\\$\\$)*(\\$[^\\$ ])", 0xC00000);
							application.addSyntaxColor("UNM", "\\$\\$", 0xC000C0);
						}
	
	
};