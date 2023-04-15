const data = [{ value: 2, color: 'red', label: 'Visual Basic' }, { value: 3, color: 'blue', label: 'Java' }, { value: 2, color: 'green', label: 'Free Pascal' },
{ value: 3, color: '#0e6251', label: 'HTML' }, { value: 4, color: 'black', label: 'Javascript' }, { value: 9, color: 'blueviolet', label: 'Python' },
{ value: 2, color: '#dc7633', label: 'CSS' }, { value: 3, color: '#99a3a4', label: 'ReactJs' }, { value: 1, color: 'yellow', label: 'PHP' }, { value: 1, color: 'aquamarine', label: 'SQL' }];


//multiplicar cantidad palabra * 100 / total de palabras
const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');
const chartRadius = Math.min(canvas.width, canvas.height) / 2;
const chartCenterX = canvas.width / 2;
const chartCenterY = canvas.height / 2;
var total = 0
var valor = 0
// Draw the chart

for (const datum of data) {
    total += datum.value
}

data.sort((x, y) => x.value - y.value);
console.log(data);

let currentAngle = -0.5 * Math.PI;
for (const datum of data) {
    valor = datum.value * 100 / total
    const sliceAngle = (valor / 100) * 2 * Math.PI;
    
    ctx.beginPath();
    
    ctx.moveTo(chartCenterX, chartCenterY);
    ctx.arc(chartCenterX, chartCenterY, chartRadius, currentAngle, currentAngle + sliceAngle);
    ctx.fillStyle = datum.color;
    ctx.fill();
    
    currentAngle += sliceAngle;
}


// Draw the legend
const legend = document.createElement('div');
legend.className = 'chart-legend';
for (const datum of data) {
    valor = datum.value * 100 / total
    valor = Number(valor.toFixed(2));
    const item = document.createElement('div');
    item.className = 'chart-legend-item';
    const color = document.createElement('div');
    color.className = 'chart-legend-color';
    color.style.backgroundColor = datum.color;
    const label = document.createElement('div');
    label.className = 'chart-legend-label';
    label.textContent = `${datum.label} (${valor}%)`;
    item.appendChild(color);
    item.appendChild(label);
    legend.appendChild(item);
}
canvas.parentNode.appendChild(legend);