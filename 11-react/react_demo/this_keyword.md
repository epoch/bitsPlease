// rule 1 - default binding 

function doSomething() {
  console.log(this);
}

doSomething() // global

// rule 2 - implicit binding

var cohort = {
  name: 'bitsPlease',
  size: function() {
    console.log(this)
  }
}

cohort.size() // the cohort object ---- just like ruby

var count = cohort.size
count() // global

// rule 3 - explicit rule

var cohort2 = {
  name: 'ux',
  size: function() {
    console.log(this)
  }
}

count.call(cohort2) 
count.apply(cohort2)

// rule 4 - hard binding rule

var newCount = count.bind(cohort2)
newCount() // cohort2

// rule 5 - contructor function

function Person() {
  this.firstname = 'bits'
}

var p = new Person()
var q = new Person()







