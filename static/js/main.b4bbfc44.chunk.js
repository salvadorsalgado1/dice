(this.webpackJsonpmath=this.webpackJsonpmath||[]).push([[0],{28:function(e,t,a){e.exports=a(43)},33:function(e,t,a){},39:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/dicesm.3278a4d7.jpg"},43:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(23),o=a.n(r),c=(a(33),a(12)),i=a(13),s=a(15),m=a(14),u=a(16),d=a(48),E=a(49),h=a(7),p={width:"100%",justifyContent:"center",boxShadow:"5px 4px 3px black"},b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Title"},n.a.createElement(d.a,{style:p},n.a.createElement(d.a.Body,null,n.a.createElement("p",{className:"lead"},n.a.createElement("strong",null,"Statistics and Probability")),n.a.createElement("p",{className:"lead"},"Math 352"),n.a.createElement("p",{className:"lead"},"Spring 2020"),n.a.createElement("hr",null),n.a.createElement("p",{className:"lead"},"Daniel Ramirez"),n.a.createElement("p",{className:"lead"},"Juan Zarate"),n.a.createElement("p",{className:"lead"},"Salvador Salgado"),n.a.createElement("hr",null),n.a.createElement(h.b,{to:"/dice"},n.a.createElement(E.a,{variant:"primary mr-4"},"Project")),n.a.createElement(h.b,{to:"/about"},n.a.createElement(E.a,{variant:"secondary"},"About")))))}}]),t}(n.a.Component),f=(a(39),a(10)),g=a(45),y=a(46),v=a(47),x={width:"100%",justifyContent:"center",boxShadow:"5px 4px 3px black"};var w=function(){return n.a.createElement("div",{className:"Question"},n.a.createElement(d.a,{style:x},n.a.createElement(d.a.Body,null,n.a.createElement("h3",null,"Project"),n.a.createElement("p",{className:"lead"},n.a.createElement("strong",null,"Question: "),"What is the probability that at least one pair  of fair Dice lands on 6, given that the sum of the Dice is i, i = 2, 3, \u2026, 12?"),n.a.createElement(h.b,{to:"/"},n.a.createElement(E.a,{variant:"secondary"},"Home")))))},k=a(20),S=a.n(k),N=a(44),C=[];function j(e){var t=1,a=1,l=0,n=0;if(e<6||e>12)return 0;for(t=1;t<=6;t++)for(a=1;a<=6;a++)t+a==e&&(n++,6!=t&&6!=a||l++);return 0==l?0:l/n.toFixed(3)}for(var T=2;T<=12;T++)console.log(" when sum is"+T+" is:"+j(T).toFixed(3)),C.push(j(T).toFixed(3));console.log(C);var R,A,H=function(e){return n.a.createElement("div",{className:"table"},n.a.createElement("h3",null,"Table"),n.a.createElement(N.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},n.a.createElement("caption",null,"Expected versus Experimental Values"),n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Sum"),n.a.createElement("th",null,"Expected"),n.a.createElement("th",null,"Experimental"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"2"),n.a.createElement("td",null,C[0]),n.a.createElement("td",null,e.two)),n.a.createElement("tr",null,n.a.createElement("td",null,"3"),n.a.createElement("td",null,C[1]),n.a.createElement("td",null,e.three)),n.a.createElement("tr",null,n.a.createElement("td",null,"4"),n.a.createElement("td",null,C[2]),n.a.createElement("td",null,e.four)),n.a.createElement("tr",null,n.a.createElement("td",null,"5"),n.a.createElement("td",null,C[3]),n.a.createElement("td",null,e.five)),n.a.createElement("tr",null,n.a.createElement("td",null,"6"),n.a.createElement("td",null,C[4]),n.a.createElement("td",null,e.six)),n.a.createElement("tr",null,n.a.createElement("td",null,"7"),n.a.createElement("td",null,C[5]),n.a.createElement("td",null,e.seven)),n.a.createElement("tr",null,n.a.createElement("td",null,"8"),n.a.createElement("td",null,C[6]),n.a.createElement("td",null,e.eight)),n.a.createElement("tr",null,n.a.createElement("td",null,"9"),n.a.createElement("td",null,C[7]),n.a.createElement("td",null,e.nine)),n.a.createElement("tr",null,n.a.createElement("td",null,"10"),n.a.createElement("td",null,C[8]),n.a.createElement("td",null,e.ten)),n.a.createElement("tr",null,n.a.createElement("td",null,"11"),n.a.createElement("td",null,C[9]),n.a.createElement("td",null,e.eleven)),n.a.createElement("tr",null,n.a.createElement("td",null,"12"),n.a.createElement("td",null,C[10]),n.a.createElement("td",null,e.twelve)))))},O=0,B=0,D=0,z=0,W=0,I=0,M=0,F=0,P=0,Z=0,q=0,L=0,J=0,Q=0,U=0,V=0,$=0,G=0,K=0,X=0,Y=0,_=0,ee=0,te=0,ae=0,le=0,ne=0,re=0,oe=0,ce=0,ie=0,se=0,me=0,ue=function(e){function t(){var e,a;Object(c.a)(this,t);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).chartRef=n.a.createRef(),a.state={value:1,probability:1,output:1,roll:10,chartRef:null,label:"Expected",data:{labels:["1","2","3","4","5","6","7","8"],datasets:{data:[1,2,3,4,5,6,7,8,9]}}},a.buttonRollHundredHandler=function(){a.setState({roll:100});var e=a.state.roll;console.log("roll: "+e),console.log(a.state.roll)},a.buttonRollThouHandler=function(){a.setState({roll:1e3}),console.log(a.state.roll)},a.buttonRollTenThousHandler=function(){a.setState({roll:1e4}),console.log(a.state.roll)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){console.log(this.state.roll);for(var e=0;e<this.state.roll;e++){R=Math.floor(6*Math.random()+1),A=Math.floor(6*Math.random()+1);var t=R+A;t>=2&&t<13&&(2===t&&(O++,6!==R&&6!==A||L++,ee=L/O),3===t&&(B++,6!==R&&6!==A||J++,te=J/B),4===t&&(D++,6!==R&&6!==A||Q++,ae=Q/D),5===t&&(z++,6!==R&&6!==A||U++,le=U/z),6===t&&(W++,6!==R&&6!==A||V++,ne=V/W),7===t&&(I++,6!==R&&6!==A||$++,re=$/I),8===t&&(M++,6!==R&&6!==A||G++,oe=G/M),9===t&&(F++,6!==R&&6!==A||K++,ce=K/F),10===t&&(P++,6!==R&&6!==A||X++,ie=X/P),11===t&&(Z++,6!==R&&6!==A||Y++,se=Y/Z),12===t&&(q++,6!==R&&6!==A||_++,me=_/q))}console.log("2: "+ee),console.log("3: "+te),console.log("4: "+ae),console.log("5: "+le),console.log("6: "+ne),console.log("7: "+re),console.log("8: "+oe),console.log("9: "+ce),console.log("10: "+ie),console.log("11: "+se),console.log("12: "+me);var a=this.chartRef.current.getContext("2d");new S.a(a,{type:"bar",data:{labels:[2,3,4,5,6,7,8,9,10,11,12],datasets:[{data:[0,0,0,0,0,.333,.4,.5,.667,1,1],label:"Expected",backgroundColor:"rgb(0, 200, 255)",borderColor:"rgb(0, 200, 255)"},{data:[ee,te,ae,le,ne,re,oe,ce,ie,se,me],label:"Experimental",backgroundColor:"rgb(255,99,71)",borderColor:"gray"}]},options:{repsonsive:!0,tooltips:{enabled:!1},scales:{yAxes:[{ticks:{min:0,max:1,stepSize:.1},beginAtZero:!0,scaleLabel:{display:!0,labelString:"Probability"}}],xAxes:[{scaleLabel:{display:!0,labelString:"Sum",beginAtZero:!0}}]},title:{display:!0,text:"Dice Rolls"}}})}},{key:"componentDidMount",value:function(){var e=this.chartRef.current.getContext("2d");new S.a(e,{type:"bar",data:{labels:[2,3,4,5,6,7,8,9,10,11,12],datasets:[{data:[0,0,0,0,0,.333,.4,.5,.667,1,1],label:"Expected",backgroundColor:"rgb(0, 200, 255)",borderColor:"rgb(0, 200, 255)"},{label:"Experimental",backgroundColor:"rgb(255,99,71)",borderColor:"gray",data:[]}]},options:{repsonsive:!0,tooltips:{enabled:!1},scales:{yAxes:[{ticks:{min:0,max:1,stepSize:.1},scaleLabel:{display:!0,labelString:"Probability",beginAtZero:!0}}],xAxes:[{scaleLabel:{display:!0,labelString:"Sum",beginAtZero:!0}}]},title:{display:!0,text:"Dice Rolls"}}})}},{key:"render",value:function(){return n.a.createElement("div",{className:"Data"},n.a.createElement(g.a,null,n.a.createElement(y.a,null,n.a.createElement(v.a,null,n.a.createElement(H,{two:ee,three:te,four:ae,five:le,six:ne,seven:re,eight:oe,nine:ce,ten:ie,eleven:se,twelve:me})),n.a.createElement(v.a,null,n.a.createElement("p",null,"Current Dice Rolls: ",this.state.roll),n.a.createElement("canvas",{id:"myChart",ref:this.chartRef}),n.a.createElement(E.a,{className:"mt-3",onClick:this.buttonRollHundredHandler,block:!0,variant:"primary"},"Roll 100 Times"),n.a.createElement(E.a,{className:"mt-3",onClick:this.buttonRollThouHandler,block:!0,variant:"primary"},"Roll 1000 Times"),n.a.createElement(E.a,{className:"mt-3",onClick:this.buttonRollTenThousHandler,block:!0,variant:"primary"},"Roll 10000 Times")))))}}]),t}(n.a.Component),de={width:"100%",justifyContent:"center",boxShadow:"3px 4px 3px darkgray"};var Ee=function(){return n.a.createElement("div",{className:"Calculate"},n.a.createElement(d.a,{style:de},n.a.createElement(d.a.Body,null,n.a.createElement("h2",null,"Calculate"),n.a.createElement(ue,null))))};var he=function(){return n.a.createElement("div",{className:"Dice"},n.a.createElement(g.a,null,n.a.createElement(y.a,{className:"mb-3"},n.a.createElement(v.a,{lg:12},n.a.createElement(w,null))),n.a.createElement(y.a,{className:"mb-3"},n.a.createElement(v.a,{lg:12},n.a.createElement(Ee,null)))))},pe=(a(42),{width:"100%",justifyContent:"center",boxShadow:"3px 4px 3px black"}),be={fontSize:"4em",color:"crimson"},fe=function(){return n.a.createElement("div",{className:"SectionOne"},n.a.createElement(d.a,{style:pe},n.a.createElement(d.a.Body,null,n.a.createElement("h2",null,"The Experiment"),n.a.createElement("p",null,"In order to get a better understanding of the type of data this question can generate, our team created a program to record every aspect of the experiment. We created two random generators ranging between 1-6. With every click of the button our \u201cdice\u201d would display the number we rolled and their sum. The program must be keeping track of the amount of times that a sum was rolled. Here they refer to the sum as i . It is important to keep track of the amount of times a specific value of i appears to calculate the probability of a 6 being rolled for that i  moving forward."),n.a.createElement("br",null),n.a.createElement("p",null,n.a.createElement("i",{style:be,class:"fas fa-dice fa-lg"})),n.a.createElement("br",null),n.a.createElement("p",null,"For all values of i ",n.a.createElement("strong",null,"< 7")," the probability of a six being rolled will remain at 0 ,trivially. For i \u2265 7, the way that the probability is calculated is that the program will keep tally how many times a specified value of i appears. Because it takes two dice to produce the sum, each roll will add two possibilities for the six to appear. Thus, our algorithm to calculate the probability that at least one of the dice lands on a six is to divide the amount of times a 6 appears on a roll for a specified i by the number of all times i has appeared multiplied by two (accounting for each of the dice.) "))))},ge={width:"100%",justifyContent:"center",boxShadow:"3px 4px 3px black"},ye={fontSize:"4em",color:"rgb(0, 168, 107)"},ve=function(){return n.a.createElement("div",{className:"SectionTwo"},n.a.createElement(d.a,{style:ge},n.a.createElement(d.a.Body,null,n.a.createElement("h2",null,"Theory"),n.a.createElement("p",null,"It is known that the sum of rolling two fair dice yields a finite set of possibilities. The smallest sum two dice can roll is a two and the largest being a 12. This projected through an experiment will produce a variety of outcomes versus the expected frequency of each sum. "),n.a.createElement("p",null,"But taking it a step further, we are interested in the frequency of a single value from either of the two dice. "),n.a.createElement("p",null,n.a.createElement("i",{style:ye,class:"fas fa-dice-six"})),n.a.createElement("p",null,"In particular, we are observing the amount of times a six was rolled from either dice to contribute to the two dice sum versus the total number of times that sum was achieved. "))))},xe={width:"100%",justifyContent:"center",boxShadow:"3px 4px 3px black"},we={fontSize:"4em",color:"gold"},ke={fontSize:"4em",color:"#15aabf"},Se={fontSize:"4em",color:"Tomato"},Ne={fontSize:"4em",color:"#3299CC"},Ce=function(){return n.a.createElement("div",{className:"SectionThree"},n.a.createElement(d.a,{style:xe},n.a.createElement(d.a.Body,null,n.a.createElement("h2",null,"About"),n.a.createElement("p",null,"In conclusion, this project demonstrates how expected values are not achieved in the dynamic nature of an experiment. We are concerned with a six arising, but there are other events simultaneously occurring influencing the outcome of the data. In essence, we are working with the conditional probability that a six dealt. Why conditional? Well in order for a six to even be possible, the sum has to be greater than 6 itself. Secondly, there are different combinations to achieve a sum. These two components are what govern the outcomes of our data."),n.a.createElement("span",{style:ke},n.a.createElement("i",{className:"fab fa-react mr-2"})),n.a.createElement("span",{style:Se},n.a.createElement("i",{class:"fab fa-html5 mr-2"})),n.a.createElement("span",{style:Ne},n.a.createElement("i",{class:"fab fa-css3-alt mr-2"})),n.a.createElement("span",{style:we},n.a.createElement("i",{class:"fab fa-js-square mr-2 ml-2"})),n.a.createElement(v.a,null,n.a.createElement(h.b,{to:"/"},n.a.createElement(E.a,{variant:"secondary"},"Home"))))))};var je=function(){return n.a.createElement("div",{className:"about lead"},n.a.createElement(g.a,null,n.a.createElement(y.a,{className:"mt-3"},n.a.createElement(v.a,{lg:12},n.a.createElement(fe,null))),n.a.createElement(y.a,{className:"mt-3"},n.a.createElement(v.a,{lg:12},n.a.createElement(ve,null))," "),n.a.createElement(y.a,{className:"mt-3 mb-5"},n.a.createElement(v.a,{lg:12},n.a.createElement(Ce,null)))))};var Te=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"Title"},n.a.createElement(h.a,null,n.a.createElement(f.c,null,n.a.createElement(f.a,{exact:!0,from:"/",component:b}),n.a.createElement(f.a,{path:"/dice",component:he}),n.a.createElement(f.a,{path:"/about",component:je})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(Te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.b4bbfc44.chunk.js.map