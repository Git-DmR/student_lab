(this.webpackJsonpstudent_lab=this.webpackJsonpstudent_lab||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),s=(n(19),n(20),n(9)),u=n(6),i=n(7),l=n(3),d=n(10),h=n(8),j=n(40),b=n(1),C=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Counter manager."}),Object(b.jsxs)("h2",{children:["Avalible counters : ",Object(b.jsx)("span",{children:e.totalCounters})]}),Object(b.jsx)(j.a,{color:"primary",onClick:e.addCounter,children:"Add Counter"}),Object(b.jsx)(j.a,{onClick:e.resetCounterManager,children:"Reset"}),Object(b.jsx)(j.a,{color:"secondary",onClick:e.removeCounter,children:"Del Counter"}),Object(b.jsx)("hr",{})]})},m=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Counter_Id: "+e.id}),Object(b.jsxs)("h2",{children:["Current value : ",Object(b.jsx)("span",{children:e.currentValue})]}),Object(b.jsx)(j.a,{variant:"contained",color:"primary",onClick:e.handleIncrement,children:"Increment"}),Object(b.jsx)(j.a,{variant:"contained",onClick:e.handleReset,children:"Reset"}),Object(b.jsx)(j.a,{variant:"contained",color:"secondary",onClick:e.handleDecrement,children:"Decrement"}),Object(b.jsx)("hr",{})]})},v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={currentValue:0,id:r.props.id},r.handleIncrement=r.handleIncrement.bind(Object(l.a)(r)),r.handleReset=r.handleReset.bind(Object(l.a)(r)),r.handleDecrement=r.handleDecrement.bind(Object(l.a)(r)),r}return Object(i.a)(n,[{key:"handleIncrement",value:function(){var e=this;this.setState((function(t){return{currentValue:e.state.currentValue+1}})),console.log("Counter #"+this.state.id+" has been incremented.")}},{key:"handleReset",value:function(){this.setState((function(e){return{currentValue:0}})),console.log("#"+this.state.id+" Counter has been reset.")}},{key:"handleDecrement",value:function(){var e=this;this.setState((function(t){return{currentValue:e.state.currentValue-1}})),console.log("#"+this.state.id+" Counter has been decremented.")}},{key:"componentDidMount",value:function(){console.log("#"+this.state.id+" Counter did mount.")}},{key:"componentWillUnmount",value:function(){console.log("#"+this.state.id+" Counter will unmount.")}},{key:"render",value:function(){var e={handleIncrement:this.handleIncrement,handleReset:this.handleReset,handleDecrement:this.handleDecrement,currentValue:this.state.currentValue,id:this.props.id};return Object(b.jsx)(m,Object(s.a)({},e))}}]),n}(a.a.Component),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={totalCounters:1,currentId:1,maxId:1},r.addCounter=r.addCounter.bind(Object(l.a)(r)),r.resetCounterManager=r.resetCounterManager.bind(Object(l.a)(r)),r.removeCounter=r.removeCounter.bind(Object(l.a)(r)),r}return Object(i.a)(n,[{key:"addCounter",value:function(){var e=this;this.setState((function(t){return{totalCounters:e.state.totalCounters+1,maxId:e.state.maxId+1}}))}},{key:"resetCounterManager",value:function(){this.setState((function(e){return{totalCounters:1,currentId:1,maxId:1}}))}},{key:"removeCounter",value:function(){var e=this;this.state.totalCounters>1&&this.setState((function(t){return{totalCounters:e.state.totalCounters-1,currentId:e.state.currentId+1}}))}},{key:"componentDidMount",value:function(){console.log("CounterManager ready to go.")}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.totalCounters;t+=1)e.push(t+this.state.currentId);var n=e.map((function(e){return Object(b.jsx)(v,{id:e},e)})),r={addCounter:this.addCounter,removeCounter:this.removeCounter,resetCounterManager:this.resetCounterManager,totalCounters:this.state.totalCounters};return Object(b.jsxs)("div",{children:[Object(b.jsx)(C,Object(s.a)({},r)),n]})}}]),n}(a.a.Component);var f=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(O,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),x()}},[[26,1,2]]]);
//# sourceMappingURL=main.7fc425de.chunk.js.map