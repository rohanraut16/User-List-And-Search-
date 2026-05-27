let userContainer=document.querySelector('.userContainer');
let inputSearch=document.querySelector('.inputSearch');

const users=[
    {
        profileUrl:"img/model1.avif",
        name:"somiya",
        email:'ssomiya@somiya.com'
    },
    {
        profileUrl:"img/model2.avif",
        name:"Neena",
        email:'neena@gupta.com'
    },
    {
        profileUrl:"img/model6.avif",
        name:"Raja",
        email:'raja@singh.com'
    },
    {
        profileUrl:"img/model3.avif",
        name:"sansa",
        email:'sansa@sans.com'
    },
    {
        profileUrl:"img/model5.avif",
        name:"john Abraham",
        email:'John@abr.com'
    },
    {
        profileUrl:"img/model4.avif",
        name:"arya",
        email:'sstark@arya.com'
    },
]

function renderedUser(arr){

     userContainer.innerHTML='';
    arr.map((obj)=>{
        
       
        let{profileUrl,name,email}=obj
        let divElement=document.createElement('div');
        divElement.innerHTML=`
         <div class="userDetails">
                    <img src=${profileUrl} alt="error image loading">
                    <div class="usereInfo">
                        <h1 class="name">${name}</h1>
                        <p class="email">${email}</p>
                    </div>
    
                </div>
        `
        userContainer.append(divElement)
    })
}
renderedUser(users);

const handleSearch=((e)=>{
    let searchValue=e.target.value;
    let filteredUsers=users.filter((obj)=>{
        return obj.name.toLowerCase().includes(searchValue.toLowerCase())
        ||
        obj.email.toLowerCase().includes(searchValue.toLowerCase());
    })
    renderedUser(filteredUsers)
})

inputSearch.addEventListener('input',handleSearch);