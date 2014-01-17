﻿switch (window.location.hostname) {
	case 'identity.stust.edu.tw':
		//login first
		break;

	case 'eportal.stust.edu.tw':
		switch (window.location.pathname.replace(/^.*\/([^/]*)/, "$1")) {
			case 'MainPage.aspx':
				//login page
				document.location.href = 'Stud_Feedback.aspx';
				break;

			case 'MenuTop.aspx':
				//user come from stust homepage
				document.location.href = 'https://eportal.stust.edu.tw/teaching_feedback/Stud_FeedBack.aspx';
				break;

			case 'Stud_Feedback.aspx':
				if ($("#ctl00_ContentPlaceHolder1_btnCancel").length == 0) {
					//survey list
					var count = $('#ctl00_ContentPlaceHolder1_dlPollStatus > tbody > tr').length,
						target,
						i;

					for (i = 0; i <= count; ++i) {
						if (i === count) {
							if (confirm('全部搞定啦！\n\n要帶你到成績查詢頁面嗎？A__A')) {
								document.location.href = 'http://120.117.2.28/CourSel/Pages/PresentScore.aspx';
							}
							break;
						}
						target = $('#ctl00_ContentPlaceHolder1_dlPollStatus > tbody > tr:eq('+ i +')').find(':submit');
						if (target.prop('disabled')) {
							continue;
						}else{
							target.click();
							break;
						}
					}
				}else{
					//in survey
					$(':radio[value=5]').prop('checked',true);
					if ($(':checkbox').length > 0) {
						$(':checkbox').prop('checked',true);
					}
					$(':submit').click();
				}
				break;

			default:
				break;
		}
		break;

	default:
		if (confirm('糟糕！我迷路啦( TДT)\n按確定自動重試，或按取消關閉分頁，請您手動重試\n\n若問題持續發生，請至應用程式商店回報問題，感謝你！')) {
			document.location.href = 'https://eportal.stust.edu.tw/teaching_feedback/Stud_FeedBack.aspx';
		}else{
			open(location, '_self').close();
		}
		break;
}