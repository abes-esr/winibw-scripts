var algo_theses_base_url = "https://theses.fr/api/v1/outils/AlgoTheses";
var max_number_of_ppn = 200;
var chunk_size = 200; // le matching n'est réalisé que sur les deux premiers caractères du materialCode, les Aax et Oax sont donc couverts.

var allowed_doc_types = ["Aa", "Oa"];
var allowed_screens = ["SU Catalogue Affichage en liste"];
var winIBWMessageFormat = {
  error: 1,
  warning: 2,
  notification: 3
};

function AlgoTheses() {
  if (!_should_mount()) {
    application.activeWindow.showMessage("Impossible de r\xE9cup\xE9rer le rapport d'AlgoTh\xE8ses depuis cet \xE9cran", winIBWMessageFormat.warning);
    return;
  }

  var ppns = application.activeWindow.materialCode ? _get_ppn() : _collect_ppn();

  if (ppns) {
    var urls = __urlBuilder("ppn", ppns);

    var _a = urls;
    var _i = 0;

    var _f = function _f(url) {
      return __get_report(url);
    };

    for (; _i < _a.length; _i++) {
      var _e = _a[_i];

      _f(_e, _i, _a);
    }
  }
}

function _includes(input, search_value) {
  for (elem in input) {
    if (input[elem] === search_value) {
      return true;
    }
  }
} // le script ne peut être activé que pour une liste de résultats, ou un résultat dont le type commence par Aa ou Oa


function _should_mount() {
  return _includes(allowed_doc_types, application.activeWindow.materialCode.replace(/[*+]/, "").slice(0, 2)) || _includes(allowed_screens, application.activeWindow.caption || "");
} // récupère un PPN à partir de la notice


function _get_ppn() {
  return [application.activeWindow.getVariable("P3GPP")];
}

// récupère les PPNs à partir d'une liste de résultats
// seuls les ppn dont le type commence par Aa et Oa sont récupérés
function _collect_ppn() {
  var list_of_ppns = [];
  var number_of_ppn = Math.min(max_number_of_ppn, application.activeWindow.getVariable("P3GSZ"));
  application.activeWindow.command("af k " + "1", false);
  var max = number_of_ppn; 
  
  // l'itération doit commencer à 1 pour récupérer proprement le contenur de P3VKZ
  for (var _i2 = 1; _i2 < max; _i2 += 16) {
    application.activeWindow.command("af k " + _i2, false);
    search_results = application.activeWindow.getVariable("P3VKZ").split("\x1BH\x1BLPP"); 
    
    // retrait du premier élément qui est vide
    search_results.shift();
    var _a2 = search_results;
    var _i3 = 0;

    var _f2 = function _f2(search_result) {
      var result = _parse_search_result(search_result);

      if (_includes(allowed_doc_types, result.doc_type)) {
        list_of_ppns.push(result.ppn);
      }
    };

    for (; _i3 < _a2.length; _i3++) {
      var _e2 = _a2[_i3];

      _f2(_e2, _i3, _a2);
    }

    if (list_of_ppns.length >= max_number_of_ppn) {
      break;
    }
  } 
  
  // on slice pour ne pas excéder max_number_of_ppn car on récupère les résultats 16 par 16.
  return list_of_ppns.splice(0, max_number_of_ppn);
}

function _parse_search_result(input) {
  ppn = input.slice(0, 9);
  doc_type = input.split(/\x1BE\x1BLMA[\*\+]?/)[1].split(" ")[0].slice(0, 2);
  return {
    ppn: ppn,
    doc_type: doc_type
  };
}

function __get_report(url) {
  application.activeWindow.showMessage("R\xE9cup\xE9ration du rapport d'AlgoTh\xE8ses depuis : ".concat(url), winIBWMessageFormat.notification);
  application.shellExecute("".concat(url, "&origin=winibw"), 5, "open", "");
}

function __urlBuilder(param_name, param_value) {
  var params = [].concat(param_value || []);

  var _a3 = __chunk(params, chunk_size);

  var _i4 = 0;

  var _f3 = function _f3(chunk) {
    return "".concat(algo_theses_base_url, "?").concat(param_name, "=").concat(chunk.join(","));
  };

  var _r = [];

  for (; _i4 < _a3.length; _i4++) {
    var _e3 = _a3[_i4];

    var _z;

    _z = _f3(_e3, _i4, _a3);

    _r.push(_z);
  }

  return _r;
}

function __chunk(input, chunk_size) {
  var chunks = [];

  for (i = 0, j = input.length; i < j; i += chunk_size) {
    temporary = input.slice(i, i + chunk_size);
    chunks.push(temporary);
  }

  return chunks;
}
