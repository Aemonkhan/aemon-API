// function facebook() {
//     window.location.href = 'https://www.facebook.com'
// }
// var myNewwindow = window.open();
// var content = '<h1>New Popup</h1>'
// myNewwindow.document.write(content)
function validateForm() {
    // e.preventDefault()
    var lastName = document.getElementById('last')
    var x = lastName.value
    if (x == "") {
        console.log('Please fill all requirement')
        alert('Please fill all requirement');
        return false;

    }
    if (City.selectedIndex == 0) {
        alert('please select any city')
        return false;
    }
}
var arr = ['mango', 'apple', 'orange']
arr.forEach(function (item, index) {
    console.log(`${index}-${item}`)
})
