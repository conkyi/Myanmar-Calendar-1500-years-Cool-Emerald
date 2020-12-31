//
// License for Javascript - Non-Commercial
//

var MyanmarCalendar={
	Mday:'',Myear:'',MMon:'',typeyear:'',typemonth:'',MMonth:'',HMonth:'',My:'',aTartday:'',Overdays:'',Odays:'',Firstday:'',Marthday:''
}

var PII = 0.0174532925199433;
var PIII = 57.2957795130823;

var a=b=Result1=d=t=x=t0=ut=sg=TJd=0;

function SunTransist(Year, Total) {
	var Tinkan, Kali, C;
	var Nyear = 0;
	Tinkan = Totaldays(31, 12, (Year - 1), 0, 0);
	Kali = Year + 3101;
	C = (Kali - (Tinkan / 365.2587565)) * 365.2587565;
	C += Tinkan;
	if (Total < C)
		Nyear = 0;
	else if (Total >= C)
		Nyear = 1;
	return Nyear;
}

function TotalJdays(day, month, year, Hour, Min) {

	var H1 = 0, M1 = 0;
	var Tim = 0;
	var Dj = 0;

	H1 = 1.0*(Hour);
	M1 = 1.0*(Min);

	Tim = (H1 + (M1 / 60));

	Dj = julday(year, month, day, Tim, 1);
	Dj -= 2415019.5;
	TJd = Dj;
	return TJd;
}

function Totaldays(day, month, year, Hour, Min) {

	var H1 = 0, M1 = 0;
	var Tim = 0;
	var Tot = 0, Dj = 0;

	H1 = 1.0*(Hour);
	M1 = 1.0*(Min);

	Tim = (H1 + (M1 / 60));

	Dj = julday(year, month, day, Tim, 1);
	Dj -= 2415019.5;
	TJd = Dj;
	
	Tot = Dj + 1826554;
	return Tot;
}

function julday(year, month, day, hour, gregflag) {
	var jd = 0;
	var u = 0, u0 = 0, u1 = 0, u2 = 0;
	u = year;
	if (month < 3) u -= 1;
	u0 = u + 4712.0;
	u1 = month + 1.0;
	if (u1 < 4) u1 += 12.0;
	jd = Math.floor(u0 * 365.25) + Math.floor(30.6 * u1 + 0.000001) + day + hour / 24.0 - 63.5;
	if (gregflag == 1) {
		u2 = Math.floor(Math.abs(u) / 100) - Math.floor(Math.abs(u) / 400);
		if (u < 0.0) u2 = -u2;
		jd = jd - u2 + 2;
		if ((u < 0.0) && (u / 100 == Math.floor(u / 100)) && (u / 400 != Math.floor(u / 400)))
			jd -= 1;
	}
	return jd;
}

