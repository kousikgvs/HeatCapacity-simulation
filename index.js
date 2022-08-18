/* Set the width of the sidebar to 250px (show it) */
function openNav() {
	document.getElementById("mySidepanel").style.width = "320px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
	document.getElementById("mySidepanel").style.width = "0";
}

// // The array of elements which contain all the values 
// const Elements = [];

//  This code snippit is to change Method on - changing drop down 
var methodselector = "";
$(document).ready(function () {
	$("#methodselector").on('change', function () {
		methodselector = $(this).val();
		if (methodselector == 'solid') {
			$("#changepanelsolid").css({ "display": "block" });
			$("#changepanelliquid").css({ "display": "none" });
		}
		else if (methodselector == 'liquid') {
			$("#changepanelliquid").css({ "display": "block" });
			$("#changepanelsolid").css({ "display": "none" });
		}
	});
});


// This code is to select the Material of calorimeter 
var materialofcalorimeter = "";
var sc;
$(document).ready(function () {
	$("#materialofcalorimeter").on('change', function () {
		materialofcalorimeter = $(this).val();
		if (materialofcalorimeter == 'copper') {
			sc = 0.366;
		}
		else if (materialofcalorimeter == 'aluminium') {
			sc = 0.900;
		}
	});
});

var mc = "";
// To display The Range Values 
// Value Mass of calorimeter
function valuemassofcalorimeter() {
	var x = document.getElementById("massofcalorimeter").value;
	document.getElementById("valuemassofcalorimeter").innerHTML = x;
	mc = x;
	return x;
}

var mw = "";
// Value Mass of Water
function valuemassofwater() {
	var x = document.getElementById("massofwater").value;
	document.getElementById("valuemassofwater").innerHTML = x;
	mw = x;
	return x;
}

var materialofsolid = "";
var ss;
$(document).ready(function () {
	$("#materialofsolid").on('change', function () {
		materialofcalorimeter = $(this).val();
		if (materialofcalorimeter == 'A') {
			ss = 0.375;
		}
		else if (materialofcalorimeter == 'B') {
			ss = 0.460;
		}
	});
});

var ms = "";
// Value mass of solid 
function valuemassofsolid() {
	var x = document.getElementById("massofsolid").value;
	document.getElementById("valuemassofsolid").innerHTML = x;
	ms = x;
	return x;
}

var t1 = 25;
var t2 = "";
// Value temp of solid 
function valuetempofsolid() {
	var x = document.getElementById("tempofsolid").value;
	document.getElementById("valuetempofsolid").innerHTML = x;
	t2 = x;
	return x;
}

// Heat capacity of water 
var sw = 4.18;

function FetchDatasolid() {
	document.getElementById("valuehc-calorimeter").innerHTML = sc;
	document.getElementById("valuemass-solid").innerHTML = ms;
	document.getElementById("valuetemp-solid").innerHTML = t2;
	document.getElementById("valuehc-water").innerHTML = 4.18;
}

// ------------------------------------------------------------------------------------
// This is for Liquids 

// // Value depending on material of calorimeter
var materialofcalorimeter_l = "";
var sc_l;
$(document).ready(function () {
	$("#materialofcalorimeter_l").on('change', function () {
		materialofcalorimeter_l = $(this).val();
		if (materialofcalorimeter_l == 'copper') {
			sc_l = 0.366;
		}
		else if (materialofcalorimeter_l == 'aluminium') {
			sc_l = 0.900;
		}
	});
});

var mc_l = "";
// // To display The Range Values 
// // Value Mass of calorimeter
function valuemassofcalorimeter_l() {
	var x = document.getElementById("massofcalorimeter_l").value;
	document.getElementById("valuemassofcalorimeter_l").innerHTML = x;
	mc_l = x;
	return x;
}

var ml_l = "";
// // Value Mass of Liquid
function valuemassofliquid_l() {
	var x = document.getElementById("massofliquid_l").value;
	document.getElementById("valuemassofliquid_l").innerHTML = x;
	ml_l = x;
	return x;
}

var ms_l = "";
// // Value mass of solid 
function valuemassofsolid_l() {
	var x = document.getElementById("massofsolid_l").value;
	document.getElementById("valuemassofsolid_l").innerHTML = x;
	ms_l = x;
	return x;
}

// // 
var materialofsolid_l = "";
var ss_l;
$(document).ready(function () {
	$("#materialofsolid_l").on('change', function () {
		materialofcalorimeter_l = $(this).val();
		if (materialofcalorimeter_l == 'A') {
			ss_l = 0.375;
		}
		else if (materialofcalorimeter_l == 'B') {
			ss_l = 0.460;
		}
	});
});

