'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arr = ['123', '456', '789'];

arr.forEach(function (item) {
	console.log(item);
});

var testList = function () {
	function testList(prop) {
		_classCallCheck(this, testList);

		this.info = prop['info'];
		this.id = prop['id'];
		this.funcCreate();
	}

	_createClass(testList, [{
		key: 'funcCreate',
		value: function funcCreate() {
			var newUl = document.getElementById(this.id);
			this.info.forEach(function (item) {
				var newLi = document.createElement('li');
				newLi.innerHTML = item;

				newUl.insertAdjacentHTML('afterbegin', newLi.outerHTML);
			});
		}
	}]);

	return testList;
}();

var testlist = new testList({
	'info': ['123', 'abc', 'qwe'],
	'id': 'someId'
});

var obj = {
	'key1': ['123', '321', 'abc']
};

obj['key1'].forEach(function (item) {
	console.log(item);
});

// let testUl = document.getElementById('someId')

// testUl.insertAdjacentHTML('afterbegin', testlist['info'])


var Table = function () {
	function Table(someprop) {
		_classCallCheck(this, Table);

		this.id = someprop['id'];
		this.element = document.getElementById(this.id);
		this.head = someprop['head'];
		this.width = someprop['width'];
		this.data = someprop['data'];

		this.createHead();
		this.createBody();
	}

	_createClass(Table, [{
		key: 'createHead',
		value: function createHead() {
			var newTd = document.createElement('tr');

			var betweenHeadColWidth = this.width / this.head.length + 'px';

			var spacer = document.createElement('td');
			spacer.style.width = this.width;

			newTd.insertAdjacentHTML('afterBegin', spacer.outerHTML);

			this.head.forEach(function (item) {
				var headCell = document.createElement('td');
				headCell.innerHTML = item;
				headCell.style.width = betweenHeadColWidth;
				headCell.style.border = '1px solid red';
				newTd.insertAdjacentHTML('beforeEnd', headCell.outerHTML);
				console.dir(headCell);
			});
			this.element.insertAdjacentHTML('afterBegin', newTd.outerHTML);
		}
	}, {
		key: 'createBody',
		value: function createBody() {
			var _this = this;

			this.data.forEach(function (item) {
				var row = document.createElement('tr');
				var rowSpaceBetween = _this.width;
				var rowHead = document.createElement('td');
				rowHead.innerHTML = item['properties']['rowHeadName'];
				rowHead.style.color = item['properties']['rowHeadColor'];
				rowHead.style.textAlign = item['properties']['rowTextAlign'];

				row.insertAdjacentHTML('afterBegin', rowHead.outerHTML);

				item['data'].forEach(function (cellItem) {
					var rowCell = document.createElement('td');
					var someBgc = item['properties']['bgc'];
					rowCell.innerHTML = cellItem;
					rowCell.style.width = rowSpaceBetween;
					rowCell.style.textAlign = item['properties']['dataTextAlign'];

					rowCell.style.backgroundColor = null;
					if (rowCell.onmouseenter = true) {
						rowCell.style.backgroundColor = someBgc; //второй способ чтоб реализовать hover 
					}

					row.insertAdjacentHTML('beforeEnd', rowCell.outerHTML);

					rowCell.addEventListener('mouseover', function () {
						rowCell.style.backgroundColor = item['properties']['bgc'];
					}); // первый способ чтоб реализовать hover
				});
				_this.element.insertAdjacentHTML('beforeEnd', row.outerHTML);
			});
		}
	}]);

	return Table;
}();