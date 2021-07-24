let cont=document.querySelector('.container');
got.houses.forEach((entry,indx)=>{
   
      entry.people.forEach((ppl,index) =>{
        let div= document.createElement('div');
      /*****image and name */
      let div1 = document.createElement('div');
      let img = document.createElement('img');
      let h2 =document.createElement('h2');
      img.src = ppl.image;
      h2.innerText=ppl.name;
      div1.append(img,h2);
      div1.classList.add('flex');
      div1.classList.add('image');
      
      /*****Description****** */
      let divP = document.createElement('div');
      let p = document.createElement('p');
      p.innerText = ppl.description;

      divP.append(p);
      /********Learn More***** */
      let divA =document.createElement('div');
      divA.classList.add('link');
      let a=document.createElement('a');
      a.href=ppl.wikiLink;
      a.innerText='Learn More!';
      divA.append(a);



      div.append(div1,divP,divA);
      div.classList.add('box');
      cont.append(div);
});

      
    

});
