console.log('i like pie!');
window.pie = 'pie';
const style = document.createElement('style');
style.appendChild(document.createTextNode(`* { color: teal; }`));
document.body.appendChild(style);

vizality.settings.set('cake', 'lie');
console.log(vizality.settings.get('cake'));
