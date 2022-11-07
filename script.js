function execute()
          {
            var x=document.getElementById('data').value;
            var img=document.querySelector('#out');
            for(i=0;i<x;i++)
            {
              var div=document.createElement('div');
              div.innerHTML='<img height="50px" width="50px" src ="../Images/Gift Box.jpg">';
              img.appendChild(div);
            }
          }