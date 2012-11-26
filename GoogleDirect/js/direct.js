//获取url串中的某个参数
function getQueryStringRegExp(name, source) { 
	var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i"); 
	if (reg.test(source)) {
		return unescape(RegExp.$2.replace(/\+/g, " "));
	}
	return ""; 
};

//获取搜索结果真实地址(跳转链接中的url参数)
function get_real_url(url) {
	if (url.indexOf("google.com.hk") >= 0 || url.indexOf("google.com") >= 0){
		 var urlStart = url.indexOf("url=");
		 if (urlStart >= 0) {
			return getQueryStringRegExp("url", url);
		 }
	}
	return url;;
}

//直接打开真实地址链接
function godirect(info, tab){
	var real_url = get_real_url(info.linkUrl);
	window.open(real_url);
}

var menu_title = "直接打开Google结果";
var right_direct = chrome.contextMenus.create({"title": menu_title,"contexts":["link"],"onclick":godirect});