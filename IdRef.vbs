'Script permettant d'interagir avec IdRef :

'-Récupération du type de zone et des valeurs $a et $b de la ligne où se trouve le curseur en édition de notice WinIBW
'-Sélection automatique de l'index IdRef correspondant au type de zone et présaisie des valeurs $a et $b dans la zone de recherche IdRef
'-Récupération des informations bibliographiques pour faciliter une éventuelle création de notice d'autorité dans IdRef
'-Authentification automatique avec le login WinIBW et le mot de passe saisie dans ce script (variable motdepasse à renseigner)
'-Lancement automatique de la recherche dans IdRef 
	
Dim IEDoc
Dim IE  		

Sub IdRef()

	' Contient le login WinIBW/IdRef
	utilisateur = application.activeWindow.Variable("P3GUK")
	' Mot de passe a renseigner si on souhaite une authentification automatique dans IdRef
	motdepasse = ""

	'End of (Declarations)
	set IE = nothing
    set shapp=createobject("shell.application")
     Dim InputTexte
	'MsgBox  "==>" + IE.Visible
    on error resume next
    'pour ouvrir si pas ouvert
    For Each owin In shapp.Windows
         if left(owin.document.location.href,len("https://www.idref.fr"))="https://www.idref.fr" then
            if err.number = 0 then
                    set IE = owin
                    'MsgBox "ok"
              end if
        end if
    err.clear
    Next

    on error goto 0
    if IE is nothing then
        'MsgBox  "Window Not Open"
         Set IE = CreateObject("InternetExplorer.Application")
    end if

    IE.Navigate2 "https://www.idref.fr"    
	Do While IE.readystate <> 4  
    Loop  
    Set IEDoc = IE.document
      
	'Selectionne la ligne ou se trouve le curseur
    application.ActiveWindow.title.EndOfField()
	application.ActiveWindow.title.StartOfField(True)    
	  
	'sauvegarde la ligne où se trouve le curseur. Afin de pouvoir remettre le focus avant le rapatriement du ppn de l'autorité
	ligneSelection = ""
	ligneSelection = application.ActiveWindow.title.selection()
	
	' si la selection est trop courte, on affiche un message d'erreur
	if len(ligneSelection) < 10  then
		MsgBox  "Mauvaise sélection : pas assez d'informations"
	else

	Set LogOut = IEDoc.getElementById("tableLogout")	
	' si l'utilisateur n'est pas connecté, on préremplie son login et mdp et on le connecte automatiquement
	if LogOut.getattribute("class") = "display-none"  And  motdepasse <> "" then
			Set LeLogin = IEDoc.getElementById("login")
			Set Password = IEDoc.getElementById("password")			
			LeLogin.Value = utilisateur
			Password.Value = motdepasse
			
			Call IEDoc.parentWindow.execScript("loginUser()","JavaScript")			
	end if
	'InputTexte.Value = Replace(Replace(Application.ActiveWindow.title.Selection(),"$a",""),"$b",", ")

    Call IEDoc.parentWindow.execScript("valueRech('Init','true')","JavaScript")
	
	filtre = false
	zoneSelection = Left(ligneSelection,3)
	if len(zoneSelection) > 2 then		  
			
		zoneD2 = valeurSousZone(zoneSelection, "$2", ligneSelection)
		index1 = "" 	
		
		Select Case zoneSelection
			Case "500", "605"
				index1 = "Titre"
				
				envoieValeurIdRef "z230_a", zoneSelection, "$a", ligneSelection
				
			Case "600", "700", "701", "702"
				index1 = "Nom de personne"		
				
				if (zoneSelection="600" and zoneD2="rameau") or (zoneSelection="700" or zoneSelection="701" or zoneSelection="702") then
					envoieValeurIdRef "z200_a", zoneSelection, "$a", ligneSelection
					envoieValeurIdRef "z200_c", zoneSelection, "$c", ligneSelection
					envoieValeurIdRef "z200_f", zoneSelection, "$f", ligneSelection
					zoneF = valeurSousZone(zoneSelection, "$f", ligneSelection)
					envoi103 zoneF
					
					zoneG = valeurSousZone(zoneSelection, "$g", ligneSelection)
					if len(zoneG)>1 then
						envoieValeurIdRef "z200_b", zoneSelection, "$g", ligneSelection
					else
						envoieValeurIdRef "z200_b", zoneSelection, "$b", ligneSelection
					end if
				end if
				
			Case "601", "710", "711", "712"
				index1 = "Nom de collectivit\xE9"
				ind1 = valeurIndice(zoneSelection, 0, ligneSelection)
				if ind1="0" then
					filtre = true
					Call IEDoc.parentWindow.execScript("valueRech('Index1','"+index1+"')","JavaScript")
					Call IEDoc.parentWindow.execScript("valueRech('Filtre1','Type de notice/Collectivit\xE9')","JavaScript")
				elseif ind1="1" then
					index1 = "Congrès"
				end if
				
				if (zoneSelection="601" and zoneD2="rameau") or (zoneSelection="710" or zoneSelection="711" or zoneSelection="712") then
					zone210a = valeurSousZone(zoneSelection, "$a", ligneSelection)
					if len(zone210a)>0 then
						zone210a = "@"+zone210a
						envoieValIdRef "z210_a", zone210a
					end if
					envoieValeurIdRef "z210_b", zoneSelection, "$b", ligneSelection
					'$c repetable mais bug côté IdRef
					envoieValeurIdRef "z210_c", zoneSelection, "$c", ligneSelection
					'envoieDesValeursIdRef "z210_c", zoneSelection, "$c", ligneSelection
					
					zoneC = valeurSousZone(zoneSelection, "$c", ligneSelection)
					envoi103 zoneC
				end if
				
			Case "602", "720", "721", "722"
				index1 = "Famille"
				
				if (zoneSelection="602" and zoneD2="rameau") or (zoneSelection="720" or zoneSelection="721" or zoneSelection="722") then
					envoieValeurIdRef "z220_a", zoneSelection, "$a", ligneSelection
					envoieValeurIdRef "z220_c", zoneSelection, "$c", ligneSelection
					envoieValeurIdRef "z220_d", zoneSelection, "$d", ligneSelection
					
					zoneF = valeurSousZone(zoneSelection, "$f", ligneSelection)
					envoi103 zoneF
				end if
				
			Case "604"
				index1 = "Auteur-Titre"
				
				envoieValeurIdRef "z240_a", zoneSelection, "$a", ligneSelection
				envoieValeurIdRef "z240_t", zoneSelection, "$t", ligneSelection
				
			Case "606"
				index1 = "Nom commun"
				if zoneD2="rameau" or zoneD2="fmesh" then
					filtre = true
					Call IEDoc.parentWindow.execScript("valueRech('Index1','"+index1+"')","JavaScript")
					if zoneD2="rameau" then
						Call IEDoc.parentWindow.execScript("valueRech('Filtre1','Type de notice/Rameau')","JavaScript")
					elseif zoneD2="fmesh" then
						Call IEDoc.parentWindow.execScript("valueRech('Filtre1','Type de notice/Fmesh')","JavaScript")
					end if
				end if
				
			Case "607"
				index1 = "Nom g\xE9ographique"
				
				envoieValeurIdRef "z215_a", zoneSelection, "$a", ligneSelection
				
			Case "608"
				index1 = "Forme ou genre Rameau"
				
			Case "616"
				index1 = "Nom de marque"
				
			Case Else
				index1 = "Nom de personne"
				
		End Select
		
		partie328 = ""
		zone328b = valeurSousZone("328","$b","")
		if len(zone328b)>0 then
			zone328c = valeurSousZone("328","$c","")
			zone328d = valeurSousZone("328","$d","")
			zone328e = valeurSousZone("328","$e","")
			
			envoi340 = ""
			
			zoneD4 = valeurSousZone(zoneSelection, "$4", ligneSelection)
			Select Case zoneD4
				Case "070"
					envoi340 = "Auteur"
				Case "727"
					envoi340 = "Directeur"
				Case "555"
					envoi340 = "Membre du jury"
				Case "956"
					envoi340 = "Président du jury"
				Case "727"
					envoi340 = "Directeur"
				Case "958"
					envoi340 = "Rapporteur"
				Case Else
					envoi340 = ""
			End Select
			
			if (len(envoi340)>0) then
				if (Instr(zone328b,"Mémoire")>0) then
					envoi340 = envoi340 + " d'un"
				else
					envoi340 = envoi340 + " d'une"
				end if
				
				partie328 = " " + zone328b
				
				if (len(zone328c)>0) then
					partie328 = partie328 + " en " + zone328c
				end if
				
				if (len(zone328e)>0) then
					partie328 = partie328 + " à " + zone328e
				end if
				
				if (len(zone328d)>9) then
					partie328 = partie328 + " en " + Mid(zone328d,7,4)
				else 
					if (len(zone328d)>0) then
						partie328 = partie328 + " en " + zone328d
					end if
				end if
				
				
				envoi340 = envoi340 + partie328
				
				envoieValIdRef "z340_a", envoi340
			end if
		end if
		
		zone200a = valeurSousZone("200","$a","")
		if len(zone200a)>1 then
			zone200d = valeurSousZone("200","$d","")
			zone200e = valeurSousZone("200","$e","")
			zone200f = valeurSousZone("200","$f","")
			zone200g = valeurSousZoneMultiple("200","$g","")
			zone200h = valeurSousZone("200","$h","")
			
			zone210d = valeurSousZone("210","$d","")
			zone214_0d = valeurSousZone("214 #0","$d","")
			zone214_1d = valeurSousZone("214 #1","$d","")
			zone214_2d = valeurSousZone("214 #2","$d","")
			zone214_3d = valeurSousZone("214 #3","$d","")
			zone214_4d = valeurSousZone("214 #4","$d","")
			
			envoi810 = Replace(zone200a,"@","")
			
			if (len(zone200h)>0) then
				envoi810 = envoi810 + " " + zone200h
			end if
			
			if (len(zone200d)>0) then
				envoi810 = envoi810 + " = " + zone200d
			end if
			
			if (len(zone200e)>0) then
				envoi810 = envoi810 + " : " + zone200e
			end if
			
			if (len(zone200f)>0) then
				envoi810 = envoi810 + " / " + zone200f
			end if
			
			if (len(zone200g)>0) then
				zone200g = Replace(zone200g,"$g",", ")
				zone200g = Right(zone200g,len(zone200g)-1)
				envoi810 = envoi810 + " ;" + zone200g
			end if
			
			if (len(zone210d)>0) then
				envoi810 = envoi810 + ", " + zone210d 
			elseif (len(zone214_0d)>0) then
				envoi810 = envoi810 + ", " + zone214_0d
			elseif (len(zone214_1d)>0) then
				envoi810 = envoi810 + ", " + zone214_1d
			elseif (len(zone214_2d)>0) then
				envoi810 = envoi810 + ", " + zone214_2d
			elseif (len(zone214_3d)>0) then
				envoi810 = envoi810 + ", " + zone214_3d
			elseif (len(zone214_4d)>0) then
				envoi810 = envoi810 + ", " + zone214_4d
			end if
			
			envoi810 = envoi810 + "." + partie328
			
			envoieValIdRef "z810_a", envoi810
		end if
		
		if not(filtre) then 
			Call IEDoc.parentWindow.execScript("valueRech('Index1','"+index1+"')","JavaScript")
		end if
		
		'Valeur envoyée en recherche dans l'encart de recherche d'IdRef
		valeurEnvoyee = ""
		zoneDa = valeurSousZone(zoneSelection, "$a", ligneSelection)	
		if (len(zoneDa)>0) then
			valeurEnvoyee = zoneDa
			zoneDb = valeurSousZone(zoneSelection, "$b", ligneSelection)
			if (len(zoneDb)>0) then
				valeurEnvoyee = valeurEnvoyee&" "&zoneDb
			end if
		else
			'Cas speciaux des 600 à 608 : si pas de $a on essaie de prendre la valeur d'une subdivision et on change l'index de recherche
			if left(zoneSelection,"60")>0 then
				zoneDx = valeurSousZone(zoneSelection, "$x", ligneSelection)
				if (len(zoneDx)>0) then
					valeurEnvoyee = zoneDx
					'Si subdivision $x : alors il s'agit d'une subdivision Nom Commun
					Call IEDoc.parentWindow.execScript("valueRech('Index1','Nom commun')","JavaScript")	
					filtre = false
				else
					zoneDy = valeurSousZone(zoneSelection, "$y", ligneSelection)
					if (len(zoneDy)>0) then
						valeurEnvoyee = zoneDy						
						'Si subdivision $y : alors il s'agit d'une subdivision géographique
						Call IEDoc.parentWindow.execScript("valueRech('Index1','Nom g\xE9ographique')","JavaScript")
						filtre = false
					else
						zoneDz = valeurSousZone(zoneSelection, "$z", ligneSelection)
						if (len(zoneDz)>0) then
							valeurEnvoyee = zoneDz
							'Si subdivision $z : alors il s'agit d'une subdivision Nom Commun
							Call IEDoc.parentWindow.execScript("valueRech('Index1','Nom commun')","JavaScript")
							filtre = false
						end if
					end if
				end if
			end if
		end if
		
		valeurEnvoyee = Replace(valeurEnvoyee,".","*")
		valeurEnvoyee = Replace(valeurEnvoyee," -- "," ")
		valeurEnvoyee = Replace(valeurEnvoyee,"  "," ")

		envoieValIdRef "Index1Value", valeurEnvoyee 

	end if
	
	' rempli les champs Idref avec les champs de la notice biblio pour la création d'une nouvelle autorité
	envoieValeurIdRef "z101_a", "101", "$a", ""
	envoieValeurIdRef "z102_a", "102", "$a", ""

	' envoie la 7XX$1 vers A035$a
	if (zoneSelection="700" or zoneSelection="701" or zoneSelection="702" or zoneSelection="710" or zoneSelection="711" or zoneSelection="712" or zoneSelection="720" or zoneSelection="721" or zoneSelection="722") then
		zone1 = valeurSousZone(zoneSelection, "$1", ligneSelection)
		if len(zone1)>0 then
			envoieValeurIdRef "z035_a", zoneSelection, "$1", ligneSelection
		end if
	end if

	' Sert aux statistiques
	Call IEDoc.parentWindow.execScript("valueRech('fromApp','WinIBW')","JavaScript")

	'Lance automatiquement la recherche (si pas de filtre selectionne, sinon bug d'IdRef (filtre non selectionné)
	'Bug si pas de résultat : retour à la page de recherche et tous les filtres affichés
	if not(filtre) then
		Call IEDoc.parentWindow.execScript("valueRech('AutoClick','true')","JavaScript")
		Call IEDoc.parentWindow.execScript("valueRech('End','true')","JavaScript")	
		Call IEDoc.parentWindow.execScript("lanceRech()","JavaScript")
	end if

	'remet le focus sur la zone saisie
	ligneSelection = application.ActiveWindow.title.findTag(ligneSelection, 0, false, true, true)
	
	Set IE.document.all("Lier").onclick = GetRef("rapatrie")
	'IE.document.focus()
	IE.Visible = False
	IE.Visible = True	         
	'Application.windows.item(0).minimize
	'Application.Visible = True
	'Application.Visible = False
	 
