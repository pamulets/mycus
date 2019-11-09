try{
var fdate = document.getElementsByTagName("abbr");
    for(var i = 0; i< fdate.length; i++){
    	var value = fdate[i].getAttribute("data-tooltip-content");
    	if (value) {
    		
    			var checkId = document.getElementById("btnDate"+i);
    			if(!checkId){
    			var but = document.createElement("button");
    			var text = document.createTextNode(value);
    			but.setAttribute('id', "btnDate"+i);
    			but.appendChild(text);
    			fdate[i].append(but);
    			}
    			
    		
    			
    	} else {
    		
    	}
    
    } 
    
   
     document.addEventListener("scroll",function (e){
	 		 var fdate = document.getElementsByTagName("abbr");
    for(var i = 0; i< fdate.length; i++){
    	var value = fdate[i].getAttribute("data-tooltip-content");
    	if (value) {
    		
    			var checkId = document.getElementById("btnDate"+i);
    			if(!checkId){
    			var but = document.createElement("button");
    			var text = document.createTextNode(value);
    			but.setAttribute('id', "btnDate"+i);
    			but.appendChild(text);
    	
    		if(fdate[i].outerHTML.indexOf("<button")<=0){
    			fdate[i].outerHTML = fdate[i].outerHTML.replace("</abbr>",but.outerHTML+"</abbr>");
    			
    		}
    			
    			}
    			
    		
    			
    	} else {
    		
    	}
    
    }
    
    
     });
     
     
     
     
     
     
     
     
     
     
     
     window.addEventListener("mouseover",function (e){
     
     		var target2 = e.target;
     		if(target2.tagName="abbr"){
     				var value2 = target2.getAttribute("data-tooltip-content");
     				
    	       if (value2) {
    	
    			var but2 = document.createElement("button");
    			var text2 = document.createTextNode(value2);
    		
    			but2.appendChild(text2);
    		
    		    if(target2.outerHTML.indexOf("<button")<=0){
    			target2.outerHTML = target2.outerHTML.replace("</abbr>",but2.outerHTML+"</abbr>");
    			
    		      }
    	        }
    	
     		}else if(target2.getElementsByClassName("timestampContent")){
     		
     		     for(var i=0;i<target2.getElementsByClassName("timestampContent").length;i++){
     			      	
    			var but3 = document.createElement("button");
    			if(target2.getElementsByClassName("timestampContent")[i])
    			var text3 = document.createTextNode(target2.getElementsByClassName("timestampContent")[i].parentNode.getAttribute("data-tooltip-content"));
    			
    			but3.appendChild(text3);
    		
    	        	if(target2.outerHTML.indexOf("<button")<=0){
    			     target2.outerHTML = target2.outerHTML.replace("</abbr>",but3.outerHTML+"</abbr>");
     		        }
     		
     			
     		    }
     		
     		
     		
     		}
     	
     	
     	
     	
     	
   
     	 
     	 
     	  var imgComment = document.getElementsByClassName("_2tx5 _75xh");
       for (var i=0;i<imgComment.length;i++){
      	var but4 = document.createElement("button");
      	var text4 = document.createTextNode("+");
      	but4.appendChild(text4);
      
      	if(imgComment[i].parentNode.outerHTML.indexOf("<button")<=0){
    			     imgComment[i].parentNode.append(but4);
    			   
     		        }
     		        
     		        
     		 but4.addEventListener('click',function(e){
     		 	
     		 });       
     		        
      	
       }
          
     		
     	
     	 
     });
     
     
     
     
     
     
     
     
    
     
     
     
     

    
     	 
     	  var imgComment2 = document.getElementsByClassName("_2tx5 _75xh");
       for (var i=0;i<imgComment2.length;i++){
      	var but5 = document.createElement("button");
      	var text5 = document.createTextNode("+");
      	but5.appendChild(text5);
      
      	if(imgComment2[i].parentNode.outerHTML.indexOf("<button")<=0){
    			     imgComment2[i].parentNode.append(but5);
    			   
     		        }
     		        
     		        
     		 but5.addEventListener('click',function(e){
     		 	if(imgComment2[i].getAttribute("hidden")=="true"){
     		 		imgComment2[i].setAttribute("hidden","inline-flex");
     		 	}else{
     		 		imgComment2[i].setAttribute("hidden","ture");
     		 	}
     		 });       
     		        
      	
       }
     
     
    
     
     	
     	
     	
     	
     	
     	
     	
     	
    
    
}catch(err){
	alert(err);
}
  
