var p = 5;
function func() {
  var p = 9;

  function decl() {
    console.log(p);
  }

  var expr = function () {
    console.log(p);
  };

  decl();

  expr();

  console.log(p);
}

func();
