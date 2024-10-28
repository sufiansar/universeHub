const loadUniverse = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  displayUniverse(data?.data.tools);
};

const displayUniverse = (universe) => {
  //   console.log(universe);
  const universedata = document.getElementById("displayUniverse");
  universe.forEach((universeDataALL) => {
    const createDiv = document.createElement("div");
    createDiv.classList = "card  w-96 shadow-xl text-black ";
    createDiv.innerHTML = `<figure>
                    <img src="${universeDataALL.image}" />
                </figure>
                <div class="card-body">
                    <p class="text-2xl font-semibold">Features</p>
                    <ul class="list-decimal">
                  
                    ${universeDataALL.features.map((fs) => `<li>${fs}  </li>`)}
                   
                    </ul>
                    <hr>
                     <div>
                      <h2 class="card-title font-bold gap-2">
                    ${universeDataALL.name}
                    </h2>
                    <div class="flex justify-between">
                    <div class="flex mt-4">
                    <img class="w-6 h-6" src="Vector.png"</img>
                    <p>${universeDataALL.published_in}</p>
                    </div>
                    <div onclick="modalDataLoaded('${
                      universeDataALL.id
                    }')" class=" bg-[#FEF7F7] p-6 rounded-full">
                    <img src="Vector2.png"</img></div>
                    </div>
                     </div>

                    
                </div>`;
    universedata.appendChild(createDiv);
    // haldleModal(universeDataALL);
  });
};
const modalDataLoaded = async (id) => {
  console.log(id);
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/ai/tool/${id}`
  );
  const data = await res.json();
  const universeD = data?.data;
  console.log(universeD);
  haldleModal(universeD);
};

const haldleModal = (handalData) => {
  const modalData = document.getElementById("modal-data");

  //   console.log(handalData);
  modalData.innerHTML = `
  
<div class="flex container mx-auto ">
    <div class="border-2 border-[#EB5757] w-3/6 gap-4 bg-[#EB575712]">
        <p class="text-black text-lg font-semibold">${handalData.description}</p>
        <div>
            <div>${handalData.tool_name}</div>
            <div></div>
            <div></div>
        </div>
        <div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div>
        <button class="bg-[#EB5757] mx-4 my-2 p-2 text-white  rounded-md px-8 -mt-9">94% accuracy</button>
        <div>
            <img src="${handalData.image_link}" alt="">
            <h2>${handalData.input_output_examples.input}</h2>
            <h2>${handalData.input_output_examples.output}</h2>


        </div>
    </div>

</div> 
`;
  my_modal_5.showModal();
};
loadUniverse();

// const showData = (showALl) => {
//
// }; <p>Description:- ${universeDataALL.description}</p>
{
  /* <p>Published:- ${universeDataALL.published_in}</p> */
}
