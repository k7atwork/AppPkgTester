<script type="text/javascript">

function fetchAppPkgDtls(subPkg, classID)
{

  var fld = document.getElementById('win%Bind(:1)divUOA_APP_PKG_TST_APPCLASSID');
  fld.style="display:none";
  fld.parentElement.previousElementSibling.height=0;

  var custDiv = document.getElementById("customAppPkgDtls");
  if (custDiv == null)
    fld.parentElement.innerHTML  = fld.parentElement.innerHTML + "<div id='customAppPkgDtls'><h3>" + "UOA_APP_PKG_TESTER:" + subPkg + ":" + classID + "</h3></div>";
  else
    custDiv.innerHTML = "<h3>" + "UOA_APP_PKG_TESTER:" + subPkg + ":" + classID + "</h3>";

  fld = document.getElementById('APPPKG_ID');
  fld.value = "UOA_APP_PKG_TESTER";

  fld = document.getElementById('APPPKG_SUBPKG');
  fld.value = subPkg;

  fld = document.getElementById('APPPKG_CLASSID');javascript:void(0);
  fld.value = classID;
  addchg_win%Bind(:1)(fld);
  oChange_win%Bind(:1)=fld;

  fld = document.getElementById('APPPKG_METHOD');
  fld.value = "";
  doFocus_win%Bind(:1)(fld, false, true);

}

function resetAppPkgDtls()
{
  var fld = document.getElementById('win%Bind(:1)divUOA_APP_PKG_TST_APPCLASSID');
  fld.style="display:block";
  fld.parentElement.previousElementSibling.height=112;

  var custDiv = document.getElementById("customAppPkgDtls");
  if (custDiv != null)
    custDiv.innerHTML = "";

  fld = document.getElementById('APPPKG_ID');
  fld.value = "";

  fld = document.getElementById('APPPKG_SUBPKG');
  fld.value = "";

  fld = document.getElementById('APPPKG_CLASSID');javascript:void(0);
  fld.value = "";
  addchg_win%Bind(:1)(fld);
  oChange_win%Bind(:1)=fld;

  fld = document.getElementById('APPPKG_METHOD');
  fld.value = "";
  doFocus_win%Bind(:1)(fld, false, true);

}

</script>
