import './ParentSroll.css'
import Scroll from './Scroll'
import ScrollProject from './ScrollProject'

// Dynamically import images (grouped by category)
// const Passion = [p1,p8,p5,p4,p2,p3,p9,p6,p7];
const passionPics = [
    'p1.jpg', 'p8.jpg', 'p5.jpg', 'p4.jpg', 'p2.jpeg', 'p3.jpeg'
    , 'p9.jpeg','p6.jpg', 'p7.jpg' 
];

// const Culture = [c5,c2,c7,c3,c4,c6,c1];
const culturePics = [
    'p5.jpg', 'p2.jpg', 'p7.jpg', 'p3.jpg', 'p4.jpg', 
    'p6.jpg', 'p1.jpg'
];

// const Age = [a1,a2,a3,a4,a5,a7,a8,a9,a10,a11,a12];
const agePics = [
  'p1.jpg', 'p2.JPG', 'p3.jpg', 'p4.jpg', 'p5.jpg',
  'p6.jpg', 'p7.jpg', 'p8.JPG', 'p9.jpg', 'p10.JPG', 
  'p11.jpg', 'p12.jpeg'
];

// Generate image paths dynamically
const generateImagePaths = (category : string, imageArray:string[]) => {
  return imageArray.map(image => `/Assests/${category}/${image}`);
};

function ParentScroll() {
  const Age = generateImagePaths('Age', agePics);
  const Passion = generateImagePaths('PassionPics', passionPics);
  const Culture = generateImagePaths('culture', culturePics);

  return (
    <div className="GrandParent">
      <Scroll index={0} images={Age} DefaultText={"Age"} />
      <Scroll index={1} images={Passion} DefaultText={"Passion/Hobbies"} />
      <ScrollProject DefaultText={"Projects"} />
      <Scroll index={2} images={Culture} DefaultText={"Culture"} />
    </div>
  );
}

export default ParentScroll;
