let arr = ['123','456','789']


arr.forEach((item)=>{
	console.log(item)
})



class testList{
	constructor(prop){
		this.info = prop['info']
		this.id = prop['id']
		this.funcCreate()
	}
	funcCreate(){
		let newUl = document.getElementById(this.id)
		this.info.forEach((item) =>{
			let newLi = document.createElement('li')
			newLi.innerHTML = item

			newUl.insertAdjacentHTML('afterbegin', newLi.outerHTML)
		})

		
	}
}

let testlist = new testList({
	'info' : ['123','abc','qwe'],
	'id': 'someId'
})



let obj = {
	'key1' : ['123','321','abc']
}

obj['key1'].forEach((item) => {
	console.log(item)
})

// let testUl = document.getElementById('someId')

// testUl.insertAdjacentHTML('afterbegin', testlist['info'])



class Table{
	constructor(someprop){
		this.id = someprop['id']
		this.element = document.getElementById(this.id)
		this.head = someprop['head']
		this.width = someprop['width']
		this.data = someprop['data']

		this.createHead()
		this.createBody()
	}

	createHead(){
		let newTd = document.createElement('tr')

		let betweenHeadColWidth = this.width / this.head.length + 'px'

		let spacer = document.createElement('td')
		spacer.style.width = this.width

		newTd.insertAdjacentHTML('afterBegin', spacer.outerHTML)

		this.head.forEach((item) =>{
		let headCell = document.createElement('td')
		headCell.innerHTML = item
		headCell.style.width = betweenHeadColWidth
		headCell.style.border = '1px solid red'
		newTd.insertAdjacentHTML('beforeEnd', headCell.outerHTML)
		console.dir(headCell)
		})
		this.element.insertAdjacentHTML('afterBegin', newTd.outerHTML)
	}
	createBody(){
		
		this.data.forEach((item) => {
			let row = document.createElement('tr')
			let rowSpaceBetween = this.width 
			let rowHead = document.createElement('td')
			rowHead.innerHTML = item['properties']['rowHeadName']
			rowHead.style.color = item['properties']['rowHeadColor']
			rowHead.style.textAlign = item['properties']['rowTextAlign']

			row.insertAdjacentHTML('afterBegin', rowHead.outerHTML)


			item['data'].forEach((cellItem) =>{
				let rowCell = document.createElement('td')
				let someBgc = item['properties']['bgc']
				rowCell.innerHTML = cellItem 
				rowCell.style.width = rowSpaceBetween
				rowCell.style.textAlign = item['properties']['dataTextAlign']

				rowCell.style.backgroundColor = null
				if(rowCell.onmouseenter = true){
					rowCell.style.backgroundColor = someBgc  //второй способ чтоб реализовать hover 
				}





				row.insertAdjacentHTML('beforeEnd', rowCell.outerHTML)

				rowCell.addEventListener('mouseover', ()=>{ rowCell.style.backgroundColor = item['properties']['bgc']}) // первый способ чтоб реализовать hover

			})
			this.element.insertAdjacentHTML('beforeEnd', row.outerHTML)
		})
		
	}
}