function SuraMyear(day, month, Year, Wa) {
	var mr = MyanmarCalendar;

	var NameHm;
	var ResD;
	var NameMo;
	var ResY = 0;
	var Tyear = 0;
	var MMM, MMY;
	var MDay;
	var My, aTartday, Overdays, Odays, Firstday, Marthday;
	var total, Mo;
	var Cyear =[ 0, 30, 61, 91, 122, 153, 183, 214, 244, 275, 306, 334 ];
	var Zy = 0;
	var SMyear =[ -1, 28, 58, 87, 117, 146, 176, 205, 235, 264, 294, 323, 353, 382, 411, 441 ];
	var DMyear =[ -1, 28, 58, 87, 117, 147, 176, 206, 235, 265, 294, 324, 354, 383, 412, 442 ];
	var DDMyear =[ -1, 28, 58, 88, 118, 148, 177, 207, 236, 266, 295, 325, 355, 384, 413, 443 ];
	var S =[ 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30 ];
	var D =[ 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 30 ];
	var DD =[ 29, 30, 30, 30, 30, 29, 30, 29, 30, 29, 30, 29, 30 ];
	var SMon =[ 'ဂိတုစဲ', 'ဂိတုပသာ္', 'ဂိတုေဇွ္', 'ဂိတုဒဂိုန္', 'ဂိတုခႜဲသ႘', 'ဂိတုဘတ္', 'ဂိတု၀ွ္', 'ဂိတုကထိုန္', 'ဂိတုေျမကၠသႝု', 'ဂိတုပုဟ္', 'ဂိတုမာ္', 'ဂိတုဖ၀္ရဂိုန္', 'ဂိတုစဲ', 'ဂိတုပသာ္', 'ဂိတုေဇွ္' ];
	var DMon =['ဂိတုစဲ', 'ဂိတုပသာ္', 'ဂိတုေဇွ္', 'ဂိတု ပ-ဒဂိုန္', 'ဂိတု ဒု-ဒဂိုန္', 'ဂိတုခႜဲသ႘', 'ဂိတုဘတ္', 'ဂိတု၀ွ္', 'ဂိတုကထိုန္', 'ဂိတုေျမကၠသုႝ', 'ဂိတုပုဟ္', 'ဂိတုမာ္', 'ဂိတုဖ၀္ရဂိုန္', 'ဂိတုစဲ', 'ဂိတုပသာ္' ];
	var Tot = Totaldays(day, month, Year, 0, 0);
	Tyear = Math.abs(Year);
	
	if ((Tyear % 4 == 0) && (Tyear % 100 != 0) || Tyear % 400 == 0)
		Cyear[11] = 335;
	month -= 4;
	if (month < 0) {
		month += 12;
		if (Year <= 0)
			Year++;
		else
			Year--;

	}
	if (Year == 0)
		Year = -1;
	Tyear = Year;
	if (Tyear <= -1)
		Year++;

	My = Year + 3101;
	aTartday = Math.floor((My * 365.2587565));
	Odays = My * 11.06483;
	Overdays = Math.floor(Odays % 30.0);

	Firstday = aTartday - Overdays;
	Marthday = Math.floor(Totaldays(30, 3, Tyear, 0, 0));
	Zy = Number(Math.floor((Marthday - Firstday)));

	total = Zy + Cyear[month] + day;

	Mo = month;

	MMY = Wa;

	if (Wa == 0) {

		total -= SMyear[month];
		if (total > S[month]) {
			total -= S[month];
			month++;
			if (month > 12) month -= 12;
			Mo = month;
		}
		MDay = S[month] - 15;

	} else if (Wa == 1) {
		total -= DMyear[month];
		if (total > D[month]) {
			total -= D[month];
			month++;
			if (month > 12) month -= 12;
			Mo = month;
		}
		MDay = D[month] - 15;
	} else {
		total -= DDMyear[month];
		if (total > DD[month]) {
			total -= DD[month];
			month++;
			if (month > 12) month -= 12;
			Mo = month;
		}
		MDay = DD[month] - 15;
	}
	MMM = Mo;
	if (SunTransist(Year, Tot) == 1)
		ResY = Year - 638;
	else if (SunTransist(Year, Tot) == 0)
		ResY = Year - 639;

	ResD = total;
	if (ResD <= 0) {
		Mo--;
		if (Mo < 0) Mo += 12;
		if (Wa == 0) ResD += S[Mo];
		else if (Wa == 1) ResD += D[Mo];
		else ResD += DD[Mo];
	}
	if(ResD==30){
		ResD=15;
		NameHm = ' အိုတ္၊ ';
	}else if (ResD > 15) {
		ResD -= 15;
		NameHm = ' ေစြက္၊ ';
	} else if (ResD == 15) {
		NameHm = ' ေပင္၊ ';
	} else {
		NameHm = ' မံက္၊ ';
	}

	var Yres = ResY;

	if (Wa == 0)
		NameMo = SMon[Mo];
	else
		NameMo = DMon[Mo];


	if (Yres < 639)
		ResY += 3739;

	mr.MMon = Mo;
	mr.HMonth = NameHm;
	mr.Mday = ResD;
	mr.MMonth = NameMo;
	mr.Myear = ResY;
	mr.typeyear = MMY;
	mr.aTartday = aTartday;
	mr.Firstday = Firstday;
	mr.Odays = Odays;
	mr.Overdays = Overdays;
	mr.Marthday = Marthday;

	return mr;
}

var d=new Date();

var weekday=new Array(7);
weekday[0]="တၛဲအဒိုတ္";
weekday[1]="တၛဲစန္";
weekday[2]="တၛဲအငၛာ";
weekday[3]="တၛဲဗုဒၶ၀ါ";
weekday[4]="တၛဲၿဗဵတိ";
weekday[5]="တၛဲသိုက္";
weekday[6]="တၛဲသၛိသ၀္";
var mr=SuraMyear(d.getDate(),d.getMonth()+1,d.getFullYear(),0);

md=function(x){return String(x).replace(/[\d]/g,function (x){return String.fromCharCode(x.charCodeAt(0)+0x1010)})}

document.write('သကၠရာဇ္ဍဳင္ '+md(mr.Myear)+' သှာံ၊ '+mr.MMonth+" "+(mr.Mday!=15?" "+md(mr.Mday)+' ':'')+mr.HMonth  + weekday[d.getDay()]);