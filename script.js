// Data Visualization Example: Using Chart.js to Display Key Metrics
window.onload = function() {
    const ctx = document.getElementById('reportChart').getContext('2d');
    const reportChart = new Chart(ctx, {
        type: 'bar', // Bar chart
        data: {
            labels: ['Model A', 'Model B', 'Model C', 'Model D'],
            datasets: [{
                label: 'Model Performance (Accuracy %)',
                data: [85, 90, 88, 92], // Mock data representing model performance
                backgroundColor: [
                    '#3498db',
                    '#2ecc71',
                    '#f39c12',
                    '#9b59b6'
                ],
                borderColor: [
                    '#2980b9',
                    '#27ae60',
                    '#f1c40f',
                    '#8e44ad'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Data Processing Simulation: Simple transformation task
    const processButton = document.createElement('button');
    processButton.textContent = 'Simulate Data Processing';
    document.body.appendChild(processButton);
    
    processButton.addEventListener('click', function() {
        const rawData = [12, 45, 33, 76, 89, 23, 56];
        const processedData = rawData.map(value => value * 1.1); // Mock data processing (scaling)

        alert('Original Data: ' + rawData.join(', ') + '\nProcessed Data: ' + processedData.join(', '));
    });
}
