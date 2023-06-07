document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('playpause').addEventListener('click', () => {
        setInterval(function() {    
            setup()
        }, 16.67);
    })
});
  



let runden = 0





function setup() {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = document.getElementById('input_resolution').value;
    canvas.height = canvas.width;

    const speed = document.getElementById('input_speed').value
    const start = 100
    const lenght = canvas.width-start
    const Mid = canvas.width / 2;
    const minRadius = 75
    const circle_amount = parseInt(document.getElementById('input_circles').value)

// Punkte Linie
    for (i = 0; i < circle_amount*2; i++) {
        ctx.beginPath();
        ctx.arc(   (canvas.width/(circle_amount*2))*i+(canvas.width/(circle_amount*2))*1/2      ,Mid, lenght*0.005, 0, 2 * Math.PI);
        ctx.fillStyle = '#044343';
        ctx.fill();
    }

// Kreise
    for (i = 0; i < circle_amount; i++) {
        ctx.beginPath();
        ctx.lineWidth = (lenght*0.005)/2
        const radius = (canvas.width/(circle_amount*2))*i+(canvas.width/(circle_amount*2))*1/2
        ctx.arc(Mid,Mid, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#044343'
        ctx.stroke()

    }





        // Bewegende Punkte
        for (i = 0; i < circle_amount; i++) {
            const radius = (canvas.width/(circle_amount*2))*i+(canvas.width/(circle_amount*2))*1/2
            const angle = Math.PI*(runden*(i+1)*0.00005*speed); //0 Pi = 0 grad; 1 Pi = 180 grad; 2 Pi = 360 grad
            runden++
            const x = Math.cos(angle) * radius + Mid;
            const y = Math.sin(angle) * radius + Mid;

            // console.log('x-Koordinate:', x);
            // console.log('y-Koordinate:', y);


            for (u = 0; u < circle_amount; u++) {
                ctx.beginPath();
                ctx.arc(x,y,lenght*0.005, 0, 2 * Math.PI);
                ctx.fillStyle = 'red';
                ctx.fill();
                
                if (y <= (Mid+1) && y >= (Mid-1)) {
                    console.log(i)
                }

            }
        }       








}