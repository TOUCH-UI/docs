<div class="l_col l_col-space-2 p_intro">
	<div class="l_colItem">
		<img src="../../img/thumb/tapestry/tapestry.png">
	</div>
</div>
- 前台WEB层涉及到的主要框架功能如下图 所示：
- 前台开发入门
!['图片'](../../img/dynamicWeb/main.png "图片")

###### 其中：
- NGBOSS外框应用和CRMWEB应用基于前台界面框架开发。
- NGBOSS外框应用提供操作员接入，工作台，功能导航等功能。
- CRMWEB是包含了所有CRM业务功能前台界面的应用。
- 统一会话管理将会话和WEB容器分离，实现会话统一管控，为WEB应用无状态化提供基础
- 基于消息队列服务实现进程间的异步任务调度，实现后台导入导出。
- 基于客户端消息推送实现为客户端实时推送消息公告提醒功能。
- FTP文件上传功能为附件上传下载和导入导出提供文件存储支持。

<iframe width="100%" height="300" src="//jsfiddle.net/nico1988/6wkbey4q/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<iframe width="100%" height="300" src="//jsfiddle.net/nico1988/yfob98d4/10/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<iframe width="100%" height="300" src="//jsfiddle.net/nico1988/yfob98d4/27/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>