var entered = "?";var wrong=0;var right=0;var index=0;var myWord="";var ac=new Image(); ac.src="ac.png";var bc=new Image(); bc.src="bc.png";var cc=new Image(); cc.src="cc.png";var dc=new Image(); dc.src="dc.png";var ec=new Image(); ec.src="ec.png";var fc=new Image(); fc.src="fc.png";var gc=new Image(); gc.src="gc.png";var hc=new Image(); hc.src="hc.png";var ic=new Image(); ic.src="ic.png";var jc=new Image(); jc.src="jc.png";var jc=new Image(); jc.src="jc.png";var kc=new Image(); kc.src="kc.png";var lc=new Image(); lc.src="lc.png";var mc=new Image(); mc.src="mc.png";var nc=new Image(); nc.src="nc.png";var oc=new Image(); oc.src="oc.png";var pc=new Image(); pc.src="pc.png";var qc=new Image(); qc.src="qc.png";var rc=new Image(); rc.src="rc.png";var sc=new Image(); sc.src="sc.png";var tc=new Image(); tc.src="tc.png";var uc=new Image(); uc.src="uc.png";var wc=new Image(); wc.src="wc.png";var xc=new Image(); xc.src="xc.png";var yc=new Image(); yc.src="yc.png";var zc=new Image(); zc.src="zc.png";var all=new Array("APPLE","ORANGE","ELEPHANT","COMPUTER","FRIDGE","BEER","OBEDIENT");var star=new Image();star.src="star.jpg";
function start()
{
	right=0;
	entered="?";
	wrong=0;
	setMyWord();
	figUpdate();
	show();
	parent.FIG.document.close();
	parent.FIG.document.open();
	parent.FIG.document.write("<html><body bgcolor='black'><center>");
	parent.FIG.document.write("<img src='star.jpg'>");
	parent.FIG.document.write("</center></body></html>");
	parent.WORD.document.close();
	parent.WORD.document.open();
	parent.WORD.document.write("<html><body bgcolor='black'>");
	for(var i=0;i<myWord.length;i++)
	{					
		parent.WORD.document.write("<font size='20' color='red'><b><i>?</i></b></font>");
	}
	parent.WORD.document.write("</body></html>");
}
function playChar(c)
{
	if (entered == "" || entered.indexOf(c) == -1) 
	{
		if (myWord.indexOf(c) == -1) 	// Wrong guess
			wrong ++;	    
		entered += c;	//making it string
		fUpdate();
		figUpdate();
		if (right == myWord.length) 
		{
			parent.FIG.document.close();
			parent.FIG.document.open();
			parent.FIG.document.write("<html><body bgcolor='black'><center>");
			parent.FIG.document.write("<img src='done.jpg'>");
			parent.FIG.document.write("</center></body></html>");
			hide();
		}	
		else if (wrong == 6) 
		{
			hide();
			alert("Your"+wrong+" turns are over and you have lost. The correct word is " + myWord +". click on 'NEW WORD' button to continue the game");
		}
	}
	else 
		window.status = "Already played";
}
function show()
{
	if(document.getElementById)
		buttons.style.visibility="visible";
	document.a.src="1.png";document.b.src="2.png";document.c.src="3.png";document.d.src="4.png";document.e.src="5.png";document.f.src="6.png";document.g.src="7.png";document.h.src="8.png";document.i.src="9.png";document.j.src="10.png";document.k.src="11.png";document.l.src="12.png";document.m.src="13.png";document.n.src="14.png";document.o.src="15.png";document.p.src="16.png";document.q.src="17.png";document.r.src="18.png";document.s.src="19.png";document.t.src="20.png";document.u.src="21.png";document.v.src="22.png";document.w.src="23.png";document.x.src="24.png";document.y.src="25.png";document.z.src="26.png";
}
function hide()
{
	if(document.getElementById)
		buttons.style.visibility="hidden";
}
function setMyWord()
{
	myWord=all[index];
	index ++;
	if(index==7)
		index=0;
	return myWord;
}
function figUpdate()
{
	parent.FIG.document.close();
	parent.FIG.document.open();
	parent.FIG.document.write("<html><body bgcolor='black'><center>");
	if(wrong==1) parent.FIG.document.write("<img src='start.jpg'>");
	else if(wrong==2) parent.FIG.document.write("<img src='first.png'>");
	else if(wrong==3) parent.FIG.document.write("<img src='second.png'>");
	else if(wrong==4) parent.FIG.document.write("<img src='third.png'>");
	else if(wrong==5) parent.FIG.document.write("<img src='fourth.png'>");
	else if(wrong==6) parent.FIG.document.write("<img src='final.jpg'>");
	parent.FIG.document.write("</center></body></html>");
}
function fUpdate()
{
	parent.WORD.document.close();
	parent.WORD.document.open();
	parent.WORD.document.write("<html><body bgcolor='black'><font size='20' color='red'><b><i>");
	right = 0;
	for(var i=0;i < myWord.length;i++) 
	{
		if (entered.indexOf(myWord.charAt(i)) != -1) 
		{
			right += 1;
			parent.WORD.document.write(myWord.charAt(i));
		}
		else
			parent.WORD.document.write("?");
	}
	parent.WORD.document.write("</i></b></font></body></html>");
}