import earlyMorning from '../assets/background/1-background.jpg';
import morning from '../assets/background/2-background.jpg';
import lateMorning from '../assets/background/3-background.jpg';
import noon from '../assets/background/4-background.jpg';
import afternoon from '../assets/background/5-background.jpg';
import evening from '../assets/background/6-background.jpg';
import night from '../assets/background/7-background.jpg';
import midnight from '../assets/background/8-background.jpg';

export function setBackgroundImage() {
  const images = [
    earlyMorning,
    morning,
    lateMorning,
    noon,
    afternoon,
    evening,
    night,
    midnight,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const updateBackgroundImage = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const imageIndex = Math.floor(currentHour / 3) % 8;
    setCurrentImageIndex(imageIndex);
  };
  useEffect(() => {
    updateBackgroundImage();
  });
  return images[currentImageIndex];
}
