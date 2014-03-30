var PersonalData = function(){};

/**
语言使用
*/
Object.defineProperty(PersonalData,"skillsData_languages",{
	value:[
		{name:"java",time:14},
		{name:"javscript(client)",time:18},
		{name:"javascipt(node.js)",time:12},
		{name:"python",time:1},
		{name:"html",time:18},
		{name:"flex",time:3}
	]
})

Object.defineProperty(PersonalData,"getSkillDataOfLanguages",{
	value:function(){
		return PersonalData.skillsData_languages;
	}
})

/*
*框架使用
*/
Object.defineProperty(PersonalData,"skillsData_framework",{
	value:[
		{name:"struts2",time:10},
		{name:"spring3",time:10},
		{name:"Mybaties",time:10},
		{name:"Meteor(nodejs)",time:11},
		{name:"d3",time:4},
		{name:"jquery",time:18},
		{name:"Bootstrap",time:6}
	]
})

Object.defineProperty(PersonalData,"getSkillDataOfFramework",{
	value:function(){
		return PersonalData.skillsData_framework;
	}
})

Object.defineProperty(PersonalData,"favorite_website",{
	value:[
		{site:"stackoverflow.com"},
		{site:"it-ebooks.info"},
		{site:"www.csdn.net"},
		{site:"github.com"},
		{site:"www.oschina.net"}
	]
})

Object.defineProperty(PersonalData,"getFavoriteWebsite",{
	value:function(){
		return PersonalData.favorite_website;
	}
})