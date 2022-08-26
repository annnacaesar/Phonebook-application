"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[624],{7624:function(n,t,e){e.r(t),e.d(t,{default:function(){return R}});var r,o,i,a,l,c,s,d,x,p,u,h,m,g=e(168),b=e(7691),f=b.ZP.div(r||(r=(0,g.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\t/* padding: 15px; */\n\twidth: 440px;\n\t/* box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25); */\n\t/* background-color: var(--background-color); */\n\t&:not(:last-child) {\n\t\tmargin-right: 5px;\n\t}\n"]))),Z=(b.ZP.h1(o||(o=(0,g.Z)(["\n\ttext-align: center;\n\tfont-size: 72px;\n"]))),b.ZP.div(i||(i=(0,g.Z)(["\n\ttext-align: center;\n\tfont-size: 28px;\n"]))),e(5650)),v=e(5705),j=e(5206),y=(0,b.ZP)(v.l0)(a||(a=(0,g.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n"]))),P=b.ZP.div(l||(l=(0,g.Z)(["\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tmargin: 10px 0 10px 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\n\t& label {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tfont-size: 22px;\n\t\tcolor: var(--color-label);\n\t\tmargin-bottom: 15px;\n\n\t\t&:not(:last-child) {\n\t\t\tmargin-right: 10px;\n\t\t}\n\t}\n"]))),w=(0,b.ZP)(v.Bc)(c||(c=(0,g.Z)(["\n\tfont-size: 14px;\n\tcolor: var(--color-warning);\n"]))),C=(0,b.ZP)(v.gN)(s||(s=(0,g.Z)(["\n\tbackground-color: var(--color-input);\n\twidth: 200px;\n\theight: 40px;\n\tmargin: 0;\n\tpadding: 0 15px 0 15px;\n\tborder-radius: 5px;\n"]))),k=b.ZP.button(d||(d=(0,g.Z)(["\n\twidth: 200px;\n\theight: 40px;\n\tborder-radius: 5px;\n\tcolor: var(--color-button);\n\tbackground-color: inherit;\n\tborder: 1px solid var(--color-button);\n"]))),z=e(1089),_=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,A=/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,N=function(){return z.Ry().shape({name:z.Z_().matches(A,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),number:z.Z_().matches(_,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()})},F=e(9434),I=e(5987),L=e(184),M={name:"",number:""},V=function(){var n=(0,F.I0)(),t=(0,F.v9)(I.lP.getAllContacts);return(0,L.jsx)(v.J9,{initialValues:M,onSubmit:function(e,r){var o=r.resetForm;console.log(e),t.find((function(n){return n.name.toLowerCase().includes(e.name.toLowerCase())}))?j.Am.info("".concat(e.name," is already in contact")):n(I.mh.addContact(e)),o()},validationSchema:N,children:function(n){n.errors,n.touched,n.isValidating;return(0,L.jsxs)(y,{children:[(0,L.jsxs)(P,{children:[(0,L.jsxs)("label",{children:[(0,L.jsx)(C,{type:"text",name:"name"}),"Name",(0,L.jsx)(w,{component:"div",name:"name"})]}),(0,L.jsxs)("label",{children:[(0,L.jsx)(C,{type:"tel",name:"number"}),"Number phone",(0,L.jsx)(w,{component:"div",name:"number"})]})]}),(0,L.jsx)(k,{type:"submit",children:"ADD CONTACT"})]})}})},q=e(2791),B=b.ZP.input(x||(x=(0,g.Z)(["\nbackground-color: var(--color-input);\nheight: 40px;\nmargin: 0;\npadding: 0 15px 0 15px;\nborder-radius: 5px;\n\n&:not(:last-child){\n\tmargin-right: 10px;\n}\n"]))),D=b.ZP.label(p||(p=(0,g.Z)(["\nmargin: 10px 0 10px 0;\ndisplay: flex;\nflex-direction: column;\nfont-size: 22px;\ncolor: var(--color-label);\n"]))),J=function(){var n=(0,F.I0)(),t=(0,F.v9)(I.lP.getfilter);return(0,L.jsxs)(D,{children:[(0,L.jsx)(B,{type:"text",value:t,onChange:function(t){console.log(t.target.value),n((0,I.M6)(t.target.value))}}),"Find contact by name"]})},S=b.ZP.li(u||(u=(0,g.Z)(["\n\t&:not(:last-child) {\n\t\tmargin-bottom: 10px;\n\t}\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tfont-size: 24px;\n"]))),T=b.ZP.p(h||(h=(0,g.Z)(["\n\tmargin-right: 10px;\n\tfont-size: 20px;\n"]))),$=b.ZP.button(m||(m=(0,g.Z)(["\n\tpadding: 0 5px 5px 5px;\n\tfont-size: 30px;\n\twidth: 40px;\n\tbackground-color: inherit;\n\tborder: 1px solid var(--color-button);\n\tborder-radius: 5px;\n\tcolor: var(--color-button);\n"]))),E=function(){var n=(0,F.I0)(),t=(0,F.v9)(I.lP.getVisibleContacts);return(0,L.jsx)("ul",{children:t&&t.map((function(t){var e=t.id,r=t.name,o=t.number;return(0,L.jsxs)(S,{children:[(0,L.jsxs)(T,{children:[r,": ",o]}),(0,L.jsx)($,{type:"button",onClick:function(){return function(t){return n(I.mh.deleteContact(t))}(e)},children:"x"})]},e)}))})},O=e(4289),R=function(){var n=(0,F.I0)(),t=(0,F.v9)(O.M),e=(0,F.v9)(I.lP.getLoading);return(0,q.useEffect)((function(){t&&n(I.mh.fetchContacts())}),[n,t]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(f,{children:(0,L.jsx)(V,{})}),(0,L.jsxs)(f,{children:[e&&(0,L.jsx)(Z.Z1,{}),(0,L.jsx)(J,{}),(0,L.jsx)(E,{})]})]})}}}]);
//# sourceMappingURL=624.2fc3cdcf.chunk.js.map