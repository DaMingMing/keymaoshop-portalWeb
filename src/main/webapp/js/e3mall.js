var E3MALL = {
	checkLogin : function(){
		var _ticket = $.cookie("token");
		if(!_ticket){
			return ;
		}
		$.ajax({
			url : "http://localhost:8088/user/token/" + _ticket,
			dataType : "jsonp",
			type : "GET",
			success : function(data){
				if(data.status == 200){
					var username = data.data.username;
					var html = username + "，欢迎来到keymao购物网！<a href=\"http://localhost:8088/user/logout.html?token="+ _ticket  + "\" class=\"link-logout\">[退出]</a>";
                    //var html = `${username}，欢迎来到keymao购1物网！<a href="localhost:8088/user/logout.html?token=${_ticket}" class="link-logout">[退出]</a>`;
					$("#loginbar").html(html);
				}
			}
		});
	}
}

$(function(){
	//alert(123);
	debugger;
	// 查看是否已经登录，如果已经登录查询登录信息
	E3MALL.checkLogin();
});