end if
	
End Sub

' Récupère le PPN choisi dans IdRef ELement.innerText et reconstruit la ligne en conservant les sous-zones utiles
private Sub rapatrie()

	application.ActiveWindow.title.EndOfField()
	application.ActiveWindow.title.StartOfField(True)  
	ligneSelection = application.ActiveWindow.title.selection()
	
	For Each aElement In IE.document.all
      
		if aElement.ClassName = "detail_ppn2" Then
			For Each bElement In aElement.all
				If bElement.ClassName = "detail_value" Then
					'Par défaut la valeur sera remplacée par les indicateurs, suivis du PPN trouvé dans IdRef
					valeur = "$3"&bElement.innerText					
					indicateurs = Mid(ligneSelection,5,2)
					if instr(indicateurs,"$")>0 then
						indicateurs = ""
					end if
									
					zoneD6 = valeurSousZone(zoneSelection, "$6", ligneSelection)
					zoneD7 = valeurSousZone(zoneSelection, "$7", ligneSelection)
					zoneD2 = valeurSousZone(zoneSelection, "$2", ligneSelection)
					zoneD3 = valeurSousZone(zoneSelection, "$3", ligneSelection)
					zonesD4 = valeurSousZoneMultiple(zoneSelection, "$4", ligneSelection)
					zoneDa = valeurSousZone(zoneSelection, "$a", ligneSelection)
					zoneDx = valeurSousZone(zoneSelection, "$x", ligneSelection)
					zoneDy = valeurSousZone(zoneSelection, "$y", ligneSelection)
					zoneDz = valeurSousZone(zoneSelection, "$z", ligneSelection)
					
					'Cas speciaux des 606 et 607 avec subdivisions possibles
					zoneSelection = left(application.ActiveWindow.title.TagAndSelection(),3)						
					
					if zoneSelection="606" or zoneSelection="607" Then
						zoneA = valeurSousZone(zoneSelection, "$a", ligneSelection)
						if len(zoneA)>0 then
							valeur = Replace(ligneSelection, "$a"&zoneA, "$3"&bElement.innerText)
						else
							zoneX = valeurSousZone(zoneSelection, "$x", ligneSelection)
							if len(zoneX)>0 then
								valeur = Replace(ligneSelection, "$x"&zoneX, "$3"&bElement.innerText)
							else
								zoneY = valeurSousZone(zoneSelection, "$y", ligneSelection)
								if len(zoneY)>0 then
									valeur = Replace(ligneSelection, "$y"&zoneY, "$3"&bElement.innerText)
								else
									zoneZ = valeurSousZone(zoneSelection, "$z", ligneSelection)
									if len(zoneZ)>0 then
										valeur = Replace(ligneSelection, "$z"&zoneZ, "$3"&bElement.innerText)
									end if
								end if
							end if
						end if
						valeur = Replace(valeur,"##", "")
						valeur = Replace(valeur,zoneSelection&" ", "")
					end if
					
					'Si présence de $6, $7 alors on les conserve
					if len(zoneD7)>0 then
						valeur = "$7" & zoneD7 & valeur
					end if
					if len(zoneD6)>0 then
						valeur = "$6" & zoneD6 & valeur
					end if
					
					'Si présence de $x $y ou $z, on essaie de conserver d'eventuels $3 deja presents, sinon le nouveau $3 remplacera l'ancien
					if len(zoneDx)>0 or len(zoneDy)>0 or len(zoneDz)>0 then
						if len(zoneD3)>0 then
							valeur = "$3" & zoneD3 & valeur
						end if
					end if
					
					'On conserve les $x, $y, $z, $2 et $4 
					if len(zoneDa)>0 and len(zoneDx)>0 then
						valeur = valeur & "$x" & zoneDx 
					end if
					if (len(zoneDa)>0 or len(zoneDx)>0) and len(zoneDy)>0 then
						valeur = valeur & "$y" & zoneDy 
					end if
					if (len(zoneDa)>0 or len(zoneDx)>0 or len(zoneDy)>0) and len(zoneDz)>0 then
						valeur = valeur & "$z" & zoneDz
					end if
					
					if len(zoneD2)>0 then
						valeur = valeur & "$2" & zoneD2 
					elseif len(zonesD4)>0 then
						valeur = valeur & zonesD4 
					end if
	
					ligneSelection = application.ActiveWindow.title.findTag(ligneSelection, 0, false, true, true)
					Application.ActiveWindow.title.insertText(indicateurs&valeur)
									
				End If
			Next
		End If
	Next
	
	IE.Quit
	Set IE = Nothing 
	'Application.ActiveWindow.caption = Entry