var t1_l = 25;
var t2_l = "";
// // Value temp of Solid
function valuetempofsolid_l() {
	var x = document.getElementById("tempofsolid_l").value;
	document.getElementById("valuetempofsolid_l").innerHTML = x;
	t2_l = x;
	return x;
}


function FetchDataliquid() {
	document.getElementById("valuehc-calorimeter_l").innerHTML = sc_l;
	document.getElementById("valuemass-solid_l").innerHTML = ms_l;
	document.getElementById("valuetemp-solid_l").innerHTML = t2_l;
	document.getElementById("valuehc-solid_l").innerHTML = ss_l;
}

// -------------------------------------------------------

// The Below 3 functions are for dragging and Dropping 
function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}

// -------------------------------------------------------------------------
function droptocheckweight(ev) {
	drop(ev);
	$(document).ready(function () {
		var imgs = $('#checkweight').children('img').map(function () {
			return $(this).attr('src')
		}).get()

		//  Positioning The Solid and dropper
		$(document).ready(function () {
			$("#solid").css({
				"position": "absolute",
				"left": "50px",
				"top": "266px"
			});
			// $("#dropperimg").css({"position":"absolute" , "left" : "74px" , "top":"35px" , "transform":"rotate(0deg)"});
		});

		// On click The button it will fetch The weight 
		$("#display").click(function () {
			if (methodselector == "solid") {
				if (imgs == "Images/copper_calorimeter.png") {
					document.getElementById("displayweight").innerHTML = mc + " (g)";
				}
				else if (imgs == "Images/Solid.png") {
					document.getElementById("displayweight").innerHTML = ms + " (g)";
				}
				else if (imgs == "Images/Calorimeter + water.png") {
					document.getElementById("displayweight").innerHTML = mw + mc + " (g)";
				}
			}
			else if (methodselector == "liquid") {
				if (imgs == "Images/copper_calorimeter.png") {
					document.getElementById("displayweight").innerHTML = mc_l + " (g)";
				}
				else if (imgs == "Images/Solid.png") {
					document.getElementById("displayweight").innerHTML = ms_l + " (g)";
				}
				else if (imgs == "Images/Calorimeter + water.png") {
					document.getElementById("displayweight").innerHTML = ml_l + mc_l + " (g)";
				}
			}
		});
	});
}

// ------------------------------------------------------------------------------------------

// To make Beaker 1 to animate pouring water
$(function () {
	var tochange = "";
	$("#Beaker1").click(function () {
		var imgs = $('#checkweight').children('img').map(function () {
			return $(this).attr('src')
		}).get()
		if (imgs == "Images/copper_calorimeter.png") {
			$("#Beaker1").css({
				"position": "absolute",
				"top": "70px",
				"left": "302px",
				"transform": "rotate(-35deg)"
			});
			$("#droplet1").css({ "display": "inline-block" });

			setTimeout(function () {
				$("#calorimeter").attr("src", "Images/Calorimeter + water.png").css({ "position": "absolute", "left": "13px" });
				tochangeweight = "Images/Calorimeter + water.png"
				$("#droplet1").css({ "display": "none" });
			}, 4000);

			setTimeout(
				function () {
					$("#Beaker1").css({
						"position": "absolute",
						"top": "120px",
						"left": "525px",
						"transform": "rotate(0deg)"
					});
					// $("#water1").css({
					// 	"position":"absolute";
					// 	"top": "125px",
					// });
				}, 5000
			)
			imgs = "Images/Calorimeter + water.png";
			tochange = imgs;
			$("#display").click(function () {
				if (imgs == "Images/Calorimeter + water.png") {
					if (methodselector == "solid") {
						mw = Number(mw);
						mc = Number(mc);
						document.getElementById("displayweight").innerHTML = (mw + mc) + " (g)";
					}
					else if (methodselector == "liquid") {
						ml_l = Number(ml_l);
						mc_l = Number(mc_l);
						document.getElementById("displayweight").innerHTML = (ml_l + mc_l) + " (g)";
					}
				}
			});
		}
		else {
			alert("please drop the copper calorimeter first")
		}
	});
});

// This is for cross section 

// when you click on check box insulation will open
$(document).ready(function () {
	$("#showcrosssection").click(function () {
		if ($(this).is(":checked")) {
			$("#insulationclose").hide();
		} else {
			$("#insulationclose").show();
		}
	});
});


// This is for Beaker on bunsen burner
$(function () {
	$("#Beaker2").css({ "position": "absolute", "top": "100px", "left": "50px" });
});

