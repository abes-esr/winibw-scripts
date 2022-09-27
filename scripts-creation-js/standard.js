// 2014-10-09 : mte : juste changement de date
function pressButtonOne()
{
	application.activeWindow.pressButton(1);
}

function pressButtonAide()
{
	application.activeWindow.pressButton("Aide");
}

function TestLNK() {
      application.activeWindow.command("\\LNK Ac D 3000 @Aafjes", true);
      //var tmp = application.receivedMessageOnly;
}