End Sub	

' Renvoie la valeur de l'indice 0 ou 1
private Function valeurIndice(zone, indice, laLigne) 
	ligne = laLigne
	valeur = ""
	application.ActiveWindow.title.StartOfBuffer (false)
	if ligne = "" then 
		ligne = application.ActiveWindow.title.findTag(zone, 0, false, true, true)
	end if
	if len(ligne) > 4 then
		if indice = 0 then
			valeur = Mid(ligne,5,1)
		elseIf indice = 1 then
			valeur = Mid(ligne,6,1)
		end if
	end if	
	valeurIndice=valeur
End Function

' Renvoie la valeur de la sous-zone
private Function valeurSousZone(zone, dollar, laLigne) 
	ligne = laLigne
	valeur = ""
	application.ActiveWindow.title.StartOfBuffer (false)
	if ligne = "" then 
		'MsgBox zone+" "+dollar+" |"+ligne+"|"
		ligne = application.ActiveWindow.title.findTag(zone, 0, false, true, true)
	end if
	debutsouszone = instr(ligne,dollar)
	if debutsouszone <> 0 then
		ligne = mid(ligne,debutsouszone+2)
		finsouszone = instr(ligne,"$")
		if finsouszone = 0 then
			finsouszone = len(ligne) + 1
		end if
		valeur = left(ligne,finsouszone-1)
		valeur = Replace(valeur,"@","")
	end if	
	valeurSousZone=valeur
