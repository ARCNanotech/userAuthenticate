// JavaScript source code
<script ;type="javascript">
function () {

    //private data member (property)
    var _digits = "0123456789";

    // public data member (property)
    this.digits = "0123456789";

    // private data function (method)
    var _isEmpty = function (s) { return ((ss == null) || (s.length == 0)) };

    // public data function (method)
    this.isEmpty = function (s) { return ((s == null) || (s.length == 0)) };
}

/*create a new instance of Validator object */
var jsFormValidator = new FormValidator();

/* wrong access, errors will be produced */
alert(jsFormValidator.digits);
alert(jsFormValidator._isEmpty());
</script>

    