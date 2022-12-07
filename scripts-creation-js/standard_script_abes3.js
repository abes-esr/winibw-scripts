// description: Ce script permet de récuperer avec AlgoTheses les rapports de chargement de données de Theses.fr depuis WinIBW.
// author : Mathis EON
// email: eon@abes.fr
var algo_theses_base_url = "https://www.theses.fr/AlgoSudoc";
var chunk_size = 200;
var winIBWMessageFormat = {
  error: 1,
  warning: 2,
  notification: 3
};

function AlgoTheses() {
  var screen_results = application.activeWindow.getVariable("P3VKZ").split("\x1BH\x1BLPP");
  var ppns = [];

  for (var i in screen_results) {
    if (i > 0) {
      ppns.push(screen_results[i].substr(0, 9));
    }
  }

  ppns = ppns.length ? ppns : [application.activeWindow.getVariable("P3GPP")];

  if (ppns) {
    var urls = urlBuilder("ppn", ppns);

    for (var index in urls) {
      get_repport(urls[index]);
    }
  } else {
    application.activeWindow.showMessage("Impossible de r\xE9cup\xE9rer le rapport d'AlgoTh\xE8ses depuis cet \xE9cran", winIBWMessageFormat.warning);
  }
}

function get_repport(url) {
  application.activeWindow.showMessage("R\xE9cup\xE9ration du rapport d'AlgoTh\xE8ses depuis : ".concat(url), winIBWMessageFormat.notification);
  application.shellExecute("".concat(url, "&origin=winibw"), 5, "open", "");
}

function urlBuilder(param_name, param_value) {
  var params = [].concat(param_value || []);
  var urls = [];
  var chunks = chunk(params, chunk_size);

  for (var i = 0; i < chunks.length; i++) {
    urls.push("".concat(algo_theses_base_url, "?").concat(param_name, "=").concat(chunks[i].join(",")));
  }

  return urls;
}

function chunk(input, chunk_size) {
  var chunks = [];

  for (var i = 0, j = input.length; i < j; i += chunk_size) {
    var temparray = input.slice(i, i + chunk_size);
    chunks.push(temparray);
  }

  return chunks;
}