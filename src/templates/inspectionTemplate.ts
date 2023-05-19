export const inspectionTemplate = `<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Document</title>
			<style>
			@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;600;700&display=swap');
			
				/* prefixed by https://autoprefixer.github.io (PostCSS: v7.0.26, autoprefixer: v9.7.3) */
				/* prefixed by https://autoprefixer.github.io (PostCSS: v7.0.26, autoprefixer: v9.7.3) */
	
				/* prefixed by https://autoprefixer.github.io (PostCSS: v7.0.26, autoprefixer: v9.7.3) */
				* {
					font-family: 'Arimo', sans-serif;
				}

				body {
					padding: 5px;
				}

				h6,
				h5,
				h1 {
					margin: 0;
				}

				h1 {
					margin: 0;
				}

				span {
					text-decoration: underline;
				}

				.logo {
					font-size: 8px;
					position: absolute;
					top: 10px;
					left: 14px;
					text-align: center;
					margin: 0;
				}

				.logo-title{
					font-size: 24px;
				}

				.logo-subtitle{
					font-size: 16px;
				}

				.logo-phone {
					font-size: 12px;
				}

				.title {
					font-size: 20px;
					text-align: center;
					text-decoration: underline;
				}

				.inspection-number {
					font-size: 16px;
					margin-bottom: 8px;
					text-align: center;
				}

				.client-details-container {
					width: 100%;
					margin: 0;

				}

				.client-details-wrapper {
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-orient: vertical;
					-webkit-box-direction: normal;
					-ms-flex-direction: column;
					flex-direction: column;
				}
				.client-row {
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
				}

				.client-detail {
					width: 33.333%;
					font-size: 12px;
					line-height: 14px
				}
				.client-detail > span { 
					margin-left: 4px;
				}

				.results-container {
					width: 100%;
					margin-top: 5px;
				}

				.label-box {
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					width: 100%;
				}

				.label {
					height: 24px;
					border-top: 1px solid black;
					border-left: 1px solid black;
					border-bottom: 1px solid black;
					border-right: none;
					display: flex;
					justify-content: center;
					align-items: center;
					box-sizing: border-box;
				}

				.label:first-child {
					border-right: 1px solid black;
				}

				.result-item {
					width: 100%;
					min-height: 24px;
					height: auto;
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
				}

				.result {
					display: flex;
					align-items: center;
					border-bottom: 1px solid black;
					border-left: 1px solid black;
					border-right: none;
					padding-right: 4px;
					box-sizing: border-box;
				}

				.result:first-child {
					border-right: 1px solid black;
				}

				.label.index,
				.result.index{
					width: 4%;
					font-size: 12px;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.result.index {
					padding-left: 4px;
				}

				.result.passed {
					padding-left: 6px;
				}

				.label.system, .result.system{
					width: 19%;
				}

				.label.passed,
				.label.failed,
				.result.passed,
				.result.failed {
					width: 6%;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.label.diagnosis,
				.result.diagnosis   {
					width: 65%;
				}


				.general-comment {
					margin-top: 12px;
					width: 100%;
					word-break: break-all;
				}

				.term{
					font-size: 12px;
					word-break: break-all;
				}

				.signatures {
					margin-top: 20px;
					padding-left: 30%;
					box-sizing:border-box;
					width: 100%;
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-align: center;
					-ms-flex-align: center;
					align-items: center;
					-webkit-box-pack:justify;
					-ms-flex-pack:justify;
					justify-content:space-between;
					text-decoration: underline;
				}
				.signature {
					font-size: 12px;
				}

				.comment-list {
					margin-top: 2px;
					width: 100%;
					word-break: break-word;
				}

				.comment-title{
					font-size: 14px;
				}
				
				.comment-text{
					font-size: 12px;
				}

				.tester-comment{
					font-size: 16px;
					margin-top: 4px;
					word-break: break-word;
				}


			</style>
		</head>
		<body style="direction: rtl;">
			<div class="container">
	            <div class="logo">
				  <div class="logo-title">סופר-טסט</div>
				  <div class="logo-subtitle">חיפה (2003) בע"מ</div>
				  <div class="logo-phone">04-8415054</div>
				  <div class="license-number">מספר רישיון: 60117</div>
				</div>

				<h1 class="title">טופס סיכום אחיד (עפ"י הוראות משרד התחבורה)<br />בדיקה כללית {{#if electronicsIncluded}} כולל {{/if}} {{#unless electronicsIncluded}} לא כולל {{/unless}} מערכות אלקטרוניות וממוחשבות</h1>
				<div class="client-details-container">
					<h3 class="inspection-number">מ"ס: {{inspectionNumber}}</h3>
					<div class="client-details-wrapper">
						<div class="client-row">
							<h6 class="customer-name client-detail">
								<span>מזמין הבדיקה:</span> {{customerName}}
							</h6>
							<h6 class="customer-phone client-detail">
								<span>טל':</span> {{customerPhone}}
							</h6>
							<h6 class="customer-address client-detail">
								<span>כתובת:</span>{{customerAddress}}
							</h6>
						</div>
						<div class="client-row">
							<h6 class="car-number client-detail">
								<span>מספר רכב:</span> {{carNumber}}
							</h6>
							<h6 class="car-model client-detail">
								<span>דגם רכב:</span> {{carModel}}
							</h6>
							<h6 class="car-year client-detail">
								<span>שנת ייצור:</span> {{carYear}}
							</h6>
						</div>
						<div class="client-row">
							<h6 class="engine-number client-detail">
								<span>מס מנוע:</span> {{engineNnumber}}
							</h6>
							<h6 class="chassis-number client-detail">
								<span>מס שלדה:</span> {{chassisNumber}}
							</h6>
							<h6 class="chassis-type client-detail">
								<span>סוג שלדה:</span> {{chassisType}}
							</h6>
						</div>
						<div class="client-row">
						<h6 class="engine-number client-detail">
						<span>מונה רשום(ק"מ):</span> {{kilometrage}}
					</h6>
						</div>
					</div>
				</div>
				<div class="results-container">
					<div class="label-box">
						<h6 class="index label">מסד</h6>
						<h6 class="system label">מערכת</h6>
						<h6 class="passed label">תקין</h6>
						<h6 class="failed label">לא תקין</h6>
						<h6 class="diagnosis label">אבחנה</h6>
					</div>
					{{#each results}} {{#if this.hasPriorities}}
					<div class="chassis-block">
					<div class="result-item chassis-title">
						<h6 class="result index">{{this.position}}.</h6>
						<h6 class="result system">{{this.name}}</h6>
						<h6 class="result passed">
						{{#if this.passed}} ✔ {{/if}}
						</h6>
						<h6 class="result failed">
						</h6>
						<h6 class="result diagnosis"></h6>
					</div>
					{{#if this.highPriorityRejects}}
					<div class="result-item high">
					<h6 class="result index">ג.</h6>
					<h6 class="result system">ליקויים בעלי משמעות גבוהה</h6>
					<h6 class="result passed">
					{{#unless this.highPriorityRejects}} ✔ {{/unless}}
					</h6>
					<h6 class="result failed">
					{{#if this.highPriorityRejects}} ✖ {{/if}}
					</h6>
					<h6 class="result diagnosis">{{this.highPriorityRejects}}</h6>
					</div>
					{{/if}}
					{{#if this.midPriorityRejects}}
					<div class="result-item mid">
					<h6 class="result index">נ.</h6>
					<h6 class="result system">ליקויים בעלי משמעות נמוכה</h6>
					<h6 class="result passed">
					{{#unless this.midPriorityRejects}} ✔ {{/unless}}
					</h6>
					<h6 class="result failed">
					{{#if this.midPriorityRejects}} ✖ {{/if}}
					</h6>
					<h6 class="result diagnosis">{{this.midPriorityRejects}}</h6>
					</div>
					{{/if}}
					{{#if this.lowPriorityRejects}}
					<div class="result-item low">
					<h6 class="result index">ש.</h6>
					<h6 class="result system">ליקויים בעלי משמעות שולית</h6>
					<h6 class="result passed">
					{{#unless this.lowPriorityRejects}} ✔ {{/unless}}
					</h6>
					<h6 class="result failed">
					{{#if this.lowPriorityRejects}} ✖ {{/if}}
					</h6>
					<h6 class="result diagnosis">{{this.lowPriorityRejects}}</h6>
					</div>
					{{/if}}
					</div>
					{{else}}
					<div class="result-item">
						<h6 class="result index">{{this.position}}.</h6>
						<h6 class="result system">{{this.name}}</h6>
						<h6 class="result passed">
							{{#unless this.results}} <div class="checkmark-margin"> ✔</div> {{/unless}}
						</h6>
						<h6 class="result failed">
							{{#if this.results}} ✖ {{/if}}
						</h6>
						<h6 class="result diagnosis">{{this.results}}</h6>
					</div>
					{{/if}} {{/each}}
				</div>
				<div class="general-comment">
					<div class="cols-block">
						<div class="col">
							<h5 class="term">
			{{{postInspectionText}}}
							</h5>
						</div>
					</div>
					<div class="comment-list">
						<h6 class="comment-title">
							<span>הערות:</span>
						</h6>
						<h6 class="comment-text">
{{{signatureTermsText}}}
						</h6>
						<h6 class="tester-comment">
						אני הח"מ {{tester}} מאשר, כי בדקתי את הרכב בתאריך {{date_created}} ובמקום סופר-טסט חיפה 2003 בע"מ וביצעתי מבחן דרך ברכב
						</h6>
						<div class="signatures">
							<h6 class="signature">חתימת הלקוח / מזמין הבדיקה:</h6>
							<h6 class="signature">חתימה / חותמת הבודק:</h6>
						</div>
					</div>
				</div>
			</div>
		</body>
	</html>`;
