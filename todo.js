        const body = document.getElementById("body");
        body.style.backgroundColor = "aqua"

        const div = document.createElement("div");






        const h1 = document.createElement("h1");
        h1.innerText = "Todo List +";
        h1.style.paddingLeft = "550px"
        h1.style.fontSize = "70px"
        h1.style.color = "white"

        
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Add New Todo";
        input.style.marginLeft = "550px"
        input.style.padding = "8px"
        input.style.paddingRight = "35px"
        input.style.borderRadius = "8px"


        const button = document.createElement("button");
        button.innerText = "Add";
        button.style.backgroundColor = "blue"
        button.style.borderRadius = "6px"
        button.style.padding = "8px"
        button.style.margin = "3px"

       



         button.addEventListener("click", function() {
            if (input.value === "") return alert("Please Enter");

            else {
                 
            const div2 = document.createElement("div");
            div2.style.backgroundColor = "white";
        div2.style.width = "240px";
        div2.style.height = "30px";
        div2.style.borderRadius = "5px";
        div2.style.marginLeft = "550px";
        div2.style.marginTop = "20px";
        div2.style.padding = "10px";
        div2.style.display = "flex"

            const box = document.createElement("input");
            box.type = "checkbox";
            box.style.width = "20px";
        box.style.height = "20px";

            const span = document.createElement("span");
            span.innerText = " " + input.value;
            span.style.textAlign = "center";
        span.style.fontSize = "20px";
        span.style.marginLeft = "10px";

            const delBtn = document.createElement("button");
            delBtn.innerText = "Delete";
                    delBtn.style.marginLeft = "100px";
        delBtn.style.backgroundColor = "red";
        delBtn.style.color = "white";
        delBtn.style.borderColor = "transparent";
        delBtn.style.borderRadius = "5px";
        delBtn.style.height = "30px";
        delBtn.style.width = "50px";


                box.onclick = function () {
            span.style.textDecoration = box.checked ? "line-through" : "none";
       };
            
      delBtn.addEventListener("click",function(){
        if(box.checked) 
         div.removeChild(div2);
            
      else{
        return div2
      }
      })

        

        input.value  = " " 



      div2.appendChild(box);
      div2.appendChild(span);
      div2.appendChild(delBtn);
      div.appendChild(div2);
        }
    });



        
body.appendChild(div);
div.appendChild(h1);
div.appendChild(input);
div.appendChild(button);



