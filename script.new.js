let arr = ["details", 'objective', 'academics', 'projects', 'skills', 'certifications', 'workshops', 'skills', 'recognitions', 'strengths', 'hobbies']
document.querySelector('form').addEventListener('submit', command)

function command(e) {
    e.preventDefault()
    let input = document.getElementById('in').value
    document.getElementById('in').value = ""
    if (input === "clear") {
        document.querySelector('.main').innerHTML = ``
    } else if (input === " " || input === "") {
        document.querySelector('.main').innerHTML += `<div class="grt">></div>`
    } else if (input === "help") {
        document.querySelector('.main').innerHTML += `
        <div class="commandline">
        <span class="grt">></span> <span class="command">help</span>
        <div class="output"><div> clear -------------------------- > to clear the screen</div>
        <div class="output"><div> open portfolio --- > opens entire portfolio
        <div class="output"><div> show [details/studies/projects/certfications...]---------------- > to show particular details    </div>
        `
    } else if (input === "open portfolio") {
        let str = "[............]loading!!!!"
        document.querySelector('.main').innerHTML += `
            <div class="commandline">
            <span class="grt">></span> <span class="command">${input}</span>
            <div id="loading">${str}</div>
            </div>`
        var load = setInterval(() => {
            var txt = str.replace("..", "#");
            str = txt
            document.getElementById("loading").innerHTML = txt
        }, 100);
        setTimeout(() => {
            clearInterval(load)
            document.querySelector('.main').innerHTML += `
            <br>
            <div>name:Enumarthi karthik</div>
            <div>job description : team player, Full stack javascript developer, python programmer, IOT enthusiast</div>
            <div>email: kartheekenumarthi@gmail.com</div>
            <div>website: https://karthikwebdev.github.io/portfolio</div>
            <div>phone no: 9493454298</div>
            <div>github: https://github.com/karthikwebdev</div>
            <div>address : #20-18-12/1 , thummalava third street , rajahmundry</div>
            <br>
            <hr>
            <div>studies:</div>
            <div>B.Tech&nbsp&nbsp&nbsp&nbspAditya engineering college&nbsp&nbsp&nbsp&nbsp&nbsp	7.0/10 CGPA</div>
            <div>Inter&nbsp&nbsp&nbsp&nbsp&nbsp&nbspaditya junior college&nbsp&nbsp&nbsp&nbsp&nbsp	943/1000 marks</div>
            <div>SSC&nbsp&nbsp&nbsp&nbsp&nbspLittle Paradise School&nbsp&nbsp&nbsp&nbsp&nbsp 9.3/10 CGPA</div>
            <br>
            <hr>
            <div>projects :	</div>
            <div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp#100daysofcode</div>
            <div>>this is a 100days coding challenge taken by me in instagram and made more than 50 mini-projects using majorly javascript,python frameworks.</div>
            <div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSmart Blind Stick interfacing IOT</div>
            <div>>An IOT project that solved problems faced by visually impaired</div>
            <br>
            <hr>
            <div>certifications :</div> 	
		 <div>&nbsp&nbsp&nbsp&nbsp&nbspMTA HTML certification</div>
		 <div>&nbsp&nbsp&nbsp&nbsp&nbspNPTEL IOT certification</div>
		 <div>&nbsp&nbsp&nbsp&nbsp&nbspPython certification</div>
		 <div>&nbsp&nbsp&nbsp&nbsp&nbspc and c++ certification	</div> 
        <br>
        <hr>
        <div>workshops and hack-a-thons:</div>
		 
		<div>&nbsp&nbsp&nbsp&nbsp Soccer robotics workshop - made a small remote control robo</div>
		<div>&nbsp&nbsp&nbsp&nbsp University innovation Fellowship - introduction to entrepreneurship</div>
		<div>&nbsp&nbsp&nbsp&nbsp APSSDC IOT workshop - learned fundamentals of IOT</div>
		<div>&nbsp&nbsp&nbsp&nbsp APSSDC AWS workshop - worked with some AWS cloud services</div>
		<div>&nbsp&nbsp&nbsp&nbsp APSSDC andriod development workshop - learned fundamentals of app development</div>
		<div>&nbsp&nbsp&nbsp&nbsp WHY.PY workshop - got to know how python works in web development , GUI , AI , IOT</div>
		<div>&nbsp&nbsp&nbsp&nbsp WEB-A-THON - portfolio building in a website </div>
		<div>&nbsp&nbsp&nbsp&nbsp T-Connect - helped juniors to get to know about web development</div>
        <br>
        <hr>
		 
<div>skills:</div>
	<div>&nbsp&nbspprogramming languages :</div>
		<div>&nbsp&nbsp&nbsp&nbsp&nbspJavascript</div>
		<div>&nbsp&nbsp&nbsp&nbsp&nbsppython</div>
		<div>&nbsp&nbsp&nbsp&nbsp&nbsphtml</div>
		<div>&nbsp&nbsp&nbsp&nbsp&nbspcss</div>
		<div>&nbsp&nbsp&nbsp&nbsp&nbspc,c++</div>
		<div>&nbsp&nbsp&nbsp&nbsp&nbspjava</div>

	<div>&nbsp&nbspframeworks:</div>
		<div>&nbsp&nbsp&nbsp&nbspjquery</div>
		<div>&nbsp&nbsp&nbsp&nbspbootstrap</div>
		<div>&nbsp&nbsp&nbsp&nbspbulma</div>
		<div>&nbsp&nbsp&nbsp&nbspnode js</div>
		<div>&nbsp&nbsp&nbsp&nbspexpress js</div>
		<div>&nbsp&nbsp&nbsp&nbspreact js</div>
		<div>&nbsp&nbsp&nbsp&nbspflask</div>
		<div>&nbsp&nbsp&nbsp&nbspdjango</div>
		<div>&nbsp&nbsp&nbsp&nbsptkinter</div>
	<div>others:</div>
		<div>&nbsp&nbsp&nbsp&nbspmongoDB
		<div>&nbsp&nbsp&nbsp&nbspmysql
		<div>&nbsp&nbsp&nbsp&nbspAWS
		<div>&nbsp&nbsp&nbsp&nbspgit/github</div>
        <div>&nbsp&nbsp&nbsp&nbsparduino / raspberry pi</div>
		<div>&nbsp&nbsp&nbsp&nbspUI/UX</div>
		<div>&nbsp&nbsp&nbsp&nbspadobe XD</div>
		<div>&nbsp&nbsp&nbsp&nbspembedded systems</div>
		<div>&nbsp&nbsp&nbsp&nbspdivanci resolve</div>
        <div>&nbsp&nbsp&nbsp&nbspphotoshop</div>
        <br>
        <hr>
<div>awards , recognitions , achievements:</div>	
		<div>&nbsp&nbsp&nbsp&nbspbest PROJECT among local colleges</div>
		<div>&nbsp&nbsp&nbsp&nbsp3 star rating for python in hackerrank</div>
		<div>&nbsp&nbsp&nbsp&nbspcloud computing 101 , AWS cloud inventer digital credentials by AWS Educate</div>
        <br>
        <hr>
<div>HOBBIES :</div> 
		<div>&nbsp&nbsp&nbsp&nbsp&nbspBrowsing Quora, Stackoverflow, instagram,Youtube</div>
		<div>&nbsp&nbsp&nbsp&nbsp&nbspknowing basics of every technology</div>
            `
        }, 1000);
    }
    else if(input === "show details"){
        document.querySelector('.main').innerHTML += `
        <div class="commandline">
        <span class="grt">></span> <span class="command">${input}</span>
        <div>name:Enumarthi karthik</div>
        <div>job description : team player, Full stack javascript developer, python programmer, IOT enthusiast</div>
        <div>email: kartheekenumarthi@gmail.com</div>
        <div>website: https://karthikwebdev.github.io/portfolio</div>
        <div>phone no: 9493454298</div>
        <div>github: https://github.com/karthikwebdev</div>
        <div>address : #20-18-12/1 , thummalava third street , rajahmundry</div>
        </div>
        <div> try "show skills" command</div>    
        `
    }
    else if(input === "show studies"){
        document.querySelector('.main').innerHTML += `
        <div class="commandline">
        <span class="grt">></span> <span class="command">${input}</span>
        <div>studies:</div>
            <div>B.Tech&nbsp&nbsp&nbsp&nbspAditya engineering college&nbsp&nbsp&nbsp&nbsp&nbsp	7.0/10 CGPA</div>
            <div>Inter&nbsp&nbsp&nbsp&nbsp&nbsp&nbspaditya junior college&nbsp&nbsp&nbsp&nbsp&nbsp	943/1000 marks</div>
            <div>SSC&nbsp&nbsp&nbsp&nbsp&nbspLittle Paradise School&nbsp&nbsp&nbsp&nbsp&nbsp 9.3/10 CGPA</div>
        </div>
        <div> try "show skills" command</div>    
        `
    }
    else if(input === "show projects"){
        document.querySelector('.main').innerHTML += `
        <div class="commandline">
        <span class="grt">></span> <span class="command">${input}</span>
        <div>projects :	</div>
        <div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp#100daysofcode</div>
        <div>>this is a 100days coding challenge taken by me in instagram and made more than 50 mini-projects using majorly javascript,python frameworks.</div>
        <div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSmart Blind Stick interfacing IOT</div>
        <div>>An IOT project that solved problems faced by visually impaired</div>
        </div>
        <div> try "show skills" command</div>    
        `
    }
    else if(input === "show certifications"){
        document.querySelector('.main').innerHTML += `
        <div class="commandline">
        <span class="grt">></span> <span class="command">${input}</span>
        <div>certifications :</div> 	
		 <div>&nbsp&nbsp&nbsp&nbsp&nbspMTA HTML certification</div>
		 <div>&nbsp&nbsp&nbsp&nbsp&nbspNPTEL IOT certification</div>
		 <div>&nbsp&nbsp&nbsp&nbsp&nbspPython certification</div>
		 <div>&nbsp&nbsp&nbsp&nbsp&nbspc and c++ certification	</div> 
         <div> try "show hobbies" command</div>    
         `
    }
    else if(input === "show skills"){
        document.querySelector('.main').innerHTML += `
        <div class="commandline">
        <span class="grt">></span> <span class="command">${input}</span>
        <div>skills:</div>
	<div>&nbsp&nbspprogramming languages :</div>
		<div>&nbsp&nbsp&nbsp&nbsp&nbspJavascript</div>
		<div>&nbsp&nbsp&nbsp&nbsp&nbsppython</div>
		<div>&nbsp&nbsp&nbsp&nbsp&nbsphtml</div>
		<div>&nbsp&nbsp&nbsp&nbsp&nbspcss</div>
		<div>&nbsp&nbsp&nbsp&nbsp&nbspc,c++</div>
		<div>&nbsp&nbsp&nbsp&nbsp&nbspjava</div>

	<div>&nbsp&nbspframeworks:</div>
		<div>&nbsp&nbsp&nbsp&nbspjquery</div>
		<div>&nbsp&nbsp&nbsp&nbspbootstrap</div>
		<div>&nbsp&nbsp&nbsp&nbspbulma</div>
		<div>&nbsp&nbsp&nbsp&nbspnode js</div>
		<div>&nbsp&nbsp&nbsp&nbspexpress js</div>
		<div>&nbsp&nbsp&nbsp&nbspreact js</div>
		<div>&nbsp&nbsp&nbsp&nbspflask</div>
		<div>&nbsp&nbsp&nbsp&nbspdjango</div>
		<div>&nbsp&nbsp&nbsp&nbsptkinter</div>
	<div>others:</div>
		<div>&nbsp&nbsp&nbsp&nbspmongoDB
		<div>&nbsp&nbsp&nbsp&nbspmysql
		<div>&nbsp&nbsp&nbsp&nbspAWS
		<div>&nbsp&nbsp&nbsp&nbspgit/github</div>
        <div>&nbsp&nbsp&nbsp&nbsparduino / raspberry pi</div>
		<div>&nbsp&nbsp&nbsp&nbspUI/UX</div>
		<div>&nbsp&nbsp&nbsp&nbspadobe XD</div>
		<div>&nbsp&nbsp&nbsp&nbspembedded systems</div>
		<div>&nbsp&nbsp&nbsp&nbspdivanci resolve</div>
        <div>&nbsp&nbsp&nbsp&nbspphotoshop</div>
        <div> try "show workshops" command</div>    
        `
    }
    else if(input === "show workshops"){
        document.querySelector('.main').innerHTML += `
        <div class="commandline">
        <span class="grt">></span> <span class="command">${input}</span>   
        <div>workshops and hack-a-thons:</div>
		<div>&nbsp&nbsp&nbsp&nbsp Soccer robotics workshop - made a small remote control robo</div>
		<div>&nbsp&nbsp&nbsp&nbsp University innovation Fellowship - introduction to entrepreneurship</div>
		<div>&nbsp&nbsp&nbsp&nbsp APSSDC IOT workshop - learned fundamentals of IOT</div>
		<div>&nbsp&nbsp&nbsp&nbsp APSSDC AWS workshop - worked with some AWS cloud services</div>
		<div>&nbsp&nbsp&nbsp&nbsp APSSDC andriod development workshop - learned fundamentals of app development</div>
		<div>&nbsp&nbsp&nbsp&nbsp WHY.PY workshop - got to know how python works in web development , GUI , AI , IOT</div>
		<div>&nbsp&nbsp&nbsp&nbsp WEB-A-THON - portfolio building in a website </div>
        <div>&nbsp&nbsp&nbsp&nbsp T-Connect - helped juniors to get to know about web development</div>
        <div> try "show details" command</div>    
        
        `
    }
    else if(input == "show achievements"){
        document.querySelector('.main').innerHTML += `
        <div class="commandline">
        <span class="grt">></span> <span class="command">${input}</span>   
        <div>&nbsp&nbsp&nbsp&nbspbest PROJECT among local colleges</div>
		<div>&nbsp&nbsp&nbsp&nbsp3 star rating for python in hackerrank</div>
        <div>&nbsp&nbsp&nbsp&nbspcloud computing 101 , AWS cloud inventer digital credentials by AWS Educate</div>
        <div> try "show studies" command</div>    
        
    `
    }
    else if(input === "show hobbies"){
        document.querySelector('.main').innerHTML += `
        <div class="commandline">
        <span class="grt">></span> <span class="command">${input}</span>  
        <div>HOBBIES :</div> 
		<div>&nbsp&nbsp&nbsp&nbsp&nbspBrowsing Quora, Stackoverflow, instagram,Youtube</div>
		<div>&nbsp&nbsp&nbsp&nbsp&nbspknowing basics of every technology</div>
        <div> try "show projects" command</div>    
        `
    }
    else{
        document.querySelector('.main').innerHTML += `
        <div class="commandline">
        <span class="grt">></span> <span class="command">${input}</span> 
        <div>no such command try "open portfolio" command</div>
        `
    }

}