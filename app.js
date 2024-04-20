const express = require("express")
const collection = require("./mongo")
const bcrypt = require("bcrypt");
const cors = require("cors")
const app = express()
const discord = require("discord.js");



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())



app.get("/login", cors(),(req,res) =>{


})

app.post("/login",async(req,res)=>{

    const{email,password} = req.body

    try{
        const check=await collection.findOne({email:email})

        if(check) {
            res.status(200).json({ message: "exist" });
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.status(500).json({ message: "fail" });
    }
})




app.post("/signup" ,async(req,res)=>{




    const{email,password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Password confirmation does not match." });
      }
    
   

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const data = {
        email:email,
        password:hashedPassword,
    
    }

    try{
        const check=await collection.findOne({email})

        if(check) {
            
            res.status(200).json({ message: "exist" });
            
        }
        else{
            
            const newUser = await collection.create({ email, password: hashedPassword }); 
            const newUserWithoutPassword = { ...newUser._doc };
            delete newUserWithoutPassword.password;
            await sendDiscordWebhook(newUserWithoutPassword);

            return res.status(201).json({message: "Created" ,newUserWithoutPassword});
        }
    }
    catch(e){
        console.error(e); 
        res.status(500).json({ message: "Signup failed" }); 
    }
})

const sendDiscordWebhook = async (data) => {
    try {
        
      const webhookClient = new discord.WebhookClient({ id: '1224386132201046107', token: 'u9uAeJLhUVTxEA_4TKR68nCaHJeQn2xOxjxbRL4eGgSGUV5Z-OYrICvNUMX787ynvluk',  }); 
      console.log("Data sent to webhook:", data);
      const timestamp = new Date().toLocaleString();

      await webhookClient.send({
        embeds: [
          {
            title: "New User",
            color: 0x00FF00,
            fields: [
              { name: "Email", value: data.email },
              { name: "ID", value: data._id },
              { name: "Date", value: timestamp },
            ],
          },
        ],
      });

    } catch (error) {
      console.error("Error sending Discord webhook:", error);
    }
  };



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});