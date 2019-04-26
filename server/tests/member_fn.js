const fetch = require('node-fetch');
const functions = {
    createMember: async (name,phone,age,email,skills,interests,youtube,facebook,twitter,instagram,linkedin,avatar) =>{
        try {
            const data = {
                name:name,
                age:age,
                phone:phone,
                email:email,
                skills:skills,
                interests:interests,
                youtube: youtube,
                facebook: facebook,
                twitter: twitter,
                instagram: instagram,
                linkedin: linkedin,
                avatar: avatar
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/member/5c941ca6c49fc207a0cd1e51', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    updateMember: async (name,phone,age,email,youtube,facebook,twitter,instagram,linkedin,avatar) =>{
      try{
          const data = {
              name:name,
              age:age,
              phone:phone,
              email:email,
              youtube: youtube,
              facebook: facebook,
              twitter: twitter,
              instagram: instagram,
              linkedin: linkedin,
              avatar: avatar
          }
          const body = JSON.stringify(data);
          const response = await fetch('http://localhost:5000/api/profiles/member/5ca09b938cf9fa294c6530a4', {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: body
          });
          const json = await response.json();
          return json;
      }
      catch (e) {
          console.log(e)
      }
    },
    addSkill: async (skill) => {
        try{
            const data = {
                skill:skill
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/member/skills/5c9666a6f17db66cb83411d3', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    addInterest: async (interest) => {
        try{
            const data = {
                interest:interest
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/member/interests/5c9666a6f17db66cb83411d3',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });
            const json = await response.json();
            return json;
    }
        catch(e) {
            console.log(e)
        }
    },
    postEvents: async (title,description,location) => {
        try{
            const data = {
                title: title,
                description: description,
                location: location
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/member/past-events/5c9666a6f17db66cb83411d3',{
                method:'POST',
                headers:{
                    'content-Type':'application/json'
                },
                body:body
            });
            const json = await response.json();
            return json;
        }
    catch(err){
        console.log(e)
    }
    },
    postCompletedTask: async () => {
        try{
            const response = await fetch('http://localhost:5000/api/profiles/member/completed-tasks/5c9666a6f17db66cb83411d3/5c962a4c0f3ef52e1974de42',{
                method:'POST',
                headers:{
                    'content-Type':'application/json'
                }
            });
            const json = await response.json();
            return json;
        }
    catch(err){
        console.log(e)
    }
    },
    postCertificates: async (title, entity, description) => {
        try{
            const data = {
                title: title,
                entity:entity,
                description: description
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/member/certificates/5c9666a6f17db66cb83411d3',{
                method:'POST',
                headers:{
                    'content-Type':'application/json'
                },
                body:body
            });
            const json = await response.json();
            return json;
        }
    catch(err){
        console.log(e)
    }
    },
    postMasterclass: async (masterclass) => {
        try{
            const data = {
                masterclass:masterclass
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/member/masterclasses/add/5c9666a6f17db66cb83411d3/5c9d1e2b1c9d4400006312da',{
                method:'POST',
                headers:{
                    'content-Type':'application/json'
                },
                body:body
            });
            const json = await response.json();
            return json;
        }
    catch(err){
        console.log(e)
    }
    },
    deleteSkill: async (skill) => {
        try{
            const data = {
                skill:skill
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/member/skills/5c9666a6f17db66cb83411d3', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    deleteInterest: async (interest) => {
        try{
            const data = {
                interest:interest
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/member/interests/5c9666a6f17db66cb83411d3',{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const json = await response.json();
            return json;
        }
        catch(e) {
            console.log(e)
        }
    },
    deleteEvents: async (title,description,location) => {
        try{
            const data = {
                title: title,
                description: description,
                location: location
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/member/past-events/5c9666a6f17db66cb83411d3',{
                method:'DELETE',
                headers:{
                    'content-Type':'application/json'
                },
                body:body
            });
            const json = await response.json();
            return json;
        }
        catch(err){
            console.log(e)
        }
    },
    deleteMember: async() =>{
        try{
            const response = await fetch('http://localhost:5000/api/profiles/member/past-events/5ca09b938cf9fa294c6530a4',{
                method:'DELETE',
                headers:{
                    'content-Type':'application/json'},
                }
            )
            const json = await response.json();
            return json;
            }
        catch(err){
            console.log(err)
        }
        
    },
    deleteCompletedTask: async () => {
        try{
            const response = await fetch('http://localhost:5000/api/profiles/member/completed-tasks/5c9666a6f17db66cb83411d3/5c962a4c0f3ef52e1974de42',{
                method:'DELETE',
                headers:{
                    'content-Type':'application/json'
                }
            });
            const json = await response.json();
            return json;
        }
        catch(err){
            console.log(e)
        }
    },
    deleteCertificates: async (title, entity, description) => {
        try{
            const data = {
                title: title,
                entity:entity,
                description: description
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/member/certificates/5c9666a6f17db66cb83411d3',{
                method:'DELETE',
                headers:{
                    'content-Type':'application/json'
                },
                body:body
            });
            const json = await response.json();
            return json;
        }
        catch(err){
            console.log(e)
        }
    },
};
module.exports = functions;