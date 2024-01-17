const c = document.getElementById("circle1");
        const ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(100, 66, 50, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(270, 66, 50, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(470, 66, 50, 0, 1 * Math.PI);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(695, 66, 50, 3.1, 2.0 * Math.PI);
        ctx.fill();
    
        
        //square
        ctx.strokeRect(60, 140, 70, 70);
        ctx.fillRect(240, 140, 70, 70);
        ctx.fillRect(400, 130, 160, 80);
        ctx.fillRect(680, 150, 40, 40);

        //1st face
        ctx.strokeStyle = '#000000';
        ctx.save();
        ctx.translate(100, 280);
        ctx.scale(0.967741935483871, 1);
        ctx.beginPath();
        ctx.arc(0, 0, 43, 0, 6.283185307179586, false);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

        ctx.strokeStyle = '#000000';
        ctx.save();
        ctx.translate(85, 260);
        ctx.scale(0.875, 1);
        ctx.beginPath();
        ctx.arc(0, 0, 11, 0, 6.283185307179586, false);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

        ctx.strokeStyle = '#000000';
        ctx.save();
        ctx.translate(115, 260);
        ctx.scale(1, 1);
        ctx.beginPath();
        ctx.arc(0, 0, 13, 0, 6.283185307179586, false);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        
        //2nd face
        ctx.strokeStyle = '#000000';
        ctx.save();
        ctx.translate(270, 280);
        ctx.scale(0.967741935483871, 1);
        ctx.beginPath();
        ctx.arc(0, 0, 43, 0, 6.283185307179586, false);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

        ctx.strokeStyle = '#000000';
        ctx.save();
        ctx.translate(250, 260);
        ctx.scale(0.875, 1);
        ctx.beginPath();
        ctx.arc(0, 0, 11, 0, 6.283185307179586, false);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

        ctx.strokeStyle = '#000000';
        ctx.save();
        ctx.translate(280, 260);
        ctx.scale(1, 1);
        ctx.beginPath();
        ctx.arc(0, 0, 13, 0, 6.283185307179586, false);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        ctx.beginPath();
        //smile
        ctx.arc(270, 290, 20, 0, Math.PI);
        ctx.stroke();

        //3nd face
        //circle
        ctx.strokeStyle = '#000000';
        ctx.save();
        ctx.translate(470, 280);
        ctx.scale(0.967741935483871, 1);
        ctx.beginPath();
        ctx.arc(0, 0, 43, 0, 6.283185307179586, false);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
        //leye
        ctx.strokeStyle = '#000000';
        ctx.save();
        ctx.translate(450, 260);
        ctx.scale(0.875, 1);
        ctx.beginPath();
        ctx.arc(0, 0, 11, 0, 6.283185307179586, false);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

        //reye
        ctx.strokeStyle = '#000000';
        ctx.save();
        ctx.translate(480, 260);
        ctx.scale(1, 1);
        ctx.beginPath();
        ctx.arc(0, 0, 13, 0, 6.283185307179586, false);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        ctx.beginPath();
        //smile
        ctx.arc(470, 290, 20, 0, Math.PI);
        ctx.strokeStyle = "white";
        ctx.stroke();

        //4th face
        //circle
        ctx.strokeStyle = '#000000';
        ctx.save();
        ctx.translate(680, 280);
        ctx.scale(0.967741935483871, 1);
        ctx.beginPath();
        ctx.arc(0, 0, 43, 0, 6.283185307179586, false);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
        //leye
        ctx.strokeStyle = '#000000';
        ctx.save();
        ctx.translate(660, 260);
        ctx.scale(0.875, 1);
        ctx.beginPath();
        ctx.arc(0, 0, 11, 0, 6.283185307179586, false);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
        ctx.restore();

        //reye
        ctx.strokeStyle = '#ffffff';
        ctx.save();
        ctx.translate(690, 260);
        ctx.scale(1, 1);
        ctx.beginPath();
        ctx.arc(0, 0, 13, 0, 6.283185307179586, false);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
        ctx.restore();
        ctx.beginPath();
        //smile
        ctx.beginPath();
        ctx.arc(680, 290, 25, 0, 1 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();

        //overlapping
        ctx.fillStyle = "red";
        ctx.fillRect(40, 350, 80, 80);
        ctx.beginPath();

        ctx.arc(120, 420, 40, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.arc(270, 405, 50, 0, 1 * Math.PI);
        ctx.fillStyle = "purple";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(270, 405, 50, 3.1, 2.0 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath();
        
        ctx.fillRect(400, 370, 70, 70);
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.closePath();

        ctx.fillRect(470, 370, 70, 70);
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.closePath();

        ctx.fillRect(630, 370, 70, 70);
        ctx.fillStyle = "green";
        ctx.fill();

        ctx.fillRect(670, 370, 70, 70);
        ctx.fill();
        
        ctx.fillRect(700, 370, 70, 70);
        ctx.fillStyle = "lightgreen";
        ctx.fill();