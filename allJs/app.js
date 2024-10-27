const loadUniverse = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  displayUniverse(data?.data);
};

const displayUniverse = (phone) => {
  const universedata = document.getElementById("displayUniverse");
  phone.array.forEach(() => {
    console.log(phone);
  });
  //   console.log(phone);
  loadUniverse();
};
