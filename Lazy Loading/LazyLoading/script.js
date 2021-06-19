const images = [];
const getImages = async () => {
  const randomNum = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  const res = await fetch(`https://api.adorable.io/avatars/${randomNum}`);
  const data = await res.json();
  images.push(...data);
  console.log(images);
};

getImages();
