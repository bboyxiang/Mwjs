/* 
* @Author: xia
* @Date:   2016-01-11 14:27:53
* @Last Modified by:   xia
* @Last Modified time: 2016-01-17 21:31:45
*/

'use strict';
$(function()
{
	$(window).on('resize' , resize);

	function resize(){
		//1.获取屏幕的宽度
		var screenWidth = $(window).width();

		//2.判断屏幕尺寸
		var isSmallScreen = screenWidth > 992;

		//3.获取界面上的每个轮播项
		var $slideItems = $('#ad_carousel .item');

		//4.将轮播项的背景图修改为对应的大图或者小图
		$slideItems.each(function(num , item){
			
			//获取屏幕宽度对应的图片数据
			var data = isSmallScreen ? 'lgImage' : 'smImage';

			//获取每个item的图片宽度
			var val = $(item).data(data);

			//给每个item拼接url字符串
			var url = 'url("'+ val +'")';

			$(item).css('backgroundImage' , url);

			if(isSmallScreen == false)
			{
				//5.如果是小图换用，动态创建一个img标签append轮播项中
				var $img = $('<img src="'+ val +'" alt="">')
				
				$(item).empty().append($img)
			}
			else
			{
				$(item).empty();
			}
			

		})
		
	}
	
	$(window).on('resize' , onSmWidth).trigger('resize');

	// 产品的nav横向滚动条
	// 在小屏幕时调用
	function onSmWidth()
	{
		// 1.获取ul
		var $oUl = $('#products .nav-tabs')
		// 2.在当前ul下获取li
		var $oLis = $("li[role='presentation']" , $oUl)
		// 3.分别获取每个li的宽度
		var width = 0;
		$oLis.each(function(index , ele){
			width += $(ele).width();
		})

		if(width >= $oUl.width())
		{
			// 4.将宽度累加赋值给ul
			$oUl.width(width)

		}
		else
		{
			$oUl.css('width' , 'auto')
		}
		console.log(width)

	}

	$('[data-toggle="tooltip"]').tooltip()
	
})