_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{RNiq:function(e,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return T}));var t=s("nKUr"),n=s("o0o1"),c=s.n(n),r=s("HaE+"),i=s("rePB"),o=s("ODXe"),l=s("q1tI"),h=s("r9V7"),d=s.n(h),j=s("/eHF"),p=s.n(j),b=s("YFqc"),u=s.n(b),m=s("+Psc"),v=s("zuR4"),O=s("ZeBp"),x=s("80PL"),_=s("b0oO"),f=s("ulBK"),w=s("RIou"),g=s("dgNx");function y(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}function N(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?y(Object(s),!0).forEach((function(a){Object(i.a)(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):y(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function T(){var e=Object(m.b)(O.a),a=Object(o.a)(e,2),s=a[0],n=(a[1],Object(l.useRef)()),h=Object(l.useState)(!1),j=h[0],b=h[1],y=Object(l.useState)({name:"",phone:"",email:""}),T=y[0],k=y[1],P=function(e){var a=e.target.name,s=e.target.value;k(N(N({},T),{},Object(i.a)({},a,s)))},S=function(){var e=Object(r.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),b(!0),e.next=4,v.a.post("https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token",{username:"admin",password:"I6FR%0^hD@Z[@"}).then(function(){var e=Object(r.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("https://wpbackend.navisa.af/wp-json/wp/v2/rahrawan-counseling",{title:"User Enquiry - Rahrawan Travels Free Counseling",status:"publish",fields:{name:T.name,phone:T.phone,email:T.email}},{headers:{Authorization:"Bearer ".concat(a.data.token)}}).then((function(e){return b(!1),201===e.status?(s("Your message has been submitted successfully."),b(!1)):(s("There was an error trying to send your message, Please try again."),b(!1)),e.data})).catch((function(e){console.log(e),b(!1),s("There was an error trying to send your message, Please check your network connection and try again.")}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 4:k({name:"",phone:"",email:""});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(t.jsx)(x.a,{title:"Rahrawan Travels",canonical:"https://rahrawan.af/",descriptionContent:"Rahrawan Travels is a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible. We also help foreigners to have the best travel experience in Afghanistan.",jsonLD:'{ "@context": "https://schema.org", "@graph": [ { "@type": "WebSite", "@id": "https://rahrawan.af/#website", "url": "https://rahrawan.af/", "name": "Rahrawan Travels", "description": "a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible.", "publisher": { "@id": "https://rahrawan.af/#organization" } }, { "@type": "Organization", "@id": "https://rahrawan.af/#organization", "legalName": "Rahrawan Travels", "url": "https://rahrawan.af/", "logo": "https://rahrawan.af/images/Rahrawan-Travels.png" }, { "@type": "BreadcrumbList", "@id": "https://rahrawan.af/#breadcrumblist", "itemListElement": [ { "@type": "ListItem", "@id": "https://rahrawan.af/#listItem", "position": 1, "item": { "@type": "WebPage", "@id": "https://rahrawan.af/#item", "name": "Home", "description": "a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible.", "url": "https://rahrawan.af/" } } ] }, { "@type": "WebPage", "@id": "https://rahrawan.af/#webpage", "url": "https://rahrawan.af/", "name": "Rahrawan Travels", "description": "a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible.", "inLanguage": "en-US", "isPartOf": { "@id": "https://rahrawan.af/#website" }, "breadcrumb": { "@id": "https://rahrawan.af/#breadcrumblist" }, "datePublished":"2021-1-27T10:03:55+00:00", "dateModified":"2021-13-16T07:23:07+00:00" } ] }',children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsxs)("div",{className:"hero",children:[Object(t.jsx)(_.a,{active:"home"}),Object(t.jsx)("div",{className:"hero__text",children:Object(t.jsxs)(p.a,{up:!0,children:[Object(t.jsx)("h1",{className:"hero__text-title--sub",children:"welcome to rahrawan travels"}),Object(t.jsx)("h2",{className:"hero__text-title--main",children:"Your Success Journey Starts Here"}),Object(t.jsx)("a",{onClick:function(){n.current.scrollIntoView({behavior:"smooth"})},className:"btn hero__btn",children:"Register for Counseling"})]})})]}),Object(t.jsxs)("div",{className:"counseling",children:[Object(t.jsx)(p.a,{right:!0,children:Object(t.jsxs)("div",{className:"row counseling__info",children:[Object(t.jsxs)("div",{className:"col-1-of-3 counseling__wrap",children:[Object(t.jsx)("div",{className:"counseling__info--icon",children:Object(t.jsx)("i",{className:"flaticon-calendar"})}),Object(t.jsxs)("div",{className:"counseling__info--time",children:[Object(t.jsx)("span",{children:"Saturday - Thursday 08:00 - 4:00"}),Object(t.jsx)("span",{children:"Friday - CLOSED"})]})]}),Object(t.jsxs)("div",{className:"col-1-of-3 counseling__wrap",children:[Object(t.jsx)("div",{className:"counseling__info--icon",children:Object(t.jsx)("i",{className:"flaticon-contact"})}),Object(t.jsxs)("div",{className:"counseling__info--contact",children:[Object(t.jsx)("span",{children:"+93 780 87 57 87"}),Object(t.jsx)("span",{children:"info@rahrawan.af"})]})]}),Object(t.jsxs)("div",{className:"col-1-of-3 counseling__wrap",children:[Object(t.jsx)("div",{className:"counseling__info--icon",children:Object(t.jsx)("i",{className:"flaticon-pin"})}),Object(t.jsxs)("div",{className:"counseling__info--add",children:["Ansori Street, Shahri Now,",Object(t.jsx)("br",{})," Kabul, Afghanistan"]})]})]})}),Object(t.jsxs)("div",{className:"relative",ref:n,children:[Object(t.jsx)(p.a,{up:!0,children:Object(t.jsxs)("div",{className:"row counseling__appointment",children:[Object(t.jsx)("div",{className:"col-2-of-3 counseling__appointment-info",children:Object(t.jsx)("div",{children:Object(t.jsxs)(p.a,{left:!0,children:[Object(t.jsx)("h5",{className:"counseling__appointment-info--title",children:"register for free counseling"}),Object(t.jsx)("p",{className:"counseling__appointment-info--paragraph",children:"We will contact you within 1 working day"}),Object(t.jsx)("p",{className:"counseling__appointment-info--paragraph",style:{fontSize:"1.2rem",margin:"0"},children:"We are here to help you make the appropriate decision."})]})})}),Object(t.jsx)("div",{className:"counseling__appointment-form--wrap",children:Object(t.jsx)(p.a,{right:!0,children:Object(t.jsxs)("form",{onSubmit:S,className:"counseling__appointment-form",children:[Object(t.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(t.jsx)("input",{name:"name",type:"text",value:T.name,onChange:P,required:!0}),Object(t.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(t.jsx)("input",{name:"phone",type:"text",value:T.phone,onChange:P,required:!0}),Object(t.jsx)("label",{htmlFor:"email",children:"Email"}),Object(t.jsx)("input",{name:"email",type:"email",value:T.email,onChange:P,required:!0}),Object(t.jsx)("button",{type:"submit",className:"btn counseling__appointment-btn",children:j?Object(t.jsx)(d.a,{type:"Oval",color:"#fff",height:15,width:15}):"Get It Now"})]})})})]})}),Object(t.jsx)("div",{className:"counseling__br-layout"})]})]}),Object(t.jsxs)("section",{className:"services",children:[Object(t.jsxs)(p.a,{up:!0,children:[Object(t.jsx)("h2",{className:"heading-primary text-center uppercase",children:"our services"}),Object(t.jsx)("div",{className:"relative l-separator__center"}),Object(t.jsxs)("p",{className:"heading-tertiary text-center",children:["Studying, travelling and investing in developed countries can be a hard decision to make,",Object(t.jsx)("br",{})," but it\u2019s a decision that can shape your future."]})]}),Object(t.jsxs)("div",{className:"row services__box",children:[Object(t.jsx)(p.a,{up:!0,children:Object(t.jsxs)("div",{className:"col-1-of-3 services-col relative",children:[Object(t.jsx)(u.a,{href:"/education",children:Object(t.jsx)("a",{children:Object(t.jsxs)("figure",{className:"services__img-box",children:[Object(t.jsx)("img",{src:"/images/education.jpg",alt:"Education",className:"services__img",width:"357",height:"225"}),Object(t.jsx)("div",{className:"services__img-overlay"})]})})}),Object(t.jsx)(u.a,{href:"/education",children:Object(t.jsx)("a",{children:Object(t.jsx)("h2",{className:"services__title uppercase",children:"education"})})}),Object(t.jsx)("p",{className:"services__paragraph",children:"Students Education and Career are valuable to us, and we understand that each student is unique, therefore we provide personalized university admission expertise to students. To ensure we seek and match students to the appropriate schools and universities we consider each student\u2019s personality, academic background, achievements and career ambitions. We are on hand to guide students through admission and support their career aspirations."})]})}),Object(t.jsx)(p.a,{up:!0,children:Object(t.jsxs)("div",{className:"col-1-of-3 services-col relative",children:[Object(t.jsx)(u.a,{href:"/travel",children:Object(t.jsx)("a",{children:Object(t.jsxs)("figure",{className:"services__img-box",children:[Object(t.jsx)("img",{src:"/images/travel.jpg",alt:"Travel",className:"services__img",width:"357",height:"225"}),Object(t.jsx)("div",{className:"services__img-overlay"})]})})}),Object(t.jsx)(u.a,{href:"/travel",children:Object(t.jsx)("a",{children:Object(t.jsx)("h2",{className:"services__title uppercase",children:"travel"})})}),Object(t.jsx)("p",{className:"services__paragraph",children:"Traveling is an amazingly underrated investment in yourself. As you travel you\u2019re exposed to more new people, cultures, and lifestyles. With all the newness in your life, you\u2019re also opened to new insights, ways of seeing the world and living, which often gives people a new purpose for their lives. Therefore, Rahrwan Travels professional travel advisors help you to have the best travel experience that you have ever had."})]})}),Object(t.jsx)(p.a,{up:!0,children:Object(t.jsxs)("div",{className:"col-1-of-3 services-col relative",children:[Object(t.jsx)(u.a,{href:"/investment",children:Object(t.jsx)("a",{children:Object(t.jsxs)("figure",{className:"services__img-box",children:[Object(t.jsx)("img",{src:"/images/investment.jpg",alt:"Investment",className:"services__img",width:"357",height:"225"}),Object(t.jsx)("div",{className:"services__img-overlay"})]})})}),Object(t.jsx)(u.a,{href:"/investment",children:Object(t.jsx)("a",{children:Object(t.jsx)("h2",{className:"services__title uppercase",children:"investment"})})}),Object(t.jsx)("p",{className:"services__paragraph",children:"Investing in developed countries is the best way to get permanent residency. Rahrawan Travels investment consultant are the best and well-educated consultants that will help you chose the right country to invest considering your background. One the other hand, we have the largest network across the world, our partners in the country that you want to invest will help you in investment process in the best way possible."})]})})]})]}),Object(t.jsx)("section",{className:"cool-facts",children:Object(t.jsx)(w.a,{})}),Object(t.jsxs)("section",{className:"why-choose",children:[Object(t.jsx)("div",{className:"heading-primary text-center uppercase",children:"why choose us ?"}),Object(t.jsxs)("div",{className:"row why-choose__box",children:[Object(t.jsx)("div",{className:"col-1-of-3 why-choose__item",children:Object(t.jsx)(p.a,{up:!0,children:Object(t.jsxs)("div",{className:"why-choose__wrap",children:[Object(t.jsx)("div",{className:"why-choose__icon",children:Object(t.jsx)("i",{className:"flaticon-experience"})}),Object(t.jsxs)("div",{className:"why-choose__fact",children:[Object(t.jsx)("h2",{className:"why-choose__title  uppercase",children:"over 5 years of expertise"}),Object(t.jsx)("div",{className:"relative l-separator__start"}),Object(t.jsx)("p",{className:"why-choose__paragraph",children:"Over 5 years of expertise in fields of educational, Travel and investment counselling."})]})]})})}),Object(t.jsx)("div",{className:"col-1-of-3 why-choose__item",children:Object(t.jsx)(p.a,{up:!0,children:Object(t.jsxs)("div",{className:"why-choose__wrap",children:[Object(t.jsx)("div",{className:"why-choose__icon",children:Object(t.jsx)("i",{className:"flaticon-consult"})}),Object(t.jsxs)("div",{className:"why-choose__fact",children:[Object(t.jsx)("h2",{className:"why-choose__title uppercase",children:"experienced consultants"}),Object(t.jsx)("div",{className:"relative l-separator__start"}),Object(t.jsx)("p",{className:"why-choose__paragraph",children:"A team of experienced and professional consultants with proven ability and high success rate."})]})]})})}),Object(t.jsx)("div",{className:"col-1-of-3 why-choose__item",children:Object(t.jsx)(p.a,{up:!0,children:Object(t.jsxs)("div",{className:"why-choose__wrap",children:[Object(t.jsx)("div",{className:"why-choose__icon",children:Object(t.jsx)("i",{className:"flaticon-network"})}),Object(t.jsxs)("div",{className:"why-choose__fact",children:[Object(t.jsx)("h2",{className:"why-choose__title uppercase",children:"largest network"}),Object(t.jsx)("div",{className:"relative l-separator__start"}),Object(t.jsx)("p",{className:"why-choose__paragraph",children:"Authorized, experienced and professional partners across the world."})]})]})})})]})]}),Object(t.jsx)(f.a,{}),Object(t.jsx)(g.a,{})]})})}},vlRD:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("RNiq")}])}},[["vlRD",0,2,1,3,4,5,6]]]);