End Function

' Renvoie la ou les sous-zones (sert dans le cas des sous-zones répétables) ex : $4070$4550
private Function valeurSousZoneMultiple(zone, dollar, laLigne) 
	ligne = laLigne
	valeur = ""
	application.ActiveWindow.title.StartOfBuffer (false)
	if ligne = "" then 
		'MsgBox zone+" "+dollar+" |"+ligne+"|"
		ligne = application.ActiveWindow.title.findTag(zone, 0, false, true, true)
	end if
	debutsouszone = instr(ligne,dollar)
	while debutsouszone <> 0 and len(ligne)>0
		ligne = mid(ligne,debutsouszone+2)
		finsouszone = instr(ligne,"$")
		if finsouszone = 0 then
			finsouszone = len(ligne) + 1
		end if
		val = left(ligne,finsouszone-1)
		if len(val)>0 then
			valeur = valeur & dollar & val
		end if
		debutsouszone=instr(ligne,dollar)
	Wend	
	valeurSousZoneMultiple=valeur
End Function

' Recupere la valeur de la sous-zone 'zone' et l'envoie à IdRef en zone 'zoneIdRef'
private Sub envoieValeurIdRef(zoneIdRef, zone, dollar, ligne)
	valeur = valeurSousZone(zone, dollar, ligne)
	envoieValIdRef zoneIdRef, valeur
