var userId="";
var dictIdKind=null;
var dictStatus=null;
$(function() {
	// 表格初始化
	userId=getQueryString("userId");
	var data={"userId":userId};
	var url = $("#basePath").val()+"/customer/detail";
	doGetAjax(url,data,doSuccessData);
	 // 记录查询
	queryBankData();
	$(".tabson").hide();
	$("#customer").show();
	
    //切换事件
	$(".itab li").click(function(){
    	$(".itab li").find('a').removeClass('selected');
     	$(".itab li").eq($(this).index()).find('a').addClass("selected");
		$(".tabson").hide().eq($(this).index()).show();
     });
	
	// 查询银行卡
	$('#bankCardSearchBtn').click(function() {
		$('#bankTableList').bootstrapTable('refresh',{url: $("#basePath").val()+"/customer/bank/page"});
	});
	
	//返回
	$('#backBtn').click(function() {
		location.href = $("#basePath").val()+"/customer/customer.htm";
	});
});

function doSuccessData(res){
	if (res.success) {
		var result = res.data;
		$("#userId").html(result.userId);
		$("#mobile").html(result.mobile);
		$("#realName").html(result.realName);
		$("#idKind").html(Dict.getName('id_kind', result.idKind));
		$("#idNo").html(result.idNo);
		$("#updateDatetime").html(dateTimeFormat(result.updateDatetime));
	}else{
		alert(res.msg);
	}
}
//表格初始化
function queryBankData(){
	// 绑定列表
	$('#bankTableList').bootstrapTable({  
		method : "get",
		url : $("#basePath").val()+"/customer/bankcard/page",
		striped : true,
		clickToSelect : true,
		singleSelect : true,
		queryParams : function(params) {
			return {
				userId : userId,
				start : params.offset / params.limit + 1,
				limit : params.limit
			};
		},
		queryParamsType : 'limit',
		responseHandler : function(res) {
			return {
				rows : res.data.list,
				total : res.data.totalCount || res.data.length
			};
		},
		pagination : true,
		sidePagination : 'server', // 服务端请求
		totalRows : 0,
		pageNumber : 1,
		pageSize : 10,
		pageList : [ 10, 20, 30, 40, 50 ],
		columns : [{
			field : 'realName',
			title : '姓名'
		},{
			field : 'bankName',
			title : '银行名称'
		}, {
			field : 'subbranch',
			title : '支行名称'
		}, {
			field : 'bankcardNo',
			title : '银行卡号'
		}, {
			field : 'updateDatetime',
			title : '绑定时间',
			formatter: dateTimeFormat
		}]
	});
}