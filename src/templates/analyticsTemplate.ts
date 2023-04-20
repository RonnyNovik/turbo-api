export const analyticsTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

body{
            direction: rtl;
        }
        .main-title{
			text-align: center;
			font-size: 15px;
		}
		.row{
			width:100%
			display:-webkit-box;
			display:-ms-flexbox;
			display:flex;
			-webkit-box-align:center;
			    -ms-flex-align:center;
			        align-items:center;
			-webkit-box-pack:justify;
			    -ms-flex-pack:justify;
			        justify-content:space-between;
		}
		.row > div{
			min-width: 100px;
			max-width: 100px;
			word-wrap: break-word;
			min-height: 35px;
			font-size: 9px;
			display:flex;
			-webkit-box-align:center;
			    -ms-flex-align:center;
			        align-items:center;
			-webkit-box-pack:center;
			    -ms-flex-pack:center;
					justify-content:center;
		}
		.row > .number{
			width: 20px !important;
			max-width: 20px;
			min-width: 20px;
		}
    </style>
    <div class="container">
        <h2 class="main-title">
            דו"ח בדיקות לתאריכים : {{startDate}} - {{endDate}}
        </h2>
        {{#each inspections}}
        <div class="row">
            <div class="number"><p>{{this.inspectionNumber}}</p></div>
            <div class="client"><p>{{this.customerName}}</p></div>
            <div class="date"><p>{{this.date_created}}</p></div>
            <div class="car-number"><p>{{this.carNumber}}</p></div>
            <div class="tester"><p>{{this.tester}}</p></div>
            <div class="hour"><p>{{this.hour}}</p></div>
        </div>
        {{/each}}
    </div>
</body>
</html>`;
