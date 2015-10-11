    var flag = 0; 

    function Change() {
      s=document.getElementById('text').innerHTML;

			if (flag == 0) {
				s=s.replace(/(бол)/ig,'&diams;&diams;&diams;&diams;');
				flag = 1; 
		}

      document.getElementById('text').innerHTML=s;
    }