End Sub

' Envoie une valeur à IdRef
private Sub envoieValIdRef(zoneIdRef, valeur)
	if len(valeur) >0 then
		valeur = Replace(valeur,"'","\'")
		Call IEDoc.parentWindow.execScript("valueRech('"+zoneIdRef+"','"+ valeur +"')","JavaScript")
	end if
End Sub

' Envoie plusieurs valeurs, correspondants aux valeurs de la sous-zone répétable 'zone', à IdRef
private Sub envoieDesValeursIdRef(zoneIdRef, zone, dollar, laLigne)
	ligne = laLigne
	valeur = ""
	application.ActiveWindow.title.StartOfBuffer (false)
	if ligne = "" then 
		ligne = application.ActiveWindow.title.findTag(zone, 0, false, true, true)
	end if
	
	cnt = 1
	debutsouszone = instr(ligne,dollar)
	while debutsouszone <> 0 and len(ligne)>0
		ligne = mid(ligne,debutsouszone+2)
		finsouszone = instr(ligne,"$")
		if finsouszone = 0 then
			finsouszone = len(ligne) + 1
		end if
		valeur = left(ligne,finsouszone-1)
		if len(valeur) >0 then
			Call IEDoc.parentWindow.execScript("valueRech('"+zoneIdRef+"_"&cnt&"','"+ valeur +"')","JavaScript")
		end if
		debutsouszone=finsouszone
		cnt = cnt + 1
	Wend
	
End Sub


' Envoie en A103$a et A103$b d'éventuelles valeurs trouvées dans 'valeur' 
private Sub envoi103(valeur)
	if len(valeur)>0 then
		zoneTiret = Instr(valeur,"-")
		if (zoneTiret>0) then
			zoneT1 = left(valeur,(zoneTiret-1))
			zoneT2 = right(valeur,(Len(valeur)-zoneTiret))
			if len(zoneT1)=4 and IsNumeric(zoneT1) then
				envoieValIdRef "z103_a", zoneT1
			end if
			if len(zoneT2)=4 and IsNumeric(zoneT2) then
				envoieValIdRef "z103_b", zoneT2
			end if
		end if
	end if
End Sub

