(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,a){t.exports={contact:"Contact_contact__1m2re",button:"Contact_button__1wUL0"}},13:function(t,e,a){t.exports={appear:"transitions_appear__3JmJR",appearActive:"transitions_appearActive__3Yc8C",enter:"transitions_enter__Y__Sk",enterActive:"transitions_enterActive__2z536",exit:"transitions_exit__34Idt",exitActive:"transitions_exitActive__3Ul1h"}},14:function(t,e,a){t.exports={filterContainer:"Filter_filterContainer__2eDOn",filterName:"Filter_filterName__2ZMlt",filterField:"Filter_filterField__32LCR"}},18:function(t,e,a){t.exports={title:"Appbar_title__1hL3J",header:"Appbar_header__P0ILF"}},24:function(t,e,a){t.exports={contactList:"ContactList_contactList__3MzlG",contact:"ContactList_contact__3ZIyH",button:"ContactList_button__1RuFy"}},31:function(t,e,a){t.exports=a(43)},41:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),i=a(4),l=(a(41),a(42),function(t){var e=t.children;return c.a.createElement("div",{className:"Layout"}," ",e)}),m=a(18),u=a.n(m),s=a(44),_=a(13),b=a.n(_),f=function(){return c.a.createElement("header",{className:u.a.header},c.a.createElement(s.a,{in:!0,appear:!0,classNames:b.a,timeout:500},c.a.createElement("h1",{className:u.a.title},"Phonebook")))},d=a(7),p=a(21),h=a(22),v=a(27),C=a(25),F=a(5),E=a(45),O={addContact:Object(F.b)("contacts/add",(function(t,e){return{payload:{contact:{id:Object(E.a)(),name:t,number:e}}}})),removeContact:Object(F.b)("contacts/remove"),changeFilter:Object(F.b)("contacts/filter")},j=a(8),N=a.n(j),g=function(t){Object(v.a)(a,t);var e=Object(C.a)(a);function a(){var t;Object(p.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var a=e.target,n=a.name,c=a.value;t.setState(Object(d.a)({},n,c))},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.name,c=a.number;n&&c&&(t.props.onAddContact(n,c),t.setState({name:"",number:""}))},t}return Object(h.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:N.a.contactForm,onSubmit:this.handleSubmit},c.a.createElement("label",{htmlFor:"name",className:N.a.contactFormItem},"Name"),c.a.createElement("input",{className:N.a.contactFormItem,type:"text",id:"name",name:"name",value:e,onChange:this.handleChange}),c.a.createElement("label",{htmlFor:"phone",className:N.a.contactFormItem},"Phone"),c.a.createElement("input",{className:N.a.contactFormItem,type:"text",id:"phone",name:"number",value:a,onChange:this.handleChange}),c.a.createElement("button",{className:N.a.contactBtn},"Add contact")))}}]),a}(n.Component),y={onAddContact:O.addContact},x=Object(i.b)(null,y)(g),L=a(46),A=a(23),I=a(11),k=a.n(I),w=Object(i.b)((function(t,e){var a=t.contacts.items.find((function(t){return t.id===e.id}));return Object(A.a)({},a)}),(function(t,e){return{onRemove:function(){return t(O.removeContact(e.id))}}}))((function(t){var e=t.name,a=t.number,n=t.onRemove;return c.a.createElement("li",{className:k.a.contact},c.a.createElement("p",{className:k.a.contactData},e),c.a.createElement("p",{className:k.a.contactData},a),c.a.createElement("button",{className:k.a.button,onClick:n},"X"))})),S=a(24),J=a.n(S),R=Object(i.b)((function(t){var e=t.contacts,a=e.items,n=e.filter.toLowerCase();return{contacts:a.filter((function(t){return t.name.toLowerCase().includes(n)}))}}))((function(t){var e=t.contacts;return c.a.createElement(L.a,{component:"ul",className:J.a.contactList},e.map((function(t){return c.a.createElement(s.a,{classNames:b.a,timeout:200,key:Object(E.a)()},c.a.createElement(w,{id:t.id}))})))})),B=a(14),D=a.n(B),P={onChangeFilter:O.changeFilter},z=Object(i.b)((function(t){return{value:t.contacts.filter}}),P)((function(t){var e=t.value,a=t.onChangeFilter;return c.a.createElement("div",{className:D.a.filterContainer},c.a.createElement("label",{className:D.a.filterName,htmlFor:"filter"},"Find contacts by name"),c.a.createElement("input",{className:D.a.filterField,type:"text",value:e,onChange:function(t){return a(t.target.value)},id:"filter"}))}));var M,U=function(){return c.a.createElement(l,null,c.a.createElement(f,null),c.a.createElement(x,null),c.a.createElement(z,null),c.a.createElement(R,null))},Y=a(26),Z=a(3),G=Object(F.c)([],(M={},Object(d.a)(M,O.addContact,(function(t,e){return[].concat(Object(Y.a)(t),[e.payload.contact])})),Object(d.a)(M,O.removeContact,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),M)),H=Object(F.c)("",Object(d.a)({},O.changeFilter,(function(t,e){return e.payload}))),K=Object(Z.c)({items:G,filter:H}),Q=Object(F.a)({reducer:{contacts:K}});o.a.render(c.a.createElement(i.a,{store:Q},c.a.createElement(U,null)),document.getElementById("root"))},8:function(t,e,a){t.exports={contactForm:"ContactForm_contactForm__OrlO3",contactFormItem:"ContactForm_contactFormItem__20OVP",contactBtn:"ContactForm_contactBtn__1QKp9"}}},[[31,1,2]]]);
//# sourceMappingURL=main.c63b47aa.chunk.js.map