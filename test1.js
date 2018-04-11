Feature('My first test file @feature_set_1')

Scenario('test something @one @example', (I) => {
	I.amOnPage('http://www.example.com')
	I.see('Example')
})

Scenario('test something @two @example', (I) => {
	I.amOnPage('http://www.example.com')
	I.see('Example')
})