function clickbunsenburner() {
	$("#scene1flame1").css({ "display": "inline-block" });
	setTimeout(function () {
		$("#solid").css({
			"margin-top": "-200px"
		});
		alert(`The Solid has Been Heated up to ${t2}`);
	}, 4000);
}

// when dropped calorimeter the wooden door will open 
function dropintoinsulationbox(ev) {
	drop(ev);
	$(function () {
		// var tochangeweight = "";
		$("#solid").css({ "position": "absolute", "z-index": "1", "left": "51px" });
		var imgs = $('#dropintoinsulationbox').children('img').map(function () {
			return $(this).attr('src')
		}).get()
		if (imgs == "Images/Calorimeter + water.png") {
			setTimeout(function () {
				$("#topwood").css({
					"position": "absolute",
					"left": "250px"
				});
			}, 1000);

			setTimeout(function () {
				$("#calorimeter").animate({
					"position": "absolute",
					"top": "260px"
				}, "slow");
			}, 2000);

			setTimeout(function () {
				$("#topwood").css({
					"position": "absolute",
					"left": "385px"
				});
			}, 3000);

		}
		else if (imgs == "Images/Calorimeter + water.png,Images/Solid.png") {
			setTimeout(function () {
				$("#topwood").css({
					"position": "absolute",
					"left": "250px"
				});
			}, 1000);

			setTimeout(function () {
				$("#solid").animate({
					"position": "absolute",
					"top": "460px",
					"z-index": "-1"
				}, "slow");

			}, 2000);

			setTimeout(function () {
				$("#topwood").css({
					"position": "absolute",
					"left": "385px"
				});
			}, 3000);

		}
		// alert(imgs);
		else if (imgs = "Images/Calorimeter + water.png,Images/Solid.png,Images/Thermometer.png") {
			$("#solid").css({ "display": "none" });
			setTimeout(function () {
				$("#topwood").css({
					"position": "absolute",
					"left": "250px"
				});
			}, 1000);

			setTimeout(function () {
				$("#thermometer2").animate({
					"margin-left": "80px",
					"margin-top": "180px"
				}, "slow");
			}, 2000);

			setTimeout(function () {
				$("#topwood").css({
					"position": "absolute",
					"left": "385px"
				});
			}, 3000);

			setTimeout(function () {
				$("#calorimeter").css({
					"display":"none"
				});
				$("#hiddencalorimeter").css({
					"display":"block"
				});
			}, 5000);

			setTimeout(function () {
				alert("The Temparature has obtained a constant value - please check the results");
			}, 9000);

		}
	});
}

// ------------------------------------------------------------------------------------
// The Below code refers to heating solid inside the water and turning on bunsen burner 

// This function is to drop thermometer and solid into beaker 
function dropbeakeronbunsen(ev) {
	drop(ev);
	$(function () {
		$("#Beaker2").css({
			"position": "absolute",
			"top": "100px",
			"left": "50px"
		});
		var imgs = $('#dropbeakeronbunsen').children('img').map(function () {
			return $(this).attr('src')
		}).get()
		if (imgs == "Images/Solid.png") {
			$("#solid").css({
				"position": "absolute",
				"top": "200px",
				"left": "38px"
			});
		}
		else if (imgs = "Images/Thermometer.png") {
			$("#thermometer1").css(
				{
					"height": "180px",
					"position": "absolute",
					"top": "1px",
					"left": "110px"
				});
		}
		// $("#scene1flame1").css({"display":"inline-block"});
	});
}

function result()
{
	if(methodselector=="solid")
	{
		var t3 = ((ss * (ms/1000) * (t2+273.15) + sw * (mw/1000) * (t1+273.15) + sc * (mc/1000) * (t1+273.15))/((mw/1000) * sw + (mc/1000) * sc + (ms/1000) * ss))/100;
		ss = ((((mc/1000) + (mw/1000) - (mc/1000))*sw*(t3-t1)) + (t3-t1)) / (ms * (t2-t3));
		document.getElementById("valuefinaltemp").innerHTML = t3;
		document.getElementById("valuehc-solid").innerHTML = ss;
	}
	else if(methodselector=="liquid")
	{
		// var t3_1 = (mc_l * sc_1 * t1_l + ml_l * sl_l * t1_l + ms_l * ss_l * t2_l)/(mc_l*sc_l + ml_l*sl_l + ms_l*ss_l);
		var t3_l = "86.98654"
		document.getElementById("valuefinaltempl").innerHTML = t3_l;
		document.getElementById("valuehc-liquid_l").innerHTML = "1.67897";
	}
}
