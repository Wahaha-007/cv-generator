(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),u=a(7),s=a(2),i=a(3),l=a(5),h=a(4),d=a(6),p=a(0),j=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).handleChange=function(t){n.setState(Object(d.a)({},t.target.name,t.target.value),(function(){n.props.onChangeData(n.state.key,n.state)}))},n.state={key:n.props.index,firstname:"",lastname:"",title:"",address:"",phone:"",email:"",description:""},n}return Object(i.a)(a,[{key:"render",value:function(){var t=this;return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{value:this.state.firstname,onChange:function(e){return t.handleChange(e)},type:"text",name:"firstname",placeholder:"First Name"}),Object(p.jsx)("input",{value:this.state.lastname,onChange:function(e){return t.handleChange(e)},type:"text",name:"lastname",placeholder:"Last Name"}),Object(p.jsx)("input",{value:this.state.title,onChange:function(e){return t.handleChange(e)},type:"text",name:"title",placeholder:"Title"}),Object(p.jsx)("input",{value:this.state.address,onChange:function(e){return t.handleChange(e)},type:"text",name:"address",placeholder:"Address"}),Object(p.jsx)("input",{value:this.state.phone,onChange:function(e){return t.handleChange(e)},type:"text",name:"phone",placeholder:"Phone No."}),Object(p.jsx)("input",{value:this.state.email,onChange:function(e){return t.handleChange(e)},type:"text",name:"email",placeholder:"E-mail"}),Object(p.jsx)("input",{value:this.state.description,onChange:function(e){return t.handleChange(e)},type:"text",name:"description",placeholder:"Description"})]})})}}]),a}(n.Component),b=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(t){return Object(s.a)(this,a),e.call(this,t)}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h1",{children:[this.props.Personal.firstname,"  ",this.props.Personal.lastname]}),Object(p.jsx)("h3",{children:this.props.Personal.title}),Object(p.jsx)("h3",{children:this.props.Personal.address}),Object(p.jsx)("p",{children:Object(p.jsxs)("i",{children:["Tel : ",this.props.Personal.phone]})}),Object(p.jsx)("p",{children:Object(p.jsxs)("i",{children:["E-mail : ",this.props.Personal.email]})}),Object(p.jsx)("p",{children:Object(p.jsxs)("i",{children:["Synopsis : ",this.props.Personal.description]})})]})}}]),a}(n.Component),O=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).handleChange=function(t){n.setState(Object(d.a)({},t.target.name,t.target.value),(function(){n.props.onChangeData(n.state.key,n.state)}))},n.state={key:n.props.index,school:"",degree:"",subject:"",efrom:"",eto:""},n}return Object(i.a)(a,[{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{value:this.state.school,onChange:function(e){return t.handleChange(e)},type:"text",name:"school",placeholder:"Shool"}),Object(p.jsx)("input",{value:this.state.degree,onChange:function(e){return t.handleChange(e)},type:"text",name:"degree",placeholder:"Degree"}),Object(p.jsx)("input",{value:this.state.subject,onChange:function(e){return t.handleChange(e)},type:"text",name:"subject",placeholder:"Subject"}),Object(p.jsx)("input",{value:this.state.efrom,onChange:function(e){return t.handleChange(e)},type:"text",name:"efrom",placeholder:"From"}),Object(p.jsx)("input",{value:this.state.eto,onChange:function(e){return t.handleChange(e)},type:"text",name:"eto",placeholder:"To"})]}),Object(p.jsx)("button",{className:"delButton",onClick:function(e){return t.props.onDel(t.state.key)},children:"Delete"})]})}}]),a}(n.Component),y=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(t){return Object(s.a)(this,a),e.call(this,t)}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["From : ",this.props.Edu.efrom,"  - To : ",this.props.Edu.eto]}),Object(p.jsxs)("p",{children:["School : ",this.props.Edu.school,", Degree : ",this.props.Edu.degree,", Subject : ",this.props.Edu.subject]})]})}}]),a}(n.Component),f=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).handleChange=function(t){n.setState(Object(d.a)({},t.target.name,t.target.value),(function(){n.props.onChangeData(n.state.key,n.state)}))},n.state={key:n.props.index,company:"",position:"",role:"",efrom:"",eto:""},n}return Object(i.a)(a,[{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{value:this.state.company,onChange:function(e){return t.handleChange(e)},type:"text",name:"company",placeholder:"Company"}),Object(p.jsx)("input",{value:this.state.position,onChange:function(e){return t.handleChange(e)},type:"text",name:"position",placeholder:"Position"}),Object(p.jsx)("input",{value:this.state.role,onChange:function(e){return t.handleChange(e)},type:"text",name:"role",placeholder:"Role"}),Object(p.jsx)("input",{value:this.state.efrom,onChange:function(e){return t.handleChange(e)},type:"text",name:"efrom",placeholder:"From"}),Object(p.jsx)("input",{value:this.state.eto,onChange:function(e){return t.handleChange(e)},type:"text",name:"eto",placeholder:"To"})]}),Object(p.jsx)("button",{className:"delButton",onClick:function(e){return t.props.onDel(t.state.key)},children:"Delete"})]})}}]),a}(n.Component),k=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(t){return Object(s.a)(this,a),e.call(this,t)}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["From : ",this.props.Work.efrom,"  - To : ",this.props.Work.eto]}),Object(p.jsxs)("p",{children:["Company : ",this.props.Work.company,", Position : ",this.props.Work.position,", Role : ",this.props.Work.role]})]})}}]),a}(n.Component),x=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(s.a)(this,a),(t=e.call(this)).view=function(){console.log("============"),console.log(t.state.arrayInputPer),console.log(t.state.arrayDataPer),console.log(t.state.arrayOutputPer)},t.outputPerData=function(){t.setState({arrayOutputPer:t.state.arrayDataPer.map((function(t){return Object(p.jsx)(b,{Personal:t},t.key)}))})},t.changePerData=function(e,a){var n=Object(u.a)(t.state.arrayDataPer);n[t.state.arrayDataPer.findIndex((function(t){return Number(t.key)===e}))]=a,t.setState({arrayDataPer:n},(function(){t.outputPerData()}))},t.addPerClick=function(e){var a={key:t.state.countPer,firstname:"",lastname:"",title:"",address:"",phone:"",email:"",description:""};t.setState((function(e){return{arrayInputPer:t.state.arrayInputPer.concat(Object(p.jsx)(j,{index:t.state.countPer,onDel:t.delPerClick,onChangeData:t.changePerData},t.state.countPer)),arrayDataPer:t.state.arrayDataPer.concat(a),arrayOutputPer:t.state.arrayOutputPer.concat(Object(p.jsx)(b,{Personal:a},t.state.countPer)),countPer:t.state.countPer+1}}))},t.outputEduData=function(){t.setState({arrayOutputEdu:t.state.arrayDataEdu.map((function(t){return Object(p.jsx)(y,{Edu:t},t.key)}))})},t.changeEduData=function(e,a){var n=Object(u.a)(t.state.arrayDataEdu);n[t.state.arrayDataEdu.findIndex((function(t){return Number(t.key)===e}))]=a,t.setState({arrayDataEdu:n},(function(){t.outputEduData()}))},t.delEduClick=function(e){t.setState((function(a){return{arrayInputEdu:t.state.arrayInputEdu.filter((function(t){return Number(t.key)!==e})),arrayDataEdu:t.state.arrayDataEdu.filter((function(t){return Number(t.key)!==e})),arrayOutputEdu:t.state.arrayOutputEdu.filter((function(t){return Number(t.key)!==e}))}}))},t.addEduClick=function(e){var a={key:t.state.countEdu,school:"",degree:"",subject:"",from:"",to:""};t.setState((function(e){return{arrayInputEdu:t.state.arrayInputEdu.concat(Object(p.jsx)(O,{index:t.state.countEdu,onDel:t.delEduClick,onChangeData:t.changeEduData},t.state.countEdu)),arrayDataEdu:t.state.arrayDataEdu.concat(a),arrayOutputEdu:t.state.arrayOutputEdu.concat(Object(p.jsx)(y,{Edu:a},t.state.countEdu)),countEdu:t.state.countEdu+1}}))},t.outputWorkData=function(){t.setState({arrayOutputWork:t.state.arrayDataWork.map((function(t){return Object(p.jsx)(k,{Work:t},t.key)}))})},t.changeWorkData=function(e,a){var n=Object(u.a)(t.state.arrayDataWork);n[t.state.arrayDataWork.findIndex((function(t){return Number(t.key)===e}))]=a,t.setState({arrayDataWork:n},(function(){t.outputWorkData()}))},t.delWorkClick=function(e){t.setState((function(a){return{arrayInputWork:t.state.arrayInputWork.filter((function(t){return Number(t.key)!==e})),arrayDataWork:t.state.arrayDataWork.filter((function(t){return Number(t.key)!==e})),arrayOutputWork:t.state.arrayOutputWork.filter((function(t){return Number(t.key)!==e}))}}))},t.addWorkClick=function(e){var a={key:t.state.countWork,company:"",position:"",role:"",from:"",to:""};t.setState((function(e){return{arrayInputWork:t.state.arrayInputWork.concat(Object(p.jsx)(f,{index:t.state.countWork,onDel:t.delWorkClick,onChangeData:t.changeWorkData},t.state.countWork)),arrayDataWork:t.state.arrayDataWork.concat(a),arrayOutputWork:t.state.arrayOutputWork.concat(Object(p.jsx)(k,{Work:a},t.state.countWork)),countWork:t.state.countWork+1}}))},t.state={countPer:0,arrayInputPer:[],arrayDataPer:[],arrayOutputPer:[],countEdu:0,arrayInputEdu:[],arrayDataEdu:[],arrayOutputEdu:[],countWork:0,arrayInputWork:[],arrayDataWork:[],arrayOutputWork:[]},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.addPerClick(),this.addEduClick(),this.addWorkClick()}},{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{className:"content",children:[Object(p.jsxs)("div",{className:"left",children:[Object(p.jsx)("h1",{children:Object(p.jsx)("i",{children:"Resume input section"})}),Object(p.jsx)("button",{onClick:this.view,children:"View"}),Object(p.jsx)("h2",{children:"Personal data :"}),this.state.arrayInputPer,Object(p.jsx)("hr",{}),Object(p.jsxs)("h2",{children:["Work Experience data : ",Object(p.jsx)("button",{onClick:function(e){return t.addWorkClick(e)},children:"+"})]}),this.state.arrayInputWork,Object(p.jsx)("hr",{}),Object(p.jsxs)("h2",{children:["Education data : ",Object(p.jsx)("button",{onClick:function(e){return t.addEduClick(e)},children:"+"})]}),this.state.arrayInputEdu]}),Object(p.jsxs)("div",{className:"right",children:[this.state.arrayOutputPer,Object(p.jsx)("h2",{children:"Work Experience data :"}),this.state.arrayOutputWork,Object(p.jsx)("h2",{children:"Education data :"}),this.state.arrayOutputEdu]})]})}}]),a}(n.Component);a(15);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.21f4587d.chunk.js.map